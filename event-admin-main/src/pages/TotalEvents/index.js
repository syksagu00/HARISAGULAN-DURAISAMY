import DisplayEvent from "../../components/DisplayEvents";
import useEvent from "../../hooks/useEvent";
import "./index.css"

function TotalEvents() {

    const [event] = useEvent(`${process.env.REACT_APP_BACKEND}/api/v1/event`)
   
    return ( 
        <div>
            <DisplayEvent events={event?.data} />
        </div>
     );
}

export default TotalEvents;