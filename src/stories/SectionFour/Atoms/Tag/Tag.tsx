import styled from "styled-components";

interface TagProps {
  children: string;
  urlString: string;
}

const StyledLink = styled.a`
  text-decoration: none;
  width: 300px;
  height: 50px;
  display: inline-block;
  background-color: #ffad70;
  border-radius: 10px 0px 0px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.div`
  color: #273d52;
  font-weight: bold;
  max-width: calc(100% - 100px);
  overflow: hidden;
  font-size: 15px;
  line-height: 25px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const Tag = ({ children, urlString }: TagProps) => {
  return (
    <StyledLink href={urlString}>
      <StyledText>{children}</StyledText>
    </StyledLink>
  );
};

export default Tag;
