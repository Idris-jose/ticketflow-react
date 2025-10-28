// Validation utilities
import { TICKET_STATUSES } from "./constants.js";

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password && password.length >= 6;
};

export const validateTicketTitle = (title) => {
  return title && title.trim().length > 0;
};

export const validateTicketStatus = (status) => {
  return Object.values(TICKET_STATUSES).includes(status);
};

export const validateTicket = (ticket) => {
  const errors = {};

  if (!validateTicketTitle(ticket.title)) {
    errors.title = "Title is required.";
  }

  if (!validateTicketStatus(ticket.status)) {
    errors.status = "Invalid status value.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateAuthForm = (email, password) => {
  const errors = {};

  if (!validateEmail(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!validatePassword(password)) {
    errors.password = "Password must be at least 6 characters long.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
