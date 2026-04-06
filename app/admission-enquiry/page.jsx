import InnerBanner from "@/components/00-KCE/common/InnerBanner";
import AdmissionEnquiryForm from "@/components/00-KCE/DirectComponents/AdmissionEnquiryForm";

export const metadata = {
  title: "Admission Enquiry | KCE",
  description: "Fill in the admission enquiry form to get in touch with the KCE admissions team.",
};

const bannerData = {
  title: "Admission Enquiry",
  bannerImg: "/images/kce/banner_civil.jpeg",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Admission Enquiry" },
  ],
};

const AdmissionEnquiryPage = () => {
  return (
    <>
      <InnerBanner data={bannerData} />

      <section className="py-5" style={{ background: "var(--color-gray-light)" }}>
        <div className="section-wid">
          <div className="row justify-content-center">

            {/* Left — info panel */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div
                style={{
                  background: "var(--kce-bg)",
                  borderRadius: "var(--radius-big)",
                  padding: "40px 32px",
                  height: "100%",
                  color: "#fff",
                }}
              >
                <div className="decorative-line mb-4" />
                <h4 style={{ color: "#fff", fontWeight: 600, marginBottom: 12 }}>
                  Get in Touch
                </h4>
                <p style={{ color: "var(--kce-text-muted)", marginBottom: 32, lineHeight: 1.7 }}>
                  Interested in joining KCE? Fill out the form and our admissions team will reach out to you shortly.
                </p>

                <div className="d-flex flex-column gap-4">
                  {[
                    { icon: "feather-phone", label: "Admissions Helpline", value: "+91 98765 43210" },
                    { icon: "feather-mail", label: "Email Us", value: "admissions@kce.ac.in" },
                    { icon: "feather-map-pin", label: "Campus", value: "Sugunapuram, Coimbatore - 641 032" },
                  ].map(({ icon, label, value }) => (
                    <div key={label} className="d-flex align-items-start gap-3">
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          background: "rgba(204,105,38,0.18)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <i className={icon} style={{ color: "var(--kce-accent)", fontSize: 18 }} />
                      </div>
                      <div>
                        <p style={{ margin: 0, fontSize: 12, color: "var(--kce-text-muted)" }}>{label}</p>
                        <p style={{ margin: 0, fontSize: 14, fontWeight: 500, color: "#fff" }}>{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="col-lg-8">
              <div
                style={{
                  background: "#fff",
                  borderRadius: "var(--radius-big)",
                  padding: "40px 36px",
                  boxShadow: "var(--shadow-1)",
                }}
              >
                <h5 style={{ color: "var(--color-heading)", fontWeight: 600, marginBottom: 6 }}>
                  Admission Enquiry Form
                </h5>
                <p style={{ color: "var(--color-body)", marginBottom: 28, fontSize: 14 }}>
                  Fields marked with <span style={{ color: "var(--kce-accent)" }}>*</span> are required.
                </p>
                <AdmissionEnquiryForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AdmissionEnquiryPage;
