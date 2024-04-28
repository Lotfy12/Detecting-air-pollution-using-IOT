import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherAPI from "./components/WeatherAPI";
import Arduino from "./components/Arduino";
import ChartsData from "./components/ChartsData";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Arduino replace to="/arduino" />} />
          <Route path="arduino" element={<Arduino />} />

          <Route path="WeatherAPI" element={<WeatherAPI />} />
          <Route path="charts" element={<ChartsData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
