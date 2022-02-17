import "./App.css";
import { initializeTheming } from "css-theming";

function App() {
  // Initializes the main default category
  initializeTheming();

  // Initializes the sidebar category
  initializeTheming(/* theme */ null, /* category */ "sidebar");
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
