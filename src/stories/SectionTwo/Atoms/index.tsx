import { JSX } from "react";

interface AtomsProps {
  children: JSX.Element[];
}

const Atoms = ({ children }: AtomsProps) => {
  return (
    // <div style={{ display: "flex" }}>
    //   <SectionImage imgSrc="hi" tag="hi"></SectionImage>
    <div>
      <div
        style={{
          width: "909px",
          height: "205px",
          display: "flex",
          flexDirection: "column",
          margin: "45px 53px 46px 51px",
          justifyContent: "space-between",
        }}
      >
        {/* <SectionTitle>
            {"Enhance Customer Experience and Increase Revenue"}
          </SectionTitle>
          <SectionText>
            {
              "Increase the value of your hotel's services by introducing guests to tours with Tubudd’s local buddies. Not only will you help customers enjoy a great experience, but you'll also earn a commission of up to 15% for each successful trip."
            }
          </SectionText>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {" "}
            <SectionButton>hi</SectionButton>
          </div> */}
        {children}
      </div>
    </div>
    // </div>
  );
};

export default Atoms;
