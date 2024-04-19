import { useLocation } from "react-router-dom";
import "./index.css";

function DisplayEvent() {

    const location = useLocation();
    const { state } = location

    return (
        <div className="display-container">
            <div className="display-img-container">
                <img src={state.image} alt={state.name} />
            </div>
            <div className="display-content-container">
                <p><span>Event Name:</span> {state.name}</p>
                <p><span>Description:</span> {state.description}</p>
                <p><span>Task:</span> {state.task}</p>
                <p><span>Date:</span> {state.timing}</p>
                <p><span>Duration:</span> {state.duration}</p>
                <p><span>Venue:</span> {state.venue}</p>
                <p><span>Price:</span> {state.price}</p>
                <p><span>whatsapp group:</span> {state.whatsappGroup}</p>
                <p><span>Co-ordinate No:</span> {state.coOrdinateNumber}</p>
            </div>
        </div>
    );
}

export default DisplayEvent;