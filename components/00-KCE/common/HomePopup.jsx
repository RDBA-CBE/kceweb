"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const HomePopup = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!sessionStorage.getItem("popupDismissed")) {
      setShow(true);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [show]);

  const close = () => {
    sessionStorage.setItem("popupDismissed", "true");
    setShow(false);
  };

  const handleImageClick = () => {
    close();
    router.push("https://admission.kce.ac.in/");
  };

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.55)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={close}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "16px",
          maxWidth: "520px",
          width: "90%",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          style={{
            position: "absolute",
            top: "8px",
            right: "12px",
            background: "none",
            border: "none",
            fontSize: "22px",
            cursor: "pointer",
            lineHeight: 1,
            zIndex: 1,
          }}
          aria-label="Close"
        >
          &times;
        </button>

        <Image
          src="/images/popup-image.jpeg"
          alt="Admission Enquiry"
          width={520}
          height={360}
          style={{ width: "100%", height: "auto", cursor: "pointer", borderRadius: "8px", display: "block" }}
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
};

export default HomePopup;
