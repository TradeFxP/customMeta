import React from 'react';
import './WorkingProcess.css';
import devCodingImg from '../assets/images/dev&cod.jpeg';
import discoveryImg  from '../assets/images/Disc_Analysis0.jpg.jpeg';
import planningImg   from '../assets/images/planing&design.jpg';
import testingImg    from '../assets/images/Testing&quality.jpg';
import deploymentImg from '../assets/images/confident-call-center-operator-talking-with-client.jpg';

const WorkingProcess = () => {
  const processes = [
    {
      id: 1,
      title: "Discovery &\nAnalysis",
      description: "We analyze your business requirements, understand your goals, and identify the best technology solutions",
      image: discoveryImg,
      number: "01"
    },
    {
      id: 2,
      title: "Planning &\nDesign",
      description: "Our team creates detailed architecture, wireframes, and prototypes aligned with your vision",
      image: planningImg,
      number: "02"
    },
    {
      id: 3,
      title: "Development &\nCoding",
      description: "Expert developers build your solution using cutting-edge technologies and best practices",
      image: devCodingImg,
      number: "03"
    },
    {
      id: 4,
      title: "Testing &\nQuality Assurance",
      description: "Rigorous testing ensures bug-free, secure, and high-performance software delivery",
      image: testingImg,
      number: "04"
    },
    {
      id: 5,
      title: "Deployment &\nSupport",
      description: "We launch your solution and provide ongoing maintenance, updates, and technical support",
      image: deploymentImg,
      number: "05"
    }
  ];

  return (
    <section id="process" className="working-process section section-padding fade-anim" data-direction="right">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-header text-center">
              <h2 className="section-title">Working Process</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="working-process__shape">
              <svg width="1920" height="547" viewBox="0 0 1920 547" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M290 430L520 395L710 395L820 465L1080 465L1210 395L1400 395L1740 465"
                  stroke="#0131e9"
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <circle cx="520" cy="395" r="12" fill="#0131e9"></circle>
                <circle cx="820" cy="465" r="12" fill="#0131e9"></circle>
                <circle cx="1210" cy="395" r="12" fill="#0131e9"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="container medium-container">
        <div className="row">
          <div className="col-12">
            <div className="working-process__items">
              {processes.map((process) => (
                <div className="working-process__item" key={process.id}>
                  <div className="item-thumb">
                    <img src={process.image} alt="working-process" className="w-100 h-100" />
                  </div>
                  <div className="item-content">
                    <h5 className="item-title">
                      {process.title.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          {index < process.title.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </h5>
                    <p>{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
