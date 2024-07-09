import React from 'react';

function WorkExperience() {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "Brillio",
      description: "Developed and maintained web applications using a variety of front-end and back-end technologies, including HTML, CSS, JavaScript, React, Java, Spring Boot, Microservices and databases. ",
      dates: "March 2024 - Current"
    },
    {
      title: "AWS Intern",
      company: "AICTE",
      description: "developed a solid understanding of cloud computing concepts, architectures, and services offered by AWS. ",
      dates: "September 2022 - November 2023"
    },
    {
      title: "Java Internship",
      company: "CodSoft",
      description: "Developed and maintained core functionalities of enterprise applications using Java and Spring Boot",
      dates: "September 2023 - November 2024"
    }
  ];

  return (
    <div className="container">
      <h1 className="mt-4 mb-5 text-center">Work Experience</h1>
      <div className="row">
        {experiences.map((experience, index) => (
          <div key={index} className="col-md-6">
            <div className="card mb-3 border-warning shadow-sm ">
              <div className="card-body">
                <h5 className="card-title">{experience.title} | {experience.company}</h5>
                <p className="card-text">{experience.description}</p>
                <p className="card-text"><small className="text-muted">{experience.dates}</small></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
