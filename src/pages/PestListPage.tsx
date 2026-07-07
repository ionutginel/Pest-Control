import React, { useState } from "react";
import { pestsData, Pest } from "../data/pests";
import { Search, SlidersHorizontal, ChevronRight, AlertCircle, Phone } from "lucide-react";

export default function PestListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  React.useEffect(() => {
    document.title = "Pests Encyclopedia | Starting Prices & Eradication | London Pest Management";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Explore our comprehensive index of 27 common UK pests. Learn about risk levels, active seasons, and starting eradication prices from £95.');

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'pest encyclopedia, UK pests list, rodent prices, insect eradication cost, professional pest control London');
  }, []);

  const categories = [
    { id: "all", label: "All Pests" },
    { id: "rodents", label: "Rodents" },
    { id: "insects_crawling", label: "Crawling Insects" },
    { id: "insects_flying", label: "Flying Insects" },
    { id: "biting_stinging", label: "Biting & Stinging" },
    { id: "birds_mammals", label: "Birds & Mammals" }
  ];

  const filteredPests = pestsData.filter(pest => {
    const matchesSearch = pest.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          pest.scientificName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || pest.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div id="pest-list-page" className="bg-[#fcfcfd] text-slate-800 font-sans pt-32 pb-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-3 mb-10">
          <span className="text-red-600 font-extrabold text-xs uppercase tracking-wider block">Pests Encyclopedia</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Identify Your Pest & See Starting Prices
          </h1>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Search our comprehensive database of 27 common UK pests. Each profile contains biological profiles, risk grading, and professional treatment structures with clear starting pricing.
          </p>
        </div>

        {/* Filters and Search Bar Row */}
        <div className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between md:gap-4">
          
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search e.g. Bed Bugs, Rat, Wasp..."
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white text-slate-900 transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Category Quick Selectors */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-bold uppercase hidden lg:inline flex-shrink-0">Filter:</span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all ${
                  selectedCategory === cat.id
                    ? "bg-red-600 text-white border-red-600 shadow-sm shadow-red-600/15"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Pests Grid */}
        {filteredPests.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPests.map((pest) => (
              <div
                key={pest.id}
                className="bg-white border border-slate-200 hover:border-red-600/30 rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  
                  {/* Card top flags */}
                  <div className="flex justify-between items-start gap-2">
                    <span className="bg-slate-100 text-slate-600 text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-lg">
                      {pest.categoryLabel}
                    </span>
                    <span className={`text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-md border ${pest.threatColor}`}>
                      {pest.threatLevel} Risk
                    </span>
                  </div>

                  {/* Pest Image */}
                  <div className="w-full h-36 rounded-xl overflow-hidden border border-slate-100 relative bg-white flex items-center justify-center p-3">
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

                  {/* Pest Name */}
                  <div>
                    <h3 className="text-lg font-black text-slate-950 group-hover:text-red-600 transition-colors">
                      {pest.name}
                    </h3>
                    <p className="text-[11px] font-bold text-slate-400 italic mt-0.5 font-mono">
                      {pest.scientificName}
                    </p>
                  </div>

                  {/* Brief description */}
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                    {pest.description}
                  </p>

                  {/* Active Seasons indicator */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[10px] text-slate-400 font-bold uppercase mr-1">Active:</span>
                    {pest.activeSeasons.map((season, idx) => (
                      <span key={idx} className="bg-slate-50 border border-slate-200 text-slate-600 text-[9px] font-bold px-2 py-0.5 rounded">
                        {season}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card bottom price info & Link */}
                <div className="border-t border-slate-100 pt-4 mt-5 flex justify-between items-center">
                  <div>
                    <span className="text-[9px] text-slate-400 block font-bold uppercase">TREATMENT START PRICE</span>
                    <span className="text-sm font-black text-red-600 font-mono">From £{pest.startingPrice}</span>
                  </div>
                  <a
                    href={`/pests/${pest.id}`}
                    className="bg-slate-100 group-hover:bg-red-50 text-slate-800 group-hover:text-red-600 text-xs font-extrabold py-2 px-3.5 rounded-xl transition-all flex items-center gap-1 shrink-0"
                  >
                    View Treatments
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center max-w-md mx-auto">
            <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h4 className="font-bold text-slate-900 text-base">No pest profile matches your filter</h4>
            <p className="text-xs text-slate-500 mt-1 mb-6">
              Try modifying your search text or selecting "All Pests" to see our full 27 listed pest profiles.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Emergency help banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs text-red-500 font-extrabold uppercase tracking-widest font-mono">24/7 UK DIRECT RESPONSE HOTLINE</span>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">Need immediate emergency assistance?</h3>
            <p className="text-xs text-slate-400 max-w-xl">
              Don't wait for pests to damage your building structure or compromise safety codes. Our local dispatch teams are active near your postcode zone.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href="tel:02088198933"
              className="bg-white hover:bg-slate-50 text-slate-950 font-black text-sm py-3.5 px-6 rounded-2xl transition-all text-center flex items-center justify-center gap-1.5 font-mono"
            >
              <Phone className="w-4 h-4 text-red-600" />
              020 8819 8933
            </a>
            <a
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider py-4 px-6 rounded-2xl transition-all text-center"
            >
              Book Dispatcher Visit
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
