
import { Button } from "./ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    membership: "basic"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-wider">
            <span className="bg-gradient-to-r from-primary via-orange-400 to-red-500 bg-clip-text text-transparent">
              JOIN THE REVOLUTION
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to transcend your limits? Connect with us and begin your transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-3xl border-2 border-gray-700 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
            <h3 className="text-2xl font-black text-white mb-6 tracking-wider">INITIATE CONTACT</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-primary font-bold mb-2 tracking-wider">NEURAL ID</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-black border-2 border-gray-700 rounded-2xl text-white focus:border-primary focus:outline-none transition-all duration-300"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-primary font-bold mb-2 tracking-wider">CYBER EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-black border-2 border-gray-700 rounded-2xl text-white focus:border-primary focus:outline-none transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-primary font-bold mb-2 tracking-wider">NEURAL LINK</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 bg-black border-2 border-gray-700 rounded-2xl text-white focus:border-primary focus:outline-none transition-all duration-300"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-primary font-bold mb-2 tracking-wider">ENHANCEMENT LEVEL</label>
                <select
                  name="membership"
                  value={formData.membership}
                  onChange={handleChange}
                  className="w-full p-4 bg-black border-2 border-gray-700 rounded-2xl text-white focus:border-primary focus:outline-none transition-all duration-300"
                >
                  <option value="basic">Cyber Weekly</option>
                  <option value="premium">Matrix Monthly</option>
                  <option value="elite">Quantum Annual</option>
                </select>
              </div>

              <div>
                <label className="block text-primary font-bold mb-2 tracking-wider">TRANSMISSION</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-4 bg-black border-2 border-gray-700 rounded-2xl text-white focus:border-primary focus:outline-none transition-all duration-300"
                  placeholder="Tell us about your fitness goals..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-red-500 text-black font-black py-4 rounded-2xl text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 tracking-wider"
              >
                INITIATE CONNECTION [+]
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-3xl border-2 border-gray-700 hover:border-primary transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 transform hover:scale-105">
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-white font-black mb-2 tracking-wider">LOCATION</h4>
                <p className="text-gray-400 text-sm">Cyber District 9708<br />Neo Tokyo Sector 778</p>
              </div>

              <div className="bg-gray-900 p-6 rounded-3xl border-2 border-gray-700 hover:border-primary transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 transform hover:scale-105">
                <Phone className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-white font-black mb-2 tracking-wider">NEURAL LINK</h4>
                <p className="text-gray-400 text-sm">+324 12 48 52 26</p>
              </div>

              <div className="bg-gray-900 p-6 rounded-3xl border-2 border-gray-700 hover:border-primary transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 transform hover:scale-105">
                <Mail className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-white font-black mb-2 tracking-wider">CYBER EMAIL</h4>
                <p className="text-gray-400 text-sm">connect@cyberfitness.com</p>
              </div>

              <div className="bg-gray-900 p-6 rounded-3xl border-2 border-gray-700 hover:border-primary transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 transform hover:scale-105">
                <Clock className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-white font-black mb-2 tracking-wider">OPERATING HOURS</h4>
                <p className="text-gray-400 text-sm">24/7 Neural Access</p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-gray-900 p-6 rounded-3xl border-2 border-gray-700 hover:border-primary transition-all duration-500">
              <h4 className="text-white font-black mb-4 tracking-wider">NEURAL COORDINATES</h4>
              <div className="w-full h-64 bg-gray-800 rounded-2xl flex items-center justify-center border-2 border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9503398796587!2d-74.00369368459394!3d40.74844397932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1644262070010!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
