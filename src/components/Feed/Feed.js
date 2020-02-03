import React, { useEffect, useState } from "react";
import style from "./Feed.module.css";
import getFakePosts from "../../fakeData/getFakePosts";
import { FeedContainer, showToast, simulateCallToEndpoint } from "./feed-utils";
import getNewFakePost from "../../fakeData/getNewFakePost";
import Post from "../Post";
import { CircleLoader } from "react-spinners";

const Feed = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [postsFromServer, setPostFromServer] = useState("");

  // constructor
  useEffect(() => {
    setIsLoading(true);
    simulateCallToEndpoint(() => {
      setPostFromServer(getFakePosts());
      setIsLoading(false);
    });

    /*  do polling
        this will add one new post only, just for example, instead of setInterval
     */
    setTimeout(() => {
      showToast(
        "Sono disponibili nuovi aggiornamenti. clicca qui per vederli",
        () => {
          setIsLoading(true);
          simulateCallToEndpoint(() => {
            setPostFromServer([...getFakePosts(), getNewFakePost()]);
            setIsLoading(false);
          });
        }
      );
    }, 2 * 60 * 1000);
  }, []);

  if (isLoading) {
    return (
      <FeedContainer>
        <h2 className={style.loading}>
          caricamento...
          <div className={style.circleLoader}>
            <CircleLoader size={100} />
          </div>
        </h2>
      </FeedContainer>
    );
  }
  return (
    <FeedContainer>
      {postsFromServer &&
        postsFromServer.map(post => (
          <Post
            key={post.id}
            image={post.image}
            title={post.title}
            description={post.description}
          />
        ))}
    </FeedContainer>
  );
};

export default Feed;
