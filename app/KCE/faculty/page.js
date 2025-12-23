"use client";

import React from "react";

const FacultyPage = () => {
  const facultyData = [
    {
      id: 1,
      name: "Dr. R. Kumar",
      designation: "Professor & Head",
      email: "rkumar@college.edu",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Ms. S. Priya",
      designation: "Assistant Professor",
      email: "spriya@college.edu",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Mr. A. Manikandan",
      designation: "Associate Professor",
      email: "manikandan@college.edu",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      id: 4,
      name: "Dr. K. Anitha",
      designation: "Assistant Professor",
      email: "anitha@college.edu",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 5,
      name: "Ms. S. Priya",
      designation: "Assistant Professor",
      email: "spriya@college.edu",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 6,
      name: "Mr. A. Manikandan",
      designation: "Associate Professor",
      email: "manikandan@college.edu",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      id: 7,
      name: "Ms. S. Priya",
      designation: "Assistant Professor",
      email: "spriya@college.edu",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 8,
      name: "Mr. A. Manikandan",
      designation: "Associate Professor",
      email: "manikandan@college.edu",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      id: 9,
      name: "Ms. S. Priya",
      designation: "Assistant Professor",
      email: "spriya@college.edu",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 10,
      name: "Mr. A. Manikandan",
      designation: "Associate Professor",
      email: "manikandan@college.edu",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      id: 11,
      name: "Dr. R. Kumar",
      designation: "Professor & Head",
      email: "rkumar@college.edu",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 12,
      name: "Ms. S. Priya",
      designation: "Assistant Professor",
      email: "spriya@college.edu",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <section className="faculty-modern-section py-5">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="faculty-modern-title">Our Faculty</h2>
          <p className="faculty-modern-subtitle">
            Experts shaping future engineers with knowledge & experience
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="row g-4">
          {facultyData.map((faculty) => (
            <div key={faculty.id} className="col-xl-3 col-lg-4 col-md-6">
              <div className="faculty-modern-card">
                <div className="faculty-avatar">
                  <img src={faculty.image} alt={faculty.name} />
                </div>

                <div className="faculty-modern-body">
                  <h5 className="faculty-modern-name">{faculty.name}</h5>
                  <span className="faculty-modern-designation">
                    {faculty.designation}
                  </span>
                </div>

                <div className="faculty-hover-info">
                  <a href={`mailto:${faculty.email}`}>
                    {faculty.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyPage;
