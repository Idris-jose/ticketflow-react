import { MAX_CONTAINER_WIDTH } from "../utils/constants.js";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 mt-10">
      <div className={`${MAX_CONTAINER_WIDTH} mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4`}>
        <p>© {new Date().getFullYear()} TicketFlow. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  );
}
