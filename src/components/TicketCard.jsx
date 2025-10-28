export default function TicketCard({ ticket, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 relative">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold">{ticket.title}</h3>
        <span
          className={`text-sm px-3 py-1 rounded-full ${
            ticket.status === "open"
              ? "bg-green-100 text-green-700"
              : ticket.status === "in_progress"
              ? "bg-amber-100 text-amber-700"
              : "bg-gray-200 text-gray-700"
          }`}
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
  );
}
