// App constants
export const APP_NAME = "TicketFlow";
export const STORAGE_KEYS = {
  SESSION: "ticketapp_session",
  TICKETS: "ticketapp_tickets",
};

export const TICKET_STATUSES = {
  OPEN: "open",
  IN_PROGRESS: "in_progress",
  CLOSED: "closed",
};

export const STATUS_COLORS = {
  open: "bg-green-100 text-green-700",
  in_progress: "bg-amber-100 text-amber-700",
  closed: "bg-gray-200 text-gray-700",
};

export const DEMO_CREDENTIALS = {
  EMAIL: "demo@ticket.com",
  PASSWORD: "123456",
};

export const MAX_CONTAINER_WIDTH = "max-w-7xl"; // 1440px in Tailwind
