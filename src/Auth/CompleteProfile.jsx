import React, { useState } from "react";

const CompleteProfile = () => {
  const [formValues, setFormValues] = useState({
    experience: "",
    skills: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Values:", formValues);
  };

  return (
    <div className="flex font-nunito justify-center items-center min-h-screen px-4 lg:px-0 bg-[#0F0B1A]">
      <div className="w-full max-w-lg p-8 border border-[#2A2448] rounded-lg bg-[#822CE71A]">
        <h2 className="text-2xl font-semibold text-white mb-2 italic">
          Complete Your Bartender Profile
        </h2>
        <p className="text-gray-400 mb-6 text-sm">
          Help venue owners understand your experience before sending shift requests.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Years of Experience */}
          <div>
            <label className="text-gray-400 block mb-1">
              Years of Experience
            </label>
            <input
              type="number"
              name="experience"
              value={formValues.experience}
              onChange={handleChange}
              placeholder="e.g. 2"
              className="w-full px-3 py-2 bg-[#1D1733] border border-[#2A2448] text-white rounded-full focus:outline-none focus:ring-2 focus:ring-[#822CE7] placeholder-white/70"
              required
            />
          </div>

          {/* Primary Bar Skills */}
          <div>
            <label className="text-gray-400 block mb-1">
              Primary Bar Skills
            </label>
            <input
              type="text"
              name="skills"
              value={formValues.skills}
              onChange={handleChange}
              placeholder="e.g. Cocktail Making, Mixology"
              className="w-full px-3 py-2 bg-[#1D1733] border border-[#2A2448] text-white rounded-full focus:outline-none focus:ring-2 focus:ring-[#822CE7] placeholder-white/70"
              required
            />
          </div>

          {/* Short Bio */}
          <div>
            <label className="text-gray-400 block mb-1">
              Short Bio
            </label>
            <textarea
              name="bio"
              value={formValues.bio}
              onChange={handleChange}
              placeholder="Write a short description about yourself..."
              rows={4}
              className="w-full px-3 py-2 bg-[#1D1733] border border-[#2A2448] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#822CE7] placeholder-white/70 resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-tr from-[#822CE7] to-[#BB82FF] py-3 text-white rounded-full shadow-md hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfile;