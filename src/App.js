import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import EmployeeList from "./pages/employee-list";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-list" element={<EmployeeList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
