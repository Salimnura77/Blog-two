import "./buttonfilter.css";
import { NavLink } from "react-router-dom";

const Filterbuttons = () => {
  return (
    <div className="button-component">
      <div className="buttons">
        <NavLink to="/" className="f-button" activeClassName="active" exact>
          All categories
        </NavLink>
        <NavLink to="/finance" className="f-button" activeClassName="active" exact>
          Finance
        </NavLink>
        <NavLink to="/business" className="f-button" activeClassName="active" exact>
          Business
        </NavLink>
        <NavLink to="/apple" className="f-button" activeClassName="active" exact>
          Apple
        </NavLink>
      </div>
    </div>
  );
};

export default Filterbuttons;
