interface SectionButtonProps {
  children: string;
  variant?: string;
  transform?: string;
  // onClick?: (e) => void;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SectionButton = ({
  children,
  transform,
  variant = "original",
  onClick,
}: SectionButtonProps) => {
  if (variant === "original") {
    return (
      <div>
        <button
          onClick={onClick}
          style={{
            fontWeight: 700,
            fontSize: "15px",
            lineHeight: "25px",
            color: "#FFFFFF",
            backgroundColor: "#FF611B",
            borderRadius: "24px",
            border: "none",
            width: "154.0955810546875px",
            height: "48px",
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={onClick}
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "#FF8F40",
          borderRadius: "30px",
          transform: transform,
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
        }}
      >
        <img
          src={children}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
          alt=""
        />
      </button>
    </div>
  );
};

export default SectionButton;
