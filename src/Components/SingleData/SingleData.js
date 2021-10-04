import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons'
import { Card, Col } from 'react-bootstrap';
import "./SingleData.css"

const SingleData = (props) => {
    const {img, name, date, duration, price} = props.info;
    return (
        <Col>
            <Card className="h-100 shadow">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <h6>{name}</h6>
                    <div className="d-flex">
                        <div>
                            <p className="mb-1">
                                <FontAwesomeIcon icon={faCalendarAlt} className="me-2 icon-design" />
                                <small>{date}</small>
                            </p>
                            <p className="mb-1">
                                <FontAwesomeIcon icon={faClock} className="me-2 icon-design" />
                                <small>Total-Hours: {duration}</small>
                            </p>
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <small className="text-muted">Tk : {price}</small>
                    <b className="text-muted">Enroll Now</b>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default SingleData;