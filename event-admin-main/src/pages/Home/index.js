import DisplayEvent from "../../components/DisplayEvents";
import useEvent from "../../hooks/useEvent";
import "./index.css";

function Home() {

    const [technical] = useEvent(`${process.env.REACT_APP_BACKEND}/api/v1/event?isTechnical=true`)
    const [nontechnical] = useEvent(`${process.env.REACT_APP_BACKEND}/api/v1/event?isTechnical=false`)

    return (
        <div className="home-container">
            <DisplayEvent title={"Technical Events"} events={technical?.data} />
            <DisplayEvent title={"Non Technical Events"} events={nontechnical?.data} />
        </div>
    );
}

export default Home;