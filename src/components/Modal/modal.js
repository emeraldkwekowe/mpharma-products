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
        <div className="modal animated fadeIn faster">
            <div className="modal_bg" onClick={props.close}></div>
            <div className="animated fadeInUp faster modal_content_holder">{props.children}</div>
        </div>
    )
}

export default Modal;
