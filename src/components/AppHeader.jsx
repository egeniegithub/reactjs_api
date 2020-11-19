import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import { useLocation, Link } from "react-router-dom";

import { Layout, Menu } from "antd";
const { Header } = Layout;

const AppHeader = () => {
  const location = useLocation();

  const [activeRoute, setActiveRoute] = useState(["/"]);

  useEffect(() => {
    setActiveRoute([location.path]);
  }, [location.path]);

  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={activeRoute}>
        <Menu.Item key="/">
          <Link to={"/"}>Home</Link>
        </Menu.Item>
        <Menu.Item key="/sponsorships">
          <Link to={"/sponsorships"}>Sponsorships</Link>
        </Menu.Item>
        <Menu.Item key="/tiles">
          <Link to={"/tiles"}>Tiles</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(AppHeader);
