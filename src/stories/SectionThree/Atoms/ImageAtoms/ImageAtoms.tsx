interface ImageProps {
  imgSrc: string;
  type?: string;
}

const ImageAtoms = ({ imgSrc }: ImageProps) => {
  return (
    // <div style={{ position: "relative" }}>
    //   <img
    //     style={{
    //       objectFit: "contain",
    //       width: "500px",
    //       height: "350px",
    //       left: `calc(50% - 150px)`,
    //       position: "absolute",
    //     }}
    //     src={imgSrc}
    //     alt=""
    //   />
    // </div>
    <div style={{ position: "relative", width: "500px", height: "350px" }}>
      <img
        style={{
          objectFit: "contain",
          width: "400px", // Kích thước nhỏ hơn container
          height: "500px",
          position: "absolute",
          left: `calc(50% - 300px)`,
          top: `calc(50% - 300px)`,
        }}
        src={imgSrc}
        alt=""
      />
    </div>
  );
};

export default ImageAtoms;
