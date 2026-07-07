import React from "react";
import { ShieldCheck, ArrowUp, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

interface FooterProps {
  onNavigate?: (hash: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer-section" className="bg-slate-900 text-slate-300 border-t border-slate-800 py-16 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Col 1: Corporate Details */}
          <div className="md:col-span-5 space-y-5">
            <a href="https://www.londonpestmanagement.co.uk/" className="flex items-center gap-2 group">
              <div className="bg-red-600 text-white p-2 rounded-xl transition-transform group-hover:scale-105 shadow-md shadow-red-600/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-white block leading-none">LONDON</span>
                <span className="text-[10px] font-bold tracking-widest text-red-500 uppercase block">PEST MANAGEMENT</span>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm">
              We offer rapid-response 24/7 emergency pest control and permanent proofing solutions across domestic properties and commercial sectors. Operating fully to British and European industry standards.
            </p>

            <div className="text-[11px] text-slate-400 space-y-2 font-sans bg-slate-950/40 p-4 rounded-xl border border-slate-800/60">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200 block">Registered UK Office Address:</span>
                  51 The Mall, London WC2N 5DU
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200 block">Office Hotline:</span>
                  <a href="tel:02088198933" className="hover:text-white font-mono">020 8819 8933</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200 block">Email Support:</span>
                  <a href="mailto:contact@londonpestmanagement.co.uk" className="hover:text-white">
                    contact@londonpestmanagement.co.uk
                  </a>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-slate-500 space-y-1 font-mono">
              <p>Registered Domain: <a href="https://www.londonpestmanagement.co.uk" className="text-red-400 hover:underline inline-flex items-center gap-0.5">www.londonpestmanagement.co.uk <ExternalLink className="w-2.5 h-2.5" /></a></p>
              <p>Trading Name: London Pest Management</p>
            </div>
          </div>

          {/* Col 2: Navigation Pages */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white">Quick Links</h4>
            <ul className="space-y-3 text-xs font-semibold">
              <li>
                <a href="#/" className="text-slate-400 hover:text-white transition-colors">
                  London Pest Management
                </a>
              </li>
              <li>
                <a href="#/services/domestic" className="text-slate-400 hover:text-white transition-colors">
                  Domestic Pest Treatment
                </a>
              </li>
              <li>
                <a href="#/services/commercial" className="text-slate-400 hover:text-white transition-colors">
                  Commercial Compliance Treatment
                </a>
              </li>
              <li>
                <a href="#/pests" className="text-slate-400 hover:text-white transition-colors">
                  Pests Encyclopedia
                </a>
              </li>
              <li>
                <a href="#/areas" className="text-slate-400 hover:text-white transition-colors">
                  Areas Covered
                </a>
              </li>
              <li>
                <a href="#/contact" className="text-slate-400 hover:text-white transition-colors">
                  Emergency Booking Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Accreditations & Standards */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white">Affiliations & Standards</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              We operate strictly within the framework of leading UK and European health and safety bodies. Our protocols are auditable and compliant with local council guidelines.
            </p>
            
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-lg text-left">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">BPCA Member</span>
                <span className="text-xs font-bold text-slate-200">British Pest Control</span>
              </div>
              <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-lg text-left">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">CEPA Certified</span>
                <span className="text-xs font-bold text-slate-200">European Standard</span>
              </div>
              <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-lg text-left">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">NPTA Member</span>
                <span className="text-xs font-bold text-slate-200">National Technicians</span>
              </div>
              <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-lg text-left">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">COSHH Compliant</span>
                <span className="text-xs font-bold text-slate-200">Chemical Safety</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© 2026 London Pest Management. All rights reserved.</p>
          <button
            onClick={handleScrollTop}
            className="flex items-center gap-1 hover:text-white bg-slate-950 border border-slate-800/80 hover:bg-slate-800 py-2 px-4 rounded-xl transition-all"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5 text-red-500" />
          </button>
        </div>

      </div>
    </footer>
  );
}
