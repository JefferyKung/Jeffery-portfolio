import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience,  Hero, Navbar, Tech, Works,WorksMobile, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <section className="hidden lg:block">
          <Tech />
        </section>
        <section className="block lg:hidden">
          <WorksMobile/>
        </section>
        <section className="hidden lg:block">
        <Works />
        </section>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
