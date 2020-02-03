import React, { useEffect, useState } from "react";
import style from "./Feed.module.css";
import getFakePosts from "../../fakeData/getFakePosts";
import { FeedContainer, showToast, simulateCallToEndpoint } from "./feed-utils";
import getNewFakePost from "../../fakeData/getNewFakePost";
import Post from "../Post";

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

    // do polling
    setInterval(() => {
      showToast(
        "Sono disponibili nuovi aggiornamenti. clicca qui per vederli",
        () => {
          setIsLoading(true);
          simulateCallToEndpoint(() => {
            // this will add one new post only, just for example
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
        <h2 className={style.loading}>caricamento...</h2>
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
