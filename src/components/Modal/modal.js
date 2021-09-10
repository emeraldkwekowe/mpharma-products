import { useEffect } from "react";
import "./modal.scss";

const Modal = props => {
    const escFunction = (e) => {
        if(e.keyCode === 27) {
          props.close();
        }
    }
    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
    }, [])
    return(
        <div className="modal">
            <div className="modal_bg" onClick={props.close}></div>
            {props.children}
        </div>
    )
}

export default Modal;
