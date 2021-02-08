import React, { useState, useEffect } from "react";
import axios from "../axios";
import apiReq from "../request";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(apiReq.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "top left",
            }}
        >
            <div className="banner__content">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner__button">Play</div>
                <div className="banner__button">My List</div>

                <h2 className="banner__description">
                    {truncate(movie.overview, 150)}
                </h2>
            </div>
        </header>
    );
}

export default Banner;