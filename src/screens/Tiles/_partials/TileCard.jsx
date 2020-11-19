import React from "react";

import { connect } from "react-redux";
import { Card, Row, Col, Button } from "antd";
import { LinkOutlined } from "@ant-design/icons";

const { Meta } = Card;

const TileCard = (props) => {
  const { tile } = props;

  return (
    <>
      <Card
        hoverable
        cover={<img alt="example" src={tile.mediaImageUri} />}
        actions={[
          <a href={tile.url} target="_blank">
            <LinkOutlined />
          </a>,
        ]}
      >
        <Row>
          <Col span={24}>
            <Meta title={tile.name} description={tile.categoryType} />
          </Col>
        </Row>
      </Card>
    </>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(TileCard);
