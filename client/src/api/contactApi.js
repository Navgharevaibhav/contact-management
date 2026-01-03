import axios from "axios";

const API = axios.create({
  baseURL: "https://contact-management-sm5y.onrender.com/api",
});

// Create a new contact
export const createContact = (contactData) => {
  return API.post("/contacts", contactData);
};

// Get all contacts
export const getContacts = () => {
  return API.get("/contacts");
};
