import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInComponent from "./Component/SignInComponent/SignInComponent";
import SignUpComponent from "./Component/SignUpComponent/SignUpComponent";
import NavbarComponent from "./Component/NavbarComponent/NavbarComponent";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavbarComponent />
                <header className="App-header">
                    <Routes>
                        <Route path="/sign-in" element={<SignInComponent />}></Route>
                        <Route path="/sign-up" element={<SignUpComponent />}></Route>
                    </Routes>
                </header>
            </BrowserRouter>
        </div>
    );
}

export default App;
