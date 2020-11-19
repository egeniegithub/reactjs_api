import React from "react";

import { connect } from "react-redux";

import { PageHeader, Card, Row, Col, Divider } from "antd";

const AppHeader = (props) => {
  const { title, subTitle, onBack, children, ...other } = props;

  return (
    <Card style={{ marginTop: 5 }} bodyStyle={{ padding: 5, minHeight: 500 }} {...other}>
      <Row>
        <Col xs={24}>
          <PageHeader
            className="site-page-header"
            onBack={onBack ? onBack : null}
            title={title ? title : null}
            subTitle={subTitle ? subTitle : null}
          />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col xs={24}>{children}</Col>
      </Row>
    </Card>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(AppHeader);
