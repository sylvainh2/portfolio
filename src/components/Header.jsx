import { Link } from "react-router-dom";
import {useState, useEffect} from "react";


function Header() {
    
    const [barNone, setBarNone] = useState("");
    useEffect(()=>{
        
    },[barNone])
    function barToggle(e){
        e.preventDefault();
        console.log("menu");
        if(barNone){
            setBarNone ("");
        } else {
            setBarNone (" barNone");
        }
    }
    return (
        <>
            <header>
                <nav>
                    <Link to={"/"} className="logo b1">
                        <img className="imageLogo" src="/portfolio/logo.jpg" alt="logo" />
                    </Link>
                    <div className="navigation b2">
                        <ul className="navigationList">
                            <li className={"boite1"+barNone}>
                                <div className="lientextdef boite boite2">
                                    <div className="textdef">C.V</div>
                                </div>
                                <div className="mText">
                                    <Link to={"/cvnew"} className="menuText mt">C.V</Link>
                                    <Link to={"/cv"} className="menuText mt">C.V ancien HTML</Link>
                                </div>
                            </li>
                            <li className={"boite1"+barNone}>
                                <div className="lientextdef boite boite2" href="#">
                                    <div className="textdef">Projets</div>
                                </div>
                                <div className="mText">
                                    <Link to={"/space"} className="menuText mt">space invaders</Link>
                                    <Link to={"/morpion"} className="menuText mt">morpion</Link>
                                    <Link to={"/memory"} className="menuText mt">memory</Link>
                                    <a href="#asi" className="menuText mt">club run'illac</a>
                                </div>
                            </li>
                            <li className={"boite boite3"+barNone}>
                                <Link to={"/mail"} className="lientextdef" href="#">
                                    <div className="textdef">Me contacter</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <i className="fa-solid fa-bars barMenu b3" onClick={(event)=>barToggle(event)}></i>
                </nav>
            </header>
        </>
    )
}

export default Header;