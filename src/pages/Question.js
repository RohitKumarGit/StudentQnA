import React from "react";

import { Container, Header, Image, Divider } from "semantic-ui-react";
import PostInfo from "../components/PostInfo";

export default class Question extends React.Component {
  render() {
    return (
      <>
        <Container>
          <div className="question">
            <Header as="h1">
              How does the choice of housing affect college students?
            </Header>

            <PostInfo
              src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
              name="Patrick Harris"
              age="4 days ago"
            />

            <div className="post__desc">
              <p>
                Non deserunt nisi distinctio consequatur. Maiores non quia
                deserunt aliquid doloremque cupiditate consequuntur.
                Perspiciatis nihil optio facilis. Possimus veniam in et et omnis
                et fugit. Sint excepturi voluptatibus et expedita consequatur
                est dolorum ut.
              </p>

              <p>
                Sequi nulla ipsa nihil inventore. Autem consequatur molestiae
                qui vitae ut perferendis rerum. Nostrum aut veritatis ipsa
                dignissimos quia. Ut itaque odio sit sit et et. Ducimus omnis
                rerum vitae laudantium veritatis iste ipsum labore.
              </p>
            </div>
          </div>

          <div class="answers">
            <Header as="h4">2 Answers</Header>

            <div class="answer">
              <Divider />
              <PostInfo
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                name="Matthew Lawrence"
                age="4 days ago"
              />

              <div class="post__desc">
                <p>
                  Animi adipisci architecto dignissimos eaque quis. Distinctio
                  voluptas vitae facere dignissimos. Non temporibus officiis
                  nulla molestiae temporibus tempora.
                </p>

                <p>
                  Hic ut libero voluptate aliquam nihil. Et amet minima in
                  officiis libero repudiandae qui est. Blanditiis culpa nobis at
                  quod dolores est. Doloribus dolorem doloremque maxime iure
                  quisquam.
                </p>
              </div>
            </div>

            <div class="answer">
              <Divider />
              <PostInfo
                src="https://react.semantic-ui.com/images/avatar/large/molly.png"
                name="Molly Thomas"
                age="4 days ago"
              />

              <div class="post__desc">
                <p>
                  Non cumque iure mollitia cupiditate. Adipisci repellat
                  voluptatem qui. In eligendi pariatur cumque repellat omnis.
                  Doloremque numquam et voluptatum accusantium. Et accusamus
                  temporibus commodi maiores sed sit ut consequuntur.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
}
