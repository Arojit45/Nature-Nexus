import React, { useState } from "react";
import work from "../assets/work3.webp";

const Form = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Phone Number:", phone);
    alert("Signed in successfully (frontend only)!");
    // Clear the form
    setEmail("");
    setPhone("");
  };

  return (
    <div
      className="w-full h-[300px] bg-cover bg-center p-4 rounded-xl"
      style={{ backgroundImage: `url(${work})` }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col  gap-4">
        <label htmlFor="email" className="text-xl font-semibold">
          Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="p-3 text-black border rounded-md outline-none "
          required
        />
        <label htmlFor="email" className="text-xl font-semibold">
          Phone Number:
        </label>
        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="p-3 text-black border rounded-md outline-none "
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-center w-[100px] text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Form;
