import { JSX } from "react";

interface SectionOrganismsProps {
  //   imgUrl: string;
  //   description: string;
  //   tag: string;
  //   title: string;
  children: JSX.Element[];
}

const SectionOrganisms = ({
  //   imgUrl,
  //   description,
  //   tag,
  //   title,

  children,
}: SectionOrganismsProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: "58px",
        backgroundColor: "pink",
      }}
    >
      {/* <SectionButton variant="left-right">{left}</SectionButton>
      <div>
        <div style={{ paddingBottom: "24px" }}>
          <ExpandMenu
            imgUrl={imgUrl}
            description={description}
            tag={description}
            title={title}
          ></ExpandMenu>
        </div>
        <ExpandList imgUrl={imgUrl} tag={tag}></ExpandList>
      </div>
      <SectionButton transform="rotate(180deg)" variant="left-right">
        {left}
      </SectionButton> */}
      {children}
    </div>
  );
};

export default SectionOrganisms;
