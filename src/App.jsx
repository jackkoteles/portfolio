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

      {/* Title */}
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
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              color: "#fffff2",
              fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
              fontWeight: 700,
              letterSpacing: "0.05em",
              margin: 0,
              fontFamily:
                '"Helvetica Neue", Helvetica, Arial, sans-serif',
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              textShadow: "0 0 10px rgba(255,255,255,0.18)",
            }}
          >
            Jack Koteles
          </h1>

          <p
            style={{
              marginTop: 16,
              color: "#9aa09a",
              fontSize: "clamp(1rem, 2.2vw, 1.5rem)",
              letterSpacing: "0.15em",
              fontFamily:
                '"Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            CS + DS STUDENT @ UW–MADISON
          </p>
        </div>
      </div>
    </div>
  );
}
