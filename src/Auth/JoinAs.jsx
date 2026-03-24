import React, { useState } from "react";
import { Link } from "react-router-dom";

const JoinAs = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Values:", formValues);
    // Handle registration logic here
  };

  return (
    <div className="flex font-nunito justify-center items-center min-h-screen px-4 lg:px-0 bg-[#0F0B1A]">
      <div className="w-full max-w-lg lg:p-8 p-4 border-[#2A2448] rounded-lg bg-[#822CE71A]">
        <h2 className="text-2xl font-semibold text-white italic mb-2">
          Join as a Bartender
        </h2>
        <p className="text-gray-400 mb-6 text-sm">
          Create your account to manage your Venue, post shifts, and hire
          bartenders.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="text-gray-400 block mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formValues.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-3 py-2 bg-[#1D1733] border border-[#2A2448] text-white rounded-full focus:outline-none focus:ring-2 focus:ring-[#822CE7] placeholder-white/70"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-400 block mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-[#1D1733] border border-[#2A2448] text-white rounded-full focus:outline-none focus:ring-2 focus:ring-[#822CE7] placeholder-white/70"
              required
            />
          </div>

          {/* Contact Phone */}
          <div>
            <label className="text-gray-400 block mb-1">Contact Phone</label>
            <input
              type="tel"
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full px-3 py-2 bg-[#1D1733] border border-[#2A2448] text-white rounded-full focus:outline-none focus:ring-2 focus:ring-[#822CE7] placeholder-white/70"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-400 block mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-3 py-2 bg-[#1D1733] border border-[#2A2448] text-white rounded-full focus:outline-none focus:ring-2 focus:ring-[#822CE7] placeholder-white/70"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-gray-400 block mb-1">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-3 py-2 bg-[#1D1733] border border-[#2A2448] text-white rounded-full focus:outline-none focus:ring-2 focus:ring-[#822CE7] placeholder-white/70"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <Link to={"/registerVerify"}>
            <button
              type="submit"
              className="w-full mt-3 bg-gradient-to-tr from-[#822CE7] to-[#BB82FF] text-white shadow-md px-3 py-2 rounded-full"
            >
              Join Now
            </button>
          </Link>
        </form>
        <span className="flex justify-center pt-2 text-white">
          Already have an account?
          <Link to={"/login"}>
            <span className="text-[#822CE7]"> Sign In</span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default JoinAs;
