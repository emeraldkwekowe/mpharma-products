import { useEffect } from "react";
import "./modal.scss";

const Modal = props => {
    useEffect(() => {
        const escFunction = (e) => {
            if(e.keyCode === 27) {
              props.close();
            }
        }

        document.addEventListener("keydown", escFunction, false);
    }, [props])
    return(
        <div className="modal">
            <div className="modal_bg" onClick={props.close}></div>
            {props.children}
        </div>
    )
}

export default Modal;
