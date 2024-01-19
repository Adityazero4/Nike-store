import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Cart,
  FlexContent,
  Footer,
  Hero,
  Navbar,
  Sales,
  Stories,
  Like,
} from "./components";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data.js";

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Cart />
        <Like />
        <main className="flex flex-col gap-16 relative">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero heroapi={heroapi} />
                  <Sales endpoint={popularsales} ifExists />
                  <FlexContent endpoint={highlight} ifExists />
                  <Sales endpoint={toprateslaes} />
                  <FlexContent endpoint={sneaker} />
                  <Stories story={story} />
                </>
              }
            />
          </Routes>
        </main>
        <Footer footerAPI={footerAPI} />
      </>
    </Router>
  );
};

export default App;
