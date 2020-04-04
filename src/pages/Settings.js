import React from "react";
import ReactDOM from "react-dom";

import {
  Tab,
  Form,
  TextArea,
  Image,
  Header,
  Input,
  Button,
  Divider,
  Grid,
  Item,
  Label,
  Icon,
} from "semantic-ui-react";

export default class Settings extends React.Component {
  render() {
    const panes = [
      {
        menuItem: "Profile",
        render: () => (
          <Tab.Pane>
            <Form>
              <Header as="h2">Profile</Header>
              <Divider />

              <Form.Field>
                <label>Profile picture</label>
                <div class="profile-picture">
                  <Image
                    src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                    size="small"
                  />
                  <Button
                    icon="pencil"
                    content="Edit"
                    size="small"
                    compact
                    color="black"
                  />
                </div>
              </Form.Field>

              <Form.Field>
                <label>First name</label>
                <Input value="Matthew" />
              </Form.Field>

              <Form.Field>
                <label>Last name</label>
                <Input value="Lawrence" />
              </Form.Field>

              <Form.Field>
                <label>Email</label>
                <Input value="matthew.lawrence@gmail.com" />
              </Form.Field>

              <Form.Field>
                <label>Bio</label>
                <TextArea />
              </Form.Field>

              <Button type="submit" secondary>
                Update profile
              </Button>
            </Form>
          </Tab.Pane>
        ),
      },
      {
        menuItem: "Account",
        render: () => (
          <Tab.Pane>
            <Form>
              <Header as="h2">Two-Factor Authentication</Header>
              <Divider />

              <Form.Field>
                <p>Status: Disabled</p>
                <Button color="green">Enable 2FA</Button>
              </Form.Field>

              <Header as="h2">Connected accounts</Header>
              <Divider />

              <Form.Field>
                <Button icon labelPosition="left" basic>
                  <Icon name="google" />
                  Google
                </Button>

                <Button icon labelPosition="left" basic>
                  <Icon name="twitter" />
                  Twitter
                </Button>

                <Button icon labelPosition="left" basic>
                  <Icon name="facebook" />
                  Facebook
                </Button>
              </Form.Field>

              <Header as="h2">Delete your account</Header>
              <Divider />

              <Form.Field>
                <p>
                  Once you delete your account, there is no going back. Please
                  be certain.
                </p>
                <Button color="red">Delete your account</Button>
              </Form.Field>
            </Form>
          </Tab.Pane>
        ),
      },
      {
        menuItem: "Password",
        render: () => (
          <Tab.Pane>
            <Form>
              <Header as="h2">Password</Header>
              <Divider />

              <Form.Field>
                <label>Current password</label>
                <Input />
              </Form.Field>

              <Form.Field>
                <label>New password</label>
                <Input />
              </Form.Field>

              <Form.Field>
                <label>Confirm new password</label>
                <Input />
              </Form.Field>

              <Button type="submit" secondary>
                Save password
              </Button>
            </Form>
          </Tab.Pane>
        ),
      },
    ];

    return (
      <Tab
        menu={{ fluid: true, vertical: true, tabular: false }}
        panes={panes}
        className="settings"
      />
    );
  }
}
