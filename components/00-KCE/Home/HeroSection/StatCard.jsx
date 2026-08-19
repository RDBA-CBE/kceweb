export default function StatCard({ value, label, isLast }) {
  return (
    <div 
    className="stat-card-inn"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "6px",
      borderRight: isLast ? "none" : "1px solid #ccc",  // separator
      paddingRight: isLast ? "0" : "20px",
      paddingLeft: "20px"
    }}>
      <div className="stat-number" style={{ fontSize: "40px", fontWeight: 600, color: "#c34f00" }}>
        {value}
      </div>
      <div className="stat-label" style={{ fontSize: "17px", color: "#0b2545" }}>
        {label}
      </div>
    </div>
  );
}
