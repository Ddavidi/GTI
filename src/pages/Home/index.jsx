import React from "react";
import "./style.css";
import geoparLogo from "../../assets/icon_geopar.png";

const Logo = () => (
    <img className="home-logo" src={geoparLogo} alt="Logo" width={60} height={60} />
);

const LaptopIcon = () => (
  <svg className="home-nav-icon" viewBox="0 0 24 24">
    <rect x="3" y="5" width="18" height="12" rx="2" fill="none" stroke="#000" strokeWidth="2"/>
    <rect x="1" y="17" width="22" height="2" fill="#000"/>
  </svg>
);

const UserIcon = () => (
  <svg className="home-nav-icon" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="4" fill="none" stroke="#000" strokeWidth="2"/>
    <path d="M4 20c0-4 8-4 8-4s8 0 8 4" fill="none" stroke="#000" strokeWidth="2"/>
  </svg>
);

const ProfileIcon = () => (
  <svg className="home-profile-icon" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="6" fill="none" stroke="#000" strokeWidth="2"/>
    <path d="M2 22c0-5.5 8-5.5 10-5.5s10 0 10 5.5" fill="none" stroke="#000" strokeWidth="2"/>
  </svg>
);

const Home = () => {
  return (
    <div className="home-root">
      {/* Sidebar */}
      <aside className="home-sidebar">
        <div className="home-logo">
          <Logo />
        </div>
        <nav className="home-nav">
          <div className="home-nav-item">
            <LaptopIcon />
            <span className="home-nav-label">
              Central de<br />patrimônios
            </span>
          </div>
          <div className="home-nav-item">
            <UserIcon />
            <span className="home-nav-label">
              Consulta de<br />Funcionários
            </span>
          </div>
        </nav>
      </aside>
      {/* Main content */}
      <div className="home-main">
        {/* Topbar */}
        <header className="home-header">
          <ProfileIcon />
        </header>
        {/* Content area */}
        <main className="home-content">
          {/* Conteúdo principal aqui */}
        </main>
      </div>
    </div>
  );
};

export default Home;