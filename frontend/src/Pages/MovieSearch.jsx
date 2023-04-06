import React from "react";
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Search() {

  const navigate = useNavigate();
  const [MovieSearch, setMN] = useState('');


  const handleChange = (e) => {
    setMN((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    console.log(MovieSearch);
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api3", MovieSearch);
      navigate('/moviesearch')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <br />
      <div className="eight">
        <h1>CineFlicks</h1>
      </div>
      <br />
      <div className="header">
        <div className="form-group">
          <input
            type="text"
            name="MovieSearch"
            id="searchBox"
            placeholder="   Search Movies"
            onChange={handleChange}
          />

          <div>
            <div className="mybtn">
              <button type="button" className="btn btn-secondary" onClick={handleClick}>Search</button>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default Search;
