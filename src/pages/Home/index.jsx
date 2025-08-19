import React from "react";
import "./style.css";
 
const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Bem-vindo à Home</h1>
      </header>
      <main>
        <p>Esta é a página inicial do seu projeto.</p>
      </main>
      <footer>
        <small>&copy; {new Date().getFullYear()} GTI</small>
      </footer>
    </div>
  );
};
 
export default Home;