import React, { useState } from "react";
import { boroughsData } from "../data/boroughs";
import { Search, MapPin, ChevronRight, Phone, AlertCircle, Clock } from "lucide-react";

export default function AreaListPage() {
  const [searchQuery, setSearchQuery] = useState("");

  React.useEffect(() => {
    document.title = "Our Service Areas & Postcode Coverage | Rodent Exterminators";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Check rapid dispatch availability in your local London borough. Comprehensive list of covered postcodes with 1-hour emergency response.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'pest control areas, London postcode coverage, pest dispatch boroughs, Barnet pest control, emergency pest control coverage');
  }, []);

  const filteredBoroughs = boroughsData.filter((borough) => {
    const matchesName = borough.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPostcode = borough.postcodes.some((pc) =>
      pc.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return matchesName || matchesPostcode;
  });

  return (
    <div id="area-list-page" className="bg-[#fcfcfd] text-slate-800 font-sans pt-32 pb-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-3 mb-10">
          <span className="text-red-600 font-extrabold text-xs uppercase tracking-wider block">Greater London Coverage</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Our Active London Service Boroughs
          </h1>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            We operate localized rapid-response dispatch centers across every borough in Greater London. Find your local borough page to confirm postcode availability and check response times.
          </p>
        </div>

        {/* London Skyline Image Banner */}
        <div className="w-full h-48 md:h-64 rounded-3xl overflow-hidden border border-slate-200/60 shadow-sm relative bg-slate-50 mb-10">
          <img
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"
            alt="London Skyline Pest Control Service Coverage"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Search Input Bar */}
        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm mb-8 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Borough or Postcode (e.g. Barnet, IG11, N10)..."
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white text-slate-900 transition-all placeholder:text-slate-400 font-sans"
            />
          </div>
        </div>

        {/* Quick Help Box */}
        <div className="bg-red-50 border border-red-100 rounded-2xl p-4 flex gap-3 text-red-900 text-xs mb-8">
          <Clock className="w-5 h-5 text-red-600 shrink-0 mt-0.5 animate-pulse" />
          <div>
            <p className="font-extrabold uppercase">Guaranteed Under-1-Hour Emergency Response</p>
            <p className="mt-0.5 leading-relaxed text-[11px]">
              No matter where you are in London, our dispatch routers automatically locate the closest active service engineer near your postcode. Available 24 hours a day, 365 days a year.
            </p>
          </div>
        </div>

        {/* Boroughs Grid */}
        {filteredBoroughs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredBoroughs.map((borough) => (
              <a
                href={`#/areas/${borough.id}`}
                key={borough.id}
                className="bg-white border border-slate-200 hover:border-red-600/30 rounded-2xl p-4 hover:shadow-md transition-all flex flex-col justify-between group text-left"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wider font-mono">LONDON REGION</span>
                  </div>
                  
                  <h3 className="font-black text-slate-950 group-hover:text-red-600 transition-colors text-base">
                    {borough.name}
                  </h3>

                  {/* Postcodes display */}
                  <div className="flex flex-wrap gap-1">
                    {borough.postcodes.slice(0, 5).map((pc) => (
                      <span key={pc} className="bg-slate-50 border border-slate-200 text-slate-700 text-[9px] font-bold px-1.5 py-0.5 rounded font-mono">
                        {pc}
                      </span>
                    ))}
                    {borough.postcodes.length > 5 && (
                      <span className="text-slate-400 text-[9px] font-bold self-center px-1">
                        +{borough.postcodes.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-3 mt-4 flex items-center justify-between text-[11px] font-bold text-slate-500 group-hover:text-red-600 transition-colors">
                  <span>View service details</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center max-w-md mx-auto">
            <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h4 className="font-bold text-slate-900 text-base">Borough not found</h4>
            <p className="text-xs text-slate-500 mt-1 mb-6">
              No results found matching "{searchQuery}". Please check your spelling or search by a valid London postcode segment.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-all"
            >
              Reset Search
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
