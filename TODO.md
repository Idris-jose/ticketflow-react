# TODO: Improve Landing Page and Component Reusability

## Tasks to Complete

- [x] Create `src/hooks/` directory if not exists
- [x] Implement `src/hooks/useAuthForm.js` for shared form state in Login/Register
- [x] Implement `src/hooks/useTickets.js` for ticket CRUD logic in Tickets
- [x] Update `src/components/FormInput.jsx` to accept props for type, placeholder, register, etc.
- [x] Update `src/components/TicketCard.jsx` to accept ticket data and render the card
- [x] Modify `src/Pages/Landing.jsx` to import illustration properly
- [x] Refactor `src/Pages/Login.jsx` to use `useAuthForm` and `FormInput`
- [x] Refactor `src/Pages/Register.jsx` to use `useAuthForm` and `FormInput`
- [x] Refactor `src/Pages/Tickets.jsx` to use `useTickets` and `TicketCard`
- [x] Run the app to test routes and components for errors
