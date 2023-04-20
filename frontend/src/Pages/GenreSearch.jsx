import React from "react";
import { useState } from 'react';
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function Genresearch() {

  const options = ['Comedy', 'Romance', 'Horror', 'Thriller', 'Drama', 'Action', 'Fantasy', 'Sci-Fi', 'Crime', 'Mystery'];

  const [genre1, setGenre1] = useState("Default");
  const [genre2, setGenre2] = useState("Default");

  const genres = { genre1, genre2 }

  const navigate = useNavigate();


  const handleClick = async (e) => {
    e.preventDefault();
    try {
      console.log('Genres 1 :', genres);
      await axios.post("http://localhost:5000/api2", genres);
      console.log('Genres 2 :', genres);
      navigate('/searchresult')
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="seven">
        <h1>Genre Algorithm</h1>
      </div>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <img className="imgborder" src={"./GenreIMG/" + genres.genre1 + ".jpg"} alt='myimg' height='400px' width='400px' />
          </Col>
          <Col>
            <img className="imgborder" src={"./GenreIMG/" + genres.genre2 + ".jpg"} alt='myimg' height='400px' width='400px' />
            <br />
          </Col>
          <Col></Col>
        </Row>
        <br />
        <Row>
          <Col></Col>
          <Col>

            <select className="drop" value={genre1} onChange={(event) => setGenre1(event.target.value)}>
              <option>Genre 1</option>
              {options.map((option) => (
                option !== genre2 && <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </Col>
          <Col></Col>
          <Col>

            <select className="drop" value={genre2} onChange={(event) => setGenre2(event.target.value)}>
              <option>Genre 2</option>
              {options.map((option) => (
                option !== genre1 && <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </Col>
          <Col></Col>
        </Row>
        <br />
        <Row>
          <Col></Col>
          <Col></Col>
          <Col>
            <button className="custom-btn btn-1" onClick={handleClick}>
              SUBMIT
            </button>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default Genresearch;