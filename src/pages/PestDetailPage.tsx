import React from "react";
import { pestsData } from "../data/pests";
import BookingForm from "../components/BookingForm";
import { ShieldCheck, ShieldAlert, ArrowLeft, CheckCircle2, ListRestart, HelpCircle, Phone, Sparkles } from "lucide-react";

interface PestDetailPageProps {
  pestId: string;
}

export default function PestDetailPage({ pestId }: PestDetailPageProps) {
  const pest = pestsData.find((p) => p.id === pestId);

  React.useEffect(() => {
    if (!pest) return;
    document.title = `Professional ${pest.name} Control & Eradication | Rodent Exterminators`;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', `Fast, guaranteed ${pest.name} treatment and eradication starting from £${pest.startingPrice}. COSHH-compliant solutions, BPCA certified technicians.`);

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', `${pest.name.toLowerCase()} control, get rid of ${pest.name.toLowerCase()} London, professional ${pest.name.toLowerCase()} extermination, ${pest.scientificName}`);
  }, [pest]);

  // Fallback if pest not found
  if (!pest) {
    return (
      <div className="bg-[#fcfcfd] text-slate-800 font-sans pt-40 pb-28 text-center min-h-[60vh]">
        <div className="max-w-md mx-auto px-4 space-y-6">
          <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto border border-red-200">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-slate-900">Pest Profile Not Found</h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            The requested pest record does not exist in our reference index. Please select from our database of 27 active UK pest profiles.
          </p>
          <a
            href="#/pests"
            className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all"
          >
            Browse Pests Database
          </a>
        </div>
      </div>
    );
  }

  return (
    <div id={`pest-detail-${pest.id}`} className="bg-[#fcfcfd] text-slate-800 font-sans pt-32 pb-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="mb-6 flex items-center justify-between">
          <a
            href="#/pests"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Pests Database
          </a>
          <span className="text-slate-400 text-[10px] font-bold font-mono">ID: REF-{pest.id.toUpperCase()}</span>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Biological details & Eradication Strategy */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header / Intro */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full">
                  {pest.categoryLabel}
                </span>
                <span className={`text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full border ${pest.threatColor}`}>
                  {pest.threatLevel} Threat Risk
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-none">
                {pest.name} Control
              </h1>

              <p className="text-xs sm:text-sm font-extrabold text-slate-400 italic font-mono uppercase">
                Scientific Term: {pest.scientificName}
              </p>

              {/* Price Banner */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-5 shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-red-200 uppercase block">DIRECT SERVICE PRICE</span>
                  <span className="text-2xl sm:text-3xl font-black font-mono">From £{pest.startingPrice}</span>
                </div>
                <div className="text-xs text-red-100 leading-relaxed max-w-xs sm:text-right">
                  Our transparent starting rate includes full site surveys, professional COSHH-compliant chemical solutions, and complete post-treatment reports.
                </div>
              </div>

              {/* Pest Image */}
              <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative bg-white flex items-center justify-center p-4">
                <img
                  src={pest.imageUrl}
                  alt={pest.name}
                  className={`max-w-full max-h-full ${
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

              <div className="pt-2">
                <h3 className="font-bold text-slate-950 text-sm uppercase tracking-wider mb-2">Description & Harborage Details</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                  {pest.description}
                </p>
              </div>
            </div>

            {/* Active seasons info bar */}
            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl flex items-center justify-between gap-4 text-xs font-semibold">
              <span className="text-slate-500 font-bold uppercase text-[10px]">Peak Activity Seasons:</span>
              <div className="flex gap-1.5">
                {pest.activeSeasons.map((season, idx) => (
                  <span key={idx} className="bg-white border border-slate-200 text-slate-800 text-[10px] px-2.5 py-1 rounded-md font-bold">
                    {season}
                  </span>
                ))}
              </div>
            </div>

            {/* Treatment protocol list */}
            <div className="space-y-4">
              <h3 className="text-lg font-black text-slate-950 uppercase tracking-tight border-b border-slate-200 pb-2">
                Professional Eradication Protocols
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Standard consumer poisons and home remedies rarely eradicate a colony completely, often leading to rebound infestations. We apply auditable multi-layered chemical and exclusion procedures:
              </p>
              
              <div className="space-y-3">
                {pest.treatment.map((step, idx) => (
                  <div key={idx} className="bg-white border border-slate-200/60 p-4 rounded-xl flex items-start gap-3">
                    <div className="bg-red-50 text-red-600 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                      {idx + 1}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preventative Tips list */}
            <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-2xl space-y-4">
              <h3 className="text-base font-black text-slate-950 flex items-center gap-1.5">
                <Sparkles className="w-5 h-5 text-red-600" /> Professional Preventative Tips
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Follow these preventative techniques recommended by our senior technicians to prevent recurrence after treatment:
              </p>
              <ul className="space-y-3 text-xs font-semibold text-slate-700">
                {pest.preventativeTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Sticky form prefilled with this pest */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <BookingForm initialPestId={pest.id} />

            <div className="bg-white border border-slate-200/80 p-6 rounded-3xl space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-950">Guaranteed Treatment Safeguards</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Our treatments are backed by our signature <strong>Rodent Exterminators Guarantee</strong>. If pests persist within the contract window, we re-visit your premises and re-treat completely free of charge.
              </p>
              <div className="border-t border-slate-100 pt-3 text-[10px] text-slate-400 font-mono">
                Assurance protocols backed by BPCA/NPTA industry certifications.
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
