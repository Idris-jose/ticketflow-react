import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { STORAGE_KEYS, TICKET_STATUSES } from "../utils/constants.js";
import { getFromStorage, setToStorage } from "../utils/storage.js";
import { validateTicket } from "../utils/validation.js";

export function useTickets() {
  const [tickets, setTickets] = useState([]);
  const [editing, setEditing] = useState(null);

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

  // Load tickets from localStorage
  useEffect(() => {
    const stored = getFromStorage(STORAGE_KEYS.TICKETS) || [];
    setTickets(stored);
  }, []);

  // Save tickets to localStorage
  const saveTickets = (data) => {
    setToStorage(STORAGE_KEYS.TICKETS, data);
    setTickets(data);
  };

  // Submit handler
  const onSubmit = (data) => {
    const validation = validateTicket(data);
    if (!validation.isValid) {
      Object.values(validation.errors).forEach(error => toast.error(error));
      return;
    }

    if (editing) {
      // update existing
      const updated = tickets.map((t) =>
        t.id === editing ? { ...t, ...data } : t
      );
      saveTickets(updated);
      toast.success("Ticket updated!");
      setEditing(null);
    } else {
      // create new
      const newTicket = {
        id: Date.now(),
        title: data.title,
        description: data.description || "",
        status: data.status,
        createdAt: new Date().toISOString(),
      };
      saveTickets([...tickets, newTicket]);
      toast.success("Ticket created!");
    }
    reset();
  };

  const onEdit = (ticket) => {
    setEditing(ticket.id);
    setValue("title", ticket.title);
    setValue("description", ticket.description);
    setValue("status", ticket.status);
  };

  const onDelete = (id) => {
    if (confirm("Are you sure you want to delete this ticket?")) {
      const updated = tickets.filter((t) => t.id !== id);
      saveTickets(updated);
      toast.success("Ticket deleted!");
    }
  };

  const cancelEdit = () => {
    reset();
    setEditing(null);
  };

  // Get ticket statistics
  const getStats = () => {
    const total = tickets.length;
    const open = tickets.filter(t => t.status === TICKET_STATUSES.OPEN).length;
    const resolved = tickets.filter(t => t.status === TICKET_STATUSES.CLOSED).length;
    return { total, open, resolved };
  };

  return {
    tickets,
    editing,
    register,
    handleSubmit,
    reset,
    errors,
    onSubmit,
    onEdit,
    onDelete,
    cancelEdit,
    getStats,
  };
}
