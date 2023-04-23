import React from "react";
import { Link, } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

export default function Movie() {

    return (
        <div className="content">
            <br />
            <br />
            <div className="eight">
                <h1>Genre </h1>
            </div>
            <br />
            <Row className="padrow">
                <Col>
                    <Link to='/comedy'>
                        <div className="card">
                            <img src="./images/Comedy.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col>
                    <Link to='/mystery'>
                        <div className="card">
                            <img src="./images/Mystery.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col>
                    <Link to='/drama'>
                        <div className="card">
                            <img src="./images/Drama.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                </Col>
                <Col>
                    <Link to='/fantasy'>
                        <div className="card">
                            <img src="./images/Fantasy.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col>
                    <Link to='/thriller'>
                        <div className="card">
                            <img src="./images/Thriller.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col>
                </Col>
            </Row>
            <br />
            <Row className="padrow">
                <Col>
                    <Link to='/romance'>
                        <div className="card">
                            <img src="./images/Romance.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col>
                    <Link to='/scifi'>
                        <div className="card">
                            <img src="./images/Sci-fi.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col>
                    <Link to='/action'>
                        <div className="card">
                            <img src="./images/Action.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                </Col>
                <Col>
                    <Link to='/crime'>
                        <div className="card">
                            <img src="./images/Crime.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col>

                    <Link to='/Horror'>
                        <div className="card">
                            <img src="./images/Horror.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col>
                </Col>
            </Row>
        </div>
    );
}