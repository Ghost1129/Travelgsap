import React from "react";
import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Solutions from "./routes/solutions";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <div className='container'>
          <div className='wrapper'>
            <div className='home'>
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/opportunities' component={Opportunities} />
                <Route path='/solutions' element={<Solutions/>} />
                <Route path='/contact-us' component={Contact} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

function Opportunities() {
  return <p>Discover our numerous opportunities</p>;
}


function Contact() {
  return <p>Feel free to reach us.</p>;
}

export default App;
