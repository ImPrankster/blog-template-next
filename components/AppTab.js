import React from "react";
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
          <Tab label="About" icon={<FaRegHandSpock fontSize="large" />} />
          <Tab label="Daily" icon={<FaSnowboarding fontSize="large" />} />
          <Tab label="Projects" icon={<FaPaperclip fontSize="large" />} />
        </Tabs>
      </Paper>
    </Container>
  );
};

export default AppTab;
