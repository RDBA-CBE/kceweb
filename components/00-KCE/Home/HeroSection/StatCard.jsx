export default function StatCard({ value, label, isLast }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "6px",
      borderRight: isLast ? "none" : "1px solid #ccc",  // separator
      paddingRight: isLast ? "0" : "20px",
      paddingLeft: "20px"
    }}>
      <div style={{ fontSize: "30px", fontWeight: 600, color: "#0b2545" }}>
        {value}
      </div>
      <div style={{ fontSize: "17px", color: "#666" }}>
        {label}
      </div>
    </div>
  );
}
