import React from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div style={{fontFamily: "Arial, sans-serif"}}>
      <header style={{padding:20, background:"#111", color:"#fff"}}>
        <h2>PORTAL GX</h2>
      </header>

      <main style={{padding:20}}>
        <Outlet />
      </main>

      <footer style={{padding:20, background:"#eee"}}>
        <small>Portal GX • Base de conhecimento do sistema</small>
      </footer>
    </div>
  );
}