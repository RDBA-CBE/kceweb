"use client";
import React, { useEffect, useState } from "react";

const VideoCardSection = ({ data }) => {
  const [video, setVideo] = useState(null);
  const [videoTitles, setVideoTitles] = useState({});

  if (!data?.items?.length) return null;

  useEffect(() => {
    data?.items?.forEach((item) => {
      if (
        item.type === "video" &&
        !item.title &&
        !videoTitles[item.youtubeId]
      ) {
        fetch(
          `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${item.youtubeId}&format=json`,
        )
          .then((res) => res.json())
          .then((res) => {
            setVideoTitles((prev) => ({
              ...prev,
              [item.youtubeId]: res.title,
            }));
          })
          .catch(() => {
            setVideoTitles((prev) => ({
              ...prev,
              [item.youtubeId]: "YouTube Video",
            }));
          });
      }
    });
  }, [data, videoTitles]);

  return (
    <>
      <section className="kce-learn-section">
        <h2 className="section-ti">{data.secTitle}</h2>
        <div className="kce-learn-grid pt-4">
          {data.items.map((item) => {
            /* VIDEO CARD */
            if (item.type === "video") {
              return (
                <div
                  key={item.id}
                  className="yt-video-card"
                  onClick={() => setVideo(item)}
                >
                  <div className="yt-video-content">
                    <h6 className="yt-video-title sub-ti">
                      {item.title ||
                        videoTitles[item.youtubeId] ||
                        "YouTube Video"}
                    </h6>
                  </div>

                  <div className="kahe-yt-video-thumb">
                    <img
                      src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                      alt={
                        item.title ||
                        videoTitles[item.youtubeId] ||
                        "YouTube video"
                      }
                    />
                    <div className="kahe-yt-play-overlay">
                      <i className="feather-play" />
                    </div>
                  </div>
                </div>
              );
            }

            /* RESOURCE CARD */
            if (item.type === "resource") {
              return (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kce-resource-soft-card"
                >
                  <h4 className="kce-resource-title sub-ti">{item.label}</h4>

                  <div className="kce-resource-footer">
                    <span className="kce-resource-download">
                      {item.urlText || "View"}
                    </span>

                    <span className="kce-resource-pdf">
                      {item.src ? (
                        <img src={item.src} alt="icon" />
                      ) : (
                        <i className="feather-arrow-up-right" />
                      )}
                    </span>
                  </div>
                </a>
              );
            }

            return null;
          })}
        </div>
      </section>

      {/* VIDEO MODAL */}
      {video && (
        <div className="kce-modal" onClick={() => setVideo(null)}>
          <div className="kce-modal-box" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
              title={video.title}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />

            <a
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="kce-modal-title"
            >
              {video.title}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCardSection;
