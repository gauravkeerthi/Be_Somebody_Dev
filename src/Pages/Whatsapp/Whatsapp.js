import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { lightGreen } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";
import WhatsappChatbubble from "../../Components/Whatsapp/Chatbubble";
import "./Whatsapp.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "480px", // to mimic mobile app
    backgroundColor: lightGreen
  },
  inline: {
    display: "inline",
    align: "right"
  }
}));

const ReplyOptionButton = withStyles({
  root: {
    textTransform: "none",
    margin: "1rem"
  }
})(Button);

const Player1Name = "Hello World";

export default function Whatsapp() {
  const classes = useStyles();

  return (
    // need to refactor all of this into individual chat component
    <List className={classes.root}>
      <WhatsappChatbubble />

      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Gavin" src="/images/avatar/gavin.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={Player1Name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              ></Typography>
              {" 9:12pm"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      {/* // need to refactor this into separate option component */}
      <ReplyOptionButton
        variant="text"
        color="primary"
        className={classes.root}
      >
        My pa saw us holding hands
      </ReplyOptionButton>
      <ReplyOptionButton
        variant="text"
        color="primary"
        className={classes.root}
      >
        i just need to escape my pa for a while.
      </ReplyOptionButton>
    </List>
  );
}
