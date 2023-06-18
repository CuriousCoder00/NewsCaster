import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

  render() {
    return (
        <nav className={`navbar sticky-top navbar-${this.props.theme==="dark"?"dark":"primary"} navbar-expand-lg bg-body-tertiary border-bottom border-bottom-dark`} data-bs-theme={`${this.props.theme==="dark"?"dark":"light"}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsCaster</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/businessnews">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainmentnews">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/generalnews">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/healthnews">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sciencenews">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sportsnews">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technologynews">Technology</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
            <div className="form-check form-switch">
                <input className="form-check-input" style={{cursor: 'pointer'}} onClick={this.props.toggleTheme} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className={`form-check-label text-${this.props.theme==="dark"?"light":"dark"}`} htmlFor="flexSwitchCheckDefault">Enable {this.props.theme==="dark"?"Light":"Dark"} Mode</label>
            </div>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}
