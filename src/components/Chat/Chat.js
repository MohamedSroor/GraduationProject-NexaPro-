import React, { useState } from "react";
import { CometChat } from "@cometchat-pro/chat";
import { CometChatUsersWithMessages } from '@cometchat/chat-uikit-react';
import { CometChatUIKit,UIKitSettingsBuilder } from "@cometchat/chat-uikit-react";
import {CometChatUI} from "@cometchat/chat-uikit-react"
import SideBar from "../SideBar/SideBar";
const appID = "2530620c0b4ab662";
const region = process.env.REACT_APP_COMETCHAT_REGION;
const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(region)
  .build();

CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
  },
  (error) => {
    console.log("Initialization failed with error: " + error);
  }
);
// creat user
const authKey = "eef4f131564781a7e8fae15dcdcb59793bb2a26d";
const uid = "user120";
// const name = "mostafa";
// var user = new CometChat.User(uid);
// user.setName(name);
// CometChat.createUser(user, authKey).then(
//   (user) => {
//     console.log("User created", user);
//   },
//   (error) => {
//     console.log("error creating user", error);
//   }
// );

// login user

CometChat.login(uid, authKey).then(
  (user) => {
    console.log("User logged in", user);
  },
  (error) => {
    console.log("login failed", error);
  }
);


const COMETCHAT_CONSTANTS ={
  appID : "2530620c0b4ab662",
 region : process.env.REACT_APP_COMETCHAT_REGION,
 authKey : "eef4f131564781a7e8fae15dcdcb59793bb2a26d"
}
const UIKitSettings = new UIKitSettingsBuilder()
  .setAppId(COMETCHAT_CONSTANTS.appID)
  .setRegion(COMETCHAT_CONSTANTS.region)
  .setAuthKey(COMETCHAT_CONSTANTS.authKey)
  .subscribePresenceForFriends()
  .build();

  CometChatUIKit.init(UIKitSettings).then(() => {
    console.log("Initialization completed successfully");
    // You can now call login function.
  }).catch(console.log);
  
function Chat() {
  const [selectedButton, setSelectedButton] = useState(4);
  return (
    <>
    <SideBar
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
    <div className="chat">
      <CometChatUsersWithMessages />
    </div>
    </>
  );
}

export default Chat;
