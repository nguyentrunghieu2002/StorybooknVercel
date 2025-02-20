import React from "react";
import PropTypes from "prop-types";

const Card = ({ mode }) => {
  const logo =
    "https://s3-alpha-sig.figma.com/img/6446/fbe3/0fabb215373086e908811abca0233727?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FDYwsPunCgnhkyIrgeoT-oDDbsI10~zIbg3PzWgy7nzN-AMe46jJEXrVme5FEMH9ZRlyYqM9yVWXmUrLYoNnbjXypwcmk-JuRJeT4PIr7PRFvaJ3YexsUiRmSs2nZndMvz4SfVkFIxt-Zu6NGjKhukcJkXXegRi809HTobUzpYgFvAZkYJ-XARJlsR9fkgJwTZMzFA6a5FnzMHMugMEciU3KKf0OvVmNbk9FuYbfUd-xlYTdwCtBbeHvT27dNznIwlktoKmWc43T5MU0PUTZFOEzl4PneEnyTx2uKV7pnRr63nV~PtmYQfDjsSMzv~SKr4D0TmlY6PrvktJxIRQBuw__";

  return (
    <div className={`cart-container ${mode}`}>
      <img src={logo} alt="User" className="cart-image" />
      <div className="cart-content">
        <h3 className="cart-title">How Life Insurance Saved My Family</h3>
        <p className="cart-text">
          Life was good for my family in 1989. My father was the well-paid
          president of a marketing company
        </p>
        <p className="cart-author">Theresa Graves</p>
        <p className="cart-date">June 2, 2020</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  mode: PropTypes.oneOf(["light", "dark"]),
};

Card.defaultProps = {
  mode: "light",
};

export default Card;
