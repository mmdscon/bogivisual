// src/components/LandingElements.js

import React from "react";

// --- GLOBALE KONSTANTEN ---
export const PAGE_BG = "#F1ECEA";
export const TEXT_COLOR = "#202529";
export const ACCENT = "#D6B8A9";

// --- HILFS-STYLES ---
export const primaryButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.4rem",
  padding: "0.9rem 1.8rem",
  borderRadius: 9999,
  border: "none",
  background: ACCENT,
  color: TEXT_COLOR,
  fontWeight: 600,
  textDecoration: "none",
  fontSize: "0.95rem",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  boxShadow: "0 10px 25px rgba(180,144,127,0.55)",
  cursor: "pointer",
};

export const circleAvatarStyle = {
  width: 46,
  height: 46,
  borderRadius: 9999,
  background: PAGE_BG,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.4rem",
};

export const twoColGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "1.1rem",
};

// --- HILFS-KOMPONENTEN ---
export function Pill({ children }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "0.35rem 0.9rem",
        borderRadius: 9999,
        border: "1px dashed rgba(32,37,41,0.3)",
        fontSize: "0.8rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  );
}

export function SectionHeader(props) {
  const { pill, title, sub } = props;
  return (
    <div style={{ maxWidth: 640, marginBottom: "2rem" }}>
      {pill && <Pill>{pill}</Pill>}
      {title && (
        <h2 style={{ margin: "0.4rem 0 0.7rem", fontSize: "1.6rem" }}>{title}</h2>
      )}
      {sub && (
        <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.6, opacity: 0.9 }}>{sub}</p>
      )}
    </div>
  );
}

export function StatementItem(props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.7rem",
        alignItems: "flex-start",
        padding: "1rem 1.1rem",
        borderRadius: 20,
        background: "#ffffffaa",
        border: "1px solid rgba(214,184,169,0.5)",
      }}
    >
      <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>{props.icon}</span>
      <p style={{ margin: 0, fontSize: "0.96rem", lineHeight: 1.6 }}>{props.children}</p>
    </div>
  );
}

export function BenefitCard(props) {
  const { icon, title, text } = props;
  return (
    <article
      style={{
        background: "#ffffff",
        borderRadius: 24,
        padding: "1.4rem 1.5rem",
        border: "1px solid rgba(214,184,169,0.6)",
        boxShadow: "0 14px 35px rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          marginBottom: "0.7rem",
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 9999,
            background: PAGE_BG,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
          }}
        >
          {icon}
        </div>
        <div
          style={{
            fontSize: "0.9rem",
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {title}
        </div>
      </div>
      <p style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>{text}</p>
    </article>
  );
}

export function SplitSection(props) {
  const { pill, title, paragraphs, checklist, imageTag, imageAlt, reverse } = props;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: reverse
          ? "minmax(0,1fr) minmax(0,1.1fr)"
          : "minmax(0,1.1fr) minmax(0,1fr)",
        gap: "2.3rem",
        alignItems: "center",
      }}
    >
      {/* Content */}
      {!reverse && (
        <div>
          <Pill>{pill}</Pill>
          <h2 style={{ margin: "0.4rem 0 0.7rem", fontSize: "1.6rem" }}>{title}</h2>
          {paragraphs.map((p, idx) => (
            <p key={idx} style={{ margin: 0, marginBottom: "0.6rem", lineHeight: 1.6 }}>
              {p}
            </p>
          ))}
          {checklist && (
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "1rem 0 0",
                display: "grid",
                gap: "0.45rem",
                fontSize: "0.95rem",
              }}
            >
              {checklist.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "0.5rem" }}>
                  <span style={{ marginTop: "0.15rem", flexShrink: 0 }}>✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Image placeholder (kannst echtes Bild einfügen) */}
      <div>
        <div
          style={{
            borderRadius: 28,
            overflow: "hidden",
            background: "#ddd",
            position: "relative",
            boxShadow: "0 18px 40px rgba(0,0,0,0.1)",
            border: "1px solid rgba(214,184,169,0.75)",
            height: 260,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
            color: "#555",
          }}
          aria-label={imageAlt}
        >
          {/* Platzhalter – hier später <Image> oder <img> einsetzen */}
          Bildplatzhalter
          <div
            style={{
              position: "absolute",
              left: "1rem",
              bottom: "1rem",
              padding: "0.45rem 0.8rem",
              borderRadius: 9999,
              background: "rgba(241,236,234,0.9)",
              fontSize: "0.85rem",
              backdropFilter: "blur(4px)",
            }}
          >
            {imageTag}
          </div>
        </div>
      </div>

      {reverse && (
        <div>
          <Pill>{pill}</Pill>
          <h2 style={{ margin: "0.4rem 0 0.7rem", fontSize: "1.6rem" }}>{title}</h2>
          {paragraphs.map((p, idx) => (
            <p key={idx} style={{ margin: 0, marginBottom: "0.6rem", lineHeight: 1.6 }}>
              {p}
            </p>
          ))}
          {checklist && (
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "1rem 0 0",
                display: "grid",
                gap: "0.45rem",
                fontSize: "0.95rem",
              }}
            >
              {checklist.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "0.5rem" }}>
                  <span style={{ marginTop: "0.15rem", flexShrink: 0 }}>✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export function Testimonial(props) {
  const { name, text } = props;
  return (
    <article
      style={{
        background: "#ffffff",
        borderRadius: 20,
        padding: "1rem 1.1rem",
        fontSize: "0.92rem",
        lineHeight: 1.6,
        marginBottom: "0.8rem",
        border: "1px solid rgba(214,184,169,0.6)",
      }}
    >
      <span
        style={{
          display: "block",
          fontWeight: 600,
          fontSize: "0.85rem",
          marginBottom: "0.25rem",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        {name} · ⭐⭐⭐⭐⭐
      </span>
      <p style={{ margin: 0 }}>{text}</p>
    </article>
  );
}

export function IdPoint(props) {
  return (
    <div
      style={{
        borderRadius: 22,
        padding: "1rem 1rem",
        background: "#ffffff",
        border: "1px dashed rgba(32,37,41,0.25)",
        display: "flex",
        gap: "0.7rem",
        alignItems: "flex-start",
        fontSize: "0.95rem",
      }}
    >
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: 9999,
          background: ACCENT,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.8rem",
          flexShrink: 0,
        }}
      >
        ✓
      </div>
      <p style={{ margin: 0 }}>{props.text}</p>
    </div>
  );
}

export function FaqItem(props) {
  return (
    <div
      style={{
        borderRadius: 22,
        padding: "1rem 1.1rem",
        background: "#ffffff",
        border: "1px solid rgba(214,184,169,0.6)",
        fontSize: "0.95rem",
        lineHeight: 1.6,
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: "0.35rem", fontSize: "0.98rem" }}>
        {props.question}
      </div>
      <div>{props.answer}</div>
    </div>
  );
}
