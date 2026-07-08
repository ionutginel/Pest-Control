import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import PestListPage from "./pages/PestListPage";
import PestDetailPage from "./pages/PestDetailPage";
import AreaListPage from "./pages/AreaListPage";
import AreaDetailPage from "./pages/AreaDetailPage";
import PostcodeDetailPage from "./pages/PostcodeDetailPage";
import ContactPage from "./pages/ContactPage";

// Data
import { pestsData } from "./data/pests";
import { boroughsData } from "./data/boroughs";

interface RouteState {
  page: string;
  id?: string;
  postcode?: string;
}

export default function App() {
  const [route, setRoute] = useState<RouteState>(() => {
    return parsePath(window.location.pathname);
  });

  useEffect(() => {
    let title = "London Pest Management | Professional Pest Control London";
    let description = "London Pest Management provides professional, fast, and reliable pest control services across all London boroughs. 24/7 emergency response for residential & commercial properties.";
    let keywords = "pest control london, emergency pest control, bedbug treatment london, mice exterminator london, rat removal london, residential pest control, commercial pest control";

    switch (route.page) {
      case "home":
        title = "London Pest Management | Professional Pest Control London";
        description = "London Pest Management provides professional, fast, and reliable pest control services across all London boroughs. 24/7 emergency response for residential & commercial properties.";
        keywords = "pest control london, emergency pest control, bedbug treatment london, mice exterminator london, rat removal london, residential pest control, commercial pest control";
        break;

      case "service-detail":
        if (route.id === "commercial") {
          title = "Commercial Pest Control & Compliance | London Pest Management";
          description = "BPCA-compliant commercial pest control and preventative maintenance contracts for London businesses, restaurants, offices, and landlords. 24/7 priority support.";
          keywords = "commercial pest control london, business pest management, restaurant pest control, office extermination, bpca compliance";
        } else {
          title = "Domestic Pest Control Services | London Pest Management";
          description = "Professional and safe residential pest control services in London. Fast eradication of bedbugs, mice, rats, cockroaches, and wasps for your home with guaranteed results.";
          keywords = "domestic pest control london, residential pest control, home exterminator, bedbug treatment, safe pest control";
        }
        break;

      case "pests":
        title = "London Pests Encyclopedia & Identification Guide | London Pest Management";
        description = "Browse our comprehensive London pests database. Identify common UK pests, understand their health risks, and find fast treatment options and pricing.";
        keywords = "uk pest identification, pest guide london, common london pests, pest treatment pricing, identifying insect infestations";
        break;

      case "pest-detail": {
        const pest = pestsData.find((p) => p.id === route.id);
        if (pest) {
          title = `${pest.name} Control & Extermination | London Pest Management`;
          description = `Professional ${pest.name} (${pest.scientificName}) eradication services in London. Safe treatments, fast emergency response, and expert prevention tips starting from £${pest.startingPrice}.`;
          keywords = `${pest.name} control london, exterminate ${pest.name}, ${pest.name} infestation, ${pest.name} treatment cost, how to get rid of ${pest.name}`;
        } else {
          title = "Pest Control & Extermination | London Pest Management";
          description = "Professional UK pest control, extermination, and removal services. Safe treatments, fast response times, and expert prevention tips.";
          keywords = "pest control london, pest exterminator, pest removal london";
        }
        break;
      }

      case "areas":
        title = "Areas We Cover | Local Pest Control Across London";
        description = "London Pest Management operates across all 32 London boroughs. Check our local response times and find emergency pest controllers in your borough or postcode.";
        keywords = "pest control areas covered, local pest control london, emergency exterminator borough list, london postcodes pest control";
        break;

      case "area-detail": {
        const borough = boroughsData.find((b) => b.id === route.id);
        if (borough) {
          title = `Pest Control in ${borough.name} | Fast ${borough.estimatedResponseTime} Response`;
          description = `Reliable pest control and eradication services in the London Borough of ${borough.name}. Local emergency technicians available in ${borough.postcodes.join(", ")} with an average response time of ${borough.estimatedResponseTime}.`;
          keywords = `pest control ${borough.name}, local exterminator ${borough.name}, emergency pest control ${borough.name}, ${borough.postcodes.join(", ").toLowerCase()} pest removal`;
        } else {
          title = "Local Pest Control Services | London Pest Management";
          description = "Professional local pest control and eradication services. Emergency technicians available across all London boroughs with rapid response times.";
          keywords = "local pest control, local exterminator london, emergency pest response";
        }
        break;
      }

      case "postcode-detail": {
        const borough = boroughsData.find((b) => b.id === route.id);
        const postcodeUpper = (route.postcode || "").toUpperCase();
        if (borough) {
          title = `Local Pest Control in ${postcodeUpper} (${borough.name}) | Emergency Service`;
          description = `Emergency pest control services in ${postcodeUpper}, ${borough.name}. BPCA-certified local technicians on-call for immediate dispatch to your home or business in ${postcodeUpper}.`;
          keywords = `pest control ${postcodeUpper}, exterminator ${postcodeUpper}, emergency pest control ${postcodeUpper}, local pest control ${borough.name} ${postcodeUpper}`;
        } else {
          title = `Pest Control in ${postcodeUpper} | Emergency Exterminator`;
          description = `Fast, reliable local pest control and eradication services in ${postcodeUpper}. Immediate dispatcher visits available 24/7 for homes and businesses.`;
          keywords = `pest control ${postcodeUpper}, exterminator ${postcodeUpper}, local pest control ${postcodeUpper}`;
        }
        break;
      }

      case "contact":
        title = "Emergency Pest Control Booking & Contact | London Pest Management";
        description = "Contact our 24/7 London pest dispatch team at 020 8819 8933. Book a same-day inspection, request a quote, or secure an emergency callback.";
        keywords = "contact london pest management, book pest control london, 24/7 pest hotline, emergency pest dispatch, request pest control quote";
        break;
    }

    // Set document title
    document.title = title;

    // Set or create description meta tag
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // Set or create keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", keywords);
  }, [route]);

  function parsePath(pathname: string): RouteState {
    if (!pathname || pathname === "/" || pathname === "") {
      return { page: "home" };
    }
    
    // Clean leading and trailing slashes
    const cleaned = pathname.replace(/^\/+|\/+$/g, "").split("?")[0];
    const parts = cleaned.split("/");

    if (parts[0] === "services") {
      return { page: "service-detail", id: parts[1] || "domestic" };
    }
    if (parts[0] === "pests") {
      if (parts[1]) {
        return { page: "pest-detail", id: parts[1] };
      }
      return { page: "pests" };
    }
    if (parts[0] === "areas") {
      if (parts[1]) {
        if (parts[2]) {
          return { page: "postcode-detail", id: parts[1], postcode: parts[2] };
        }
        return { page: "area-detail", id: parts[1] };
      }
      return { page: "areas" };
    }
    if (parts[0] === "contact") {
      return { page: "contact" };
    }
    
    return { page: "home" };
  }

  useEffect(() => {
    const handleLocationChange = () => {
      setRoute(parsePath(window.location.pathname));
      // Force instant scroll back to top of the page on route transition
      window.scrollTo({ top: 0, behavior: "instant" as any });
    };

    window.addEventListener("popstate", handleLocationChange);

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      if (anchor.target === "_blank") return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      if (href.startsWith("mailto:") || href.startsWith("tel:")) return;

      try {
        const url = new URL(href, window.location.href);
        if (url.origin === window.location.origin) {
          e.preventDefault();
          window.history.pushState(null, "", url.pathname + url.search);
          window.dispatchEvent(new PopStateEvent("popstate"));
        } else if (url.origin === "https://www.londonpestmanagement.co.uk") {
          e.preventDefault();
          window.history.pushState(null, "", url.pathname + url.search);
          window.dispatchEvent(new PopStateEvent("popstate"));
        }
      } catch (err) {
        // If URL parsing fails, let the browser handle it
      }
    };

    document.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  const renderActivePage = () => {
    switch (route.page) {
      case "home":
        return <HomePage />;
      case "service-detail":
        return <ServicePage serviceId={(route.id as any) || "domestic"} />;
      case "pests":
        return <PestListPage />;
      case "pest-detail":
        return <PestDetailPage pestId={route.id || ""} />;
      case "areas":
        return <AreaListPage />;
      case "area-detail":
        return <AreaDetailPage boroughId={route.id || ""} />;
      case "postcode-detail":
        return <PostcodeDetailPage boroughId={route.id || ""} postcode={route.postcode || ""} />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-[#fcfcfd] min-h-screen text-slate-800 selection:bg-red-600 selection:text-white antialiased font-sans flex flex-col justify-between">
      {/* Multi-page Aware Navigation Header */}
      <Header currentRoute={route} />

      {/* Main Page Canvas Stage */}
      <main className="flex-grow">
        {renderActivePage()}
      </main>

      {/* Compliant Corporate Footer */}
      <Footer />
    </div>
  );
}
