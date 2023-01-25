import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
export default function Review({ reviews }) {
  return (
    <>
      {reviews.map((r) => (
        <li key={r._id}>
          <label style={{ fontFamily: "Copperplate, Papyrus, fantasy" }}>
            {r.userName}{" "}
          </label>{" "}
          <label style={{ color: "blue", fontFamily: "Garamond, serif" }}>
            {" "}
            {r.comment}{" "}
          </label>{" "}
        </li>
      ))}
    </>
  );
}
