import "./App.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import Problem from "./components/sections/Problem";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import Results from "./components/sections/Results";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Process />
        <Results />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
