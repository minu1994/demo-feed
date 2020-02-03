import React, { useRef, useState } from "react";
import style from "./Post.module.css";
import ReactCardFlip from "react-card-flip";

const Post = ({ title, description, image }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const img = useRef(null);
  return (
    <div className={style.Post}>
      <h2> {title} </h2>
      <div className={style.container}>
        <ReactCardFlip
          isFlipped={isFlipped}
          flipDirection="horizontal"
          flipSpeedBackToFront={0.1}
          flipSpeedFrontToBack={0.1}
        >
          {/* FRONT COMPONENT */}
          <div onClick={() => setIsFlipped(!isFlipped)}>
            <img src={image} alt={""} ref={img} />
          </div>

          {/* BACK COMPONENT */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={style.backImg}
            style={
              img.current
                ? { width: img.current.width, height: img.current.height }
                : undefined
            }
          >
            {description}
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
};

export default Post;
