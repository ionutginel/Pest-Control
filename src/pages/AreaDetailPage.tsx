import React from "react";
import { boroughsData } from "../data/boroughs";
import BookingForm from "../components/BookingForm";
import LondonMap from "../components/LondonMap";
import { ShieldCheck, ShieldAlert, MapPin, ArrowLeft, Clock, Phone, Zap, Star } from "lucide-react";

interface AreaDetailPageProps {
  boroughId: string;
}

export default function AreaDetailPage({ boroughId }: AreaDetailPageProps) {
  const borough = boroughsData.find((b) => b.id === boroughId);

  // Derive a custom response time (usually 30-45 minutes depending on postcodes length)
  const dispatchResponseTime = borough ? (borough.postcodes.length > 8 ? "30 - 45 Minutes" : "Under 1 Hour") : "Under 1 Hour";

  React.useEffect(() => {
    if (!borough) return;
    document.title = `Pest Control in ${borough.name} | Emergency Exterminator | London Pest Management`;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', `24/7 Professional pest control and rodent eradication services across ${borough.name} with ${dispatchResponseTime} response. Book our certified engineers today.`);

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', `pest control ${borough.name.toLowerCase()}, ${borough.name.toLowerCase()} exterminator, emergency rat removal ${borough.name.toLowerCase()}, postcodes ${borough.postcodes.join(", ").toLowerCase()}`);
  }, [borough, dispatchResponseTime]);

  // Fallback if borough not found
  if (!borough) {
    return (
      <div className="bg-[#fcfcfd] text-slate-800 font-sans pt-40 pb-28 text-center min-h-[60vh]">
        <div className="max-w-md mx-auto px-4 space-y-6">
          <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto border border-red-200">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-slate-900">Borough Record Not Found</h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            The requested London Borough is not in our direct database index. We cover all 32 boroughs across Greater London.
          </p>
          <a
            href="#/areas"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all"
          >
            Browse Covered Areas
          </a>
        </div>
      </div>
    );
  }

  return (
    <div id={`area-detail-${borough.id}`} className="bg-[#fcfcfd] text-slate-800 font-sans pt-32 pb-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-6 text-left">
          <a
            href="#/areas"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Covered Areas
          </a>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Local Borough Information */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 text-red-600 text-xs font-black uppercase tracking-widest bg-red-50 border border-red-100 px-3 py-1 rounded-full">
                <MapPin className="w-3.5 h-3.5" /> Local Dispatch Node Active
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-none">
                Emergency Pest Control in <span className="text-red-600">{borough.name}</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Need certified pest control technicians in <strong>{borough.name}</strong>? We operate local dispatch nodes with fully equipped vehicles, providing same-day treatments and permanent proofing.
              </p>
            </div>

            {/* Regional Coverage Map */}
            <LondonMap activeBoroughId={borough.id} />

            {/* Local Dispatch metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200/80 p-5 rounded-2xl flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider">RESPONSE TIME</h4>
                  <p className="text-lg font-black text-slate-950 mt-1 font-mono">{dispatchResponseTime}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">Average transit time based on live GPS tracking in the borough.</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200/80 p-5 rounded-2xl flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider">TECHNICIAN CERTIFICATION</h4>
                  <p className="text-lg font-black text-slate-950 mt-1">BPCA Member</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">All staff are fully insured and registered with the NPTA & CEPA.</p>
                </div>
              </div>
            </div>

            {/* Covered postcodes section */}
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 space-y-3">
              <h3 className="font-black text-slate-950 text-sm uppercase tracking-wide">
                Borough Postcodes with Guaranteed 1hr Callback:
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                If your property or business is located within any of the following postcode sectors, you qualify for immediate priority service:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {borough.postcodes.map((pc) => (
                  <a
                    key={pc}
                    href={`#/areas/${borough.id}/${pc.toLowerCase()}`}
                    className="bg-white hover:bg-red-50 hover:text-red-600 hover:border-red-600 border border-slate-200 shadow-sm text-slate-900 font-extrabold font-mono text-xs px-3 py-1.5 rounded-xl transition-all"
                  >
                    {pc}
                  </a>
                ))}
              </div>
            </div>

            {/* Common Pests seen in this borough */}
            <div className="space-y-4">
              <h3 className="text-lg font-black text-slate-950 uppercase tracking-tight">
                Typical Infestation Profiles in {borough.name}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Our historical job data shows that {borough.name} properties frequently experience a mix of suburban and urban pests. Common cases include:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white border border-slate-200/80 p-4 rounded-xl space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">CASE RANK 01</span>
                  <h5 className="font-bold text-slate-900 text-sm">Rodents (Mice & Rats)</h5>
                  <p className="text-[11px] text-slate-500">Often nesting in crawl spaces, cellars, and cavity insulation walls.</p>
                </div>
                <div className="bg-white border border-slate-200/80 p-4 rounded-xl space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">CASE RANK 02</span>
                  <h5 className="font-bold text-slate-900 text-sm">Crawling Insects</h5>
                  <p className="text-[11px] text-slate-500">Bed bug treatments, garden ants, and cockroach baiting gels.</p>
                </div>
                <div className="bg-white border border-slate-200/80 p-4 rounded-xl space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">CASE RANK 03</span>
                  <h5 className="font-bold text-slate-900 text-sm">Nesting Birds</h5>
                  <p className="text-[11px] text-slate-500">Pigeon spikes, netting, and under-eave starling protection.</p>
                </div>
              </div>
            </div>

            {/* Review Quote Block */}
            <div className="border-l-4 border-red-600 bg-slate-50 p-5 rounded-r-2xl space-y-2">
              <div className="flex gap-1 text-amber-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-xs text-slate-600 italic leading-relaxed">
                "Had a severe rodent scratching noise issue behind our plasterboards in {borough.name}. London Pest Management sent an engineer within 40 minutes of our call. They found the entry point near the drain pipe, treated, and sealed the gaps. Spectacular service!"
              </p>
              <span className="text-[10px] text-slate-400 font-bold block">— Sarah K., Resident in {borough.name}</span>
            </div>

          </div>

          {/* Right Column: Sticky form prefilled with this borough */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <BookingForm initialBoroughId={borough.id} />

            <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 space-y-3">
              <span className="text-[10px] text-red-500 font-bold font-mono uppercase tracking-widest block">Local Helpline</span>
              <p className="text-sm font-bold text-slate-100">Bypass the online booking desk and call the borough dispatcher:</p>
              <a href="tel:02088198933" className="text-xl font-black text-red-400 hover:text-red-300 transition-colors font-mono block">
                020 8819 8933
              </a>
              <p className="text-[10px] text-slate-500 leading-relaxed font-sans">
                Our main office hotline automatically routes you to the active field engineer covering {borough.name}.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
