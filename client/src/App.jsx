import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="fw-bold text-accent app-title">
          Contact Management
        </h1>
        <p className="text-light opacity-75">
          Organize and manage your contacts professionally
        </p>
      </div>

      {/* Main Card */}
      <div
        className="app-card mx-auto"
        style={{ maxWidth: "650px" }}
      >
        <ContactForm onContactAdded={() => setRefresh(!refresh)} />
        <hr />
        <ContactList refresh={refresh} />
      </div>
    </div>
  );
}

export default App;
