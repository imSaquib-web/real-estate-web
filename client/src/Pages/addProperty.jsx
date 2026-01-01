import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

const addProperty = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("price", form.price);
    formData.append("location", form.location);
    formData.append("type", form.type);
    formData.append("image", form.image);
    formData.append("description", form.description);


    e.preventDefault();
    await API.post("/properties", formData);
    navigate("/");
  };
  return (
    <div className="property-form-container">
      <div className="property-form-wrapper">
        <h1 className="property-form-title">Add New Property</h1>
        <form className="property-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Property Title"
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Price"
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Location"
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            required
          />
          <select
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            required
          >
            <option value="">Select Type</option>
            <option value="rent">Rent</option>
            <option value="sale">Sale</option>
          </select>
          <input
            type="file"
            onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
          />
          <textarea
            placeholder="Property Description"
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          ></textarea>
          <button type="submit">Add Property</button>
        </form>
      </div>
    </div>
  );
};

export default addProperty;
