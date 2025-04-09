interface TextProps {
  children: string;
}

const Text = ({ children }: TextProps) => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "1",
        color: "#FFFFFF",
        fontWeight: 700,
        fontSize: "15px",
        lineHeight: "25px",
        letterSpacing: "0px",
      }}
    >
      {children}
    </div>
  );
};

export default Text;
