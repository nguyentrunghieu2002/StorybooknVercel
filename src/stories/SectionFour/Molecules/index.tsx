import styled from "styled-components";
import ImageAtom from "../Atoms/ImageAtom/ImageAtom";
import Tag from "../Atoms/Tag/Tag";
import "./index.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const StyledImageTag = styled.div`
  width: 400px;
  height: 250px;
  left: 10px;
  top: 10px;
  position: relative;
`;

const StyledForTag = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: 12px;
`;

const StyledBorderDiv = styled.div`
  border: 3px solid #ffad70;
  border-radius: 10px;
  width: 400px;
  position: relative;
  height: 250px;
`;

const index = () => {
  const data = [
    {
      partner_img: "https://www.tubudd.com/static/images/partners/whalelo.png",
      partner_name: "WhaleLo",
      partner_url: "https://whalelo.net/",
    },
    {
      partner_img:
        "https://www.tubudd.com/static/images/partners/hanoihousing.png",
      partner_name: "HANOI HOUSING",
      partner_url: "https://hanoihousing.vn/",
    },
    {
      partner_img: "https://www.tubudd.com/static/images/partners/chat.png",
      partner_name: "Homestay Chất",
      partner_url: "https://homestaychat.com/",
    },
    {
      partner_img: "https://www.tubudd.com/static/images/partners/covivu.png",
      partner_name: "COVIVU",
      partner_url: "https://covivu.com/",
    },
    {
      partner_img:
        "https://www.tubudd.com/static/images/partners/travelthru.png",
      partner_name: "Travel Thru",
      partner_url: "https://travelthru.com/",
    },
    {
      partner_img: "https://www.tubudd.com/static/images/partners/potonow.png",
      partner_name: "POTONOW",
      partner_url: "https://potonow.vn/",
    },
    {
      partner_img:
        "https://www.tubudd.com/static/images/partners/vietcruise.png",
      partner_name: "VietCruise Travel",
      partner_url: "https://www.facebook.com/vietcruisetravel/",
    },
  ];

  console.log(data);

  //   return data.map((item) => (
  //     <StyledBorderDiv>
  //       <StyledImageTag>
  //         <ImageAtom imgUrl={item.partner_img}></ImageAtom>
  //         <StyledForTag>
  //           <Tag urlString={item.partner_url}>{item.partner_name}</Tag>
  //         </StyledForTag>
  //       </StyledImageTag>
  //     </StyledBorderDiv>
  //   ));

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    // <PartnersContainer>
    <Slider {...settings}>
      {data?.map((item, index) => (
        <div style={{ paddingRight: "41px" }}>
          <StyledBorderDiv key={index}>
            <StyledImageTag>
              <ImageAtom imgUrl={item.partner_img} />
              <StyledForTag>
                <Tag urlString={item.partner_url}>{item.partner_name}</Tag>
              </StyledForTag>
            </StyledImageTag>
          </StyledBorderDiv>
        </div>
      ))}

      {/* <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div> */}
    </Slider>
    // </PartnersContainer>
  );
};

export default index;

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function index() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <Slider {...settings}>
//       <div>
//         <h3>1</h3>
//       </div>
//       <div>
//         <h3>2</h3>
//       </div>
//       <div>
//         <h3>3</h3>
//       </div>
//       <div>
//         <h3>4</h3>
//       </div>
//       <div>
//         <h3>5</h3>
//       </div>
//       <div>
//         <h3>6</h3>
//       </div>
//     </Slider>
//   );
// }
