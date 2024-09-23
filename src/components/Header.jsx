import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header>
                <nav>
                    <Link to={"/"} className="logo">
                        <img className="imageLogo" src="logo.jpg" alt="logo" />
                    </Link>
                    <div className="navigation">
                        <ul className="navigationList">
                            <li className="boite">
                                <Link to={"/cv"} className="lientextdef" href="#">
                                    <div className="textdef">C.V</div>
                                </Link>
                            </li>
                            <li className="boite1">
                                <div className="lientextdef boite boite2" href="#">
                                    <div className="textdef">Projets</div>
                                </div>
                                <div className="mText">
                                    <Link to={"/space"} className="menuText mt">space invaders</Link>
                                    <div className="menuText mt">autre</div>
                                </div>
                            </li>
                            <li className="boite boite3">
                                <Link to={"/mail"} className="textdef" href="#">Me contacter</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;