import styled from "styled-components";

interface ImageAtomProps {
  imgUrl: string;
}

const StyledImage = styled.img`
  /* border: 1px solid; */
  border-radius: 10px;
  width: 400px;
  height: 250px;
  /* padding: 10px; */
  /* box-shadow: -9px -9px red; */
`;

const ImageAtom = ({ imgUrl }: ImageAtomProps) => {
  return (
    <div>
      <StyledImage src={imgUrl} alt="" />
    </div>
  );
};

export default ImageAtom;
