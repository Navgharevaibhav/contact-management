import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

// Create a new contact
export const createContact = (contactData) => {
  return API.post("/contacts", contactData);
};

// Get all contacts
export const getContacts = () => {
  return API.get("/contacts");
};
