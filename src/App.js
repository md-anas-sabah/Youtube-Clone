import "./App.css";
import Content from "./Content";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
