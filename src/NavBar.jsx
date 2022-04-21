import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const NavBar = (props) => {
  const [search, setSearch] = React.useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
    props.dispatch({
      type: "COUNTRIES_SEARCH",
      payload: search,
    });
  };
  return (
    <div className="navOne">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/Countries" className="nav-link" href="#">
                  Countries
                </Link>
              </li>
            </ul>
            <input
              type="text"
              onChange={handleChange}
              className="searchBox"
              name=""
              id=""
              placeholder="Search Countries . . ."
            />
          </div>
        </div>
      </nav>
    </div>
  );
};
export default connect((store) => store)(NavBar);
