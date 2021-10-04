import React from 'react';
import "./OurInstructors.css"

const OurInstructors = () => {
    return (
    <div>
        <section id="authors" class="text-center py-5">
            <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="info-authors mb-5 pb-3">
                        <h1>OUR INSTRUCTORS</h1>
                        <p class="lead mt-3">Always eager to solve real world problems. Participated in many onsite programming contest. My cf handle: Introverted. Currently working as a Software Engineer at Samsung R&D Institute, Bangladesh.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <img src="./img/person1.jpg" class="img-fluid rounded-circle w-50 mb-3" alt="Susan Williams"/>
                            <h3 >Susan Williams</h3>
                            <h5>Software Engineer</h5>
                            <p className="mt-3">Always eager to solve real world problems. Participated in many onsite programming contest. My cf handle: Introverted. Currently working as a Software Engineer at Samsung R&D Institute, Bangladesh.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <img src="./img/person2.jpg" class="img-fluid rounded-circle w-50 mb-3" alt="Susan Williams"/>
                            <h3 >Grace Smith</h3>
                            <h5>Software Architect</h5>
                            <p className="mt-3">I am an engineering graduate from University of Dhaka, specialized in Computer Science & Engineering. I love to learn,code,eat and travel! My CF Handle: reverse_macro</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <img src="./img/person3.jpg" class="img-fluid rounded-circle w-50 mb-3" alt="Susan Williams"/>
                            <h3>John Doe</h3>
                            <h5>DevOps and Systems Administration</h5>
                            <p className="mt-3">Over 10 years of field level and job experiences in IT, Systems Administration, DevOps and Cloud Computing. Also certified AWS Solution Architect Associate</p> 
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <img src="./img/person4.jpg" class="img-fluid rounded-circle w-50 mb-3" alt="Susan Williams"/>
                            <h3>IT Security Analyst</h3>
                            <h5>Artist</h5>
                            <p  className="mt-3">I am a software architect with 10+ years of work experience in the software industry both home and abroad. I am currently doing research in cloud computing and enterprise software architecture.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>    
    </div>
    );
};

export default OurInstructors;