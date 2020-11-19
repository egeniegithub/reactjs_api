import { connect } from "react-redux";
import { Layout } from "antd";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppHeader from "../components/AppHeader";
import AppContent from "../components/AppContent";
import AppFooter from "../components/AppFooter";

//Screens
import Sponsorships from "./Sponsorships";
import Tiles from "./Tiles";
import NotFound from "./NotFound";

const Main = () => {
  return (
    <Layout className={"layout"}>
      <Router>
        <AppHeader />
        <AppContent>
          <Switch>
            <Route exact path={"/"} component={Sponsorships} />
            <Route exact path={"/sponsorships"} component={Sponsorships} />
            <Route exact path={"/tiles"} component={Tiles} />
            <Route component={NotFound} />
          </Switch>
        </AppContent>
        <AppFooter />
      </Router>
    </Layout>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Main);
