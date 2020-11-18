import React from "react";

import { connect } from "react-redux";

import { Layout } from "antd";
const { Footer } = Layout;

const today = new Date();

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      eGenie Next Online Solutions ©{today.getFullYear()}
    </Footer>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(AppFooter);
