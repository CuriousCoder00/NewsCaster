import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 6,
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsCaster`;
  }

  async componentDidMount() {
    this.props.setProgress(10);
    this.setState({loading:true});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.myApi}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(15);
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(60);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.myApi}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <>
        <h2
          className={`my-3 text-${
            this.props.theme === "dark" ? "light" : "dark"
          } text-center`}
          id="heading"
        >
          NewsCaster - Top Headlines From{" "}
          {this.capitalizeFirstLetter(this.props.category)}
        </h2>
        {this.state.loading && <Spinner mode={this.props.theme} />}
        <InfiniteScroll
          className="my-3"
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner mode={this.props.theme} />}
          endMessage={
            <p className={`text-center text-${this.props.theme==='dark'?'light':'dark'}`}>
              <b>There's nothing more to see...!!</b>
            </p>
          }
        >
          <div className="container d-flex">
            <div className="row">
              {this.state.articles.map((ele) => {
                return (
                  <div className="col-lg-4" key={ele.url}>
                    <NewsItems
                      title={ele.title ? ele.title : " "}
                      description={
                        ele.description ? ele.description.slice(0, 80) : ""
                      }
                      newsUrl={ele.url}
                      imageUrl={
                        ele.urlToImage
                          ? ele.urlToImage
                          : "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png"
                      }
                      mode={this.props.theme}
                      author={!ele.author ? "Unknown" : ele.author}
                      date={new Date(ele.publishedAt).toGMTString()}
                      source={ele.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
