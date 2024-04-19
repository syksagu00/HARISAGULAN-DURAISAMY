import EventCard from "../EventCard";
import { Skeleton } from "@mui/material";
import "./index.css";

function DisplayEvent({ title, events }) {
    const load = [1, 2, 4, 5, 6, 7, 8]

    return (
        <div className="display-event-container">
            <h2>{title}</h2>
            <div className="display-event-card-container">
                {
                    events ?
                        (events.map((event, index) => {
                            return (
                                <EventCard event={event} key={index} />
                            )
                        }))
                        :
                        (load.map((box) => {
                            return (
                                <Skeleton variant="rectangular" width={350} height={250} key={box} />
                            )
                        }))
                }
            </div>
        </div>
    );
}

export default DisplayEvent;