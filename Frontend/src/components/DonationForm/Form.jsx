import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "../../lib/Button";

const Form = () => {
  const [form, setForm] = useState({
    fullName: "",
    panCard: "",
    amount: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/donation/submit`,
        form
      );

      if (res.data.success) {
        setSuccessMessage("✅ Payment Successful!");
        setForm({ fullName: "", panCard: "", amount: "" });
      } else {
        setSuccessMessage("❌ Submission failed. Try again.");
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage("❌ Error occurred while submitting.");
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">
        Donate to Wildlife
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          name="panCard"
          placeholder="PAN Card Number"
          value={form.panCard}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount (INR)"
          value={form.amount}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 text-white rounded-md ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-slate-800 hover:bg-slate-900"
          }`}
        >
          {loading ? "Submitting..." : "Donate"}
        </button>
      </form>

      {successMessage && (
        <p className="mt-4 text-center font-medium text-green-600">
          {successMessage}
        </p>
      )}
      <Link to={"/"}>
        <div className="w-[200px] h-[50px] sm:w-[250px] sm:h-[60px] mt-10 mx-auto">
          <Button title={"Back"} />
        </div>
      </Link>
    </div>
  );
};

export default Form;
