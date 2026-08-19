"use client";

import React, { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  designation: string;
  companyName: string;
  email: string;
  countryCode: string;
  phone: string;
  message: string;
  interests: string[];
  agreePrivacy: boolean;
}

const PRODUCT_OPTIONS = [
  'Artificial Intelligence',
  'Robotic Process Automation',
  'Chatbot',
  'Engineering Business',
  'Digital Agriculture',
  'Internet Of Things',
  'Virtual Reality',
  'Others',
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    designation: '',
    companyName: '',
    email: '',
    countryCode: '+1',
    phone: '',
    message: '',
    interests: [],
    agreePrivacy: false,
  });

  const handleCheckboxChange = (product: string) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(product);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((item) => item !== product)
          : [...prev.interests, product],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <section id="contact" className="w-full bg-[#e8ebe9] text-[#1c201a] py-24 px-6 sm:px-12 lg:px-24 border-t-2 border-[#1e1e28] font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-block border border-[#1c201a] rounded-full px-5 py-1 text-xs font-bold tracking-wider uppercase bg-transparent">
            GET IN TOUCH
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight leading-none text-[#1c201a]">
            Tell us about your digital goals.
          </h1>

          <div className="space-y-1 text-sm sm:text-base text-[#4a4e46] font-medium leading-relaxed">
            <p>Share a bit about your operational challenges and how we can assist.</p>
            <p>Fields marked with <span className="text-[#d9381e]">*</span> are required.</p>
          </div>

          <hr className="border-t border-[#d8d3c5] my-6" />

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm font-semibold text-[#1c201a]">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#f97316] text-[#1c201a] text-xs font-bold">✓</span>
              Enterprise & Government Solutions — our specialization
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-[#1c201a]">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#f97316] text-[#1c201a] text-xs font-bold">✓</span>
              Response within one business day
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-[#1c201a]">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#f97316] text-[#1c201a] text-xs font-bold">✓</span>
              Free technical consultation available
            </div>
          </div>

          <p className="text-sm font-medium text-[#1c201a] pt-2">
            Prefer to talk live?{' '}
            <a href="#book" className="underline font-semibold decoration-1 underline-offset-2">
              Book a virtual call
            </a>.
          </p>
        </div>

        {/* Right Column Form */}
        <div className="lg:col-span-7 lg:pl-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#1c201a]">
                  FIRST NAME <span className="text-[#d9381e]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-3 bg-[#ebe6da] border border-[#a8a396] rounded-xl focus:outline-none focus:border-[#1c201a] font-medium transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#1c201a]">
                  LAST NAME <span className="text-[#d9381e]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-3 bg-[#ebe6da] border border-[#a8a396] rounded-xl focus:outline-none focus:border-[#1c201a] font-medium transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#1c201a]">
                  JOB TITLE / ROLE
                </label>
                <input
                  type="text"
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  className="w-full px-4 py-3 bg-[#ebe6da] border border-[#a8a396] rounded-xl focus:outline-none focus:border-[#1c201a] font-medium transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#1c201a]">
                  ORGANIZATION <span className="text-[#d9381e]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-3 bg-[#ebe6da] border border-[#a8a396] rounded-xl focus:outline-none focus:border-[#1c201a] font-medium transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#1c201a]">
                BUSINESS EMAIL <span className="text-[#d9381e]">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#ebe6da] border border-[#a8a396] rounded-xl focus:outline-none focus:border-[#1c201a] font-medium transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#1c201a]">
                PHONE/MOBILE
              </label>
              <div className="flex gap-2">
                <select
                  value={formData.countryCode}
                  onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                  className="px-3 py-3 bg-[#ebe6da] border border-[#a8a396] rounded-xl focus:outline-none font-medium text-sm text-[#1c201a]"
                >
                  <option value="+1">United States +1</option>
                  <option value="+254">Kenya +254</option>
                  <option value="+44">United Kingdom +44</option>
                  <option value="+91">India +91</option>
                </select>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="flex-1 px-4 py-3 bg-[#ebe6da] border border-[#a8a396] rounded-xl focus:outline-none focus:border-[#1c201a] font-medium transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-[#1c201a]">
                DIGITAL SOLUTIONS/PRODUCTS INTERESTED IN
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PRODUCT_OPTIONS.map((product) => {
                  const isChecked = formData.interests.includes(product);
                  return (
                    <label
                      key={product}
                      onClick={() => handleCheckboxChange(product)}
                      className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer text-xs font-semibold transition select-none ${
                        isChecked
                          ? 'bg-[#1c201a] text-white border-[#1c201a]'
                          : 'bg-[#ebe6da] border-[#a8a396] text-[#1c201a] hover:border-[#1c201a]'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="w-4 h-4 rounded accent-[#F97316] border-[#a8a396]"
                      />
                      {product}
                    </label>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#1c201a]">
                MESSAGE <span className="text-[#d9381e]">*</span>
              </label>
              <textarea
                rows={5}
                required
                maxLength={5000}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-[#ebe6da] border border-[#a8a396] rounded-2xl focus:outline-none focus:border-[#1c201a] font-medium transition resize-none"
              />
            </div>

            <div className="flex items-center gap-3 pt-1">
              <input
                type="checkbox"
                id="privacy-check"
                required
                checked={formData.agreePrivacy}
                onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                className="w-4 h-4 rounded border-[#a8a396] accent-[#1c201a] cursor-pointer"
              />
              <label htmlFor="privacy-check" className="text-sm font-semibold text-[#1c201a] cursor-pointer">
                I agree to the <span className="underline decoration-1 underline-offset-2">Privacy Policy</span>. <span className="text-[#d9381e]">*</span>
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-8 py-3.5 bg-[#f97316] hover:bg-[#f97316] text-[#1c201a] font-bold text-xs uppercase tracking-wider rounded-full border border-[#1c201a] shadow-[2px_2px_0px_0px_#1c201a] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}