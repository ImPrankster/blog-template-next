import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper, Tabs, Tab } from "@material-ui/core";

//icons
import { FaRegHandSpock, FaSnowboarding, FaPaperclip } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "transparent",
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  icon: {
    width: 120,
    height: 120,
  },
}));

const AppTab = ({ filter, setFilter }) => {
  const classes = useStyles();
  const isSmallScreen = !useMediaQuery("(min-width:600px)");

  return (
    <Container maxWidth="sm">
      <Paper className={classes.root} elevation={0}>
        <Tabs
          value={filter}
          onChange={(event, value) => {
            setFilter(value);
          }}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab
            label={isSmallScreen ? "" : "About"}
            icon={<FaRegHandSpock fontSize="large" />}
          />
          <Tab
            label={isSmallScreen ? "" : "Daily"}
            icon={<FaSnowboarding fontSize="large" />}
          />
          <Tab
            label={isSmallScreen ? "" : "Projects"}
            icon={<FaPaperclip fontSize="large" />}
          />
        </Tabs>
      </Paper>
    </Container>
  );
};

export default AppTab;
