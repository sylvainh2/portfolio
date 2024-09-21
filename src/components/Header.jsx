import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header>
                <nav>
                    <div className="logo">
                        <img className="imageLogo" src="logo.jpg" alt="logo" />
                    </div>
                    <div className="navigation">
                        <ul className="navigationList">
                            <li className="boite">
                                <Link to={"/cv"} className="lientextdef" href="#">
                                    <div className="textdef">C.V</div>
                                </Link>
                            </li>
                            <li className="boite1">
                                <div to={"/space"} className="lientextdef boite boite2" href="#">
                                    <div className="textdef">Projets</div>
                                </div>
                                <div className="mText">
                                    <Link to={"/space"} className="menuText">space invaders</Link>
                                    <div className="menuText">autre</div>
                                </div>
                            </li>
                            <li className="boite boite3">
                                <a className="textdef" href="#">Me contacter</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;