import { useTickets } from "../hooks/useTickets.js";
import { MAX_CONTAINER_WIDTH, TICKET_STATUSES, STATUS_COLORS } from "../utils/constants.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Tickets() {
  const {
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
  } = useTickets();

  return (
    <div className={`${MAX_CONTAINER_WIDTH} mx-auto p-6`}>
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-6">Ticket Management</h1>

      {/* Ticket Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {editing ? "Edit Ticket" : "Create Ticket"}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title *</label>
            <input
              {...register("title")}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Ticket title"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Status *</label>
            <select
              {...register("status")}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value={TICKET_STATUSES.OPEN}>Open</option>
              <option value={TICKET_STATUSES.IN_PROGRESS}>In Progress</option>
              <option value={TICKET_STATUSES.CLOSED}>Closed</option>
            </select>
            {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>}
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            {...register("description")}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Describe the issue"
            rows="3"
          />
        </div>

        <div className="mt-6 flex space-x-4">
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-xl">
            {editing ? "Update Ticket" : "Create Ticket"}
          </button>
          {editing && (
            <button
              type="button"
              onClick={cancelEdit}
              className="bg-gray-300 px-6 py-2 rounded-xl"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Ticket List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tickets.length === 0 && (
          <p className="text-gray-500 col-span-full text-center py-8">No tickets found. Create one above.</p>
        )}
        {tickets.map((ticket) => (
          <div key={ticket.id} className="bg-white rounded-xl shadow p-4 relative">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold">{ticket.title}</h3>
              <span
                className={`text-sm px-3 py-1 rounded-full ${STATUS_COLORS[ticket.status]}`}
              >
                {ticket.status.replace("_", " ")}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-2">{ticket.description}</p>
            <p className="text-xs text-gray-400 mt-2">
              {new Date(ticket.createdAt).toLocaleString()}
            </p>

            <div className="flex space-x-2 mt-4">
              <button
                onClick={() => onEdit(ticket)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(ticket.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
