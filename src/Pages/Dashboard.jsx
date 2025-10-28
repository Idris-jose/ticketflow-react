import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useTickets } from "../hooks/useTickets.js";
import { MAX_CONTAINER_WIDTH, TICKET_STATUSES } from "../utils/constants.js";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { getStats } = useTickets();
  const { total, open, resolved } = getStats();

  // Compute counts including in_progress
  const inProgress = useTickets().tickets.filter(t => t.status === TICKET_STATUSES.IN_PROGRESS).length;

  const chartData = [
    { name: "Open", value: open, color: "#22C55E" },
    { name: "In Progress", value: inProgress, color: "#F59E0B" },
    { name: "Closed", value: resolved, color: "#9CA3AF" },
  ];

  return (
    <div className={`${MAX_CONTAINER_WIDTH} mx-auto p-6`}>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome, {user?.email}</h1>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-xl"
        >
          Logout
        </button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Total Tickets</h2>
          <p className="text-3xl font-bold">{total}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Open</h2>
          <p className="text-3xl font-bold text-green-500">{open}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">In Progress</h2>
          <p className="text-3xl font-bold text-amber-500">{inProgress}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">Closed</h2>
          <p className="text-3xl font-bold text-gray-500">{resolved}</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl shadow p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">Ticket Status Breakdown</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Navigation */}
      <div className="text-center">
        <button
          onClick={() => navigate("/tickets")}
          className="bg-primary text-white px-6 py-2 rounded-xl"
        >
          Manage Tickets
        </button>
      </div>
    </div>
  );
}
