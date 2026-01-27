"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { buttonActions } from "@/utils/buttonActions";

const SplitImageContent = ({ data }) => {
  const router = useRouter();

  const goToCamGal = () => {
    sessionStorage.setItem("camGalData", JSON.stringify(data));
    sessionStorage.setItem("camGalUrl", window.location.href);
    router.push(`/kahe/campus-gallery/${data.slug}`);
  };

  const renderBlock = (block, index) => {
    switch (block.type) {
      case "paragraph": {
        const texts = Array.isArray(block.text) ? block.text : [block.text];

        return texts.map((text, index) => (
          <p key={index} className="ci-text">
            {text}
          </p>
        ));
      }

      case "title":
        return (
          <>
            <h3 className="section-ti">{block.mainTi}</h3>
            <h4 className="sub-ti">{block.title}</h4>
            <p className="ti-badge-wbg">{block.subTi}</p>
          </>
        );

      case "list":
        return (
          <ul key={index} className="vm-list mb-4">
            {block.items.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        );

      case "link":
        return (
          <p key={index}>
            <Link href={block.href} class="read-more-btn" target="_blank">
              <span class="rbt-btn-link">
                {block.text}
                <i class="feather-arrow-up-right"></i>
              </span>
            </Link>
          </p>
        );

      case "button": {
        const ButtonInner = (
          <span className="icon-reverse-wrapper">
            <span className="btn-text">{block.text}</span>
            <span className="btn-icon">
              <i className="feather-arrow-right"></i>
            </span>
            <span className="btn-icon">
              <i className="feather-arrow-right"></i>
            </span>
          </span>
        );

        // ✅ 1. HREF BASED BUTTON
        if (block.href) {
          return (
            <Link
              key={index}
              href={block.href}
              className="kce-btn-primary rbt-btn hover-icon-reverse mt-4"
              target={block.target || "_blank"}
            >
              {ButtonInner}
            </Link>
          );
        }

        // ✅ 2. ACTION BASED BUTTON
        if (block.action && buttonActions[block.action]) {
          return (
            <div
              key={index}
              onClick={() =>
                buttonActions[block.action]({
                  sectionData: block?.newpageData, // 👈 FULL section data
                  block, // 👈 button block data
                  router, // 👈 helpers
                })
              }
              className="kce-btn-primary rbt-btn hover-icon-reverse mt-4"
              style={{ cursor: "pointer" }}
            >
              {ButtonInner}
            </div>
          );
        }

        return null;
      }

      default:
        return null;
    }
  };

  return (
    <div className={`${data?.sectionbg || "section-bg3"}`}>
      <div className="section-wid">
        <div className="ci-section">
          <div className="ci-container">
            <div className="ci-content">
              <h2 className="section-ti">{data.secTitle}</h2>
              <h3 className="sub-ti">{data.mainTitle}</h3>
              <p className="ti-badge-wbg">{data.caption}</p>

              {/* FLOAT IMAGE */}
              <div
                className={`ci-float-image ${data?.imagePosition == "left" ? "ci-float-left" : ""}`}
              >
                <img src={data.image} alt={data.name} className="ci-image" />
              </div>

              {/* DYNAMIC CONTENT */}
              {data.content.map(renderBlock)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitImageContent;

// sample json

{
  /*
  
  {
  "type": "split-image-content",
  "data": {
      "imagePosition": "right",
      "sectionbg": "section-bg1 my-4",
      "sectitle": "HOD Profile",
      "mainTitle": "Dr. R. Sarankumar",
      "caption": "Professor & Head",
      "image": "/images/kce/Portrait_Placeholder.png",
      "content": [
        {
            "type": "title",
            "title": "Dr. R. Sarankumar",
            "subTi":"Professor & Head"
            
        },
        {
          "type": "paragraph",
          "text": [
            "Dr. R. Sarankumar completed Bachelor Degree in Engineering in the stream of Electronics and Communication Engineering and Master Degree in Engineering in the stream of Communication Systems from Anna University in the year 2009 and 2011 respectively.",
              
            "After gaining academic, research and administrative experience from Tamil Nadu and Andhra Pradesh, he is currently serving in the capacity of Head of the Department for Electronics and Communication Engineering."
            ]
        },
        {
          "type": "paragraph",
          "text": "His area of interest includes Signal Processing, Cognitive Radio, Wireless Communications, Internet of Things and Machine Learning."
        },
        {
          "type": "title",
          "title": "Academic & Research Experience"
        },
        {
          "type": "list",
          "items": [
          "Several publications in peer reviewed national and international journals and conferences",
          "Contributor to 4 patents",
          "Three book chapters published",
          "Reviewer for reputed international journals and conferences"
          ]
        },
        {
          "type": "paragraph",
          "text": "He received fund from AICTE under MODROBs and the project has been completed."
        },
        {
          "type": "link",
          "text": "View Publications",
          "href": "https://example.com/publications"
        }
      ]
    }
  } 
  
*/
}
