import { Link, Outlet, useNavigate} from "react-router-dom";
import { Fragment } from "react";
const Welcome = () => {
    const navigate = useNavigate();
    const buttonClickHandler = () => {
        navigate("/product");
    };
    return (
    <Fragment>
    <h1>This is welcome page</h1>
    <Link to="guest-user">Guest User</Link>
    <Link to="parent-user">Parent User</Link>
    <Outlet />
   {/* <Routes>
        <Route path="guest-user" element={<p>This is for guest user</p>} />
   </Routes> */}
   <button onClick={buttonClickHandler}>Visit Products</button>
    </Fragment>
    );
};

export default Welcome;