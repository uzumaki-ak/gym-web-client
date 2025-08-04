import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="pt-20 pb-10 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
          Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-3xl font-bold mb-6 text-orange-400">Send a Message</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-600 text-white py-3 px-8 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-pink-700 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
                <div className="bg-orange-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-orange-400" size={24} />
                </div>
                <h3 className="font-bold text-white mb-2">Location</h3>
                <p className="text-gray-300 text-sm">Rohini, New Delhi</p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
                <div className="bg-orange-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-orange-400" size={24} />
                </div>
                <h3 className="font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 text-sm">+91 98765 43210</p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
                <div className="bg-orange-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-orange-400" size={24} />
                </div>
                <h3 className="font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 text-sm">hello@example.com</p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-3xl font-bold mb-6 text-orange-400">Find Me Here</h2>
              
              {/* Interactive Map */}
              <div className="relative h-96 rounded-xl overflow-hidden border border-gray-600">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224357.4842584357!2d77.04417!3d28.7355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b85fc2a2d89%3A0xbffb6c2d3c72f6b4!2sRohini%2C%20Delhi!5e0!3m2!1sen!2sin!4v1639481647863!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
                
                {/* Custom Overlay */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center gap-2 text-orange-400">
                    <MapPin size={20} />
                    <span className="font-bold">Rohini, New Delhi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4">Location Details</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-orange-400" />
                  <span>Sector 15, Rohini, New Delhi - 110089</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-400">🚇</span>
                  <span>Nearest Metro: Rohini East (Pink Line)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-400">🏢</span>
                  <span>Available for in-person meetings</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-400">⏰</span>
                  <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;