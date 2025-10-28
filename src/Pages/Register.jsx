import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthForm } from "../hooks/useAuthForm";
import FormInput from "../components/FormInput";
import { MAX_CONTAINER_WIDTH, DEMO_CREDENTIALS } from "../utils/constants.js";

export default function Register() {
  const { email, setEmail, password, setPassword } = useAuthForm();
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = register(email, password);
    if (res.success) {
      toast.success("Account created!");
      navigate("/dashboard");
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className={`${MAX_CONTAINER_WIDTH} mx-auto p-6`}>
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
          <p className="text-center text-sm text-gray-600 mb-4">
            Demo credentials: {DEMO_CREDENTIALS.EMAIL} / {DEMO_CREDENTIALS.PASSWORD}
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FormInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="w-full bg-success text-white py-2 rounded-lg">
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="/auth/login" className="text-primary font-medium">
              Login
            </a>
          </p>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}
