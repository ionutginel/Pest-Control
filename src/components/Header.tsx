import React, { useState, useEffect } from "react";
import { ShieldCheck, Phone, Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  currentRoute: { page: string; id?: string };
}

export default function Header({ currentRoute }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (page: string, serviceId?: string) => {
    if (page === "services" && currentRoute.page === "service-detail") {
      return !serviceId || currentRoute.id === serviceId;
    }
    if (page === "pests" && (currentRoute.page === "pests" || currentRoute.page === "pest-detail")) {
      return true;
    }
    if (page === "areas" && (currentRoute.page === "areas" || currentRoute.page === "area-detail")) {
      return true;
    }
    return currentRoute.page === page;
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-slate-50/80 backdrop-blur-sm border-b border-slate-100"
      }`}
    >
      {/* Top Banner (Regulatory & Phone) */}
      <div className="bg-slate-900 text-white text-[11px] py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
              <span className="text-emerald-400 font-bold font-mono">24/7 ACTIVE DISPATCH</span>
            </span>
            <span className="text-slate-400 hidden sm:inline">|</span>
            <span className="text-slate-300 hidden sm:inline">BPCA Certified & NPTA Registered Technicians</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-300 hidden md:inline">Emergency Response: Under 1 Hour</span>
            <a href="tel:02088198933" className="font-extrabold text-red-400 hover:text-red-300 transition-colors flex items-center gap-1 font-mono">
              <Phone className="w-3 h-3" /> 020 8819 8933
            </a>
          </div>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isScrolled ? "py-2.5" : "py-3.5"}`}>
        <div className="flex items-center justify-between">
          
          {/* Logo with Red Brand Theme */}
          <a
            href="https://www.londonpestmanagement.co.uk/"
            id="header-logo"
            className="flex items-center gap-2 cursor-pointer group text-left"
          >
            <div className="bg-red-600 text-white p-2 rounded-xl transition-transform group-hover:scale-105 shadow-md shadow-red-600/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-slate-950 block leading-none">
                LONDON
              </span>
              <span className="text-[9px] font-bold tracking-widest text-red-600 uppercase block">
                PEST MANAGEMENT
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-6 lg:gap-8">
            <a
              href="/"
              className={`text-sm font-semibold transition-colors hover:text-red-600 relative py-2 ${
                isActive("home") ? "text-red-600" : "text-slate-600"
              }`}
            >
              Home
            </a>

            {/* Services Dropdown/Links */}
            <div className="relative group/menu">
              <button
                className={`text-sm font-semibold transition-colors hover:text-red-600 py-2 flex items-center gap-1 ${
                  isActive("services") ? "text-red-600" : "text-slate-600"
                }`}
              >
                Services
              </button>
              <div className="absolute top-full left-0 bg-white border border-slate-200 shadow-xl rounded-xl py-2 w-56 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200 mt-1 z-50">
                <a
                  href="/services/domestic"
                  className={`block px-4 py-2.5 text-xs font-semibold hover:bg-slate-50 transition-colors text-left ${
                    isActive("services", "domestic") ? "text-red-600 bg-red-50/30" : "text-slate-700"
                  }`}
                >
                  Domestic Pest Control
                </a>
                <a
                  href="/services/commercial"
                  className={`block px-4 py-2.5 text-xs font-semibold hover:bg-slate-50 transition-colors text-left ${
                    isActive("services", "commercial") ? "text-red-600 bg-red-50/30" : "text-slate-700"
                  }`}
                >
                  Commercial Pest Control
                </a>
              </div>
            </div>

            <a
              href="/pests"
              className={`text-sm font-semibold transition-colors hover:text-red-600 relative py-2 ${
                isActive("pests") ? "text-red-600" : "text-slate-600"
              }`}
            >
              Pests Database
            </a>

            <a
              href="/areas"
              className={`text-sm font-semibold transition-colors hover:text-red-600 relative py-2 ${
                isActive("areas") ? "text-red-600" : "text-slate-600"
              }`}
            >
              London Areas
            </a>

            <a
              href="/contact"
              className={`text-sm font-semibold transition-colors hover:text-red-600 relative py-2 ${
                isActive("contact") ? "text-red-600" : "text-slate-600"
              }`}
            >
              Contact Us
            </a>
          </nav>

          {/* Callout */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:02088198933"
              id="header-phone-cta"
              className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl px-4 py-2.5 transition-all text-slate-800 font-bold text-sm font-mono"
            >
              <Phone className="w-4 h-4 text-red-600" />
              020 8819 8933
            </a>
            <a
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white text-xs uppercase tracking-wider font-bold py-3 px-5 rounded-xl transition-all shadow-md shadow-red-600/10 flex items-center gap-1.5"
            >
              Emergency Booking <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:02088198933"
              className="bg-red-50 text-red-600 p-2.5 rounded-xl hover:bg-red-100 transition-colors border border-red-100"
              title="Call Now"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-slate-900 p-2.5 rounded-xl bg-slate-100 border border-slate-200"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div id="mobile-drawer" className="md:hidden bg-white border-b border-slate-200 px-4 py-5 space-y-3 shadow-xl mt-1 text-left">
          <a
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors ${
              isActive("home") ? "bg-red-50 text-red-600" : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            Home
          </a>
          
          <div className="px-3 py-1 text-slate-400 text-[10px] uppercase font-bold tracking-wider">Services</div>
          <a
            href="/services/domestic"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 px-3 pl-6 rounded-xl text-xs font-semibold transition-colors ${
              isActive("services", "domestic") ? "text-red-600 bg-red-50/20 font-bold" : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            Domestic Pest Control
          </a>
          <a
            href="/services/commercial"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 px-3 pl-6 rounded-xl text-xs font-semibold transition-colors ${
              isActive("services", "commercial") ? "text-red-600 bg-red-50/20 font-bold" : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            Commercial Pest Control
          </a>

          <a
            href="/pests"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors ${
              isActive("pests") ? "bg-red-50 text-red-600" : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            Pests Database
          </a>

          <a
            href="/areas"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors ${
              isActive("areas") ? "bg-red-50 text-red-600" : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            London Areas covered
          </a>

          <a
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors ${
              isActive("contact") ? "bg-red-50 text-red-600" : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            Contact Us
          </a>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="tel:02088198933"
              className="flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-xl font-bold font-mono text-sm"
            >
              <Phone className="w-4 h-4 text-red-400" />
              020 8819 8933
            </a>
            <a
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl text-center text-xs uppercase tracking-wider font-bold shadow-md shadow-red-600/10"
            >
              Request Rapid Treatment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
