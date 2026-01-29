import Background from "./components/Background.jsx";

export default function App() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        background: "black",
      }}
    >
      <Background />
    </div>
  );
}
