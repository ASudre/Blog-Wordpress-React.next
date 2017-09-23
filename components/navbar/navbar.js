// @flow

import React from 'react';
import Router from 'next/router';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import HomeIcon from 'material-ui-icons/Home';
import AboutIcon from 'material-ui-icons/Help';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Drawer from 'material-ui/Drawer';

const styles = () => ({
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  menuList: {
    width: 250,
    flex: 'initial',
  },
});

type Props = {
  classes: any,
  title: string,
}

type State = {
  open: boolean,
  title: string,
}

class AppBarComponent extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: props.title,
    };
  }

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  }

  goToHome = () => {
    Router.push('/');
    this.setState({ title: 'Home' });
    this.handleToggle();
  }

  goToAbout = () => {
    Router.push('/about');
    this.setState({ title: 'About' });
    this.handleToggle();
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" style={{ margin: 0 }}>
          <Toolbar>
            <IconButton onClick={this.handleToggle} className={classes.menuButton} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              {this.state.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.open} onRequestClose={this.handleToggle}>
          <List className={classes.menuList}>
            <ListItem button onClick={this.goToHome}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={this.goToAbout}>
              <ListItemIcon>
                <AboutIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(AppBarComponent);
