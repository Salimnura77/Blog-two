import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
    return (
        <div className="blog-header">
            <div className="breadcrumb-container">
                <ul className="breadcrumb-list">
                    <li><a href="/#">Home</a></li>
                    <li><a href="/1#">Blog</a></li>
                    <li><a href="/#">{props.card}</a></li>
                </ul>
            </div>
            <div className="blog-h1">
                <h1 className="b-h1">{props.card}</h1>
            </div>
        </div>
     );
}
 
export default Header;
