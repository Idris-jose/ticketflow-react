import { Link } from "react-router-dom";
import illustration from "../assets/illustration.svg";
import { MAX_CONTAINER_WIDTH } from "../utils/constants.js";

export default function Landing() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 min-h-screen">
      {/* Decorative Circle */}
      <div className="absolute top-16 -left-20 w-64 h-64 bg-blue-200 rounded-full opacity-40 blur-2xl"></div>
      <div className="absolute bottom-10 -right-16 w-72 h-72 bg-orange-200 rounded-full opacity-40 blur-2xl"></div>

      {/* Hero Section */}
      <section className={`${MAX_CONTAINER_WIDTH} mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between`}>
        <div className="md:w-1/2 space-y-6 z-10">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Ticket<span className="text-primary">Flow</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your team’s issues seamlessly — create, track, and resolve
            tickets faster across all projects.
          </p>
          <div className="flex gap-4 mt-6">
            <Link
              to="/auth/login"
              className="bg-primary text-white px-6 py-3 rounded-xl shadow hover:opacity-90 transition"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="border border-primary text-primary px-6 py-3 rounded-xl hover:bg-primary/10 transition"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="md:w-1/2 mt-10 md:mt-0 relative">
          <img
            src={illustration}
            alt="Team collaborating"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* Wave SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#2563eb"
          fillOpacity="0.3"
          d="M0,160L40,186.7C80,213,160,267,240,261.3C320,256,400,192,480,149.3C560,107,640,85,720,96C800,107,880,149,960,176C1040,203,1120,213,1200,186.7C1280,160,1360,96,1400,64L1440,32L1440,320L0,320Z"
        ></path>
      </svg>

      {/* Feature Section */}
      <section className={`${MAX_CONTAINER_WIDTH} mx-auto px-6 py-20 grid md:grid-cols-3 gap-8 relative z-10`}>
        {[
          {
            title: "Fast Ticketing",
            text: "Create and assign tickets instantly to keep your workflow moving.",
          },
          {
            title: "Track Progress",
            text: "Visualize ticket status from open to resolved in one view.",
          },
          {
            title: "Secure Access",
            text: "Only authorized users can manage tickets via secure session tokens.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-primary">
              {f.title}
            </h3>
            <p className="text-gray-600">{f.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
