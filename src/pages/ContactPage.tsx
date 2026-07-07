import React from "react";
import BookingForm from "../components/BookingForm";
import { ShieldCheck, Phone, Mail, MapPin, Clock, BadgeCheck, ExternalLink, HelpCircle } from "lucide-react";

export default function ContactPage() {
  React.useEffect(() => {
    document.title = "Contact Our 24/7 Booking Desk | London Pest Management";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Get in touch with London Pest Management. 24/7 emergency phone lines, direct email support, and fast callback request forms. Certified pest controllers.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'contact pest control, email London Pest Management, pest control London, book exterminator, 24/7 emergency dispatch');
  }, []);

  return (
    <div id="contact-page" className="bg-[#fcfcfd] text-slate-800 font-sans pt-32 pb-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <span className="text-red-600 font-extrabold text-xs uppercase tracking-wider block">Get In Touch</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Contact Our Emergency Booking Desk
          </h1>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Need advice or want to book an immediate inspection? Our certified specialists are standing by 24 hours a day. Reach out to us via telephone, email, or our priority callback form.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Corporate Office info, hours, credentials */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Contact details cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-white border border-slate-200/80 p-5 rounded-2xl flex items-start gap-4 shadow-sm">
                <div className="bg-red-50 text-red-600 p-3 rounded-xl">
                   <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">OFFICE HOTLINE</span>
                  <a href="tel:02088198933" className="text-base font-extrabold text-slate-950 hover:text-red-600 font-mono block">
                    020 8819 8933
                  </a>
                  <p className="text-[11px] text-slate-500">Available 24 hours a day, 7 days a week.</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200/80 p-5 rounded-2xl flex items-start gap-4 shadow-sm">
                <div className="bg-red-50 text-red-600 p-3 rounded-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">EMAIL SUPPORT</span>
                  <a href="mailto:contact@londonpestmanagement.co.uk" className="text-sm font-extrabold text-slate-950 hover:text-red-600 block break-all">
                    contact@londonpestmanagement.co.uk
                  </a>
                  <p className="text-[11px] text-slate-500">Typical response within 1 hour.</p>
                </div>
              </div>

            </div>

            {/* Registered Head Office Address */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex gap-4 items-start shadow-sm">
              <div className="bg-red-50 text-red-600 p-3 rounded-xl shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">REGISTERED UK OFFICE</span>
                <h4 className="font-extrabold text-slate-950 text-sm">London Pest Management (Head Office)</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  51 The Mall, London WC2N 5DU
                </p>
                <div className="pt-2 text-[10px] text-slate-400 font-mono">
                  Registered domain: <a href="https://www.londonpestmanagement.co.uk" className="text-red-600 hover:underline">www.londonpestmanagement.co.uk</a>
                </div>
              </div>
            </div>

            {/* Operating hours */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
              <h3 className="font-black text-slate-950 text-sm uppercase tracking-wide flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-600" /> Operational Hours
              </h3>
              
              <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
                <div className="bg-white border border-slate-200/60 p-3 rounded-xl">
                  <span className="text-slate-400 block text-[9px] font-bold">EMERGENCY RESPONSE</span>
                  <span className="text-slate-900 block mt-1">24 Hours / 7 Days</span>
                </div>
                <div className="bg-white border border-slate-200/60 p-3 rounded-xl">
                  <span className="text-slate-400 block text-[9px] font-bold">OFFICE & SALES ADMIN</span>
                  <span className="text-slate-900 block mt-1">08:00 - 18:00 (Mon-Sat)</span>
                </div>
              </div>
            </div>

            {/* Frequently Asked Questions */}
            <div className="space-y-4">
              <h3 className="text-lg font-black text-slate-950 uppercase tracking-tight">
                Frequently Asked Booking Questions
              </h3>
              
              <div className="space-y-3">
                <div className="bg-white border border-slate-200/80 p-4 rounded-xl space-y-1">
                  <h5 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-red-600" />
                    How fast can you arrive at my London property?
                  </h5>
                  <p className="text-[11px] text-slate-500 leading-relaxed pl-5">
                    We maintain localized active dispatch hubs across all 32 London Boroughs. This enables our field engineers to respond and arrive at your premises within 1 hour of booking.
                  </p>
                </div>

                <div className="bg-white border border-slate-200/80 p-4 rounded-xl space-y-1">
                  <h5 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-red-600" />
                    Do you use child and pet-safe chemical products?
                  </h5>
                  <p className="text-[11px] text-slate-500 leading-relaxed pl-5">
                    Yes, absolutely. We prioritize child and pet safety. Our baits and insecticides are placed strictly within secured tamper-resistant stations and applied according to COSHH guidelines.
                  </p>
                </div>

                <div className="bg-white border border-slate-200/80 p-4 rounded-xl space-y-1">
                  <h5 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-red-600" />
                    Are your prices transparent with no hidden charges?
                  </h5>
                  <p className="text-[11px] text-slate-500 leading-relaxed pl-5">
                    Yes. All starting prices (from £95) are agreed upfront. Our field specialists will write out a complete cost breakdown during the survey phase before any treatments are executed.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Priority Booking desk */}
          <div className="lg:col-span-5">
            <BookingForm />
          </div>

        </div>

      </div>
    </div>
  );
}
