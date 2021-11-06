import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import assam from "../images/assam2.jpeg"
import mumbai from "../images/mumbai.jpeg"
import bangalore from "../images/bangalore.jpeg"
import delhi from "../images/delhi.jpeg"
import kolkata from "../images/kolka.jpeg"
const Travel = ({state}) => {

    let menu = useRef(null);
    let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  const cities=[
      {name:"Shillong", image:assam},
        {name:"Kolkata", image:kolkata},
        {name:"Mumbai", image:mumbai},
        {name:"Delhi", image:delhi},
        {name:"Bangalore", image:bangalore}
  ]

    useEffect(() => {
        // If the menu is open and we click the menu button to close it.
        if (state.clicked === false) {
          // If menu is closed and we want to open it.
          gsap.to([reveal2, reveal1], {
              duration: 0.8,
              ease: "power3.inOut",
              height: 0,
              stagger: 0.07
              
          });
          gsap.to(menu, {
                duration: 1,
              css: { display: "none" },
          });


          
        } else if (
          state.clicked === true ||
          (state.clicked === true && state.initial === null)
        ) {
          // Set menu to display block
          gsap.to(menu, {
            duration: 1,
          css: { display: "block" },
      });
      
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%",
        skewY:0,
      })
      StaggerReveal(reveal1, reveal2);
          FadeUp(info)
          TextReveal(line1, line2, line3)
        }
      }, [state]);

      const StaggerReveal = (n1,n2) => {
          gsap.from([n1,n2], {
              duration: 0.8,
              height: 0,
              transformOrigin: "right top",
              skewY: 2,
              ease: "power3.inOut",
              stagger:0.1
          })
      }

      const TextReveal = (n1,n2,n3) => {
        gsap.from([n1,n2,n3], {
            duration: 1,
            x: -80,
            ease: "power3.inOut",
            stagger:0.2,
            delay: 0.1,
        })
    }

      const FadeUp = (n) => {
        gsap.from(n, {
            duration: 1,
            y:50,
            ease: "power3.inOut",
            opacity: 0,
            delay:1
        })
    }

    const handleClick = (city) => {
        gsap.to(cityBackground, {
            duration: 0,
            background:`url(${city}) center center` 
        })
        gsap.to(cityBackground, {
            duration: 0.4,
            opacity: 1,
            ease: "power3.inOut"
        })
        gsap.to(cityBackground, {
            duration: 0.4,
            transformOrigin: "right top"
        })
    }

    const handleClose = () => {
        gsap.to(cityBackground, {
            duration: 0.4,
            opacity: 0
        })
    }

    const handleHover = e=> {
        gsap.to(e.target, {
            duration: 0.3,
            y:3,
            skewX:4,
            ease: "power3.inOut"
        })
    }

    const handleHoverOut = e=> {
        gsap.to(e.target, {
            duration: 0.3,
            y:-3,
            skewX:0,
            ease: "power3.inOut"
        })
    }



    return (
        <div ref={el=>{menu=el}} className="hamburger-menu">
            <div ref={el=>{reveal1=el}} className="menu-secondary-background-color">
            </div>
            <div ref={el=>{reveal2=el}} className="menu-layer">
                <div ref={el=>{cityBackground=el}} className="menu-city-background"></div>
                <div className="container">
                    <div className="wrapper">
                        <div className="menu-links">
                            <nav>
                                <ul>
                                    <li onMouseEnter={e => handleHover(e) } onMouseOut={e => handleHoverOut(e)} ref={el=>{line1=el}}><Link to="/opportunities">Opportunities</Link></li>
                                    <li onMouseEnter={e => handleHover(e) } onMouseOut={e => handleHoverOut(e)} ref={el=>{line2=el}}><Link to="/solutions">Solutions</Link></li>
                                    <li onMouseEnter={e => handleHover(e) } onMouseOut={e => handleHoverOut(e)} ref={el=>{line3=el}}><Link to="/contact-us">Contact Us</Link></li>
                                </ul>
                            </nav>
                            <div ref={el=>{info=el}} className="info">
                            <h3>Our Promise</h3>
                <p>
                  The passage experienced a surge in popularity during the 1960s
                  when Letraset used it on their dry-transfer sheets, and again
                  during the 90s as desktop publishers bundled the text with
                  their software.
                </p>
                            </div>
                            <div className="locations">
                                Locations:
                                {cities.map(el=>(
                                    <span key={el.name} onMouseEnter={()=>{handleClick(el.image)}} onMouseOut={handleClose}>{el.name}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Travel
