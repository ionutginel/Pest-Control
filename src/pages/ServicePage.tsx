import React from "react";
import BookingForm from "../components/BookingForm";
import { ShieldCheck, ShieldAlert, BadgeCheck, CheckCircle, HelpCircle, Phone, ArrowLeft, Zap, ShieldAlert as AlertTriangle } from "lucide-react";
// @ts-ignore
import domesticImg from "../assets/images/domestic_pest_control_1783426485612.jpg";
// @ts-ignore
import commercialImg from "../assets/images/commercial_pest_control_1783426506350.jpg";

interface ServicePageProps {
  serviceId: "domestic" | "commercial";
}

export default function ServicePage({ serviceId }: ServicePageProps) {
  const isDomestic = serviceId === "domestic";

  React.useEffect(() => {
    const serviceName = isDomestic ? "Domestic & Residential" : "Commercial & Business";
    document.title = `${serviceName} Pest Control Services | Rodent Exterminators`;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    const descContent = isDomestic
      ? "Professional child-safe and pet-safe residential pest control services for home owners, landlords, and tenants. Guaranteed rodent and insect extermination."
      : "Complete commercial pest control contracts and regulatory audit compliance for London offices, restaurants, warehouses, and shops. 24/7 priority emergency cover.";
    metaDescription.setAttribute('content', descContent);

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    const keywordsContent = isDomestic
      ? "residential pest control, landlord pest services, home fumigation, get rid of mice house, safe pest baiting"
      : "commercial pest management, restaurant pest control, compliance logbook audits, industrial exterminator, office pest control contract";
    metaKeywords.setAttribute('content', keywordsContent);
  }, [isDomestic]);

  return (
    <div id="service-page" className="bg-[#fcfcfd] text-slate-800 font-sans pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back button */}
        <div className="mb-6 text-left">
          <a href="#/" className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-red-600 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Main Service Content */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <span className="text-red-600 font-extrabold text-xs uppercase tracking-wider block">
                {isDomestic ? "Residential Protection" : "Commercial Regulatory Compliance"}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
                {isDomestic 
                  ? "Domestic & Residential Pest Control" 
                  : "Commercial & Business Pest Control Solutions"}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {isDomestic
                  ? "We provide quick, safe, and highly effective pest control services for homeowners, landlords, and residential tenants. Protect your family, pets, and structural assets with certified care."
                  : "Highly auditable, compliant pest management plans for food manufacturing, restaurants, retail, warehouses, and offices. Helping London businesses remain fully compliant with Environmental Health Officers (EHO)."}
              </p>
            </div>

            {/* Service Banner Image */}
            <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm relative bg-slate-50">
              <img
                src={isDomestic ? domesticImg : commercialImg}
                alt={isDomestic ? "Residential & Domestic Environment" : "Commercial Business Environment"}
                className={`w-full h-full object-cover ${isDomestic ? 'object-top' : ''}`}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Core Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200/80 p-5 rounded-2xl space-y-2">
                <div className="w-8 h-8 bg-red-50 text-red-600 rounded-lg flex items-center justify-center font-bold text-xs">01</div>
                <h4 className="font-bold text-slate-900 text-sm">Emergency Diagnostics</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {isDomestic 
                    ? "Under-1-hour dispatch callback to inspect your property and identify target entry gaps." 
                    : "Complete visual audit, pest indexing, and risk grading to safeguard commercial zones."}
                </p>
              </div>

              <div className="bg-white border border-slate-200/80 p-5 rounded-2xl space-y-2">
                <div className="w-8 h-8 bg-red-50 text-red-600 rounded-lg flex items-center justify-center font-bold text-xs">02</div>
                <h4 className="font-bold text-slate-900 text-sm">COSHH Safe Products</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {isDomestic 
                    ? "Chemical and organic solutions carefully placed away from children and beloved household pets." 
                    : "Fully labeled, sealed tamper-resistant monitoring bait stations with site layout records."}
                </p>
              </div>

              <div className="bg-white border border-slate-200/80 p-5 rounded-2xl space-y-2">
                <div className="w-8 h-8 bg-red-50 text-red-600 rounded-lg flex items-center justify-center font-bold text-xs">03</div>
                <h4 className="font-bold text-slate-900 text-sm">Permanent Structural Proofing</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {isDomestic 
                    ? "We seal mice holes, install bird netting/spikes, and block insect transit cavities." 
                    : "In-depth building envelope inspections to establish robust exclusion vectors for rodents."}
                </p>
              </div>

              <div className="bg-white border border-slate-200/80 p-5 rounded-2xl space-y-2">
                <div className="w-8 h-8 bg-red-50 text-red-600 rounded-lg flex items-center justify-center font-bold text-xs">04</div>
                <h4 className="font-bold text-slate-900 text-sm">Eradication Guarantees</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {isDomestic 
                    ? "If pests return within the contract period, our technicians re-visit and re-treat free of charge." 
                    : "Annual multi-visit compliance contracts with round-the-clock emergency callbacks."}
                </p>
              </div>
            </div>

            {/* In-depth Service Steps */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-950">Our Step-by-Step Eradication Protocol</h3>
              <div className="space-y-4 relative before:absolute before:left-3.5 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200">
                
                <div className="flex gap-4 relative">
                  <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0 z-10 font-mono">1</div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">Thorough Site Survey</h5>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Our certified specialist examines target spaces, cavity conduits, and checks for droppings, grease marks, or nesting materials to locate harborages.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 relative">
                  <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0 z-10 font-mono">2</div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">Custom Treatment Plan</h5>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      We select appropriate target chemical solutions, gel baits, tracking powders, or traps. All products comply with BPCA codes and European regulations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 relative">
                  <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0 z-10 font-mono">3</div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">Professional Proofing & Blockades</h5>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      We execute secondary proofing: filling wall gaps with wire mesh, sealing pipe entry holes, and installing brush strips on exterior door bottoms.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 relative">
                  <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0 z-10 font-mono">4</div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">Audited Certification Report</h5>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      We supply a full written report outlining the target pest, chemicals applied, proofing actions, and follow-up sanitation tips for your insurance or EHO.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Price Alert */}
            <div className="bg-red-50 border border-red-100 rounded-2xl p-4 flex gap-3 text-red-900 text-xs">
              <Zap className="w-5 h-5 text-red-600 shrink-0 mt-0.5 animate-pulse" />
              <div>
                <p className="font-extrabold uppercase">Clear, Unambiguous Pricing Structure</p>
                <p className="mt-0.5 leading-relaxed">
                  No hidden fees or custom surcharges. Our domestic and commercial treatments start from a transparent flat rate of <strong className="font-black">£95</strong> for initial inspections and single-room treatments.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column (Sticky Form & Quick Info) */}
          <div className="lg:col-span-5 space-y-6">
            <BookingForm initialPestId="" />

            <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-red-500">Industry Standards & Audits</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our technicians are continuously trained via the British Pest Control Association (BPCA) and hold CEPA standardizations. We stand by our safe practices.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <BadgeCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full Risk Assessments & COSHH Sheets supplied</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <BadgeCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Public Liability Insurance: £10,000,000</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <BadgeCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Auditable digital logs for businesses</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-[10px] text-slate-500 font-mono">
                Operating strictly to BS EN 16636 European standards.
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
