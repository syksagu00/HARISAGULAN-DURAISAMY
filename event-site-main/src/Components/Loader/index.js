import loader from "../../Assets/loading.gif"
import './index.css';

function Loader() {
    return (
        <div className='loader'>
            <img width="90" src={loader} alt='loader' />
        </div>
    );
}

export default Loader;