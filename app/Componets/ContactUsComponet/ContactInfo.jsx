import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-[#0f1724] p-6 rounded-xl border border-gray-700">
      <h3 className="text-lg font-semibold mb-4">Contact Information</h3>

      <div className="space-y-4 text-sm">

        <div className="flex items-center gap-3">
          <Mail className="text-pink-400" size={20} />
          <div>
            <p className="text-gray-400">Email</p>
            <p>info@rhy-connect.ch</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="text-purple-400" size={20} />
          <div>
            <p className="text-gray-400">Phone</p>
            <p>+41 XX XXX XX XX</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="text-blue-400" size={20} />
          <div>
            <p className="text-gray-400">Location</p>
            <p>Rhine Valley, Switzerland</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactInfo;
