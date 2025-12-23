import { split } from "sentence-splitter";

export const removeShortcodes = (content) => {
    if (!content) return "";
    return content.replace(/\[\/?[^\]]+\]/g, "");
  };

  export const FirstLetterUp = (text = "") => {
    console.log("text",text);
    
  return text
    .toLowerCase()
    // Capitalize first letter of each word
    .replace(/\b\w/g, (c) => c.toUpperCase())
    // Preserve acronyms inside brackets
    .replace(/\(([^)]+)\)/g, (_, v) => `(${v.toUpperCase()})`);
};

export const splitChar = (text = "", maxLength = 500) => {
  if (!text) return null;

  const sentences = text
    .split(".")
    .map(s => s.trim())
    .filter(Boolean)
    .map(s => s + ".");

  let current = "";
  const blocks = [];

  sentences.forEach(sentence => {
    if ((current + " " + sentence).length > maxLength) {
      blocks.push(current.trim());
      current = sentence;
    } else {
      current += " " + sentence;
    }
  });

  if (current.trim()) blocks.push(current.trim());

  // 🔥 return JSX directly
  return blocks.map((block, index) => (
    <span key={index}>
      {block}
      <br />
      <br />
    </span>
  ));
};


export const splitFirstAndRemaining = (text, firstLength = 700) => {
  if (!text || typeof text !== "string") text = String(text);

  const sentences = text
    .split(".")
    .map(s => s.trim())
    .filter(Boolean)
    .map(s => s + ".");

  let current = "";
  const firstPartArray = [];
  const remainingArray = [];
  let firstPartDone = false;

  sentences.forEach(sentence => {
    if (!firstPartDone) {
      if ((current + " " + sentence).trim().length <= firstLength) {
        current += " " + sentence;
      } else {
        if (current.trim()) firstPartArray.push(current.trim());
        current = sentence;
        firstPartDone = true;
      }
    } else {
      remainingArray.push(sentence);
    }
  });

  if (!firstPartDone && current.trim()) {
    firstPartArray.push(current.trim());
  } else if (firstPartDone && current.trim()) {
    remainingArray.unshift(current.trim());
  }

  return {
    firstPart: firstPartArray.join(" "),
    remaining: remainingArray.join(" "),
  };
};


