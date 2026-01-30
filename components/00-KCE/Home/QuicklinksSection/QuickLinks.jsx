import "./QuickLinks.css";

const links = [
  { img: "/images/kce/home/icons/1.svg", label: "Vidya Lakshmi Portal" },
  { img: "/images/kce/home/icons/2.svg", label: "National Digital Library" },
  { img: "/images/kce/home/icons/3.svg", label: "Student Alumni" },
  { img: "/images/kce/home/icons/4.svg", label: "Anti Ragging Committee" },
  { img: "/images/kce/home/icons/5.svg", label: "Admission Enquiries" }
];

export default function QuickLinks() {
  return (
    <div className="quicklinks">
      {links.map((item, i) => (
        <div className="quicklink" key={i}>
          <div className="icon"> <img
        src={item.img}
        alt={item.label}
        className="quick-link-icon"
      /></div>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}
