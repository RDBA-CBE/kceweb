export default function ActionCard({ title, url , external }) {
  return (
    <a
      href={url}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      <button className='action-btn'>{title}</button>
    </a>
  );
}
