import TestimonialsSection from "./Template";
import Testimonial from "../../Molecules/Testimonial/Testimonial";
import { testimonialsData } from "./testimonials.data";
import { useState } from "react";

const TestimonialsPage = () => {
  console.log(testimonialsData);

  const [num, setNum] = useState(0);

  const handleNext = () => {
    num === testimonialsData.length - 1
      ? setNum(0)
      : setNum((prev) => prev + 1);
  };

  const handlePrev = () => {
    num === 0
      ? setNum(testimonialsData.length - 1)
      : setNum((prev) => prev - 1);
  };

  return (
    <TestimonialsSection>
      {testimonialsData?.map((item, index) => (
        <>
          {num === index && (
            <Testimonial
              key={index}
              num={num}
              handleNext={handleNext}
              handlePrev={handlePrev}
              index={index}
              title={item.title}
              quote={item.quote}
              author={item.name}
              date={item.time}
              img={item.imgUrl}
            />
          )}
        </>
      ))}
    </TestimonialsSection>
  );
};

export default TestimonialsPage;
