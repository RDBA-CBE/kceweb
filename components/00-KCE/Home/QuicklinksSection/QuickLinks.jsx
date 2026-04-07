import "./QuickLinks.css";
import Link from "next/link";

const links = [
  { img: "/images/kce/home/icons/1.svg", label: "Vidya Lakshmi Portal", href:"https://www.vidyalakshmi.co.in/Students/" },
  { img: "/images/kce/home/icons/2.svg", label: "National Digital Library" , href:"https://ndl.iitkgp.ac.in/"},
  { img: "/images/kce/home/icons/3.svg", label: "Student Alumni" , href:"http://115.249.154.33/Alumni/" },
  { img: "/images/kce/home/icons/4.svg", label: "Anti Ragging Committee",href:"/non-statutory/"  },
  { img: "/images/kce/home/icons/5.svg", label: "Admission Enquiries",  href:"/https://admission.kce.ac.in/"},
];

export default function QuickLinks() {
  return (
    <div className="quicklinks">
      {links.map((item, i) => (
        <Link href={item?.href} target="_blank" className="quicklink" key={i}>
          <div className="icon">
            {" "}
            <img src={item.img} alt={item.label} className="quick-link-icon" />
          </div>
          <p>{item.label}</p>
        </Link>
      ))}
    </div>
  );
}
