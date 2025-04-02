import { JSX } from "react";
import bgImg from "../../../assets/Group 280.png";
import "./Template.css";

interface TestimonialsSectionProps {
  children: JSX.Element[];
}

const TestimonialsSection = ({ children }: TestimonialsSectionProps) => {
  const sectionStyle = {
    width: "1440px",
    height: "630px",
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    position: "relative" as const, // TypeScript cần 'as const' cho giá trị string literal
  };

  return <section style={sectionStyle}>{children}</section>;
};

export default TestimonialsSection;
