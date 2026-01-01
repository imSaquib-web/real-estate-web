import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "../api";

const editProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  useEffect(() => {
    API.get("/properties").then((res) => {
      const properties = res.data.find((p) => p._id === id);
      setForm(properties);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.put(`/properties/${id}`, form);
    navigate("/");
  };

  return (
    <div className="property-form-container">
      <div className="property-form-wrapper">
        <h1 className="property-form-title">Edit Property</h1>
        <form className="property-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Property Title"
            value={form.title || ""}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            value={form.price || ""}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="Location"
            value={form.location || ""}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />
          <select
            value={form.type || ""}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          >
            <option value="">Select Type</option>
            <option value="rent">Rent</option>
            <option value="sale">Sale</option>
          </select>
          <textarea
            placeholder="Property Description"
            value={form.description || ""}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          ></textarea>
          <button type="submit">Update Property</button>
        </form>
      </div>
    </div>
  );
};

export default editProperty;
