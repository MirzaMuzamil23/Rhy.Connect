import React from "react";
import ContactHeading from "../../Componets/ContactUsComponet/ContactHeading"
import ContactInfo from "../../Componets/ContactUsComponet/ContactInfo"
import ContactForm from "../../Componets/ContactUsComponet/ContactForm"
import BusinessHours from "../../Componets/ContactUsComponet/BusinessHours"


const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0d0f12] text-white py-14 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <ContactHeading />

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* LEFT FORM */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* RIGHT INFO */}
          <div className="space-y-6">
            <ContactInfo />
            <BusinessHours />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
