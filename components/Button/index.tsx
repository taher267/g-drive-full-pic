"use client";
import { ButtonProps } from "@/types";
import React from "react";

const Button = ({
  content,
  title,
  type = "button",
  containerStyles,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={false}
      title={title}
      //   type={type}
      type={type}
      className={`btn ${containerStyles}`}
      onClick={onClick}
    >
      <span className="btnTitle">{content}</span>
    </button>
  );
};

export default Button;
