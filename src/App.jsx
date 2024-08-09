import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RoutesMain from "./router/routes";
import Header from "./components/main/header";
import Footer from "./components/main/footer";
import { SEOProvider } from "./contexts/SEOcontext";
import SEOManager from "./contexts/SEPmanager";

function App() {
  const [routes] = useState(RoutesMain());

  return (
    <>
      <SEOProvider>
        <SEOManager />
        <Router>
          <Header />
          <Routes>
            {routes.map((route, index) => (
              <Route
                path={route.path}
                element={<route.component />}
                key={index}
              ></Route>
            ))}
          </Routes>
          <Footer />
        </Router>
      </SEOProvider>
    </>
  );
}

export default App;
