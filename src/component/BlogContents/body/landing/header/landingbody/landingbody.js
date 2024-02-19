import Landingheader from "../landingheader";
import "./landingbody.css"
import { Row , Col } from "reactstrap";

const Landingbody = () => {
    return (
        <div className="d-flex ">
            <div class="col-8"><Landingheader/></div>
            <div class="col-3">w</div>
        </div>
    );
}
 
export default Landingbody;