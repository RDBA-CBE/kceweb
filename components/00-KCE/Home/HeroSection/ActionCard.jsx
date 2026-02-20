export default function ActionCard({ title , url}) {
  return (
   <a href={url}><button className="action-btn">
      {title}
    </button></a> 
  );
}
