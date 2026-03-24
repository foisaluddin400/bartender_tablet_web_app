import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "", remember: false });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Values:", formValues);
    // Here you can handle API login
  };

  return (
    <div className="flex font-nunito justify-center items-center min-h-screen px-4 lg:px-0 bg-[#0F0B1A]">
      <div className="w-full max-w-lg lg:p-8 p-4 border border-[#2A2448] rounded-lg bg-[#822CE71A]">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-white mb-2 italic">Welcome Back</h2>
        <p className="text-gray-400 mb-6 text-sm">
          Sign in to continue exploring and managing your Venue.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-gray-400 block mb-1">Enter Email Address</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
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

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center gap-2 text-gray-400">
              <input
                type="checkbox"
                name="remember"
                checked={formValues.remember}
                onChange={handleChange}
                className="accent-[#822CE7]"
              />
              Remember me
            </label>
            <Link
              to={"/forgot-password"}
              className="text-sm text-[#9D5BFF] hover:underline focus:outline-none"
            >
              Forget password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-tr from-[#822CE7] to-[#BB82FF] text-white shadow-md px-3 py-2 rounded-full"
          >
            Login
          </button>
        </form>
        <span className="flex justify-center pt-2 text-white">No account yet?  <Link to={'/joinAs'}><span className="text-[#822CE7]"> Create an account</span></Link></span>
      </div>
    </div>
  );
};

export default Login;