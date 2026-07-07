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

interface RouteState {
  page: string;
  id?: string;
  postcode?: string;
}

export default function App() {
  const [route, setRoute] = useState<RouteState>(() => {
    return parsePath(window.location.pathname);
  });

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
