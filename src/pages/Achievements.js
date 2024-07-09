import React, { useState } from 'react';
import './Achievements.css'

function Achievements() {
    const certifications = [
        {
          name: "AWS Certified Solutions Architect - Professional",
          description: "Advanced certification validating expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS.",
          certificateImage: "coursera-certificate.jpg"
        },
        {
          name: "AWS Certified Solutions Architect - Associate",
          description: "Intermediate certification focusing on designing distributed systems on AWS and ensuring they are cost-effective and secure.",
          certificateImage: "ranksheet-certificate.jpg"
        },
        {
          name: "AWS Certified Developer Associate",
          description: "Certification validating proficiency in developing, deploying, and debugging cloud-based applications using AWS.",
          certificateImage: "ai-certificate.jpg"
        },
        {
          name: "Secured 3rd place in Brillio - SparXelerate Hackathon",
          description: "An Ultimate Student Hackathon Program to spark imagination, supercharge skills, and step into a world of innovation - conducted by Brillio",
          certificateImage: "codingninjas-certificate.jpg"
        },
        {
          name: "Java Basic Certificate and Gold Badge",
          description: "Earned recognition for exceptional understanding and application of Java programming fundamentals and advanced concepts.",
          certificateImage: "oxford-certificate.jpg"
        },
        {
          name: "Introduction to Data Structures and Algorithms in Java",
          description: "Completed a foundational course covering essential data structures and algorithms in Java, enhancing problem-solving and coding skills.",
          certificateImage: "adobe-certificate.jpg"
        },
        {
          name: "Learn Modern Java using Java 8 features",
          description: "Completed a course focused on modern Java programming using Java 8 features, including lambda expressions, streams, and new APIs.",
          certificateImage: "codingninjas-certificate.jpg"
        },
        {
          name: "Learn SQL using MySQL and Database Design",
          description: "Gained comprehensive knowledge in SQL and database design, with hands-on experience in MySQL for effective data management.",
          certificateImage: "GuviCertificate.png"
        }
      ];
      

//   const [hoveredIndex, setHoveredIndex] = useState(-1);

//   const handleMouseEnter = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(-1);
//   };

  return (
    <div className="container">
      <h1 className="mt-4 mb-5 text-center">Achievements</h1>
      <div className="row">
        {certifications.map((certification, index) => (
          <div key={index} className="col-md-6">
            <div
              className={`card mb-3 border-warning shadow-sm certification-card `}>
            {/*    onMouseEnter={() => handleMouseEnter(index)}
               onMouseLeave={handleMouseLeave} */}
            
              <div className="card-body">
                <h5 className="card-title">{certification.name}</h5>
                <p className="card-text">{certification.description}</p>
                
              </div>
              {/* {hoveredIndex === index && (
                <div className="overlay">
                  <Link className="btn btn-warning" target="_blank" rel="noopener noreferrer">
                    View Certificate
                  </Link>
                </div>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
