import React from 'react'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
export default function AboutUs() {

  return (
    <>
      <div className='eight'><br />
        <h1>Team Social Network</h1>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <img src="https://img.freepik.com/premium-vector/front-end-developer-icon-vector-woman-work-laptop_88813-2677.jpg?w=2000" alt=""
                className='card-img-top imgborder'
              />
            </div>
            <div className="description">
              <hr />
              <h3>Divija Panchal</h3>
              <h5>Frontend Developer</h5>

            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img src="https://thumbs.dreamstime.com/b/guy-command-line-circle-backend-developer-thin-icon-ui-concept-programmer-vector-sign-white-background-outline-style-228204483.jpg" alt="Mann Shrimali"
                className='card-img-top imgborder'
              />
            </div>
            <div className="description">
              <hr />
              <h3>Mann Shrimali</h3>
              <h5>Backend Developer</h5>
            </div>
          </div>

          <div className="col-4">
            <div className="card">
              <img src="https://static.vecteezy.com/system/resources/previews/006/369/559/non_2x/have-a-look-at-this-editable-flat-illustration-of-cloud-database-vector.jpg" alt=""
                className='card-img-top imgborder'
              />
            </div>
            <div className="description">
              <hr />
              <h3>Hetvi Kuvaradiya</h3>
              <h5>Database Administrator</h5>

            </div>
          </div>
        </div>

        <br />

        <div className='seven'><br />
          <h1>Our GitHub Repository</h1>
          <br />
          <div className="logo">
            <img className='imgborder' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GITHUB" width='350' />
          </div>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col>
              <a href="https://github.com/mannshrimali2110/Movie-MERN-Project" target="_blank" rel="noopener noreferrer">
                <button className='git'>Go To Github</button>
              </a>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </div>
      </div>

    </>
  )
}