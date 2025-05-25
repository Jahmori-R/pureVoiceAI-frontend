import React, { useState } from "react";
import {
  MDBContainer,
  MDBTypography,
  MDBIcon,
  MDBInput,
  MDBTextArea,
  MDBBtn,
} from "mdb-react-ui-kit";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("formData", formData);
  };

  return (
    <MDBContainer
      className="py-5 px-4 bg-light rounded shadow-2 mb-5"
      style={{ maxWidth: "800px" }}
    >
      <MDBTypography tag="h2" className="mb-4 text-primary fw-bold text-center">
        <MDBIcon icon="envelope" className="me-2" />
        Contact Me
      </MDBTypography>

      <form onSubmit={handleSubmit}>
        <MDBInput
          label="Name"
          id="name"
          type="text"
          className="mb-4"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <MDBInput
          label="Email"
          id="email"
          type="email"
          className="mb-4"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <MDBTextArea
          label="Message"
          id="message"
          rows={4}
          className="mb-4"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <div className="text-center">
          <MDBBtn type="submit" color="primary">
            Send Message
          </MDBBtn>
        </div>
      </form>
    </MDBContainer>
  );
}

export default ContactForm;
