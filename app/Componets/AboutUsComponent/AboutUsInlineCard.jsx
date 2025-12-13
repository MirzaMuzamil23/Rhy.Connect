import React from "react";
import { Users, Target, Sparkles } from "lucide-react";

const AboutUsInlineCard = () => {
  const cards = [
    {
      icon: <Users className="text-orange-500 w-6 h-6" />,
      title: "Community First",
      description:
        "We believe in strengthening local connections and supporting regional economic growth.",
    },
    {
      icon: <Target className="text-orange-500 w-6 h-6" />,
      title: "Targeted Solutions",
      description:
        "Focused exclusively on the Rhine Valley, we understand the unique needs of our region.",
    },
    {
      icon: <Sparkles className="text-orange-500 w-6 h-6" />,
      title: "Innovation",
      description:
        "Combining modern technology with local expertise to create the perfect business platform.",
    },
  ];

  return (
    <div className="space-y-6 mt-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl p-5 flex gap-4 border border-gray-200"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-orange-200 rounded-lg">
            {card.icon}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {card.title}
            </h3>
            <p className="text-gray-600 mt-1 leading-relaxed text-sm">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUsInlineCard;
