const Contact = require("../models/Contact");

// @desc   Create new contact
// @route  POST /api/contacts
exports.createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        message: "Name, Email, and Phone are required",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc   Get all contacts
// @route  GET /api/contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
