'use client';

import React, { useState } from "react";
import { sendContactForm } from "../lib/api";
import { toast, ToastContainer } from 'react-toastify';
import { ArrowRight } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    serviceType: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await sendContactForm(formData);
      if (response && response.success) {
        setFormData({ name: "", company: "", email: "", serviceType: "", message: "" });
      } else {
        toast.error("There was an issue sending your message. Please try again later.");
      }
    } catch (error) {
      if (error) {
        toast.error("Error: Failed to send message. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const inputClass =
    "w-full bg-transparent border-b border-gray-300 pb-2 text-gray-700 placeholder-[#D1D5DB] text-sm focus:outline-none focus:border-gray-600 transition duration-200";

  const labelClass = "block text-sm font-semibold uppercase tracking-widest text-[#9CA3AF] mb-3";

  return (
    <main className="bg-white font-sans">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-16 items-start">

          {/* Left — Heading */}
          <div className="md:col-span-1">
            <h2 className="text-4xl mb-4 leading-tight">
              Send an Inquiry
            </h2>
            <p className="text-[#9CA3AF] text-lg leading-relaxed">
              Tell us about your project or service requirement. Our specialized team will
              respond within 24 hours.
            </p>
          </div>

          {/* Right — Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-10">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className={labelClass}>Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Company Name</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Organization"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Row 2: Email + Service Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className={labelClass}>Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@company.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Service Type</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled>Select a Service</option>
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                    <option value="d">D</option>
                    <option value="e">E</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Message — full width */}
              <div>
                <label className={labelClass}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Briefly describe your requirements..."
                  className={inputClass}
                />
              </div>


              {/* Submit */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center gap-3 bg-black text-white text-xs font-bold uppercase tracking-widest px-10 py-4 rounded-full hover:bg-gray-800 transition duration-300 disabled:opacity-60"
                >
                  {isLoading ? "Sending..." : "Submit Message"}
                  {!isLoading && <ArrowRight className="w-4 h-4" />}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
      <ToastContainer />
    </main>
  );
}