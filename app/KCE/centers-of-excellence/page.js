import InnerBanner from "@/components/KCE/common/InnerBanner";
import { department } from "@/utils/constant.util";
const centers = [
  {
    title: "EMC Corporation",
    subtitle: "Academic Alliance Center",
    logo: "/images/kce/EMC-Corporation-435x280.webp",
    points: [
      "Faculty members were trained at EMC Corporation and equipped to train students on Information Storage Management.",
      "654 students were trained on Information Storage Management.",
      "KCE was selected and awarded by EMC Corporation for being one among the TOP 5 academic alliance colleges in Tamil Nadu.",
    ],
  },
  {
    title: "Infosys Campus Connect",
    subtitle: "Industry Partnership Program",
    logo: "/images/kce/re.webp",
    points: [
      "Advanced Partner College status and rated among TOP 3 performers under Infosys, Chennai.",
      "2000+ students have been trained in 9 technical modules of Infosys so far.",
      "During the last 3 years, 222 students had undergone internship at Infosys.",
    ],
  },
  {
    title: "Oracle Workforce Development Center",
    subtitle: "Enterprise Skill Program",
    logo: "/images/kce/ORACLE-WORKFORCE-DEVELOPEENT.webp",
    points: [
      "Faculty members were trained by Oracle Corporation and students were trained at the institution on Oracle Technology Products.",
      "119 students were trained in Oracle 9i: Introduction to SQL.",
      "114 students were trained in Oracle 9i: DBAI.",
      "96 students were trained in Oracle 10g: Introduction to SQL.",
    ],
  },
  {
    title: "National Instruments LabView Academy",
    subtitle:
      "National Instruments LabView Academy for Virtual Instrumentation",
    logo: "/images/kce/LV_Academy_logo_16x9-435x280.webp",
    points: [
      "Recognized as Training Center for Professional Certification from National Instruments, USA.",
      "About 250+ students have undergone training so far.",
    ],
  },
  {
    title: "B&R Center of excellence",
    subtitle: "",
    logo: "/images/kce/br.webp",
    points: [
      "Provides Training in Industrial Automation in collaboration with B&R Automation.",
    ],
  },
];

export default function COEModern() {
  return (
    <section className="coe-modern">
      <InnerBanner
        data={{
          department_name: department.name,
          bannerImg: department.bannerImg,
        }}
      />

      <div className="container">
        {centers.map((c, i) => (
          <div key={i} className={`coe-panel ${c.accent}`}>
            <div className="row align-items-center">
              <div className="col-lg-8 content">
                <span className="subtitle">{c.subtitle}</span>
                <h3>{c.title}</h3>

                <ul>
                  {c.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>

              <div className="col-lg-4">
                <div className="logo-glass">
                  <img src={c.logo} alt={c.title} />
                </div>
              </div>
            </div>
          </div>
        ))}

        <section className="kisd-modern">
          <div className="container">
            {/* HEADER */}
            <div className="kisd-header text-center">
              <span className="badge">Innovation & Entrepreneurship</span>
              <h2>KISDC – Igniting Ideas into Impact</h2>
              <p>
                Empowering creativity, innovation, and entrepreneurial
                excellence by bridging research, industry, and
                commercialization.
              </p>
            </div>

            {/* HIGHLIGHTS */}
            <div className="row g-4 mt-5">
              <div className="col-md-6 col-lg-4">
                <div className="kisd-card">
                  <h5>Innovation Ecosystem</h5>
                  <p>
                    Fostering creativity through seminars, innovation programs,
                    and product-oriented research & development.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="kisd-card">
                  <h5>From R&D to Market</h5>
                  <p>
                    Bridging the gap between research and commercialization by
                    accelerating indigenous product development.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="kisd-card">
                  <h5>Startup & IPR Support</h5>
                  <p>
                    Facilitating entrepreneurial training, IPR guidance, and
                    encouraging faculty & student startup initiatives.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="kisd-card">
                  <h5>Industry Alignment</h5>
                  <p>
                    Ensuring strong interaction between academia and industry to
                    align education with real market demands.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="kisd-card">
                  <h5>Skill & Entrepreneurship Programs</h5>
                  <p>
                    Conducting EAC, EDP, FDP, and Skill Development Programs to
                    nurture future-ready professionals.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="kisd-card">
                  <h5>Mentorship & Innovation Projects</h5>
                  <p>
                    Mentoring student entrepreneurs and initiating innovative
                    projects for product development every year.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
          </div>
        </section>
      </div>
    </section>
  );
}
