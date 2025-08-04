
import { Button } from "./ui/button";
import { Check } from "lucide-react";

const Membership = () => {
  const plans = [
    {
      number: "01",
      title: "CYBER WEEKLY",
      features: [
        "Neural gym access",
        "Unlimited hologram sessions",
        "Access to all cyber classes",
        "Basic bio-enhancement"
      ],
      price: "49$",
      period: "week"
    },
    {
      number: "02",
      title: "MATRIX MONTHLY",
      features: [
        "Full neural gym access",
        "Unlimited quantum sessions",
        "Premium cyber classes",
        "Advanced bio-enhancement"
      ],
      price: "149$",
      period: "month"
    },
    {
      number: "03",
      title: "QUANTUM ANNUAL",
      features: [
        "VIP neural trainer access",
        "Unlimited everything",
        "Elite cyber combat classes",
        "Full bio-reconstruction"
      ],
      price: "1499$",
      period: "year"
    }
  ];

  return (
    <section id="membership" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-primary text-sm font-bold mb-4 tracking-[0.3em]">MEMBERSHIP</div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-wider">
            <span className="bg-gradient-to-r from-primary via-orange-400 to-red-500 bg-clip-text text-transparent">
              UPGRADE YOUR REALITY
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose your level of enhancement. Each tier unlocks new dimensions of power and capability.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="group relative">
              <div className="bg-gray-900 rounded-[2rem] border-2 border-gray-700 overflow-hidden transition-all duration-500 transform hover:scale-105 hover:border-primary hover:shadow-2xl hover:shadow-primary/30 cursor-pointer">
                {/* Header */}
                <div className="p-8 border-b border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900">
                  <div className="text-primary text-sm font-bold mb-2 tracking-[0.2em]">{plan.number}</div>
                  <h3 className="text-2xl font-black text-white tracking-wider">{plan.title}</h3>
                </div>

                {/* Features */}
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center transform transition-all duration-300 group-hover:translate-x-2">
                        <Check className="w-5 h-5 text-primary mr-4 flex-shrink-0" />
                        <span className="text-gray-300 tracking-wide">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="flex items-end justify-center mb-8">
                    <div className="text-center">
                      <span className="text-5xl font-black bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent tracking-wider">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 text-lg">/{plan.period}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-red-500 text-black font-black py-4 rounded-2xl text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 tracking-[0.1em]">
                    ACTIVATE
                  </Button>
                </div>

                {/* Glowing effect on hover */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-primary/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
