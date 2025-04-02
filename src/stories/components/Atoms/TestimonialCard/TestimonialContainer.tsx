import { JSX } from "react";

interface TestimonialContainerProps {
  children: JSX.Element[];
  className?: string;
}

const TestimonialContainer = ({ children }: TestimonialContainerProps) => {
  return (
    <div
      style={{
        width: "500px",
        height: "360px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {children}
    </div>
  );
};

export default TestimonialContainer;
