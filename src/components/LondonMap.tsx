import React from "react";
import { boroughsData } from "../data/boroughs";

interface LondonMapProps {
  activeBoroughId?: string;
  className?: string;
}

// Simplified geographical polygon points for the 32 boroughs of Greater London (viewBox: 0 0 700 480)
const boroughShapes: Record<string, { points: string; labelX: number; labelY: number; abbr: string }> = {
  "hillingdon": {
    points: "40,190 90,170 100,200 115,225 105,260 85,290 35,240",
    labelX: 65,
    labelY: 220,
    abbr: "Hillingdon"
  },
  "harrow": {
    points: "90,120 145,115 160,165 100,190 90,170",
    labelX: 120,
    labelY: 145,
    abbr: "Harrow"
  },
  "brent": {
    points: "160,165 210,155 220,210 170,220 160,165",
    labelX: 185,
    labelY: 185,
    abbr: "Brent"
  },
  "ealing": {
    points: "100,190 170,200 180,240 120,250 100,200",
    labelX: 140,
    labelY: 225,
    abbr: "Ealing"
  },
  "hounslow": {
    points: "120,250 180,240 190,285 155,310 115,295",
    labelX: 150,
    labelY: 275,
    abbr: "Hounslow"
  },
  "richmond-upon-thames": {
    points: "155,310 190,285 235,295 245,335 190,355",
    labelX: 195,
    labelY: 325,
    abbr: "Richmond"
  },
  "kingston-upon-thames": {
    points: "190,355 245,335 260,360 235,415 195,395",
    labelX: 225,
    labelY: 375,
    abbr: "Kingston"
  },
  "wandsworth": {
    points: "235,270 290,260 300,310 245,335 235,295",
    labelX: 265,
    labelY: 295,
    abbr: "Wandsworth"
  },
  "merton": {
    points: "260,360 315,345 325,385 270,400",
    labelX: 290,
    labelY: 370,
    abbr: "Merton"
  },
  "sutton": {
    points: "270,400 325,385 340,435 285,450",
    labelX: 305,
    labelY: 420,
    abbr: "Sutton"
  },
  "croydon": {
    points: "325,345 395,340 405,420 370,470 340,435",
    labelX: 365,
    labelY: 400,
    abbr: "Croydon"
  },
  "lambeth": {
    points: "290,260 325,260 335,340 315,345 290,320",
    labelX: 310,
    labelY: 295,
    abbr: "Lambeth"
  },
  "southwark": {
    points: "325,260 370,255 380,335 325,345 335,340",
    labelX: 350,
    labelY: 295,
    abbr: "Southwark"
  },
  "lewisham": {
    points: "370,255 415,260 435,330 395,340 380,335",
    labelX: 400,
    labelY: 295,
    abbr: "Lewisham"
  },
  "bromley": {
    points: "395,340 435,330 505,340 530,400 485,475 405,420",
    labelX: 460,
    labelY: 400,
    abbr: "Bromley"
  },
  "greenwich": {
    points: "415,260 485,250 500,300 435,330",
    labelX: 450,
    labelY: 285,
    abbr: "Greenwich"
  },
  "bexley": {
    points: "485,250 580,240 590,310 500,300",
    labelX: 535,
    labelY: 275,
    abbr: "Bexley"
  },
  "barnet": {
    points: "210,80 280,85 290,155 225,165 210,80",
    labelX: 250,
    labelY: 120,
    abbr: "Barnet"
  },
  "enfield": {
    points: "280,85 355,75 365,145 290,155",
    labelX: 320,
    labelY: 110,
    abbr: "Enfield"
  },
  "haringey": {
    points: "290,155 355,150 355,185 290,190",
    labelX: 320,
    labelY: 170,
    abbr: "Haringey"
  },
  "waltham-forest": {
    points: "355,150 400,145 410,190 355,185",
    labelX: 380,
    labelY: 168,
    abbr: "Waltham F."
  },
  "redbridge": {
    points: "400,145 475,135 485,190 410,190",
    labelX: 440,
    labelY: 165,
    abbr: "Redbridge"
  },
  "havering": {
    points: "475,135 565,135 585,205 530,230 485,190",
    labelX: 530,
    labelY: 175,
    abbr: "Havering"
  },
  "barking-and-dagenham": {
    points: "485,190 530,230 495,250 425,240 410,190",
    labelX: 460,
    labelY: 215,
    abbr: "Barking"
  },
  "newham": {
    points: "355,185 410,185 425,240 370,255 350,225",
    labelX: 385,
    labelY: 215,
    abbr: "Newham"
  },
  "tower-hamlets": {
    points: "315,210 355,185 350,225 315,235",
    labelX: 335,
    labelY: 210,
    abbr: "Tower H."
  },
  "hackney": {
    points: "290,190 345,185 355,185 315,210",
    labelX: 315,
    labelY: 195,
    abbr: "Hackney"
  },
  "islington": {
    points: "260,165 290,155 290,190 260,195",
    labelX: 275,
    labelY: 178,
    abbr: "Islington"
  },
  "camden": {
    points: "225,165 260,165 260,195 225,200",
    labelX: 242,
    labelY: 182,
    abbr: "Camden"
  },
  "kensington-and-chelsea": {
    points: "220,210 245,210 245,260 220,265",
    labelX: 232,
    labelY: 238,
    abbr: "Kens & Ch"
  },
  "hammersmith-and-fulham": {
    points: "170,220 220,210 220,265 190,285 180,240",
    labelX: 195,
    labelY: 250,
    abbr: "H&F"
  },
  "westminster": {
    points: "245,210 285,205 290,260 245,260",
    labelX: 265,
    labelY: 235,
    abbr: "Westminster"
  }
};

export default function LondonMap({ activeBoroughId, className = "" }: LondonMapProps) {
  const activeBorough = boroughsData.find(b => b.id === activeBoroughId);

  return (
    <div 
      id="london-static-highlight-map" 
      className={`bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm overflow-hidden relative select-none pointer-events-none ${className}`}
    >
      {/* Title indicating what is highlighted */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono">
          Service Coverage Map
        </span>
        {activeBorough && (
          <span className="text-[10px] font-black text-red-600 uppercase tracking-widest font-mono bg-red-50 border border-red-100 px-2 py-0.5 rounded">
            Active: {activeBorough.name}
          </span>
        )}
      </div>

      {/* SVG Map Container (Styled like a static image/illustration) */}
      <div className="relative w-full aspect-[700/480] bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-sm">
        
        {/* River Thames winding backdrop */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 700 480" preserveAspectRatio="xMidYMid meet">
          <path 
            d="M 30,245 Q 115,250 155,310 T 235,295 T 325,260 T 415,260 T 485,250 T 580,240 T 700,245" 
            fill="none" 
            stroke="#bae6fd" 
            strokeWidth="8" 
            strokeLinecap="round"
          />
          <path 
            d="M 30,245 Q 115,250 155,310 T 235,295 T 325,260 T 415,260 T 485,250 T 580,240 T 700,245" 
            fill="none" 
            stroke="#7dd3fc" 
            strokeWidth="3" 
            strokeLinecap="round"
          />
        </svg>

        {/* Greater London Borough vectors */}
        <svg className="w-full h-full relative z-20" viewBox="0 0 700 480" preserveAspectRatio="xMidYMid meet">
          {Object.entries(boroughShapes).map(([id, shape]) => {
            const isActive = id === activeBoroughId;

            return (
              <g key={id}>
                {/* Polygon vector shape */}
                <polygon
                  points={shape.points}
                  className={`stroke-white stroke-[1.5] transition-colors duration-200 ${
                    isActive
                      ? "fill-red-600 opacity-100"
                      : "fill-slate-100 opacity-95"
                  }`}
                />

                {/* Abbreviated Name labels overlay */}
                <text
                  x={shape.labelX}
                  y={shape.labelY}
                  textAnchor="middle"
                  className={`font-sans font-bold select-none pointer-events-none text-[8px] ${
                    isActive
                      ? "fill-white font-black"
                      : "fill-slate-400 opacity-60"
                  }`}
                >
                  {shape.abbr}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-3 text-center">
        <p className="text-[11px] text-slate-500">
          Showing coverage of the Greater London area. Highlighted region indicates active 24/7 priority emergency dispatch hub.
        </p>
      </div>
    </div>
  );
}
