

import React, { Component } from "react";
import { connect } from "react-redux";
import { register, updateUser } from "../actions/action";
import MessageFeed from "./MessageFeed";
import UserProfileSynopsis from "./UserProfileSynopsis";

import AHMessageFeed from "./AHMessageFeed.js";
import DeleteUserButton from "./deleteUserButton.js";
import MainFeedNavButton from "./MainFeedNavButton.js";
import { Grid, Button, Form, Segment } from "semantic-ui-react";
import LogOutButton from './LogOutButton';
import "../styles/Profile.css";
import ImageUploader from './ImageUploader';
//this was class changeuserprofile
class Profile extends React.Component {
  state = {
    username: "",
    password: "",
    displayName: "",
    token: ""
    // image: ?  check component library for specialized one or an html img tag (<img src="/users/idNO/picture">)
  };
  // we're not adding a change username function because the "username" for purposes of the API is the user's actual name, which the team has decided shouldn't change.  Only the display name and the password should be changed.
  handleChangeUpdatePassword = event => {
    this.setState({
      password: event.target.value
    });
  };
  // handleChaneUpdatePasswordConfirmation = event => {
  // }
  handleChangeUpdateDisplayName = event => {
    this.setState({
      displayName: event.target.value
    });
  };
  handleUpdate = event => {
    // if(the two password boxes are equal (characters and casing), then update the user)
    this.props.updateUser({
      password: this.state.password,
      displayName: this.state.displayName
      // image: this.state.image
      // about: this.state.about  this is another bit of information about our user that we can access/display in the user profile.
    });
  };
  render() {
    return (
      <Grid className="grid" centered>
        <Form className="form">
          <Form.Field className="gridcolumn1" width={4}>
            <Grid.Column>
              <UserProfileSynopsis />
              <div className="uploadphoto">
                <ImageUploader />
              </div>
            </Grid.Column>
          </Form.Field>

          <Form.Field className="gridcolumn2" width={6}>
            <Grid.Column>
              <p>Where the feed for Profile goes</p>
              {/* <AHMessageFeed /> */}

              <AHMessageFeed />
            </Grid.Column>
          </Form.Field>
          <Form.Field className="gridcolumn3" width={4}>
            <Grid.Column>
              <legend>Making a Change?</legend>


              <Segment className="segment" stacked>

                <Form.Field>
                  <input
                    className="input"
                    type="text"
                    onChange={this.handleChangeUpdateDisplayName}
                    placeholder="New Display Name"
                  />
                </Form.Field>
                <br />
                <Form.Field>
                  Enter New Password:
                  <br />
                  <input
                    className="input"
                    type="password"
                    onChange={this.handleChangeUpdatePassword}
                    placeholder="New Password"
                  />
                </Form.Field>
                <br />
                <Form.Field>
                  Confirm New Password:
                  <br />
                  <input className="input" type="password" />
                </Form.Field>

                <Button className="button" onClick={this.handleUpdate}>
                  Submit changes
                </Button>
                <DeleteUserButton />
                <br />
                <MainFeedNavButton />

                <LogOutButton />

                <Button className="button" onClick={this.props.toLoginPage}>
                  Log Out
                </Button>

              </Segment>
            </Grid.Column>
          </Form.Field>
        </Form>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUser: userData => dispatch(updateUser(userData))
    // updateUser is a prop that needs to be used SOMEWHERE in the component.
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Profile);


