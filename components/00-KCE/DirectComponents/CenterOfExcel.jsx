import InnerBanner from "@/components/00-KCE/common/InnerBanner";
import { department } from "@/utils/constant.util";
import data from "@/JSON/centerOfExcel.json";

export default function CenterOfExcel() {
  return (
    <section className="coe-modern">
      <InnerBanner data={data?.banner} />

      <div className="section-wid section-bg1">
        <div className="row align-items-stretch ">
          {data?.center?.content.map((c, i) => (
            <div  className="col-12 col-xl-6 d-flex">
              <div key={i} className={` coe-panel ${c.accent} d-flex flex-column w-100`}>
              <div className="row align-items-center h-100">
                <div className="col-lg-8 content">
                  <span className="ti-badge-wbg">{c.subtitle}</span>
                  <h3 className="section-ti mt-1">{c.title}</h3>

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
            </div>
            
          ))}
        </div>

        <section className="kisd-modern">
      <div className="container">
        {/* HEADER */}
        <div className="kisd-header text-center">
          <span className="badge">{data?.header?.badge}</span>
          <h2>{data?.header?.title}</h2>
          <p>{data?.header?.description}</p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="row g-4 mt-5">
          {data?.highlights.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="kisd-card">
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      </div>
    </section>
  );
}
