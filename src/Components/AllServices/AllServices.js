import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleData from '../SingleData/SingleData';

const AllServices = () => {
    const [data, setData] = useState([]);

    useEffect( () => {
        fetch("./fakeData.json")
            .then(res => res.json())
            .then(data => setData(data))
    },[])
    return (
        <div>
            <Container className="my-5">
                <Row xs={1} md={4} className="g-4">
                    {
                        data.map(singleData => <SingleData key={singleData.id} info={singleData}></SingleData>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AllServices;