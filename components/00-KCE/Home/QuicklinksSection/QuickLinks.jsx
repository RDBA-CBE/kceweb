import "./QuickLinks.css";

const links = [
  { icon: "🎓", label: "Vidya Lakshmi Portal" },
  { icon: "📘", label: "National Digital Library" },
  { icon: "🎓", label: "Student Alumni" },
  { icon: "🤝", label: "Anti Ragging Committee" },
  { icon: "🏫", label: "Admission Enquiries" },
];

export default function QuickLinks() {
  return (
    <div className="quicklinks">
      {links.map((item, i) => (
        <div className="quicklink" key={i}>
          <div className="icon">{item.icon}</div>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}
