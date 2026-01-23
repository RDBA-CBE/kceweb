"use client";

import {
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

const tabs = [
  {
    id: "1",
    title: "Programme Educational Objectives",
    content:
      "Industry-focused curriculum and strong placement support prepare students for successful careers.",
    image: "/images/kce/academics/banner.jpg",
  },
  {
    id: "2",
    title: "Programme Outcomes",
    content:
      "Our institution offers a wide range of programs designed to give students strong academic foundations.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
  },
  {
    id: "3",
    title: "Program Specific Outcomes",
    content:
      "Quality education with real-world exposure and skill development.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  {
    id: "4",
    title: "Smart Class Rooms",
    content: "Modern classrooms with smart boards and digital learning tools.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  },
];

const tab2 = [
  {
    code: "PO1",
    title: "Engineering knowledge",
    description:
      "Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
  },
  {
    code: "PO2",
    title: "Problem analysis",
    description:
      "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
  },
  {
    code: "PO3",
    title: "Design / Development of Solutions",
    description:
      "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
  },
  {
    code: "PO4",
    title: "Conduct Investigations of Complex Problems",
    description:
      "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
  },
  {
    code: "PO5",
    title: "Modern Tool Usage",
    description:
      "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
  },
  {
    code: "PO6",
    title: "The Engineer and Society",
    description:
      "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
  },
  {
    code: "PO7",
    title: "Environment and Sustainability",
    description:
      "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
  },
  {
    code: "PO8",
    title: "Ethics",
    description:
      "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
  },
  {
    code: "PO9",
    title: "Individual and Team Work",
    description:
      "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
  },
  {
    code: "PO10",
    title: "Communication",
    description:
      "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
  },
  {
    code: "PO11",
    title: "Project Management and Finance",
    description:
      "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
  },
  {
    code: "PO12",
    title: "Life-Long Learning",
    description:
      "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
  },
];

export default function TabSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log("✌️activeIndex --->", activeIndex);

  const currentTab = tabs[activeIndex];

  const nextTab = () => {
    setActiveIndex((prev) => (prev + 1) % tabs.length);
  };

  const prevTab = () => {
    setActiveIndex((prev) => (prev === 0 ? tabs.length - 1 : prev - 1));
  };

  return (
    <div className="container py-5">
      {/* ===== DESKTOP TABS ===== */}
      <div className="tabs-header desktop-tabs mb-4">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {activeIndex === index ? (
              <ChevronDown size={18} />
            ) : (
              <ChevronRight size={18} />
            )}
            {tab.title}
          </button>
        ))}
      </div>

      {/* ===== MOBILE SLIDER TABS ===== */}
      <div className="mobile-tabs mb-4">
        <button onClick={prevTab} className="arrow-btn">
          <ChevronLeft />
        </button>

        <div className="mobile-tab-title">
          <ChevronDown size={18} />
          {currentTab.title}
        </div>

        <button onClick={nextTab} className="arrow-btn">
          <ChevronRight />
        </button>
      </div>

      {activeIndex == 0 ? (
        <div className="container py-5 peo-section">
          <div className="row">
            <div className="col-lg-12 mb-4 mb-lg-0">
              <ul className="peo-list improved">
                <li>
                  <div className="peo-badge">PEO1</div>
                  <p>
                    Graduates will formulate and solve problems in various
                    domains of Civil Engineering by exhibiting their technical
                    skills.
                  </p>
                </li>

                <li>
                  <div className="peo-badge">PEO2</div>
                  <p>
                    Graduates will communicate effectively and work in
                    multidisciplinary engineering projects following
                    professional ethics.
                  </p>
                </li>

                <li>
                  <div className="peo-badge">PEO3</div>
                  <p>
                    Graduates will become entrepreneurs or successfully pursue
                    higher education for professional development.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : activeIndex == 1 ? (
        <div className="container py-4">
          <div className="po-accent-wrapper">
            {tab2?.map((item) => (
              <div className="po-accent-card">
                <div className="po-badge">{item?.code}</div>
                <div className="po-content">
                  <h3>{item?.title}</h3>
                  <p>{item?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : activeIndex == 2 ? (
        <div className="container py-4">
          <div className="pso-split-wrapper">
            <div className="pso-split-row">
              <div className="pso-strip">
                <span>PSO1</span>
              </div>
              <div className="pso-text">
                <p>
                  Field applications oriented practical knowledge in Civil
                  Engineering such as Planning, Analysis, Designing, Estimation
                  and Execution by applying current concepts of mathematics and
                  physical sciences.
                </p>
              </div>
            </div>

            <div className="pso-split-row">
              <div className="pso-strip">
                <span>PSO2</span>
              </div>
              <div className="pso-text">
                <p>
                  Ability to succeed competitive examinations which offer
                  challenging and rewarding careers and to become an efficient
                  Design Engineer, Structural Consultant, Project Engineer or
                  Construction Manager with strong management skills and
                  leadership qualities.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container py-4">
      <div className="subject-pill-wrapper">

        <div className="subject-pill">
          <span>Mechanics of Solids – I</span>
          <ArrowRight className="subject-arrow" />
        </div>

        <div className="subject-pill">
          <span>Mechanics of Solids – II</span>
          <ArrowRight className="subject-arrow" />
        </div>

        <div className="subject-pill">
          <span>Structural Analysis – I</span>
          <ArrowRight className="subject-arrow" />
        </div>

        <div className="subject-pill">
          <span>Structural Analysis – II</span>
          <ArrowRight className="subject-arrow" />
        </div>

        <div className="subject-pill">
          <span>Foundation Engineering</span>
          <ArrowRight className="subject-arrow" />
        </div>

      </div>
    </div>
      )}
    </div>
  );
}
