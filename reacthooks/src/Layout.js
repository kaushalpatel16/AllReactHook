import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
      <a class="navbar-brand" >Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
        {/* <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" aria-disabled="true">Disabled</a> */}
            <Link className="nav-link" to="/" aria-label="Home">Home</Link>
            <Link className="nav-link" to="/CountPage" aria-label="CountPage">CountPage</Link>
            <Link className="nav-link" to="/CurrenTtime" aria-label="CurrenTtime">CurrenTtime</Link>
            <Link className="nav-link" to="/Data" aria-label="Data">Data</Link>
            <Link className="nav-link" to="/Hoc" aria-label="Search">Hoc</Link>
            <Link className="nav-link" to="/location/kaushal" aria-label="Search">Useloction</Link>
            <Link className="nav-link" to="/callback" aria-label="Search">useMemo</Link>
            <Link className="nav-link" to="/costom" aria-label="custom">apicustomHook</Link>
            <Link className="nav-link" to="/usetransition" aria-label="transition">usetransition</Link>
            <Link className="nav-link" to="/UseDeferred" aria-label="UseDeferred">UseDeferred</Link>
            <Link className="nav-link" to="/useref" aria-label="useref">useref</Link>
            <Link className="nav-link" to="/usereducer" aria-label="usereducer">usereducer</Link>
        </div>
      </div>
    </div>
  </nav>
 

      <Outlet />
    </>
  )
};

export default Layout;