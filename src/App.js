import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './style/www.css';
import './style/community-components.css';
import './style/style.css';
import './style/icons.css';
import './style/colors.css';
import './style/images.css';
import "./style/community.css";
// import "./style/1032_carbon-components.min.css"
import "./style/carbon-components.min.css"
import './style/garage-wheel.css';
// import './style/garage-wheel2.css';

import Page from './containers/Page';
import Home from './containers/Home';

class App extends Component {
  render() {
    console.log('Welcome to the tech-devops-svcmgmt community log');
    return (
      <Router>
        <div className="site">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:pageId" component={Page} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
