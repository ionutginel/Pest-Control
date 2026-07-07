import React from "react";
import { boroughsData } from "../data/boroughs";
import BookingForm from "../components/BookingForm";
import { ShieldCheck, ShieldAlert, MapPin, ArrowLeft, Clock, Phone, Zap, Star, CheckCircle2 } from "lucide-react";

interface PostcodeDetailPageProps {
  boroughId: string;
  postcode: string;
}

export default function PostcodeDetailPage({ boroughId, postcode }: PostcodeDetailPageProps) {
  const borough = boroughsData.find((b) => b.id === boroughId);
  const cleanPostcode = postcode.toUpperCase();

  // Validate if borough exists and contains the postcode
  const isPostcodeValid = borough?.postcodes.some((pc) => pc.toUpperCase() === cleanPostcode);

  const getPostcodeVibe = (pc: string) => {
    if (pc.startsWith("N")) return "North London residential developments, Victorian terraces, and local high streets";
    if (pc.startsWith("NW")) return "North West London suburbs, leafier family houses, and business parks";
    if (pc.startsWith("E")) return "East London trendy docklands, dense industrial nodes, and terraced houses";
    if (pc.startsWith("SE")) return "South East London riverfronts, residential clusters, and mixed spaces";
    if (pc.startsWith("SW")) return "South West London high-end townhouses, parks, and retail avenues";
    if (pc.startsWith("W")) return "West London private estates, mansions, and commercial high streets";
    if (pc.startsWith("EC") || pc.startsWith("WC")) return "Central London high-density hospitality, historical vaults, and offices";
    return "Metropolitan London urban environments and residential suburbs";
  };

  const postcodeVibe = getPostcodeVibe(cleanPostcode);
  const dispatchResponseTime = borough ? (borough.postcodes.length > 8 ? "30 - 40 Mins" : "25 - 35 Mins") : "25 - 35 Mins";

  React.useEffect(() => {
    if (!borough || !isPostcodeValid) return;
    document.title = `Emergency Pest Control in ${cleanPostcode} (${borough.name}) | 24/7 Exterminator`;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', `Professional pest control in ${cleanPostcode} (${borough.name}), London. 1-hour urgent dispatch for rats, bed bugs, and wasps. Local British certified crews.`);

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', `pest control ${cleanPostcode.toLowerCase()}, ${cleanPostcode.toLowerCase()} exterminator, rat removal ${cleanPostcode.toLowerCase()}, bed bug treatment ${borough.name.toLowerCase()}`);
  }, [borough, cleanPostcode, isPostcodeValid]);

  if (!borough || !isPostcodeValid) {
    return (
      <div className="bg-[#fcfcfd] text-slate-800 font-sans pt-40 pb-28 text-center min-h-[60vh]">
        <div className="max-w-md mx-auto px-4 space-y-6">
          <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto border border-red-200">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-slate-900">Postcode Sector Not Registered</h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            The postcode sector <strong className="text-slate-800">"{cleanPostcode}"</strong> is either invalid or outside our active dispatch boundaries. We cover all Greater London postal sectors.
          </p>
          <div className="flex justify-center gap-3">
            <a
              href="/areas"
              className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all"
            >
              Browse Covered Areas
            </a>
            {borough && (
              <a
                href={`/areas/${borough.id}`}
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all"
              >
                Go to {borough.name}
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  // List other postcodes in the same borough to encourage exploration
  const sisterPostcodes = borough.postcodes.filter((pc) => pc.toUpperCase() !== cleanPostcode);

  return (
    <div id={`postcode-detail-${cleanPostcode.toLowerCase()}`} className="bg-[#fcfcfd] text-slate-800 font-sans pt-32 pb-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 text-left">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500">
            <a href="/areas" className="hover:text-red-600 transition-colors">Covered Areas</a>
            <span>/</span>
            <a href={`/areas/${borough.id}`} className="hover:text-red-600 transition-colors">{borough.name}</a>
            <span>/</span>
            <span className="text-red-600 font-mono font-black">{cleanPostcode}</span>
          </div>
        </div>

        {/* Hero Section Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Postcode-specific Content */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 text-red-600 text-xs font-black uppercase tracking-widest bg-red-50 border border-red-100 px-3 py-1 rounded-full">
                <Zap className="w-3.5 h-3.5" /> Sector {cleanPostcode} Dispatch Active
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-none">
                Emergency Pest Control in <span className="text-red-600">{cleanPostcode}</span> ({borough.name})
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Suffering from a sudden infestation in <strong className="text-slate-900">{cleanPostcode}</strong>? Our local technical teams are stationed within the borough, equipped with specialized rodent eradication heat-systems and eco-friendly insecticide formulations. 
              </p>
            </div>

            {/* Local Dispatch Ops Photo */}
            <div className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm relative bg-slate-50">
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"
                alt={`London city skyline near postcode sector ${cleanPostcode}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white border border-slate-200/80 p-4 rounded-2xl">
                <Clock className="w-5 h-5 text-red-600 mb-2" />
                <h4 className="font-extrabold text-slate-400 text-[10px] uppercase tracking-wider font-mono">ESTIMATED RESPONSE</h4>
                <p className="text-lg font-black text-slate-950 font-mono mt-0.5">{dispatchResponseTime}</p>
              </div>

              <div className="bg-white border border-slate-200/80 p-4 rounded-2xl">
                <ShieldCheck className="w-5 h-5 text-red-600 mb-2" />
                <h4 className="font-extrabold text-slate-400 text-[10px] uppercase tracking-wider font-mono">TREATMENT WARRANTY</h4>
                <p className="text-lg font-black text-slate-950 mt-0.5">100% Guaranteed</p>
              </div>

              <div className="bg-white border border-slate-200/80 p-4 rounded-2xl">
                <MapPin className="w-5 h-5 text-red-600 mb-2" />
                <h4 className="font-extrabold text-slate-400 text-[10px] uppercase tracking-wider font-mono">REGIONAL COVERAGE</h4>
                <p className="text-lg font-black text-slate-950 mt-0.5">{borough.region} Region</p>
              </div>
            </div>

            {/* In-depth Postcode Treatment Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-black text-slate-950 uppercase tracking-tight">
                Our Postcode {cleanPostcode} Action Strategy
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                The {cleanPostcode} sector represents {postcodeVibe}. Given the structural makeup of properties in this sector, infestations are handled with specialized local strategies:
              </p>

              <div className="space-y-3">
                <div className="flex gap-3 items-start bg-white p-4 rounded-2xl border border-slate-200/80">
                  <div className="bg-red-50 text-red-600 p-2 rounded-xl text-xs font-black font-mono shrink-0">
                    01
                  </div>
                  <div>
                    <h5 className="font-extrabold text-slate-900 text-sm">Rodent Baiting & Full Gap Proofing</h5>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                      Rats and mice frequently utilize historic masonry and pipe cavities in {cleanPostcode} properties. We don't just lay traps — we permanently block access using high-durability steel mesh, expanding cement, and premium brass copper wire.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-2xl border border-slate-200/80">
                  <div className="bg-red-50 text-red-600 p-2 rounded-xl text-xs font-black font-mono shrink-0">
                    02
                  </div>
                  <div>
                    <h5 className="font-extrabold text-slate-900 text-sm">Bespoke Bed Bug & Flea Heat treatments</h5>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                      High-density accommodation in {cleanPostcode} requires rapid, non-chemical options to minimize disruption. We offer targeted insecticide sprays and eco-friendly thermal treatments to ensure 100% egg-to-adult elimination.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start bg-white p-4 rounded-2xl border border-slate-200/80">
                  <div className="bg-red-50 text-red-600 p-2 rounded-xl text-xs font-black font-mono shrink-0">
                    03
                  </div>
                  <div>
                    <h5 className="font-extrabold text-slate-900 text-sm">Cockroach & Ant Baiting Gel Protocols</h5>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                      Professional-grade high-potency fipronil and imidacloprid gels are placed in deep crevices and electrical conduits where cockroaches thrive. It provides active cascade secondary poisoning to wipe out entire nesting colonies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Local review block */}
            <div className="border-l-4 border-red-600 bg-slate-50 p-5 rounded-r-2xl space-y-2">
              <div className="flex gap-1 text-amber-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-xs text-slate-600 italic leading-relaxed">
                "Had a mouse nightmare in my flat here in {cleanPostcode}. The technician arrived within 30 minutes, wore clean shoe covers, and did a thorough walk-around. He blocked three entry points behind the washing machine and set down safe baits. Unparalleled responsiveness."
              </p>
              <span className="text-[10px] text-slate-400 font-bold block">— Resident in {cleanPostcode} ({borough.name})</span>
            </div>

            {/* Other sister postcodes navigation */}
            {sisterPostcodes.length > 0 && (
              <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 space-y-3">
                <h3 className="font-black text-slate-950 text-sm uppercase tracking-wide">
                  Other Covered Sectors in {borough.name}:
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  If you own a business or secondary property in the nearby vicinity, we offer synced multi-site emergency callbacks for these sister postcodes as well:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {sisterPostcodes.map((pc) => (
                    <a
                      key={pc}
                      href={`/areas/${borough.id}/${pc.toLowerCase()}`}
                      className="bg-white hover:bg-red-50 hover:text-red-600 hover:border-red-600 border border-slate-200 shadow-sm text-slate-900 font-extrabold font-mono text-xs px-3 py-1.5 rounded-xl transition-all"
                    >
                      {pc}
                    </a>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Sticky Booking form */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <BookingForm initialBoroughId={borough.id} initialPostcode={cleanPostcode} />

            <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 space-y-3">
              <span className="text-[10px] text-red-500 font-bold font-mono uppercase tracking-widest block">Direct Local Line</span>
              <p className="text-sm font-bold text-slate-100">Bypass the ticketing queue and dial the active {cleanPostcode} dispatcher:</p>
              <a href="tel:02088198933" className="text-xl font-black text-red-400 hover:text-red-300 transition-colors font-mono block">
                020 8819 8933
              </a>
              <p className="text-[10px] text-slate-500 leading-relaxed font-sans">
                Our main office hotline automatically triggers rapid radio-relay dispatch to the active field unit closest to {cleanPostcode}.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
