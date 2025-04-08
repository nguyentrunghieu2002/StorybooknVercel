// interface SectionImageProps {
//   imgSrc: string;
//   tag: string;
// }

// const SectionImage = ({ imgSrc, tag }: SectionImageProps) => {
//   return (
//     <div style={{ position: "relative", width: "500px", height: "300px" }}>
//       <img
//         style={{
//           width: "500px",
//           height: "300px",
//           objectFit: "cover",
//           borderRadius: "24px 0px 0px 24px",
//         }}
//         // src={
//         //   "https://s3-alpha-sig.figma.com/img/4b19/ceef/2a210da8d38868fdda77dada2ec1421f?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qgrgdbC8T~E5REi-g3sKJc9LcQJAhjOtnejdrQ7q4N-YsVBl7ZuWf9PmFaHX1aR5gKZWM-pGrRCdquNtaszGjDNxsz0nYYzVd3W1HFQKpkih5ywmxAnl8IcTocvj9ZOoy7LNKjrp228myqSONAhYAW6XipE4wQSoe38TyXGmgj~dbVLV9GOBoCgoXLPdJOC~u2t5xzJbEmLNZd9rgtlfS7wpERGn~azoeE1lteppsn7wUAe03Iqy00RoHq-~uF2kF16i0Zdi9LZVAV2ziS3-LXzyN055vBhCldYleJqg2aoQY39lYUBlNp7X8UMT6c~DzExkKNwjX75SC3kPnGjEZw__"
//         // }
//         src={imgSrc}
//         alt=""
//       />
//       <div
//         style={{
//           width: "fit-content",
//           minWidth: "224px",
//           right: 0,
//           bottom: "96px",
//           backgroundColor: "#FFAD70",
//           borderTopLeftRadius: "10px",
//           borderBottomLeftRadius: "10px",
//           position: "absolute",
//         }}
//       >
//         <p
//           style={{
//             padding: "16px",
//             fontWeight: 700,
//             fontSize: "15px",
//             lineHeight: "25px",
//             margin: 0,
//           }}
//         >
//           {tag}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SectionImage;

interface SectionImageProps {
  imgSrc: string;
  tag: string;
  variant?: string;
  index?: number;
  current?: number;
  handleCurrent?: (indexItem: number) => void;
  setNum?: (curItem: number) => void;
}

const SectionImage = ({
  imgSrc,
  tag,
  variant = "expand",
  handleCurrent,
  setNum,
  current,
  index,
}: SectionImageProps) => {
  if (variant === "expand") {
    return (
      <div
        style={{
          position: "relative",
          width: "500px",
          height: "300px",
        }}
      >
        <img
          style={{
            width: "500px",
            height: "300px",
            objectFit: "cover",
            borderRadius: "24px 0px 0px 24px",
          }}
          // src={
          //   "https://s3-alpha-sig.figma.com/img/4b19/ceef/2a210da8d38868fdda77dada2ec1421f?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qgrgdbC8T~E5REi-g3sKJc9LcQJAhjOtnejdrQ7q4N-YsVBl7ZuWf9PmFaHX1aR5gKZWM-pGrRCdquNtaszGjDNxsz0nYYzVd3W1HFQKpkih5ywmxAnl8IcTocvj9ZOoy7LNKjrp228myqSONAhYAW6XipE4wQSoe38TyXGmgj~dbVLV9GOBoCgoXLPdJOC~u2t5xzJbEmLNZd9rgtlfS7wpERGn~azoeE1lteppsn7wUAe03Iqy00RoHq-~uF2kF16i0Zdi9LZVAV2ziS3-LXzyN055vBhCldYleJqg2aoQY39lYUBlNp7X8UMT6c~DzExkKNwjX75SC3kPnGjEZw__"
          // }
          src={imgSrc}
          alt=""
        />
        <div
          style={{
            width: "fit-content",
            minWidth: "224px",
            right: 0,
            bottom: "96px",
            backgroundColor: "#FFAD70",
            borderTopLeftRadius: "10px",
            maxWidth: "224px",
            borderBottomLeftRadius: "10px",
            position: "absolute",
          }}
        >
          <p
            style={{
              padding: "16px",
              fontWeight: 700,
              fontSize: "15px",
              lineHeight: "25px",
              margin: 0,
              minHeight: "25px",
              height: "30px",
            }}
          >
            <div
              style={{
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "1",
              }}
            >
              {tag}
            </div>
          </p>
        </div>
      </div>
    );
  }
  return (
    <div
      onClick={() => {
        index || index == 0 ? (setNum ? setNum(index) : "") : "";
        index || index == 0 ? (handleCurrent ? handleCurrent(index) : "") : "";
      }}
      style={{
        position: "relative",
        cursor: "pointer",
        width: "200px",
        height: "200px",
        borderRadius: "20px",
        border: current == index ? "4px solid #FF8F40" : "4px solid white",
      }}
    >
      <img
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          // border: "4px solid #FF8F40",
          borderRadius: "15px",
        }}
        src={
          "https://s3-alpha-sig.figma.com/img/4b19/ceef/2a210da8d38868fdda77dada2ec1421f?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qgrgdbC8T~E5REi-g3sKJc9LcQJAhjOtnejdrQ7q4N-YsVBl7ZuWf9PmFaHX1aR5gKZWM-pGrRCdquNtaszGjDNxsz0nYYzVd3W1HFQKpkih5ywmxAnl8IcTocvj9ZOoy7LNKjrp228myqSONAhYAW6XipE4wQSoe38TyXGmgj~dbVLV9GOBoCgoXLPdJOC~u2t5xzJbEmLNZd9rgtlfS7wpERGn~azoeE1lteppsn7wUAe03Iqy00RoHq-~uF2kF16i0Zdi9LZVAV2ziS3-LXzyN055vBhCldYleJqg2aoQY39lYUBlNp7X8UMT6c~DzExkKNwjX75SC3kPnGjEZw__"
        }
        // src={imgSrc}
        alt=""
      />
      <div
        style={{
          width: "fit-content",

          right: 0,
          bottom: "16px",
          backgroundColor: "#FFAD70",
          borderRadius: "10px 0px 0px 10px",
          position: "absolute",
        }}
      >
        <p
          style={{
            minHeight: "25px",
            padding: "16px",
            fontWeight: 700,
            fontSize: "15px",
            lineHeight: "25px",
            margin: 0,
            maxWidth: "100px",
            maxHeight: "25px",
          }}
        >
          <div
            style={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "1",
            }}
          >
            {tag}
          </div>
        </p>
      </div>
    </div>
  );
};

export default SectionImage;
