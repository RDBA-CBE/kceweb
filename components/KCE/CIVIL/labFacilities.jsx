"use client";

import { FlaskConical } from "lucide-react";

const LABS = [
  "Strength of Materials Laboratory",
  "Fluid Mechanics Laboratory",
  "Construction Materials Laboratory",
  "Concrete and Highway Laboratory",
  "Soil Mechanics Laboratory",
  "Survey Laboratory",
  "Environmental Engineering Laboratory",
  "Computer Aided Design and Drafting Laboratory",
];

export default function LabFacilities() {
  return (
    <section className="lab-section container py-5">
      <h2 className="lab-title mb-4">Lab Facilities</h2>

      <div className="row g-4">
        {LABS.map((lab, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6">
            <div className="lab-card">
              <div className="lab-icon">
                <FlaskConical size={26} />
              </div>

              <h5 className="lab-name">{lab}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
