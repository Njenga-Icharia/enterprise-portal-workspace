"use client";

import React, { useState } from "react";
import Logo from "@/components/technobrainlogo";

interface FormData {
  firstName: string;
  lastName: string;
  designation: string;
  companyName: string;
  email: string;
  countryCode: string;
  customCountryCode: string;
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
    countryCode: '+254',
    customCountryCode: '',
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
    
    const resolutionCountryCode = formData.countryCode === 'other' 
      ? formData.customCountryCode 
      : formData.countryCode;

    const payload = {
      ...formData,
      finalPhoneString: `${resolutionCountryCode}${formData.phone}`
    };

    console.log('Form Submitted:', payload);
  };

  return (
    <section id="contact" className="w-full bg-[#e8ebe9] text-[#1c201a] py-24 px-6 sm:px-12 lg:px-24 border-t-2 border-[#1e1e28] font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column Info Block */}
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
              <span className="no-orange-cursor flex items-center justify-center w-5 h-5 rounded-full bg-tbl-orange text-white text-xs font-bold">✓</span>
              Enterprise & Government Solutions — our specialization
            </div>
            <div className="no-orange-cursor flex items-center gap-3 text-sm font-semibold text-[#1c201a]">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-tbl-orange text-white text-xs font-bold">✓</span>
              Response within one business day
            </div>
            <div className="no-orange-cursor flex items-center gap-3 text-sm font-semibold text-[#1c201a]">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-tbl-orange text-white text-xs font-bold">✓</span>
              Free technical consultation available
            </div>
          </div>

          <p className="text-sm font-medium text-[#1c201a] pt-2">
            Prefer to talk live?{' '}
            <a href="#book" className="no-orange-cursor underline font-semibold decoration-1 underline-offset-2 hover:text-tbl-orange transition-colors">
              Book a virtual call
            </a>.
          </p>

          <div className="pt-10 transform scale-90 origin-left">
            <Logo/>
          </div>
        </div>

        {/* Right Column Form Block */}
        <div className="lg:col-span-7 lg:pl-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* First Name & Last Name */}
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

            {/* Job Title & Organization */}
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

            {/* Business Email */}
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

            {/* Phone Number with Custom Country Code Ordering */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#1c201a]">
                PHONE/MOBILE
              </label>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="px-3 py-3 bg-[#ebe6da] border border-[#a8a396] rounded-xl focus:outline-none font-medium text-sm text-[#1c201a]"
                  >
                    {/* Default Preselected Option */}
                    <option value="+254">Kenya +254</option>

                    {/* Numerical Ascending List starting at +1 */}
                    <option value="+1">United States +1</option>
                    <option value="+27">South Africa +27</option>
                    <option value="+44">United Kingdom +44</option>
                    <option value="+91">India +91</option>
                    <option value="+211">South Sudan +211</option>
                    <option value="+233">Ghana +233</option>
                    <option value="+234">Nigeria +234</option>
                    <option value="+250">Rwanda +250</option>
                    <option value="+251">Ethiopia +251</option>
                    <option value="+254">Kenya +254</option>
                    <option value="+255">Tanzania +255</option>
                    <option value="+256">Uganda +256</option>
                    <option value="+258">Mozambique +258</option>
                    <option value="+260">Zambia +260</option>
                    <option value="+263">Zimbabwe +263</option>
                    <option value="+265">Malawi +265</option>
                    <option value="+268">Swaziland +268</option>
                    <option value="+971">UAE +971</option>
                    <option value="other">Other...</option>
                  </select>

                  <input
                    type="tel"
                    placeholder="700 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1 px-4 py-3 bg-[#ebe6da] border border-[#a8a396] rounded-xl focus:outline-none focus:border-[#1c201a] font-medium transition"
                  />
                </div>

                {formData.countryCode === 'other' && (
                  <input
                    type="text"
                    required
                    placeholder="Enter custom country code (e.g., +49)"
                    value={formData.customCountryCode}
                    onChange={(e) => setFormData({ ...formData, customCountryCode: e.target.value })}
                    className="w-full px-4 py-3 bg-[#ebe6da] border border-[#a8a396] rounded-xl focus:outline-none focus:border-[#1c201a] font-medium transition text-sm text-[#1c201a]"
                  />
                )}
              </div>
            </div>

            {/* Areas of Interest Checkbox Grid with White Unselected Checkboxes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-3 text-[#1c201a]">
                AREAS OF INTEREST
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRODUCT_OPTIONS.map((product) => {
                  const isChecked = formData.interests.includes(product);
                  return (
                    <button
                      type="button"
                      key={product}
                      onClick={() => handleCheckboxChange(product)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left text-sm font-medium transition-all bg-[#ebe6da] ${
                        isChecked 
                          ? 'border-[#1c201a] shadow-sm' 
                          : 'border-[#a8a396] hover:border-[#1c201a]'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded flex items-center justify-center border text-xs font-bold transition-colors ${
                        isChecked 
                          ? 'bg-[#1c201a] border-[#1c201a] text-tbl-orange' 
                          : 'bg-white border-[#a8a396] text-transparent'
                      }`}>
                        ✓
                      </span>
                      <span className="text-[#1c201a]">{product}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message Area */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#1c201a]">
                MESSAGE <span className="text-[#d9381e]">*</span>
              </label>
              <textarea
                rows={5}
                required
                maxLength={5000}
                placeholder="Tell us about your project requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-[#ebe6da] border border-[#a8a396] rounded-2xl focus:outline-none focus:border-[#1c201a] font-medium transition resize-none"
              />
            </div>

            {/* Privacy Agreement Checkbox */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="privacy-check"
                required
                checked={formData.agreePrivacy}
                onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                className="w-4 h-4 rounded border-[#a8a396] accent-[#1c201a] cursor-pointer"
              />
              <label htmlFor="privacy-check" className="text-xs text-[#4a4e46] font-medium cursor-pointer">
                I agree to the processing of my personal data in accordance with the Privacy Policy. <span className="text-[#d9381e]">*</span>
              </label>
            </div>

            {/* Submit Action Button */}
            <button
              type="submit"
              className="no-orange-cursor w-full sm:w-auto px-8 py-4 bg-[#1c201a] text-white font-extrabold text-xs tracking-widest uppercase rounded-full hover:bg-tbl-orange transition-colors shadow-lg"
            >
              SEND MESSAGE
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}