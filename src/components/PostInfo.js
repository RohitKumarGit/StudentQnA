import React from "react";
import { Header, Image } from "semantic-ui-react";

const PostInfo = (props) => {
  const { src, name, age } = props;

  return (
    <Header as="h4" className="post__meta">
      <Image className="post-avatar" circular src={src} size="large" />
      <Header.Content>
        <div className="post-author">{name}</div>
        <div className="post-age">{age}</div>
        {/* <Header.Subheader>{age}</Header.Subheader> */}
      </Header.Content>
    </Header>
  );
};

export default PostInfo;
