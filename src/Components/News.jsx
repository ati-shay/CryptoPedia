import axios from "axios";
import React, { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const url =
    "https://newsapi.org/v2/everything?q=cryptocurrencies&apiKey=1ef9fbc4146c4e73a659e218f25c36d8";

  const fetchNews = async () => {
    setLoading(true);
    const { data } = await axios.get(url);
    setNews(data.articles);
    setLoading(false);
  };
  console.log(news);

  useEffect(() => {
    fetchNews();
  }, []);

  let homeStyle = {
    backgroundColor: "rgb(219, 224, 226)",
  };

  let ParaStyle = {
    fontWeight: 700,
    fontFamily: "Ubuntu",
  };

  return (
    <>
      {loading ? (
        <div class="progress">
          <div
            class="progress-bar progress-bar-striped bg-secondary"
            role="progressbar"
            style={{
              width: "100%",
              ariaValuenow: 100,
              ariaValuemin: 0,
              ariaValuemax: 100,
            }}
          ></div>
        </div>
      ) : (
        <div
          className="container-fluid p-3"
          style={{
            minHeight: "84.2vh",
          }}
        >
          <h2 className="textCenter ">Crypto Market News</h2>
          <div className="row text-center">
            {news.map((coin, ind) => {
              return (
                <div className="col-10 col-md-3 mt-4 " key={ind}>
                  <a
                    rel="noreferrer"
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                    target="_blank"
                    href={coin?.url}
                  >
                    <div className="card p-2 cardHover" style={homeStyle}>
                      <div className="card">
                        <img
                          src={coin.urlToImage}
                          className="card-img-top"
                          alt={coin.source.name}
                        />
                        <div className="card-body">
                          <h5
                            className="card-title"
                            style={{
                              textAlign: "left",
                            }}
                          >
                            {coin.title}
                          </h5>
                          <p
                            className="card-text"
                            style={{
                              textAlign: "left",
                            }}
                          >
                            {coin.description}..
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href={coin?.url}
                            >
                              Read more
                            </a>
                          </p>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              // justifyContent: "flex-start",
                              alignItems: "flex-start",
                            }}
                          >
                            <p style={ParaStyle}>
                              Author:{" "}
                              <span>
                                {coin.author === null ? "Me" : coin.author}
                              </span>
                            </p>
                            <p style={ParaStyle}>
                              Published On:{" "}
                              <span>{coin.publishedAt.slice(0, 10)}</span>
                            </p>
                            <p style={ParaStyle}>
                              Source : <span>{coin.source.name}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default News;
