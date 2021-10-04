import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleData from '../SingleData/SingleData';
import "./Home.css"


const Home = () => {
    const [data, setData] = useState([]);

    useEffect( () => {
        fetch("./fakeData.json")
            .then(res => res.json())
            .then(data => setData(data))
    },[])
    return (
        <div>
            <section id="showcase" className="py-5 text-light mb-5">
                <div className="primary-overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5 pt-5">
                            <h1 className="display-1 mt-5 pt-5">LEARN FROM THE BEST</h1>
                            <p className="lead">Get Ahead, Improve Your Skill with Dev Skill Training Academy.</p>
                            <a href="#" className="btn btn-outline-light btn-lg"><i className="fa fa-arrow-right"></i> Read More</a>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <Container classNameName="my-5">
                <Row xs={1} md={4} classNameName="g-4">
                    {
                        data.slice(0,6).map(singleData => <SingleData key={singleData.id} info={singleData}></SingleData>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;