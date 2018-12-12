import React, { Component } from "react";
import { connect } from "react-redux";
import { register, updateUser } from "../actions/action";
import MessageFeed from "./MessageFeed";
import UserProfileSynopsis from "./UserProfileSynopsis";


import AHMessageFeed from "./AHMessageFeed.js";
import DeleteUserButton from "./deleteUserButton.js"
import MainFeedNavButton from "./MainFeedNavButton.js"


import { Grid, Card, Image, Icon } from "semantic-ui-react";
import "../styles/Profile.css";

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
      <Grid className="grid">
        <Grid.Column className="gridcolumn1" width={4}>
          <Card className="userprofile">
            <Image src="https://semantic-ui.com/images/wireframe/image.png" />
            <Card.Content>
              <Card.Header>Jen</Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                software engineer. mamabear. luv live music. jokes. chocolate.
                swear2much. ambivert. trust your struggles.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                1M Friends
              </a>
            </Card.Content>
          </Card>
          <div className="uploadphoto">
            <button>Upload photo</button>
          </div>
        </Grid.Column>
        <Grid.Column className="gridcolumn2" width={6}>
          <p>Where the feed for Profile goes</p>
        </Grid.Column>
        <Grid.Column className="gridcolumn3" width={4}>
          <legend>Making a Change?</legend>
          <fieldset className="fieldset">
            <input
              className="input"
              type="text"
              onChange={this.handleChangeUpdateDisplayName}
              placeholder="New Display Name"
            />
          </fieldset>
          <br />
          <fieldset>
            Enter New Password:
            <br />
            <input
              className="input"
              type="password"
              onChange={this.handleChangeUpdatePassword}
              placeholder="New Password"
            />
          </fieldset>
          <br />
          <fieldset>
            Confirm New Password:
            <br />
            <input className="input" type="password" />
          </fieldset>
          <br />

          <UserProfileSynopsis />
          <MessageFeed />

          Uploaded Photo Will be added here.
          <button>upload photo</button>
          {/* Add Clint's photo button after QA */}
          <br />
          <AHMessageFeed />
          <MainFeedNavButton />
          <button>delete user
            <DeleteUserButton />
          </button>
        </div>
      </div>

          <div className="submitchangebutton">
            <button onClick={this.handleUpdate}>Submit changes</button>
          </div>

          <div className="deleteuserbutton">
            <button>Delete user</button>
          </div>
          <div className="logoutbutton">
            <button onClick={this.props.toLoginPage}>Log Out</button>
          </div>
        </Grid.Column>
      </Grid>

    );
  }
}
{
  /* <Container className="container">
  <Grid className="gridprofilepage">
    <Grid.Row className="column1">
      <Grid.Column width={8}>
        <Container className="profilefeed" />
        {/* feedgoeshere */
}
//       </Grid.Column>
//       <Grid.Row width={3}>
//         <Card className="userprofile">
//           <Image src="./jen.jpeg" />
//           <Card.Content>
//             <Card.Header>Jen</Card.Header>
//             <Card.Meta>
//               <span className="date">Joined in 2015</span>
//             </Card.Meta>
//             <Card.Description>Hello my name is Jen</Card.Description>
//           </Card.Content>
//           <Card.Content extra>
//             <a>
//               <Icon name="user" />
//               22 Friends
//             </a>
//           </Card.Content>
//         </Card>
//       </Grid.Row>
//       <Grid.Column width={3}>
//         <div className="uploadphoto">
//           <button>Upload photo</button>
//         </div>
//         <legend>Enter New User Here</legend>
//         <fieldset>
//           <input
//             type="text"
//             onChange={this.handleChangeUpdateDisplayName}
//             placeholder="New Display Name"
//           />
//         </fieldset>
//         <br />
//         <fieldset>
//           Enter New Password:
//           <br />
//           <input
//             type="password"
//             onChange={this.handleChangeUpdatePassword}
//             placeholder="New Password"
//           />
//         </fieldset>
//         <br />
//         <fieldset>
//           Confirm New Password:
//           <br />
//           <input type="password" />
//         </fieldset>
//         <br />
//         <div className="submitchangebutton">
//           <button onClick={this.handleUpdate}>Submit changes</button>
//           {/* This is a dummy button; waiting for submit changes language. no authorization token should be necessary */}
//         </div>
//         <br />

//         {/* Add Clint's photo button after QA */}
//         <br />
//         <div className="deleteuserbutton">
//           <button>Delete user</button>
//           {/*   Clint is working on this feature. User delete Currently Authenticated endpoint? */}
//         </div>
//         <div className="logoutbutton">
//           <button
//             className="logOutButton"
//             // onClick={this.props.toLoginPage}
//           >
//             Log Out
//           </button>
//         </div>
//       </Grid.Column>
//     </Grid.Row>
//   </Grid>
// </Container> */}

// ;  don't need map state to props because we aren't displaying the current values, therefore, nothing to read/display
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
