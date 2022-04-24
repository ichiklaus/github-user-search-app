import { createRoot } from "react-dom/client";

// Component imports
import App from "./App";

// CSS imports
import "./index.css"



const element = document.querySelector("#root");
const root = createRoot(element);

root.render(<App />);
