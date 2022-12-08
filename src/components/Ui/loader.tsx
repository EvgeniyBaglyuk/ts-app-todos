import {FC} from "react";

const Loader:FC = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status"></div>
        </div>
    )
}

export default Loader