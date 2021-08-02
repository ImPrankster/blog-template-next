import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import CodeRoundedIcon from "@material-ui/icons/CodeRounded";
import BrushRoundedIcon from "@material-ui/icons/BrushRounded";
import HotelRoundedIcon from "@material-ui/icons/HotelRounded";
import EventNoteRoundedIcon from "@material-ui/icons/EventNoteRounded";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  bottomNav: {
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
});

const PostFilterSelector = ({ postFilter, setPostFilter }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <BottomNavigation
        value={postFilter}
        onChange={(event, value) => {
          setPostFilter(value);
        }}
        className={classes.bottomNav}
      >
        <BottomNavigationAction
          label="All"
          value={null}
          icon={<DashboardRoundedIcon />}
        />
        <BottomNavigationAction
          label="Code"
          value="Code"
          icon={<CodeRoundedIcon />}
        />
        <BottomNavigationAction
          label="Design"
          value="Design"
          icon={<BrushRoundedIcon />}
        />
        <BottomNavigationAction
          label="Daily"
          value="Daily"
          icon={<HotelRoundedIcon />}
        />
        <BottomNavigationAction
          label="Projects"
          value="Projects"
          icon={<EventNoteRoundedIcon />}
        />
      </BottomNavigation>
    </Container>
  );
};

export default PostFilterSelector;
