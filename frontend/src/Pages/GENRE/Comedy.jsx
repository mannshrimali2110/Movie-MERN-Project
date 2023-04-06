import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
function Comedy() {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const res = await axios.get("http://localhost:5000/comedy");
        setMovies(res.data);

      } catch (err) {
        console.log(err);
      }
    };
    fetchAllMovies();

  }, []);

  return (
    <div className="movielist"><br /><br />
      <div className="eight">
        <h1>Search Result </h1>
      </div>
      <br />
      <Row>
        <Col></Col>
        <Col>
          <div className="border_">
            {movies.map((movie, id) => (
              <div key={id}>
                <h2> {id + 1}   <span>:  <a className="movienm" href={movie.Movie_link}>{movie.MovieName} </a> {movie.Year}</span></h2>
                <br />
                <h3>Genre : <h3 className="genre">{movie.Genre[0]} , {movie.Genre[1]} , {movie.Genre[2]} </h3></h3>
                <br />
                <img className="imgborder" src={movie.IMLink} alt="INITIALIMG" width='200' />

                <h2> RATINGS :
                  <h2 className="genre">{movie.Rating} </h2>  </h2>
                <br />
                <p className="desc">DESCRIPTION : <p className="genre"> {movie.Description}</p></p>
                <hr className="redhr" />
              </div>
            ))}
          </div>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}


export default Comedy;

