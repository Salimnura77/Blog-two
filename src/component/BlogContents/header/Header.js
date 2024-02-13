import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
    return (
        <div className="blog-header">
            <div className="breadcrumb-container">
                <ul className="breadcrumb-list">
                    <li><NavLink>Home</NavLink></li>
                    <li><NavLink to="/">Blog</NavLink></li>
                    <li><NavLink>{props.card}</NavLink></li>
                </ul>
            </div>
            <div className="blog-h1">
                <h1 className="b-h1">{props.card}</h1>
            </div>
        </div>
     );
}
 
export default Header;
