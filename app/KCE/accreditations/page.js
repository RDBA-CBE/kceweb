import InnerBanner from "@/components/KCE/common/InnerBanner";
import { department } from "@/utils/constant.util";
import { Award, CheckCircle } from "lucide-react";

const departments = [
  "Information Technology",
  "Mechanical Engineering",
  "Electronics and Communication Engineering",
  "Electrical and Electronics Engineering",
  "Computer Science and Engineering",
  "Civil Engineering",
];

const partners = [
  {
    logo: "/images/kce/accereditation/infosys.webp",
    title: "Infosys Campus Connect",
  },
  {
    logo: "/images/kce/accereditation/academic-allience.webp",
    title: "EMC Academic Alliance Centre",
  },
  {
    logo: "/images/kce/accereditation/national-instrumwnt.webp",
    title: "National Instruments Lab",
  },
  {
    logo: "/images/kce/accereditation/perfection-in-automation.webp",
    title: "B&R Centre of Excellence",
  },
  { logo: "/images/kce/accereditation/wipro.webp", title: "Wipro Mission 10X" },
  {
    logo: "/images/kce/accereditation/mems.webp",
    title: "MEMS Centre of Excellence",
  },
  {
    logo: "/images/kce/accereditation/microsoft.webp",
    title: "Microsoft Technical Services Lab",
  },
  {
    logo: "/images/kce/accereditation/oracle.webp",
    title: "Oracle Workforce Development Centre",
  },
  {
    logo: "/images/kce/accereditation/tech-mahindra.webp",
    title: "Tech Mahindra Infrastructure",
  },
];


const partners1 = [
  {
    logo: "/images/kce/accereditation/global-edge.webp",
    title: "Gloabl Edge",
  },
  {
    logo: "/images/kce/accereditation/infosys-nav.webp",
    title: "Infosys",
  },
  {
    logo: "/images/kce/accereditation/emc-2.webp",
    title: "EMC 2",
  },
  {
    logo: "/images/kce/accereditation/microsoft.webp",

    title: "Microsoft",
  },
  { logo: "/images/kce/accereditation/national.webp", title: "National Instruments" },
  {
    logo: "/images/kce/accereditation/agiit.webp",
    title: "AGIIT",
  },
  {
    logo: "/images/kce/accereditation/pyramid-design.webp",
    title: "Pyramiid Design",
  },
  {
    logo: "/images/kce/accereditation/medisim.webp",
    title: "Medism Structures",
  },
  
];

export default function AccreditationSection() {
  return (
    <section className="accreditation-dashboard">
       <InnerBanner data={{ 
        department_name: department.name, 
        bannerImg: department.bannerImg 
      }} />
      <div className="container  py-5">
        {/* Dashboard Layout */}
        <div className="row g-4">
          {/* NAAC Panel */}
          <div className="col-lg-4">
            <div className="dash-card naac">
              <div className="dash-header">
                <Award size={22} />
                <span>Institutional</span>
              </div>

              <div className="dash-body">
                <h3>NAAC</h3>
                <p className="dash-text">
                  Accredited by the
                  <strong>
                    {" "}
                    National Assessment and Accreditation Council
                  </strong>
                  with an
                  <span className="grade"> A+ Grade</span>, recognizing
                  excellence in governance, teaching–learning, research, and
                  student outcomes.
                </p>

                <div className="metric-box">
                  <div>
                    <span className="metric-label">Accreditation</span>
                    <strong>A+</strong>
                  </div>
                  <div>
                    <span className="metric-label">Level</span>
                    <strong>Institution</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NBA Panel */}
          <div className="col-lg-8">
            <div className="dash-card nba">
              <div className="dash-header">
                <Award size={22} />
                <span>Programme</span>
              </div>

              <div className="dash-body">
                <h3>NBA</h3>
                <p className="dash-text mb-4">
                  The following programmes are accredited by the
                  <strong> National Board of Accreditation</strong>, ensuring
                  outcome-based education and industry relevance.
                </p>

                <div className="programme-grid">
                  {departments.map((dept, index) => (
                    <div key={index} className="programme-tile">
                      <CheckCircle size={16} />
                      <span>{dept}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="partners-showcase">
          <div className="container">
            <div className="section-header text-center mb-5">
              <h2>Industry Collaborations</h2>
              <p>We also have active MoUs & Centres of Excellence such as</p>
            </div>

            <div className="showcase-grid">
              {partners.map((item, index) => (
                <div className="showcase-item">
                  <span className="side-band"></span>

                  <div className="content">
                    <img src={item.logo} alt={item.title} />
                    <h6>{item.title}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="partners-anchor-section">
          <div className="container">
            <div className="anchor-header text-center mb-5">
              <h2>Electives</h2>
              <p>17 Industry collaborated electives in association with</p>
            </div>

            <div className="anchor-grid">
              {partners1.map((item, index) => (
                <div key={index} className="anchor-box">
                  <span className="corner-anchor"></span>

                  <img src={item.logo} alt={item.title} />
                  <h6>{item.title}</h6>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

/* ================= DASHBOARD STYLE UI ================= */
