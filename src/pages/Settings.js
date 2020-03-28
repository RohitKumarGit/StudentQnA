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
  Divider
} from "semantic-ui-react";

export default class Settings extends React.Component {
  render() {
    const panes = [
      {
        menuItem: "Profile",
        render: () => (
          <Tab.Pane>
            <Form>
              <Header as="h3">Public profile</Header>

              <Divider />

              <Form.Field>
                <label>First name</label>
                <Input />
              </Form.Field>

              <Form.Field>
                <label>Last name</label>
                <Input />
              </Form.Field>

              <Form.Field>
                <label>Email</label>
                <Input />
              </Form.Field>

              <Form.Field>
                <label>Bio</label>
                <TextArea />
              </Form.Field>

              <Button type="submit">Update profile</Button>
            </Form>
          </Tab.Pane>
        )
      },
      {
        menuItem: "Security",
        render: () => (
          <Tab.Pane>
            <Form>
              <Header as="h3">Change password</Header>

              <Divider />

              <Form.Field>
                <label>Old password</label>
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

              <Button type="submit">Change password</Button>
            </Form>
          </Tab.Pane>
        )
      }
    ];

    return (
      <div>
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
      </div>
    );
  }
}
