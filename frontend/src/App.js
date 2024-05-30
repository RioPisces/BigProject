import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Day1Component from "./Day/Day1/Day1Component";
import BarComponent from "./Day/BarComponent/BarComponent";
import HomeComponent from "./Day/Home/HomeComponent";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <BarComponent></BarComponent>
                <header className="App-header">
                    <Routes>
                        <Route path="/" element={<HomeComponent />} />
                        <Route path="/day1" element={<Day1Component />} />
                    </Routes>
                </header>
            </div>
        </BrowserRouter>
    );
}

export default App;
