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
  Sidebar,
  Menu,
  Icon,
  Segment
} from "semantic-ui-react";

export default class Settings extends React.Component {
  render() {
    const panes = [
      {
        menuItem: "Profile",
        render: () => (
          <Tab.Pane>
            <Form>
              {/* <Divider /> */}

              <Header as="h2">Public avatar</Header>

              <Form.Field className="avatar-field">
                <Image src="https://via.placeholder.com/500x500" size="small" />

                <div style={{ marginLeft: "1em" }}>
                  {/* <label>Upload new avatar</label> */}

                  <div className="file-upload">
                    <Input type="file" id="file" style={{ display: "none" }} />

                    <label
                      for="file"
                      class="ui button"
                      style={{ margin: "0 1rem .75rem 0" }}
                    >
                      Choose file...
                    </label>
                    <span>No file choosen</span>

                    <span style={{ display: "block" }}>
                      The maximum file size allowed is 200KB.
                    </span>
                  </div>
                </div>
              </Form.Field>

              <Divider />

              <Header as="h2">Main settings</Header>

              <Form.Field>
                <label>Name</label>
                <Input disabled value="ok" />
              </Form.Field>

              <Form.Field>
                <label>Email</label>
                <Input />
              </Form.Field>

              <Form.Field>
                <label>Bio</label>
                <TextArea />
              </Form.Field>

              <Button type="submit" secondary>
                Update profile
              </Button>
              <Button>Cancel</Button>
            </Form>
          </Tab.Pane>
        )
      },
      {
        menuItem: "Account",
        render: () => <Tab.Pane>2FA, Social, Delete</Tab.Pane>
      },
      {
        menuItem: "Password",
        render: () => (
          <Tab.Pane>
            <Grid>
              {/* <Grid.Column width={4}></Grid.Column> */}
              <Grid.Column width={12}>
                <Form>
                  {/* <Divider /> */}
                  <Header as="h2">Password</Header>

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
              </Grid.Column>
            </Grid>
          </Tab.Pane>
        )
      }
    ];

    return (
      <>
        <Tab
          menu={{ fluid: true, vertical: true, tabular: false }}
          panes={panes}
          className="settings"
        />
        {/* <Form>
          <Image
            src="https://www.rogowaylaw.com/wp-content/uploads/Blank-Employee.jpg"
            size="small"
          />

          <Header as="h3">Public profile</Header>

          <Form.Field>
            <label>Name</label>
            <Input />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <Input />
          </Form.Field>

          <Button primary>Update profile</Button>

          <Header as="h3">Change password</Header>

          <Form.Field>
            <label>Name</label>
            <Input />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <Input />
          </Form.Field>

          <Button primary>Update profile</Button>
        </Form> */}
      </>
    );
  }
}
