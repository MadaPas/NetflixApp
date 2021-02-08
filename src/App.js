import React from "react";

import apiReq from "./request";

import Nav from "./components/Navigation";
import Banner from "./components/Banner";
import Row from "./components/Row";


import "./styles/Styles.scss";

function App() {
    return (
        <div className="app">
            <Nav />
            <Banner />
            <Row
                title="NETFLIX"
                fetchURL={apiReq.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Trending Now" fetchURL={apiReq.fetchTrending} />
            <Row title="Top Rated" fetchURL={apiReq.fetchTopRated} />
            <Row title="Horror Movies" fetchURL={apiReq.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchURL={apiReq.fetchRomanceovies} />
            <Row title="Action Movies" fetchURL={apiReq.fetchActionMovies} />
            <Row title="Comedy Movies" fetchURL={apiReq.fetchComedyMovies} />
            <Row title="Documentaries" fetchURL={apiReq.fetchDocumentaries} />
        </div>
    );
}

export default App;