import useEvent from "../../hooks/useEvent";
import { Skeleton } from "@mui/material";
import "./index.css"

function DashBoard() {

  const load = [1, 2, 3];

  const [technical, loading] = useEvent(`${process.env.REACT_APP_BACKEND}/api/v1/event`)
  const [nontechnical, nonloading] = useEvent(`${process.env.REACT_APP_BACKEND}/api/v1/event?isTechnical=false`)
  const [user] = useEvent(`${process.env.REACT_APP_BACKEND}/api/v1/user`)


  return (
    <div className="display-event-container">
      <div className="display-event-card-container">
        {
          loading && nonloading ?
            (load.map((box) => {
              return (
                <Skeleton variant="rectangular" width={"15rem"} height={"10rem"} key={box}/>
              )
            }))
            :
            <div className="dashboard-card-container">
              <div>
                <p>Total Events: {technical?.data?.length}</p>
              </div>
              <div>
                <p>Technical Events:{technical?.data?.length - nontechnical?.data?.length} </p>
              </div>
              <div>
                <p>Non Technical Events: {nontechnical?.data?.length}</p>
              </div>
              <div>
                <p>Student Registered: {user.totalUsers}</p>
              </div>
            </div>
        }
      </div>
    </div>)

}

export default DashBoard;