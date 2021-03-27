
import React, { useEffect } from "react"
import { Route, Switch, useLocation, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}
function About() {
  return <h2>About</h2>;
}

function Navbar() {
  let location = useLocation();

  let links = [{
    path: '/',
    name: 'Home'
  }, {
    path: '/about',
    name: 'About'
  },]

  return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">

      <Link className="navbar-brand" to="/">Parcel starter</Link>

      <ul className="nav nav-pills" >
        {links.map((l, i) =>
          <li key={i} className="nav-item">
            <Link className={`nav-link ${location.pathname == l.path && 'active'}`} to={l.path}>{l.name}</Link>
          </li>
        )}
      </ul>
    </nav>

  </>
}

export const App = (props) => {
  return <>
    < Navbar />
    <div class="container">

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </>
}