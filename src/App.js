import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <Dictionary defaultKeyword="sunset" />
      <footer>
        Coded by Cailey Manktelow. Open sourced on{" "}
        <a
          href="https://github.com/CaileyManktelow"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        .{" "}
      </footer>
    </div>
  );
}
