import React from "react";
import ProcessCard from "./ProcessCard";
import { UserPlus, FileText, Rocket } from "lucide-react";

const ProcessCardGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >
        <ProcessCard
          number="01"
          icon={<UserPlus className="w-7 h-7 text-white" />}
          title="Choose Your Plan"
          description="Select from Basic (free), Premium, or Platinum packages based on your business needs."
        />

        <ProcessCard
          number="02"
          icon={<FileText className="w-7 h-7 text-white" />}
          title="Create Your Profile"
          description="Add your business details, photos, and services. Platinum members get a custom mini-website."
        />

        <ProcessCard
          number="03"
          icon={<Rocket className="w-7 h-7 text-white" />}
          title="Start Growing"
          description="Get discovered by local customers and watch your business reach new heights."
        />
      </div>
    </section>
  );
};

export default ProcessCardGrid;
