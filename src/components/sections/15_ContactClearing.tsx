"use client";

import React, { useState } from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { CheckCircle2, X, Mail, Phone, MapPin } from "lucide-react";

export const ContactClearing: React.FC = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormOpen(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Environment */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/backgrounds/final-clearing.jpg"
          alt="Sunlit green botanical forest clearing background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040D07] via-transparent to-[#040D07]" />
        <div className="absolute inset-0 bg-[#040D07]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-between min-h-[85vh]">
        {/* Top-Left Section Badge */}
        <div className="self-start">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-[#0F2618] border border-[#89C35C]/50 text-white shadow-lg">
            <span className="px-2 py-0.5 rounded bg-[#1A472C] text-[#A4E06A] font-bold text-xs font-mono">
              14
            </span>
            <span className="text-sm font-serif font-semibold tracking-wide">
              Contact / Final Forest Clearing
            </span>
          </div>
        </div>

        {/* Content Area: Left Details and Right Signpost */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto my-auto w-full">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <h2 className="text-4xl sm:text-6xl font-serif-title font-bold text-white tracking-tight leading-tight drop-shadow-lg">
                Let&apos;s <span className="text-[#A4E06A]">Connect</span>
              </h2>
              <p className="text-sm sm:text-base text-[#EFE8D8]/85 font-sans mt-2">
                For collaborations, research discussions and academic interactions
              </p>
            </div>

            {/* 3 Contact Detail Rows */}
            <div className="space-y-4 pt-2">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#89C35C] bg-[#0A1F13]/80 backdrop-blur-md flex items-center justify-center text-[#9FE870] shrink-0 shadow-md">
                  <Mail className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-sm font-serif font-bold text-[#A4E06A]">
                    Email
                  </div>
                  <a
                    href={`mailto:${profileData.emails[0]}`}
                    className="text-xs sm:text-sm text-white hover:text-[#A4E06A] transition-colors block font-sans"
                  >
                    {profileData.emails[0]}
                  </a>
                  <a
                    href={`mailto:${profileData.emails[1]}`}
                    className="text-xs text-[#EFE8D8]/70 hover:text-[#A4E06A] transition-colors block font-sans"
                  >
                    {profileData.emails[1]}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#89C35C] bg-[#0A1F13]/80 backdrop-blur-md flex items-center justify-center text-[#9FE870] shrink-0 shadow-md">
                  <Phone className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-sm font-serif font-bold text-[#A4E06A]">
                    Phone
                  </div>
                  <div className="text-xs sm:text-sm text-white font-sans">
                    {profileData.contactPhone}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#89C35C] bg-[#0A1F13]/80 backdrop-blur-md flex items-center justify-center text-[#9FE870] shrink-0 shadow-md">
                  <MapPin className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-sm font-serif font-bold text-[#A4E06A]">
                    Location
                  </div>
                  <div className="text-xs sm:text-sm text-white font-sans leading-relaxed max-w-sm">
                    {profileData.department}, {profileData.college}, {profileData.university}, {profileData.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Send Message Button */}
            <div className="pt-2">
              <button
                onClick={() => setFormOpen(true)}
                className="px-6 py-3 rounded-xl bg-[#234B30] hover:bg-[#2D603E] border border-[#89C35C] text-white font-serif text-sm font-semibold tracking-wide shadow-botanical-glow transition-all"
              >
                Send Direct Message
              </button>
            </div>
          </div>

          {/* Right Column: Wooden Signpost Planks */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="wooden-signboard rounded-xl p-8 text-center max-w-sm w-full space-y-4">
              <div className="bg-black/15 p-4 rounded-lg border border-[#C5A868]/40 space-y-3">
                <p className="font-serif-title italic text-2xl sm:text-3xl tracking-wide">
                  Stay Curious
                </p>
                <div className="w-16 h-px bg-[#C5A868]/40 mx-auto" />
                <p className="font-serif-title italic text-2xl sm:text-3xl tracking-wide">
                  Keep Exploring
                </p>
                <div className="w-16 h-px bg-[#C5A868]/40 mx-auto" />
                <p className="font-serif-title italic text-2xl sm:text-3xl tracking-wide">
                  Keep Conserving
                </p>
              </div>
              <div className="text-[10px] uppercase tracking-widest font-serif opacity-80">
                Dr. M. Venkat Ramana · Osmania University
              </div>
            </div>
          </div>
        </div>

        <div />
      </div>

      {/* Direct Message Form Modal */}
      {formOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#0A1F13] border border-[#89C35C]/50 rounded-2xl p-6 sm:p-8 shadow-2xl text-[#EFE8D8] space-y-4 animate-modal-pop" data-lenis-prevent>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-serif-title font-bold text-white">
                Send Botanical Inquiry
              </h3>
              <button
                onClick={() => setFormOpen(false)}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white shrink-0"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-[#1B4B2E] text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-[#A4E06A] mx-auto animate-bounce" />
                <h4 className="text-base font-serif font-bold text-white">
                  Message Sent Successfully
                </h4>
                <p className="text-xs text-[#EFE8D8]/80">
                  Thank you. Dr. M. Venkat Ramana will respond to your inquiry shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-medium text-[#EFE8D8]/80 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Prof. R. Sharma"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#050E08] border border-[#89C35C]/30 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#A4E06A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#EFE8D8]/80 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sharma@university.ac.in"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#050E08] border border-[#89C35C]/30 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#A4E06A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#EFE8D8]/80 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message or collaboration proposal..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#050E08] border border-[#89C35C]/30 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#A4E06A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#234B30] hover:bg-[#2D603E] border border-[#89C35C] text-white font-serif font-semibold text-sm shadow-botanical-glow"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
