import "./IndustryPartners.css";

const logos = [
    "/images/kce/home/industry-logos/amazon.svg",
    "/images/kce/home/industry-logos/codingmart.svg",
    "/images/kce/home/industry-logos/cognizant.svg",
    "/images/kce/home/industry-logos/ducen.svg",
    "images/kce/home/industry-logos/embed.svg",
    "images/kce/home/industry-logos/ganit.svg",
    "images/kce/home/industry-logos/hp.svg",
    "images/kce/home/industry-logos/infosys.svg",
    "images/kce/home/industry-logos/skava.svg",
    "images/kce/home/industry-logos/tata.svg",
    "images/kce/home/industry-logos/wipro.svg",
    "images/kce/home/industry-logos/zoho.svg"
];

export default function IndustryPartners() {
  return (
    <section className="industry">
      <h2>Industry & KCE</h2>
      <div className="logoGrid">
        {logos.map((logo, i) => (
          <div className="logoCard" key={i}>
            <img src={logo} alt="company" />
          </div>
        ))}
      </div>
    </section>
  );
}
