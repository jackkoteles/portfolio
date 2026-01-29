import Background from "./components/Background.jsx";

export default function App() {
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background: "black",
        }}
      >
        <Background />
      </div>

      {/* Centered title */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
            fontWeight: 700,
            letterSpacing: "0.05em",
            textAlign: "center",
          }}
        >
          Jack Koteles
        </h1>
      </div>
    </div>
  );
}
