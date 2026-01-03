import React, { useEffect, useState } from "react";
import { getContacts } from "../api/contactApi";

const ContactList = ({ refresh }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true);
      const res = await getContacts();
      setContacts(res.data);
      setLoading(false);
    };

    fetchContacts();
  }, [refresh]);

  return (
    <div className="mt-4">
      <h4 className="mb-3 text-accent">Saved Contacts</h4>

      {loading && <p>Loading contacts...</p>}

      {!loading && contacts.length === 0 && (
        <p className="text-muted">No contacts found.</p>
      )}

      {contacts.map((c) => (
        <div key={c._id} className="card mb-3 shadow-sm">
          <div className="card-body">
            <h5 className="mb-1">{c.name}</h5>
            <div>{c.email}</div>
            <div>{c.phone}</div>
            {c.message && (
              <div className="text-muted mt-2">{c.message}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
