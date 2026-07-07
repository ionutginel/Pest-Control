import React, { useState } from "react";
import { pestsData } from "../data/pests";
import { boroughsData } from "../data/boroughs";
import { ShieldCheck, Phone, Check, Clock, ShieldAlert, ArrowRight } from "lucide-react";

interface BookingFormProps {
  initialPestId?: string;
  initialBoroughId?: string;
  initialPostcode?: string;
}

export default function BookingForm({ initialPestId = "", initialBoroughId = "", initialPostcode = "" }: BookingFormProps) {
  const [pestId, setPestId] = useState(initialPestId);
  const [boroughId, setBoroughId] = useState(initialBoroughId);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState(initialPostcode ? `Emergency request for postcode sector: ${initialPostcode}. ` : "");
  const [serviceType, setServiceType] = useState<"domestic" | "commercial">("domestic");
  const [submitted, setSubmitted] = useState(false);

  // Auto pre-fill if props change
  React.useEffect(() => {
    if (initialPestId) setPestId(initialPestId);
  }, [initialPestId]);

  React.useEffect(() => {
    if (initialBoroughId) setBoroughId(initialBoroughId);
  }, [initialBoroughId]);

  React.useEffect(() => {
    if (initialPostcode) {
      setNotes((prev) => prev ? prev : `Emergency request for postcode sector: ${initialPostcode}. `);
    }
  }, [initialPostcode]);

  const selectedPest = pestsData.find((p) => p.id === pestId);
  const selectedBorough = boroughsData.find((b) => b.id === boroughId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden text-left">
      <div className="absolute top-0 left-0 w-2 h-full bg-red-600" />

      {submitted ? (
        <div className="py-12 px-4 text-center">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-200">
            <Check className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Emergency Request Received</h3>
          <p className="text-sm text-slate-500 mb-6 max-w-sm mx-auto leading-relaxed">
            Our local dispatcher has allocated your case. A certified technician will call you back on <strong className="text-slate-800">{phone}</strong> within 15 minutes.
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6 text-xs text-slate-600 space-y-1 inline-block text-left">
            <p>• <strong>Property Type:</strong> {serviceType === "domestic" ? "Domestic (Residential)" : "Commercial Business"}</p>
            {selectedPest && <p>• <strong>Target Pest:</strong> {selectedPest.name} (From £{selectedPest.startingPrice})</p>}
            {selectedBorough && <p>• <strong>Service Region:</strong> {selectedBorough.name} ({selectedBorough.postcodes.join(", ")})</p>}
          </div>
          <button
            onClick={() => {
              setSubmitted(false);
              setName("");
              setPhone("");
              setEmail("");
              setNotes("");
            }}
            className="text-red-600 hover:text-red-700 font-bold text-sm underline cursor-pointer"
          >
            Submit another emergency request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div className="border-b border-slate-100 pb-2">
            <div className="flex items-center gap-1.5 text-red-600 text-[11px] uppercase tracking-wider font-extrabold mb-0.5">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse inline-block" />
              Direct Emergency Booking desk
            </div>
            <h3 className="text-base font-black text-slate-900">Get a Free Instant Callback</h3>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Fill details for under-1-hour service. Or call: <a href="tel:01604930045" className="text-red-600 font-bold hover:underline font-mono">01604 930 045</a>
            </p>
          </div>

          {/* Row 1: Service Type & Email Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] font-extrabold text-slate-700 block uppercase tracking-wider">Property Type</label>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() => setServiceType("domestic")}
                  className={`py-1.5 px-2 text-[11px] font-extrabold rounded-lg border transition-all text-center uppercase tracking-wide ${
                    serviceType === "domestic"
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  Domestic
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType("commercial")}
                  className={`py-1.5 px-2 text-[11px] font-extrabold rounded-lg border transition-all text-center uppercase tracking-wide ${
                    serviceType === "commercial"
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  Commercial
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-extrabold text-slate-700 block uppercase tracking-wider">Email Address (Optional)</label>
              <input
                type="email"
                placeholder="e.g. john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-red-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Row 2: Full Name & Contact Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] font-extrabold text-slate-700 block uppercase tracking-wider">Your Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                required
                placeholder="e.g. John Miller"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-red-500 focus:bg-white transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-extrabold text-slate-700 block uppercase tracking-wider">Mobile / Phone <span className="text-red-500">*</span></label>
              <input
                type="tel"
                required
                placeholder="e.g. 07700 900077"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-red-500 focus:bg-white transition-all font-mono"
              />
            </div>
          </div>

          {/* Row 3: Pest Selector & Borough Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] font-extrabold text-slate-700 block uppercase tracking-wider">Pest Type (If Known)</label>
              <select
                value={pestId}
                onChange={(e) => setPestId(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-slate-950 focus:outline-none focus:ring-1 focus:ring-red-500 focus:bg-white transition-all"
              >
                <option value="">Select Target Pest</option>
                {pestsData.map((pest) => (
                  <option key={pest.id} value={pest.id}>
                    {pest.name} (£{pest.startingPrice}+)
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-extrabold text-slate-700 block uppercase tracking-wider">London Borough</label>
              <select
                value={boroughId}
                onChange={(e) => setBoroughId(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-slate-950 focus:outline-none focus:ring-1 focus:ring-red-500 focus:bg-white transition-all"
              >
                <option value="">Select Your Area</option>
                {boroughsData.map((borough) => (
                  <option key={borough.id} value={borough.id}>
                    {borough.name} ({borough.postcodes.slice(0, 2).join(", ")})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Extra Notes */}
          <div className="space-y-1">
            <label className="text-[11px] font-extrabold text-slate-700 block uppercase tracking-wider">Tell us about the issue</label>
            <textarea
              rows={1}
              placeholder="e.g. Scratching sounds at night, finding droppings..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-red-500 focus:bg-white transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-lg transition-all shadow-md shadow-red-600/20 flex items-center justify-center gap-1.5 group cursor-pointer"
          >
            Request Call back in 15 mins <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <div className="flex items-center gap-2 justify-center text-[10px] text-slate-400 font-medium">
            <Clock className="w-3.5 h-3.5 text-emerald-500" /> Available 24 Hours, 7 Days a Week
          </div>
        </form>
      )}
    </div>
  );
}
