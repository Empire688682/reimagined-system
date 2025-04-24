'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg('');

    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: payload,
      });

      const data = await res.json();
      if (res.ok) {
        setResponseMsg('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setResponseMsg(data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMsg('Server error. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id='contact' className="w-full bg-gradient-to-br from-white to-blue-100 p-6 mb-10">
      <div className=" grid grid-cols-1 w-full md:grid-cols-2 bg-white shadow-xl rounded-lg flex overflow-hidden">
        {/* Left Column */}
        <div className="bg-[#23396A] text-white p-8 relative">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-sm mb-6">
            Have questions, feedback or need help with a booking?<br />
            We're here for you.
          </p>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>+234 829 872 7626</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span>oyinlafirms@gmail.com</span>
            </div>
          </div>

          <div className="absolute bottom-[-32px] right-[-28px] w-30 h-30 bg-white/10 bg-opacity-10 rounded-full" />
          <div className="absolute bottom-14 right-8 w-16 h-16 bg-white/10 bg-opacity-20 rounded-full" />
        </div>

        {/* Right Column */}
        <div className=" p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex gap-4">
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                className="w-1/2 border-b p-2 outline-none"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="w-1/2 border-b p-2 outline-none"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex gap-4">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-1/2 border-b p-2 outline-none"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="w-1/2 border-b p-2 outline-none"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Select Subject?</label>
              <div className="flex flex-wrap gap-4">
                {["General Inquiry", "Support", "Partnership", "Feedback"].map((item, index) => (
                  <label key={index} className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="subject"
                      value={item}
                      checked={formData.subject === item}
                      onChange={handleChange}
                      className="accent-blue-500"
                      required
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Write your message.."
                className="w-full border-b p-2 outline-none resize-none"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition-all"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {responseMsg && (
              <p className="text-sm text-green-700 mt-2">{responseMsg}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
