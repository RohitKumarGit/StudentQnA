import _ from "lodash";
import React, { Component } from "react";
// import { render } from "react-dom";
import {
  Container,
  Grid,
  Item,
  Header,
  Button,
  Divider,
  Dropdown,
  Placeholder,
  Label,
  Icon,
  Pagination
} from "semantic-ui-react";

const firebase = require("firebase");
const axios = require("axios");

export default class ExpertProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "student",
      colleges: ["A", "B", "C"],
      user: {},
      TopThreeExperts: [],

      questions: "",
      token: ""
    };
  }

  async fillData() {
    console.log(this.state.token);
    axios.defaults.headers.common["Authorization"] = this.state.token;

    const topexperts = await axios.get("/topexperts");
    console.log(this.state.user);
    this.setState({ TopThreeExperts: topexperts.data });
    // here are the questions
    const n = 2; // no. of questions you want in one page
    const questions = await axios.get("/questionss/" + n);
    // console.log(questions.data);  // response.data has all the questions
    // if questions.data.answered == true , then that question has been answered
    // all the questions have a "date" field , to use this user "date.toDateString()"

    // let questionElements = [];
    console.log(questions.data);
    this.setState({ questions: questions.data });
  }

  componentDidMount(prevProps, prevState, snapshot) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        this.setState({ user: user });
        console.log("logged in");

        console.log(this.state.user);

        var p = this;
        firebase
          .auth()
          .currentUser.getIdToken(/* forceRefresh */ true)
          .then(function(idToken) {
            // Send token to your backend via HTTPS
            p.setState({ token: idToken });
            p.fillData();
            // ...
          })
          .catch(function(error) {
            // Handle error
          });
      } else {
        // No user is signed in.
        alert("log in again");
      }
    });
  }

  render() {
    const topExperts = [
      { name: "User 1", answers: 100 },
      { name: "User 2", answers: 55 },
      { name: "User 3", answers: 28 }
    ];

    const friendOptions = [
      {
        key: "Latest",
        text: "Latest",
        value: "Latest"
      },
      {
        key: "Oldest",
        text: "Oldest",
        value: "Oldest"
      },
      {
        key: "Most Popular",
        text: "Most Popular",
        value: "Most Popular"
      }
    ];

    return (
      <>
        <Container>
          <Grid>
            <Grid.Column width={4}>
              <Item.Group>
                <Header as="h3">Leaderboard</Header>

                {this.state.TopThreeExperts.length === 0 ? (
                  <Placeholder>
                    <Placeholder.Header image>
                      <Placeholder.Line />
                      <Placeholder.Line />
                    </Placeholder.Header>
                  </Placeholder>
                ) : (
                  <>
                    {_.map(this.state.TopThreeExperts, expert => (
                      <Item>
                        <Item.Image src={expert.profile} size="mini" />

                        <Item.Content>
                          <Header as="h5">{expert.name}</Header>
                          <p>{expert.numberOfQuestions} answers</p>
                        </Item.Content>
                      </Item>
                    ))}
                  </>
                )}
              </Item.Group>
            </Grid.Column>

            <Grid.Column width={12}>
              <Button primary>All Q&A</Button>
              <Button>Unanswered</Button>
              <Button>Answered</Button>

              <span class="dropdown--date">
                Order by:{" "}
                <Dropdown
                  inline
                  options={friendOptions}
                  defaultValue={friendOptions[0].value}
                />
              </span>

              <Divider />

              <Item.Group divided>
                {this.state.questions.length === 0 ? (
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line />
                      <Placeholder.Line />
                    </Placeholder.Paragraph>
                  </Placeholder>
                ) : (
                  <>
                    {_.map(this.state.questions, question => (
                      <Item>
                        <Item.Content>
                          <Item.Meta>
                            {question.name} asked 1 hour ago
                          </Item.Meta>

                          <Item.Header>{question.question}</Item.Header>

                          <Item.Meta>
                            <Label>
                              <Icon name="dollar sign" />1
                            </Label>
                            <Label>
                              <Icon name="comment" /> 1
                            </Label>

                            <Button primary compact className="button--answer">
                              Answer
                            </Button>
                          </Item.Meta>
                        </Item.Content>
                      </Item>
                    ))}
                  </>
                )}
              </Item.Group>

              <Divider />

              <Pagination
                defaultActivePage={1}
                totalPages={10}
                firstItem={null}
                lastItem={null}
                prevItem={{ content: <Icon name="angle left" />, icon: true }}
                nextItem={{ content: <Icon name="angle right" />, icon: true }}
              />
            </Grid.Column>
          </Grid>
        </Container>
      </>
    );
  }
}
