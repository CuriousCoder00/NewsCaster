import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div
          className={`card bg-${this.props.mode === "dark" ? "dark" : "light"}`}
          style={{ minHeight: "30rem" }}
        >
          <div className="position-absolute end-0">
            <span
              className="badge rounded-pill bg-danger"
            >
              {source}
            </span>
          </div>
          <img src={imageUrl} className="card-img-top mx-auto" alt="..." />
          <div
            className={`card-body text-${
              this.props.mode === "dark" ? "light" : "dark"
            }`}
          >
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...
            <span className="text-end">
              <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                className={`text-${
                  this.props.mode === "dark" ? "danger" : "primary"
                }`}
              >
                Read More &gt;&gt;
              </a>
            </span></p>
            <p className="card-text">
              <small className="text-secondary">
                By {author} on {date}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
