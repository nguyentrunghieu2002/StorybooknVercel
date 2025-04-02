import TestimonialsSection from "./Template";
import Testimonial from "../../Molecules/Testimonial/Testimonial";
import { testimonialsData } from "./testimonials.data";
import { useState } from "react";

const TestimonialsPage = () => {
  console.log(testimonialsData);

  const [num, setNum] = useState(0);

  return (
    <TestimonialsSection>
      {testimonialsData?.map((item, index) => (
        <>
          {num === index && (
            <Testimonial
              key={index}
              num={num}
              setNum={setNum}
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
