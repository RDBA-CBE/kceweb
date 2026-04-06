"use client";

import { useState } from "react";

const departments = [
  "Civil Engineering",
  "Computer Science and Engineering",
  "CSE (Cyber Security)",
  "Electronics and Communication Engineering",
  "Electrical and Electronics Engineering",
  "Electronics Engineering (VLSI)",
  "Mechanical Engineering",
  "Artificial Intelligence and Data Science",
  "Information Technology",
  "MBA",
  "MCA",
];

const AdmissionEnquiryForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to your API / email service
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-5">
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "var(--kce-accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
          }}
        >
          <i className="feather-check" style={{ color: "#fff", fontSize: 28 }} />
        </div>
        <h4 className="mb-2" style={{ color: "var(--color-heading)" }}>
          Thank you for your enquiry!
        </h4>
        <p style={{ color: "var(--color-body)" }}>
          Our admissions team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-4">

        <div className="col-md-6">
          <div className="form-group" style={{ display: "block", marginBottom: 0 }}>
            {/* <label className="form-label" style={labelStyle}>Full Name <span style={{ color: "var(--kce-accent)" }}>*</span></label> */}
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group" style={{ display: "block", marginBottom: 0 }}>
            {/* <label className="form-label" style={labelStyle}>Email Address <span style={{ color: "var(--kce-accent)" }}>*</span></label> */}
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group" style={{ display: "block", marginBottom: 0 }}>
            {/* <label className="form-label" style={labelStyle}>Phone Number <span style={{ color: "var(--kce-accent)" }}>*</span></label> */}
            <input
              type="tel"
              name="phone"
              placeholder="10-digit mobile number"
              value={form.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              title="Enter a valid 10-digit phone number"
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group" style={{ display: "block", marginBottom: 0 }}>
            {/* <label className="form-label" style={labelStyle}>Department <span style={{ color: "var(--kce-accent)" }}>*</span></label> */}
            <select
              name="department"
              value={form.department}
              onChange={handleChange}
              required
              style={{ height: 50 }}
            >
              <option value="">Select a department</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-12">
          <div className="form-group" style={{ display: "block", marginBottom: 0 }}>
            {/* <label className="form-label" style={labelStyle}>Message <span style={{ color: "var(--color-gray)" }}>(optional)</span></label> */}
            <textarea
              name="message"
              placeholder="Any specific queries or information you'd like to share..."
              rows={4}
              value={form.message}
              onChange={handleChange}
              style={{ minHeight: 120 }}
            />
          </div>
        </div>

        <div className="col-12 mt-2">
          <button
            type="submit"
            className="kce-btn-primary rbt-btn hover-icon-reverse mt-4"
            // style={{ height: 52, padding: "0 40px", fontSize: 16, fontWeight: 600, border: "none", borderRadius: "var(--radius)", cursor: "pointer" }}
          >
            Submit Enquiry <i className="feather-arrow-right ms-2" />
          </button>
        </div>

      </div>
    </form>
  );
};

const labelStyle = {
  display: "block",
  marginBottom: 6,
  fontSize: 14,
  fontWeight: 500,
  color: "var(--color-heading)",
};

export default AdmissionEnquiryForm;
