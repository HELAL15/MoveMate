import { Link, NavLink } from "react-router-dom";




function Navbar() {




  return (
<>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <Link class="navbar-brand" to="/">MoveMate</Link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink className="nav-link" end to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" end to="diet">diet</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" end to="workout">workout</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" end to="food">food</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" end to="body">body</NavLink>
        </li>
      </ul>
    </div>
        <Link to="profile" className="d-flex align-items-center gap-3"><i className="fas fa-user"></i> <span>profile</span></Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
</>
  );
}

export default Navbar;