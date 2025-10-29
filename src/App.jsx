import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Resume } from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className='relative z-0 bg-primary'>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero />
              </div>
              <About />
              <Experience />
              <Tech />
              <Works />
              {/* <Feedbacks /> */}
              <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
              </div>
            </div>
          }
        />
        <Route
          path="/resume"
          element={
            <div className='relative z-0 bg-primary'>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen'>
                <Navbar />
                <Resume />
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;