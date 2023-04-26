import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

function Moviesearch() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchAllMovies = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api3");
                setMovies(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllMovies();
    }, []);

    return (
        <div className="content">
            <div className="movielist">
                <br />
                <br />
                <div className="eight">
                    <h1>Search Result </h1>
                </div>
                <br />
                <Row>
                    <Col></Col>
                    <Col>
                        {movies.length > 0 ? (
                            <div className="border_">
                                {movies.map((movie, id) => (
                                    <div key={id}>
                                        <h2>
                                            {id + 1} :{" "}
                                            <a
                                                className="movienm"
                                                href={movie.Movie_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {movie.MovieName}{" "}
                                            </a>{" "}
                                            {movie.Year}
                                        </h2>
                                        <br />
                                        <h3>
                                            Genre :{" "}
                                            <span className="genre">
                                                {movie.Genre[0]} , {movie.Genre[1]} , {movie.Genre[2]}{" "}
                                            </span>
                                        </h3>
                                        <br />
                                        <img
                                            className="imgborder"
                                            src={movie.IMLink}
                                            alt="INITIALIMG"
                                            width="200"
                                        />

                                        <h2>
                                            RATINGS :
                                            <span className="genre"> {movie.Rating} </span>{" "}
                                        </h2>
                                        <br />
                                        <p className="desc">
                                            DESCRIPTION :{" "}
                                            <span className="genre"> {movie.Description}</span>
                                        </p>
                                        <hr className="redhr" />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="border_">
                                <h1>No Movie found</h1>
                                <br />
                                <img src="/images/NoMovieFound.jpg" alt="No Movie Found." height='300' />
                            </div>
                        )}
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        </div>
    );
}

export default Moviesearch;
