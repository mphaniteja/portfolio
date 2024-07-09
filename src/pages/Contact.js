import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="container mt-4">
      <h1 className="mt-4 mb-5 text-center">Contact Details</h1>
      <div className="card-deck mt-4">
        <div className="card text-center border-warning shadow-sm ">
          <div className="card-body">
            <img src={`${process.env.PUBLIC_URL}/github.png`}  className="mb-3 image_width" alt="GitHub Logo" />
            <h5 className="card-title">GitHub</h5>
            <p className="card-text">
              <Link to="https://github.com/mphaniteja" target="_blank" className="btn btn-warning stretched-link">Visit GitHub</Link>
            </p>
          </div>
        </div>
        <div className="card text-center border-warning shadow-sm ">
          <div className="card-body">
            <img src={`${process.env.PUBLIC_URL}/linkedin.png`}  className="mb-3 image_width" alt="LinkedIn Logo" />
            <h5 className="card-title">LinkedIn</h5>
            <p className="card-text">
              <Link to="https://www.linkedin.com/in/phaniteja-maddinapudi-50682b1bb" target="_blank" className="btn btn-warning stretched-link">Visit LinkedIn</Link>
            </p>
          </div>
        </div>
        <div className="card text-center border-warning shadow-sm ">
          <div className="card-body">
            <img src={`${process.env.PUBLIC_URL}/email.png`} className="mb-3 image_width" alt="Email Icon" />
            <h5 className="card-title">Email</h5>
            <p className="card-text">
              <Link to="mailto:mphaniteja2002@gmail.com" target="_blank" className="btn btn-warning stretched-link">Send Email</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
