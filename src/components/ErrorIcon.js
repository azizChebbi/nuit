import React from "react";
import Error from "../images/error.svg";

export default function ErrorIcon() {
  return (
    <img
      src={Error}
      style={{
        width: 28,
        height: 24,
        position: "absolute",
        top: "50%",
        right: 15,
        transform: "translateY(-50%)",
      }}
      alt="error"
    />
  );
}
