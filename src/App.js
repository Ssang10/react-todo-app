import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import IncompleteList from "./components/IncompleteList";
import GlobalState from "./context/GlobalState";
import CompletedList from "./components/CompletedList";

function App() {
  return (
    <GlobalState>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<IncompleteList />} />
            <Route path="/completed-list" element={<CompletedList />} />
          </Routes>
        </Router>
      </div>
    </GlobalState>
  );
}

export default App;
