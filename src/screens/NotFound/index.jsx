import React from "react";

import { connect } from "react-redux";

const NotFound = () => {
  return <h1>404</h1>;
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(NotFound);
