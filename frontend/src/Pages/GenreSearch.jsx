import React from "react";
import { useState } from 'react';
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function Genresearch() {
  const [genres, setgenre] = useState({
    genre1: "Default",
    genre2: "Default"
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setgenre((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


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
            <select className="drop" name="genre1" onChange={handleChange}>
              <option> Genre 1 </option>
              <option >Comedy</option>
              <option >Romance</option>
              <option >Horror</option>
              <option >Thriller</option>
              <option >Drama</option>
              <option >Action</option>
              <option >Fantasy</option>
              <option >Sci-Fi</option>
              <option >Crime</option>
              <option >Mystery</option>
            </select>
          </Col>
          <Col></Col>
          <Col>
            <select className="drop" name="genre2" onChange={handleChange}>
              <option> Genre 2 </option>
              <option >Comedy</option>
              <option >Romance</option>
              <option >Horror</option>
              <option >Thriller</option>
              <option >Drama</option>
              <option >Action</option>
              <option >Fantasy</option>
              <option >Sci-Fi</option>
              <option >Crime</option>
              <option >Mystery</option>
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
