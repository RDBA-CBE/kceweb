/**
 * RichText
 * --------
 * Renders a string that may contain HTML markup (<b>, <strong>, <em>, <u>, <br>, <a> etc.)
 * from JSON content fields.
 *
 * Usage in JSON:
 *   "text": "This is <b>bold</b> and <em>italic</em> text."
 *
 * Usage in components:
 *   <RichText content={item.description} />
 *   <RichText as="p" className="my-class" content={item.text} />
 */

const RichText = ({ content, as: Tag = "span", className = "", style = {} }) => {
  if (!content && content !== 0) return null;

  if (typeof content !== "string") {
    return <Tag className={className} style={style}>{content}</Tag>;
  }

  return (
    <Tag
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default RichText;
