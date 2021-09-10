import { useDispatch } from "react-redux";
import { clearState } from "../../redux/products/actions";

const Landing = () => {
    const dispatch = useDispatch();
    return(
        <span onClick={() => dispatch(clearState())} className="empty_line_a">kill redux</span>
    )
}

export default Landing;
