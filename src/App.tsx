import AppRoutes from "./routes/AppRoutes";
import { Footer, Header, SideBar } from "./layouts/index";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      {/* Top Container */}
      <div className="top-container">
        {/* SideBar (west/left container) */}
        <SideBar />
        {/* Header and AppRoutes (east/right container) */}
        <div className="top-right-container">
          {/* Search bar and appearance button (top of right container) */}
          <Header />
          {/* Main pages components (botton of right container)*/}
          <div className="main-content">
            <AppRoutes />
          </div>
        </div>
      </div>
      {/* Footer (south/bottom container) */}
      <Footer />
    </div>
  );
};

export default App;
