import React from "react";
import { Header, Image } from "semantic-ui-react";

import "./PostInfo.css";

const PostInfo = (props) => {
  const { src, name, age } = props;

  return (
    <Header className="post-meta" as="h4">
      <Image className="post-avatar" circular src={src} size="large" />
      <Header.Content>
        <div className="post-author">{name}</div>
        <div className="post-age">{age}</div>
      </Header.Content>
    </Header>
  );
};

export default PostInfo;
