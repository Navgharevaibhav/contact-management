import React, { useState } from "react";
import { createContact } from "../api/contactApi";

const ContactForm = ({ onContactAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      setError("Name, Email, and Phone are required");
      return;
    }

    try {
      setLoading(true);
      await createContact(formData);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setError("");
      onContactAdded();
    } catch (err) {
      setError("Failed to save contact");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h4 className="mb-3 text-primary">
        <i className="bi bi-plus-circle me-2"></i>
        Add Contact
      </h4>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="👤 Full Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="📧 Email Address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            name="phone"
            placeholder="📞 Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            rows="3"
            name="message"
            placeholder="📝 Notes (optional)"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100 fw-semibold"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2"></span>
              Saving...
            </>
          ) : (
            <>
              <i className="bi bi-save me-2"></i>
              Save Contact
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
