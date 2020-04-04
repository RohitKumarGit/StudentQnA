import React from "react";
import { Header, Image, Label } from "semantic-ui-react";

import "./PostInfo.css";

const PostInfo = (props) => {
  const { src, name, age, bestAnswer = false } = props;

  return (
    <Header className="post-meta" as="h4">
      <Image
        className={
          bestAnswer ? "post-avatar post-avatar--success" : "post-avatar"
        }
        circular
        src={src}
        size="large"
      />
      <Header.Content>
        <div className="post-author">
          {name}
          {bestAnswer && (
            <Label size="small" color="green" className="post-label">
              Best answer
            </Label>
          )}
        </div>
        <div className="post-age">{age}</div>
      </Header.Content>
    </Header>
  );
};

export default PostInfo;
