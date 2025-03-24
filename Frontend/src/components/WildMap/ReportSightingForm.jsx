import React from "react";

const ReportSightingForm = ({ formData, setFormData, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-5  bg-white p-4 rounded-lg flex flex-col items-center shadow-md w-full max-w-xl mx-auto"
    >
      <h3 className="text-xl font-semibold mb-2 text-center">
        Report a Sighting
      </h3>

      <input
        type="text"
        placeholder="Species Name"
        value={formData.species}
        onChange={(e) => setFormData({ ...formData, species: e.target.value })}
        className="w-full p-3 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      />

      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        className="w-full p-3 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 resize-none focus:ring-green-500"
      />

      <button
        type="submit"
        className="w-1/2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-all duration-300"
      >
        Submit Sighting
      </button>
    </form>
  );
};

export default ReportSightingForm;
