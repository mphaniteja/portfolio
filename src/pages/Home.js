import React from "react";

function Home() {
    let frameworksAndLibraries = ["React.js", "Spring", "Spring Boot", "Jest", "Junit"];
    let programmingLanguages = ["Java", "Python", 'Javascript'];
    let webTechnologies = ["HTML", "CSS", "JavaScript"];
    let database = ["MySQL"];
    let cloudPlatforms = "Amazon Web Services (AWS)";
    let softwareDevp = ["Data Structures", "Algorithms", "Object-Oriented Programming", "Microservices"];
    let softSkills = ["Teamwork", "Communication", "Leadership", "Decision Making", "Problem Solving", "Creativity"];
    let educationDetails = [
      "Dayananda Sagar Academy of Technology and Management, Bachelor of Engineering - ECE, 8.8 CGPA, completed in 2023",
      "Pupil Tree PU College, Pre-University Course - PCMC, 89%, completed in 2019",
      "Vishwajyothi International Public School, ICSE, 84%, completed in 2017"
    ];
    const intro = "Hello, I'm Phani, tech enthusiast with strong problem-solving skills and the ability to perform well in a team. Seeking a challenging role in an organization to utilize my technical, database, and management skills for the growth of the organization and my career.";

    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card border-secondary shadow-sm">
              <img src={`${process.env.PUBLIC_URL}/phani-profile-pic.png`} className="card-img-top" alt="Phani profile pic" />
              <div className="card-body">
                <p className="card-text">{intro}</p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card border border-warning shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title">Education</h3>
                    <ul className="list-unstyled pl-3">
                      {educationDetails.map((text, index) => <li key={index} type='disc'>{text}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card border border-warning shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title">Frameworks & Libraries</h3>
                    <ul className="list-unstyled pl-3">
                      {frameworksAndLibraries.map((skill, index) => <li key={index} type='disc'>{skill}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card border border-warning shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title">Programming Languages</h3>
                    <ul className="list-unstyled pl-3">
                      {programmingLanguages.map((skill, index) => <li key={index} type='disc'>{skill}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card border border-warning shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title">Web Technologies</h3>
                    <ul className="list-unstyled pl-3">
                      {webTechnologies.map((skill, index) => <li key={index} type='disc'>{skill}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
             
              <div className="col-md-6 mb-4">
                <div className="card border border-warning shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title">Databases</h3>
                    <ul className="list-unstyled pl-3">
                      {database.map((skill, index) => <li key={index} type='disc'>{skill}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card border border-warning shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title">Cloud Platforms</h3>
                    <ul className="list-unstyled pl-3">
                      <li type='disc'>{cloudPlatforms}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card border border-warning shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title">Software Development</h3>
                    <ul className="list-unstyled pl-3">
                      {softwareDevp.map((skill, index) => <li key={index} type='disc'>{skill}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card border border-warning shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title">Soft Skills</h3>
                    <ul className="list-unstyled pl-3">
                      {softSkills.map((skill, index) => <li key={index} type='disc'>{skill}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Home;
