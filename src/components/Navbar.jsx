import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { MAX_CONTAINER_WIDTH } from "../utils/constants.js";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow p-4">
      <div className={`${MAX_CONTAINER_WIDTH} mx-auto flex justify-between items-center`}>
        <Link to="/" className="font-bold text-xl text-primary">TicketApp</Link>
        <div className="space-x-4">
          {user ? (
            <>
              <Link to="/dashboard" className="text-gray-700">Dashboard</Link>
              <Link to="/tickets" className="text-gray-700">Tickets</Link>
            </>
          ) : (
            <>
              <Link to="/auth/login" className="text-gray-700">Login</Link>
              <Link to="/auth/register" className="text-gray-700">Get Started</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
