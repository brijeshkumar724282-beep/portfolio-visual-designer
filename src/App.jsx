import { useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import CaseOverlay from "./components/CaseOverlay.jsx";
import About from "./components/About.jsx";
import Process from "./components/Process.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const [active, setActive] = useState(null);

  return (
    <div className="min-h-screen bg-paper text-ink antialiased">
      <Nav />
      <main>
        <Hero />
        <Work onOpen={setActive} />
        <About />
        <Process />
      </main>
      <Contact />
      <CaseOverlay project={active} onClose={() => setActive(null)} />
    </div>
  );
}
