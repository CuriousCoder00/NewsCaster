import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apiKey=process.env.API_KEY;
  pageSize = 6;

  state = {
    theme: "light",
    progress: 0,
  };

  render() {
    const setProgress = (progress) => {
      this.setState({ progress: progress });
    };

    const toggleTheme = () => {
      if (this.state.theme === "light") {
        this.setState({ theme: "dark" });
        document.body.style.backgroundColor = "rgb(4 17 33)";
      } else {
        this.setState({ theme: "light" });
        document.body.style.backgroundColor = "white";
      }
    }
    return (
      <>
        <Router>
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={3}
          />
          <Navbar theme={this.state.theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  myApi={this.apiKey}
                  setProgress={setProgress}
                  pageSize={this.pageSize}
                  theme={this.state.theme}
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/businessnews"
              element={
                <News
                  myApi={this.apiKey}
                  setProgress={setProgress}
                  pageSize={this.pageSize}
                  key="business"
                  theme={this.state.theme}
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainmentnews"
              element={
                <News
                  myApi={this.apiKey}
                  setProgress={setProgress}
                  pageSize={this.pageSize}
                  key="entertainment"
                  theme={this.state.theme}
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/generalnews"
              element={
                <News
                  myApi={this.apiKey}
                  setProgress={setProgress}
                  pageSize={this.pageSize}
                  key="general"
                  theme={this.state.theme}
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/healthnews"
              element={
                <News
                  myApi={this.apiKey}
                  setProgress={setProgress}
                  pageSize={this.pageSize}
                  key="health"
                  theme={this.state.theme}
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/sciencenews"
              element={
                <News
                  myApi={this.apiKey}
                  setProgress={setProgress}
                  pageSize={this.pageSize}
                  key="science"
                  theme={this.state.theme}
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sportsnews"
              element={
                <News
                  myApi={this.apiKey}
                  setProgress={setProgress}
                  pageSize={this.pageSize}
                  key="sports"
                  theme={this.state.theme}
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technologynews"
              element={
                <News
                  myApi={this.apiKey}
                  setProgress={setProgress}
                  pageSize={this.pageSize}
                  key="technology"
                  theme={this.state.theme}
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
