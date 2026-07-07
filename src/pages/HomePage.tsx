import React, { useState } from "react";
import { pestsData } from "../data/pests";
import { boroughsData } from "../data/boroughs";
import BookingForm from "../components/BookingForm";
import { ShieldCheck, Flame, Zap, Clock, Users, Shield, ArrowRight, CheckCircle2, ChevronRight, Search, Phone, ShieldAlert, Star, Quote } from "lucide-react";
// @ts-ignore
import domesticImg from "../assets/images/domestic_pest_control_1783426485612.jpg";
// @ts-ignore
import commercialImg from "../assets/images/commercial_pest_control_1783426506350.jpg";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [postcodeQuery, setPostcodeQuery] = useState("");
  const [boroughMatch, setBoroughMatch] = useState<any>(null);

  React.useEffect(() => {
    document.title = "London Pest Management | 24/7 Emergency Pest & Rodent Control";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Professional 24-hour pest and rodent control services across Greater London. Fast, BPCA-certified technicians with unmarked vehicles on request.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'pest control London, emergency rodent control, 24/7 bed bug removal, commercial pest compliance, London Pest Management');
  }, []);

  // Featured 6 pests for landing highlight
  const featuredPests = pestsData.filter(p => 
    ["common-rat", "house-mice", "bed-bugs", "german-cockroaches", "french-wasps", "pigeons"].includes(p.id)
  );

  const handlePostcodeSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postcodeQuery) return;
    const cleanQuery = postcodeQuery.trim().toUpperCase();
    
    let matchedPostcode = "";
    const found = boroughsData.find(b => {
      const pc = b.postcodes.find(p => cleanQuery.includes(p) || p.includes(cleanQuery));
      if (pc) {
        matchedPostcode = pc;
        return true;
      }
      return false;
    });
    
    if (found) {
      setBoroughMatch({ ...found, matchedPostcode });
    } else {
      setBoroughMatch("not_found");
    }
  };

  return (
    <div id="home-page" className="bg-[#fcfcfd] text-slate-800 font-sans">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-slate-100 via-slate-50 to-white overflow-hidden border-b border-slate-200/60">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-ping" />
                <span className="text-xs font-black tracking-wider text-red-600 uppercase">Emergency Callout: Under 1 Hour</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.1]">
                Professional <span className="text-red-600">Pest & Rodent</span> Eradication.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Fast, reliable pest control services operating 24 hours a day. Highly certified BPCA, NPTA, and CEPA engineers providing safe residential and business treatments.
              </p>

              {/* Trust badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white border border-slate-200/80 p-3 rounded-2xl flex items-center gap-2">
                  <div className="bg-red-50 text-red-600 p-1.5 rounded-lg font-black text-xs">BPCA</div>
                  <span className="text-[11px] font-bold text-slate-700">British Assoc.</span>
                </div>
                <div className="bg-white border border-slate-200/80 p-3 rounded-2xl flex items-center gap-2">
                  <div className="bg-red-50 text-red-600 p-1.5 rounded-lg font-black text-xs">CEPA</div>
                  <span className="text-[11px] font-bold text-slate-700">EU Certified</span>
                </div>
                <div className="bg-white border border-slate-200/80 p-3 rounded-2xl flex items-center gap-2">
                  <div className="bg-red-50 text-red-600 p-1.5 rounded-lg font-black text-xs">COSHH</div>
                  <span className="text-[11px] font-bold text-slate-700">Safe Products</span>
                </div>
                <div className="bg-white border border-slate-200/80 p-3 rounded-2xl flex items-center gap-2">
                  <div className="bg-red-50 text-red-600 p-1.5 rounded-lg font-black text-xs">NPTA</div>
                  <span className="text-[11px] font-bold text-slate-700">National Trust</span>
                </div>
              </div>

              {/* Instant benefits bullet points */}
              <div className="space-y-3 pt-3 text-sm">
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Fixed, transparent prices starting from <strong className="text-red-600">£95</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Guaranteed treatments with 100% eradication or free re-treatment</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Discreet service - unmarked dispatch response vehicles on request</span>
                </div>
              </div>

              {/* Call-to-action bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href="tel:02088198933"
                  className="bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-sm py-4 px-6 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 font-mono"
                >
                  <Phone className="w-4 h-4 text-red-500" />
                  020 8819 8933
                </a>
                <a
                  href="/contact"
                  className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm py-4 px-6 rounded-2xl transition-all shadow-md shadow-red-600/10 text-center flex items-center justify-center gap-1.5"
                >
                  Book Instant Visit <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Booking Column */}
            <div className="lg:col-span-5">
              <BookingForm />
            </div>

          </div>
        </div>
      </section>

      {/* CORE SERVICES SECTOR CHANNELS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-red-600 font-extrabold text-xs uppercase tracking-wider block">Service Channels</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">Our Professional Pest Control Solutions</h2>
            <p className="text-slate-500 text-sm">
              We understand that domestic homes and commercial facilities require distinct, tailored treatments. Select a channel below to learn about our bespoke programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Domestic */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:border-red-600/30 hover:shadow-xl transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-200/60 bg-slate-100">
                  <img
                    src={domesticImg}
                    alt="Residential & Domestic Pest Control Spraying Treatment"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-3 py-1 bg-red-100 text-red-600 rounded-full font-extrabold text-[10px] uppercase tracking-wider border border-red-200 w-fit inline-flex items-center justify-center">
                  DOMESTIC
                </div>
                <h3 className="text-2xl font-black text-slate-950 group-hover:text-red-600 transition-colors">Residential & Domestic Services</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Protect your home and family. We diagnose and treat mice, rats, bed bugs, ants, moths, wasps and bird nesting issues safely. Using family-safe products compliant with COSHH.
                </p>
                <ul className="space-y-2 pt-2 text-xs font-semibold text-slate-700">
                  <li className="flex items-center gap-2">✓ Same-day emergency service</li>
                  <li className="flex items-center gap-2">✓ Full structural proofing of entry points</li>
                  <li className="flex items-center gap-2">✓ Pet-safe and children-safe targeted baits</li>
                  <li className="flex items-center gap-2">✓ Treatment start price from £95</li>
                </ul>
              </div>
              <div className="pt-8">
                <a
                  href="/services/domestic"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-red-600 group-hover:translate-x-1.5 transition-transform"
                >
                  View domestic treatments <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Commercial */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:border-slate-900/30 hover:shadow-xl transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-200/60 bg-slate-100">
                  <img
                    src={commercialImg}
                    alt="Commercial & Business Pest Control Inspection & Proofing"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-3 py-1 bg-slate-900 text-white rounded-full font-extrabold text-[10px] uppercase tracking-wider border border-slate-850 w-fit inline-flex items-center justify-center">
                  COMMERCIAL
                </div>
                <h3 className="text-2xl font-black text-slate-950 group-hover:text-red-600 transition-colors">Commercial & Contract Services</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Protect your reputation and stay compliant with European standards. Standardized logbook audit folders, preventative monitoring stations, and emergency responses for restaurants, retail, warehouses, and offices.
                </p>
                <ul className="space-y-2 pt-2 text-xs font-semibold text-slate-700">
                  <li className="flex items-center gap-2">✓ Full auditable COSHH and risk reports</li>
                  <li className="flex items-center gap-2">✓ Annual multi-visit protection contracts</li>
                  <li className="flex items-center gap-2">✓ Multi-site corporate dispatch discounts</li>
                  <li className="flex items-center gap-2">✓ Environmental health officer compliance</li>
                </ul>
              </div>
              <div className="pt-8">
                <a
                  href="/services/commercial"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-900 group-hover:translate-x-1.5 transition-transform"
                >
                  View commercial contracts <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* POSTCODE / SERVICE AREA INTERACTIVE CHECKER */}
      <section className="py-16 bg-slate-100 border-t border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-1 text-xs font-black text-red-600 uppercase tracking-widest bg-white border border-slate-200 px-3 py-1 rounded-full">
            <Zap className="w-3.5 h-3.5" /> Fast Area Dispatch Finder
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Do we cover your London postcode?</h3>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            We provide comprehensive coverage with localized rapid-response technicians in all 32 London Boroughs. Enter your postal zone to confirm coverage instantly.
          </p>

          <form onSubmit={handlePostcodeSearch} className="max-w-md mx-auto flex items-stretch gap-2">
            <input
              type="text"
              required
              value={postcodeQuery}
              onChange={(e) => setPostcodeQuery(e.target.value)}
              placeholder="e.g. N1, IG11, SE1, CR0, HA9"
              className="w-full text-xs font-mono bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-900"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-5 rounded-xl transition-all shrink-0 flex items-center gap-1 cursor-pointer"
            >
              Verify <Search className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Search feedback messages */}
          {boroughMatch && boroughMatch !== "not_found" && (
            <div className="bg-white border border-emerald-200 text-emerald-800 text-xs rounded-2xl p-4 max-w-md mx-auto text-left flex items-start gap-3 animate-fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">✓ Area Fully Covered - Under 1hr Dispatch Available!</p>
                <p className="text-emerald-600 mt-0.5">
                  Our closest local dispatch node is active in <strong>{boroughMatch.name}</strong>.
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  {boroughMatch.matchedPostcode && (
                    <a
                      href={`/areas/${boroughMatch.id}/${boroughMatch.matchedPostcode.toLowerCase()}`}
                      className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-[11px] font-extrabold uppercase tracking-wider py-2 px-3.5 rounded-lg w-fit transition-all shadow-sm"
                    >
                      Go to local {boroughMatch.matchedPostcode} page
                    </a>
                  )}
                  <a href={`/areas/${boroughMatch.id}`} className="text-slate-600 font-bold hover:text-red-600 transition-colors underline block text-[11px]">
                    Browse all {boroughMatch.name} postcodes
                  </a>
                </div>
              </div>
            </div>
          )}

          {boroughMatch === "not_found" && (
            <div className="bg-white border border-red-100 text-red-800 text-xs rounded-2xl p-4 max-w-md mx-auto text-left flex items-start gap-3 animate-fade-in">
              <ShieldAlert className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Postcode Not Explicitly Listed</p>
                <p className="text-red-600 mt-0.5">
                  However, we cover all 32 boroughs of Greater London! Call our dispatch line to confirm immediate assistance.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FEATURED PESTS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div className="text-left space-y-2">
              <span className="text-red-600 font-extrabold text-xs uppercase tracking-wider block">Common Infestations</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">Pests database & Starting Prices</h2>
              <p className="text-slate-500 text-xs">Explore common pests, understand threat profiles, and check direct treatment pricing starting from £95.</p>
            </div>
            <a
              href="/pests"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/80 font-bold text-xs py-3 px-5 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              Browse all 27 pests <ArrowRight className="w-4 h-4 text-red-600" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {featuredPests.map((pest) => (
              <div
                key={pest.id}
                className="bg-slate-50 border border-slate-200/80 hover:border-red-600/30 rounded-2xl p-5 hover:shadow-lg transition-all flex flex-col justify-between group animate-fade-in"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-2">
                    <span className="bg-slate-200 text-slate-700 text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full">
                      {pest.categoryLabel}
                    </span>
                    <span className="text-xs font-bold text-slate-500 italic">
                      {pest.scientificName}
                    </span>
                  </div>

                  {/* Pest Image Container */}
                  <div className="w-full h-40 rounded-xl overflow-hidden border border-slate-200/60 relative bg-white flex items-center justify-center p-3">
                    <img
                      src={pest.imageUrl}
                      alt={pest.name}
                      className={`max-w-full max-h-full transition-all duration-300 ${
                        pest.id === 'carpet-beetle' 
                          ? 'object-contain object-bottom scale-[2.8] origin-bottom' 
                          : pest.id === 'larder-beetle'
                          ? 'object-contain mix-blend-multiply contrast-[1.05] brightness-[1.02] scale-[0.45]'
                          : pest.id === 'biscuit-beetles'
                          ? 'object-contain scale-[0.38]'
                          : pest.id === 'garden-ant'
                          ? 'object-contain mix-blend-multiply contrast-[1.05] brightness-[1.02] scale-[0.4]'
                          : pest.id === 'mealworm-beetle'
                          ? 'object-contain scale-[0.5]'
                          : pest.id === 'oriental-cockroaches'
                          ? 'object-contain mix-blend-multiply contrast-[1.05] brightness-[1.02] scale-[0.5]'
                          : pest.id === 'pharaohs-ants'
                          ? 'object-contain mix-blend-multiply contrast-[1.05] brightness-[1.02] scale-[0.45]'
                          : pest.id === 'starlings-and-wasps'
                          ? 'object-contain scale-[0.6]'
                          : 'object-contain'
                      }`}
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-slate-950 group-hover:text-red-600 transition-colors">
                      {pest.name}
                    </h3>

                    <p className="text-slate-500 text-xs line-clamp-2 mt-1 mb-2 leading-relaxed">
                      {pest.description}
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-200/60 pt-4 mt-4 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-bold uppercase">STARTING FROM</span>
                    <span className="text-base font-black text-red-600 font-mono">From £{pest.startingPrice}</span>
                  </div>
                  <a
                    href={`/pests/${pest.id}`}
                    className="text-xs font-extrabold text-slate-900 group-hover:text-red-600 transition-all flex items-center gap-1"
                  >
                    Details <ChevronRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US STATS */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden text-left">
        <div className="absolute inset-0 bg-red-600/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-red-500 font-extrabold text-xs uppercase tracking-wider block">Unrivalled Safety & Care</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">Why London Pest Management is London's Best Choice</h2>
              <p className="text-slate-400 text-xs leading-relaxed">
                Pest management is more than applying chemicals; it is about absolute eradication, safety, and long-term security. Our BPCA member credentials mean you receive certified and audited specialists.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="flex gap-3">
                  <div className="bg-red-600/10 border border-red-500/20 text-red-500 p-2 rounded-xl shrink-0 h-10 w-10 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-200">24/7 Availability</h4>
                    <p className="text-slate-400 text-xs mt-0.5">Emergency dispatch nodes active 24/7, even on bank holidays.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-red-600/10 border border-red-500/20 text-red-500 p-2 rounded-xl shrink-0 h-10 w-10 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-200">100% Guaranteed</h4>
                    <p className="text-slate-400 text-xs mt-0.5">Free follow-up re-treatment if pests persist post-protocol.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-red-600/10 border border-red-500/20 text-red-500 p-2 rounded-xl shrink-0 h-10 w-10 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-200">Expert Technicians</h4>
                    <p className="text-slate-400 text-xs mt-0.5">BPCA Certified, CEPA Standardized and fully insured.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-red-600/10 border border-red-500/20 text-red-500 p-2 rounded-xl shrink-0 h-10 w-10 flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-200">Absolute Discretion</h4>
                    <p className="text-slate-400 text-xs mt-0.5">Unmarked response vehicles on demand to protect your business.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-8 sm:p-10 rounded-3xl flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] text-red-500 font-bold uppercase font-mono">Emergency Hotline Desk</span>
                <p className="text-xl font-bold text-slate-100">Speak to an active British Pest Control Association expert right now</p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  We don't route you to automated robots. Speak directly to a certified pest control engineer who can answer questions, give safety advice, and instantly book an active response node in your London postcode.
                </p>
              </div>

              <div className="pt-8 border-t border-slate-800/80 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-slate-500 block font-bold">24HR TELEPHONE RESPONSE</span>
                  <a href="tel:02088198933" className="text-2xl font-black text-red-500 hover:text-red-400 font-mono">
                    020 8819 8933
                  </a>
                </div>
                <a
                  href="/contact"
                  className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-2xl transition-all shadow-md shadow-red-600/10 text-center"
                >
                  Request Dispatch callback
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200/80 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-red-600 font-extrabold text-xs uppercase tracking-wider block">Real Customer Feedback</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
              Trusted by Homeowners & Businesses Across London
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Read how our fast response times, expert BPCA-certified technicians, and comprehensive guarantee have resolved pest emergencies for clients across the capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Jenkins",
                role: "Residential Client",
                location: "Kensington, London",
                rating: 5,
                date: "12 days ago",
                comment: "Discovered a mouse problem in our kitchen late on a Sunday. London Pest Management had an engineer at our house within 2 hours. Extremely professional, clean, and we've had no issues since. Highly recommend their 24hr service!",
                initials: "SJ"
              },
              {
                name: "Marcus Vance",
                role: "Director, Soho Restaurant Group",
                location: "Soho, Central London",
                rating: 5,
                date: "1 month ago",
                comment: "We use them for our restaurant pest compliance across three Central London locations. Their technicians are incredibly thorough, provide detailed BPCA documentation, and always operate in unmarked vehicles for discreet servicing.",
                initials: "MV"
              },
              {
                name: "David Croft",
                role: "Residential Client",
                location: "Croydon, South London",
                rating: 5,
                date: "3 weeks ago",
                comment: "Excellent service from start to finish. They handled a severe wasp nest under our roof eaves safely and quickly. The price was exactly as quoted, with no hidden fees. Excellent peace of mind!",
                initials: "DC"
              }
            ].map((testimonial, i) => (
              <div 
                key={i} 
                className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm flex flex-col justify-between relative hover:shadow-md transition-shadow text-left"
              >
                <div className="absolute top-8 right-8 text-slate-100">
                  <Quote className="w-12 h-12 stroke-[4]" />
                </div>
                
                <div className="space-y-4 relative z-10">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-500 stroke-amber-500" />
                    ))}
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                    "{testimonial.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 border border-red-100 flex items-center justify-center font-bold text-red-600 text-sm shrink-0">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-950">
                      {testimonial.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {testimonial.role} • <span className="text-slate-400">{testimonial.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trustpilot-style summary banner */}
          <div className="mt-16 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="flex gap-1 bg-red-600/10 border border-red-500/20 px-3 py-1.5 rounded-xl">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-red-500 stroke-red-500" />
                ))}
              </div>
              <div>
                <p className="font-bold text-sm text-slate-100">Rated 4.9/5 stars across Greater London</p>
                <p className="text-xs text-slate-400">Based on over 1,200 residential and commercial pest control interventions</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden md:block">
                <p className="text-xs text-slate-400 font-mono">POSTCODE RESPONSE</p>
                <p className="font-bold text-sm text-slate-100">Average ETA: 90 Minutes</p>
              </div>
              <a 
                href="/contact" 
                className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md shadow-red-600/10 text-center w-full sm:w-auto whitespace-nowrap"
              >
                Book An Inspection
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
