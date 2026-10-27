"use client";

import { useState } from "react";

const characters = [
  { name: "Sasya", role: "Knight profile", mark: "S", tone: "violet", status: "DATA BELUM DISINKRONKAN" },
  { name: "Eira", role: "Knight profile", mark: "E", tone: "cyan", status: "DATA BELUM DISINKRONKAN" },
  { name: "Aerith", role: "Knight profile", mark: "A", tone: "gold", status: "DATA BELUM DISINKRONKAN" },
];

export default function Home() {
  const [active, setActive] = useState("Sasya");
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState("");

  function startSession() {
    setNotice(`Ruang sesi ${active} siap disiapkan. Integrasi AI belum diaktifkan.`);
  }

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#" aria-label="Exo Knight home">
          <span className="brand-emblem">✦</span>
          <span><strong>EXO KNIGHT</strong><small>PERSONAL SYSTEM</small></span>
        </a>
        <div className="side-label">WORKSPACE</div>
        <nav className="nav-list" aria-label="Navigasi utama">
          <a className="nav-item selected" href="#overview"><span>◈</span> Overview <b>01</b></a>
          <a className="nav-item" href="#characters"><span>♙</span> Characters</a>
          <a className="nav-item" href="#chronicles"><span>▤</span> Chronicles</a>
          <a className="nav-item" href="#checkpoints"><span>⏣</span> Checkpoints</a>
          <a className="nav-item" href="#codex"><span>⌘</span> Codex</a>
        </nav>
        <div className="sidebar-bottom">
          <div className="system-indicator"><span className="pulse" /> SYSTEM STATUS <strong>INITIALIZING</strong></div>
          <div className="sidebar-note">Private workspace<br />Build 0.1 · Local foundation</div>
        </div>
      </aside>

      <section className="main-panel" id="overview">
        <header className="topbar">
          <div className="breadcrumb">WORKSPACE <span>/</span> <strong>OVERVIEW</strong></div>
          <div className="topbar-right"><span className="secure-dot" /> PRIVATE INSTANCE <span className="avatar">EK</span></div>
        </header>

        <div className="content">
          <div className="eyebrow"><span className="eyebrow-line" /> ROLEPLAY SYSTEM <span className="version">PRE-ALPHA 0.1</span></div>
          <section className="hero">
            <div className="hero-copy">
              <p className="kicker">THE CHRONICLES BEGIN HERE</p>
              <h1>Every legend<br />has a <em>beginning.</em></h1>
              <p className="hero-description">Ruang pribadi untuk menjelajahi dunia Exo Knight, menjaga kontinuitas cerita, dan melanjutkan perjalanan dari titik terakhir.</p>
              <a className="primary-button" href="#characters">PILIH KARAKTER <span>↗</span></a>
            </div>
            <div className="hero-art" aria-label="Ilustrasi abstrak inti energi Exo Knight">
              <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
              <div className="core-halo" /><div className="core"><span>EX</span></div>
              <div className="art-cross cross-a">+</div><div className="art-cross cross-b">+</div>
              <div className="art-caption"><span>CORE SYSTEM</span><strong>AWAITING LINK</strong></div>
            </div>
            <div className="hero-index"><span>01</span> / 05</div>
          </section>

          <div className="section-heading" id="characters">
            <div><p className="kicker">PERSONNEL ARCHIVE</p><h2>Character <em>selection</em></h2></div>
            <span className="section-count">03 PROFILES REFERENCED</span>
          </div>
          <div className="character-grid">
            {characters.map((character) => (
              <button key={character.name} className={`character-card ${character.tone} ${active === character.name ? "active" : ""}`} onClick={() => { setActive(character.name); setNotice(""); }} aria-pressed={active === character.name}>
                <div className="card-top"><span className="card-mark">{character.mark}</span><span className="card-arrow">↗</span></div>
                <div className="character-info"><span className="character-role">{character.role}</span><h3>{character.name}</h3><span className="character-status"><i /> {character.status}</span></div>
                <div className="card-bottom"><span>PROFILE STATUS</span><strong>UNVERIFIED</strong></div>
              </button>
            ))}
          </div>

          <section className="lower-grid">
            <div className="panel-card session-card" id="chronicles">
              <div className="panel-title"><span className="panel-icon">◉</span><div><p className="kicker">CONTINUE YOUR STORY</p><h2>Session <em>console</em></h2></div><span className="coming-soon">STANDBY</span></div>
              <p className="panel-description">Pilih karakter untuk menyiapkan ruang roleplay. AI dan penyimpanan sesi akan dihubungkan pada tahap berikutnya.</p>
              <div className="session-selected"><span className={`mini-avatar ${characters.find(c => c.name === active)?.tone}`}>{active[0]}</span><div><small>SELECTED CHARACTER</small><strong>{active}</strong></div><span className="selection-check">✓</span></div>
              <button className="secondary-button" onClick={startSession}>PREPARE SESSION <span>→</span></button>
              {notice && <p className="notice" role="status">{notice}</p>}
            </div>
            <div className="panel-card integrity-card" id="checkpoints">
              <div className="panel-title"><span className="panel-icon">⏣</span><div><p className="kicker">CONTINUITY CONTROL</p><h2>Integrity <em>monitor</em></h2></div></div>
              <div className="integrity-state"><span className="integrity-symbol">⌁</span><div><strong>Awaiting first checkpoint</strong><p>Belum ada sesi yang disimpan.</p></div></div>
              <div className="integrity-line"><span>CANON GOVERNANCE</span><strong>DOCUMENTED</strong></div>
              <div className="integrity-line"><span>SESSION STORAGE</span><strong className="muted">NOT CONNECTED</strong></div>
              <div className="integrity-line"><span>AI RUNTIME</span><strong className="muted">NOT CONNECTED</strong></div>
            </div>
          </section>

          <footer className="footer" id="codex"><span>EXO KNIGHT <i>•</i> PERSONAL ROLEPLAY SYSTEM</span><span>BUILT FOR THE CHRONICLES <b>✦</b></span></footer>
        </div>
      </section>
    </main>
  );
}