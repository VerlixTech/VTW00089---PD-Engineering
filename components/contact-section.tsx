'use client';
import Head from "next/head";
// import Lottie from "lottie-react";
import React, { useState } from "react";
// import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { sendContactForm } from "../lib/api";
import { toast, ToastContainer } from 'react-toastify';

export function ContactSection() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
const [isLoading, setIsLoading] = useState(false);
 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true when submission starts
    try {
      const response = await sendContactForm(formData);
      if (response && response.success) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        toast.error('There was an issue sending your message. Please try again later.');
      }
    } catch (error) {
      if(error){
        toast.error('Error: Failed to send message. Please try again later.');
      }
    } finally {
      setIsLoading(false); // Set loading state to false when submission ends
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <Head>
        <title>Contact Us </title>
        <meta
          name="description"
          content="Get in touch with our team using our contact form, phone, email, or visit us at our location."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>


      <main className="bg-white font-inter">
        <div className="container mx-auto px-4 mb-10 py-4 max-w-[90%]">


          <main className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl text-black font-bold mb-2">Lets Talk!</h2>
              <p className="text-gray-600 mb-6">
                Ready to discuss your industrial engineering needs? Contact us today for expert consultation.
              </p>

              <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                         id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      type="text"
   
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
<label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input
                    id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+94 XXX XXX XXX"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  </div>
                </div>

                <div>
                                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                           id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  
                </div>

                <div>
                  
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                     id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  ></textarea>
                </div>

                <div>
                  <button
                   disabled={isLoading} 
                    type="submit"
                    className="w-full md:w-auto text-center bg-[#000094] text-white font-bold py-3 px-8 rounded-md hover:bg-[#00005a] transition-colors cursor-pointer"
                  >
                      {isLoading ? 'Sending...' : 'Send message'}
                  </button>
                </div>
              </form>
            </div>

           
          </main>
        </div>
              <ToastContainer />
      </main>
    </>
  );
}
