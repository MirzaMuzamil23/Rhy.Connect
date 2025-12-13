import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#0f1724] p-6 rounded-xl border border-gray-700">
      <form className="space-y-4">
        
        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm">Full Name *</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full mt-1 p-3 rounded-lg bg-[#0c0e11] border border-gray-600 text-sm"
            />
          </div>

          <div>
            <label className="text-sm">Email Address *</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full mt-1 p-3 rounded-lg bg-[#0c0e11] border border-gray-600 text-sm"
            />
          </div>
        </div>

        {/* ROW 2 */}
        <div>
          <label className="text-sm">Company Name</label>
          <input
            type="text"
            placeholder="Your Company"
            className="w-full mt-1 p-3 rounded-lg bg-[#0c0e11] border border-gray-600 text-sm"
          />
        </div>

        {/* ROW 3 */}
        <div>
          <label className="text-sm">I'm interested in *</label>
          <select className="w-full mt-1 p-3 rounded-lg bg-[#0c0e11] border border-gray-600 text-sm">
            <option>Select an option</option>
            <option>Business Services</option>
            <option>Partnership</option>
            <option>Support</option>
          </select>
        </div>

        {/* ROW 4 */}
        <div>
          <label className="text-sm">Message *</label>
          <textarea
            rows="4"
            placeholder="Tell us about your business..."
            className="w-full mt-1 p-3 rounded-lg bg-[#0c0e11] border border-gray-600 text-sm"
          ></textarea>
        </div>

        {/* BUTTON */}
        <button className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-lg text-white text-sm font-medium">
          Send Message ✈
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
