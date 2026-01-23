"use client";

import Link from "next/link";
import React, { useState } from "react";

const ROWS_PER_PAGE = 10;

const TableCom = ({ data }) => {
  return (
    <div className="rbt-dashboard-content bg-color-white tab-in">
      <div className="">
        {/* Title */}
        {data?.secTitle && (
          <div className="row ">
            <div className="col-lg-12 ">
              <div className="section-title">
                <h2
                  className="section-ti"
                  dangerouslySetInnerHTML={{
                    __html: data.secTitle,
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {data?.subTitle && (
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2
                  className="sub-ti text-black"
                  dangerouslySetInnerHTML={{
                    __html: data.subTitle,
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* TABLES */}

        {data?.table?.map((item, index) => (
          <div key={index} className="row gy-5 my-4">
            <div className="col-lg-12 mt-0">
              {item?.title && <h3 className="sub-ti mb-5">{item?.title}</h3>}
              {item?.content?.map((table, index) => (
                <PaginatedTable key={index} table={table} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableCom;

/* --------------------------------------------------
   PAGINATED TABLE
-------------------------------------------------- */

const PaginatedTable = ({ table }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalRows = table.data.length;
  const totalPages = Math.ceil(totalRows / ROWS_PER_PAGE);

  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const currentRows = table.data.slice(startIndex, startIndex + ROWS_PER_PAGE);

  /* ---------- PAGE NUMBERS LOGIC ---------- */
  const renderPageNumbers = () => {
    // <= 3 pages → 1 2 3
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          className={`page-number ${currentPage === i + 1 ? "active" : ""}`}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ));
    }

    // > 3 pages → 1 2 ... last
    return (
      <>
        <button
          className={`page-number ${currentPage === 1 ? "active" : ""}`}
          onClick={() => setCurrentPage(1)}
        >
          1
        </button>

        <button
          className={`page-number ${currentPage === 2 ? "active" : ""}`}
          onClick={() => setCurrentPage(2)}
        >
          2
        </button>

        <span className="pagination-dots">...</span>

        <button
          className={`page-number ${
            currentPage === totalPages ? "active" : ""
          }`}
          onClick={() => setCurrentPage(totalPages)}
        >
          {totalPages}
        </button>
      </>
    );
  };

  return (
    <div className="rbt-dashboard-table table-responsive mb-4 page-table">
      {/* TABLE */}
      <table className="rbt-table table table-borderless">
        <thead>
          <tr>
            {table.head.map((col) => (
              <th key={col.id}>{col.label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {currentRows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {table.head.map((col) => {
                const cell = row[col.id];

                return (
                  <td key={col.id}>
                    {cell ? (
                      cell.url ? (
                        <Link
                          href={cell.url}
                          target={cell.target}
                          className="d-flex justify-content-between align-items-center"
                        >
                          <span>{cell.text}</span>
                          {cell.img_icon && (
                            <img
                              src={cell.img_icon}
                              alt={cell.text}
                              width={25}
                              height={15}
                            />
                          )}
                        </Link>
                      ) : cell.text ? (
                        <span>{cell.text}</span>
                      ) : cell.list ? (
                        <ul className="rbt-list-style-1">
                          {cell.list.map((v, i) => (
                            <li key={i}>
                              <i className="feather-check"></i>
                              <span
                                className="text-start"
                                dangerouslySetInnerHTML={{ __html: v }}
                              ></span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        "-"
                      )
                    ) : (
                      "-"
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="pagination-wrap">
          <button
            className="page-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            &#8592;
          </button>

          <div className="d-flex gap-2 align-items-center">
            {renderPageNumbers()}
          </div>

          <button
            className="page-btn"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
};

// sample json
{
  /*
{
  "secTitle": "Laboratory Details",
  "subTitle": "Department of Electronics and Communication Engineering",
  "table": [
    {
      "title": "UG Courses",
      "content": [
        {
          "head": [
            { "id": "col1", "label": "S.No" },
            { "id": "col2", "label": "Course Code" },
            { "id": "col3", "label": "Course Name" },
            { "id": "col4", "label": "Resources" }
          ],
          "data": [
            {
              "col1": { "text": "1" },
              "col2": { "text": "18LC11" },
              "col3": { "text": "Electronic Circuits" },
              "col4": {
                "text": "Click Here",
                "url": "https://example.com/ec",
                "target": "_blank"
              }
            }            
          ]
        }
      ]
    },
    {
      "title": "PG Courses",
      "content": [
        {
          "head": [
            { "id": "col1", "label": "S.No" },
            { "id": "col2", "label": "Course Name" },
            { "id": "col3", "label": "Outcomes" }
          ],
          "data": [
            {
              "col1": { "text": "1" },
              "col2": { "text": "VLSI Design" },
              "col3": {
                "list": [
                  "Understand CMOS fundamentals",
                  "Design combinational circuits",
                  "Implement VLSI architectures"
                ]
              }
            }
          ]
        }
      ]
    }
  ]
}
*/
}
