import React, { useState } from "react";

const colors = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

const getRandomIndex = (arr: string[]) => {
  return Math.floor(Math.random() * arr.length);
};

const capitalize = (str: string) => {
  return str.replace(/^\w/, (c: string) => c.toUpperCase());
};

interface Props {
  color: string;
  onClose: () => void;
}

const Alert = ({ color, onClose }: Props) => {
  return (
    <div
      className={"alert alert-" + color + " alert-dismissible fade show"}
      role="alert"
    >
      <strong>{capitalize(color)}</strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

const Button = () => {
  const [color, setColor] = useState("primary");
  const [renderAlert, setRenderAlert] = useState(false);

  const handleColor = () => {
    setColor(colors[getRandomIndex(colors)]);
    setRenderAlert(true);
  };

  return (
    <>
      {renderAlert && (
        <Alert color={color} onClose={() => setRenderAlert(false)} />
      )}
      <button
        type="button"
        onClick={handleColor}
        className={"btn btn-" + color}
      >
        {capitalize(color)}
      </button>
    </>
  );
};

export default Button;
