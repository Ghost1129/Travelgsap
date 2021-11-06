import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Travel from "./Travel";
import { useLocation } from "react-router";

const Header = () => {
  const location = useLocation();
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: "Menu"
      });
      const [disabled, setDisabled] = useState(false);

      useEffect(() => {
          setState({ clicked: false, menuName: "Menu" });
        
      },[location])

      const handleMenu = () => {
        disableMenu();
        if (state.initial === false) {
          setState({
            initial: null,
            clicked: true,
            menuName: "Close"
          });
        } else if (state.clicked === true) {
          setState({
            clicked: !state.clicked,
            menuName: "Menu"
          });
        } else if (state.clicked === false) {
          setState({
            clicked: !state.clicked,
            menuName: "Close"
          });
        }
      };

      const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
          setDisabled(false);
        }, 1200);
      };

      
  return <header>
      <div className="container">
          <div className="wrapper">
                <div className="inner-header">
                    <div className="logo">
                        <Link to="/">Logo</Link>
                    </div>
                    <div className="menu">
                        <button disabled={disabled} onClick={handleMenu}>Menu</button>
                    </div>
                </div>
          </div>

      </div>
      <Travel state={state}/>
  </header>
};

export default Header;
