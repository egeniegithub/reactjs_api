import React, {  useState } from "react";
import ReactPlayer from "react-player";

import { connect } from "react-redux";

import { Modal, Row, Col, Divider } from "antd";

const AppVideoModal = (props) => {
  const { title, visible, videoUriDash, videoUriHls, brief, onCancel } = props;

  const [playing, setPlaying] = useState(false);

  return (
    <Modal
      width={1325}
      title={title}
      visible={visible}
      onOk={null}
      onCancel={() => {
        setPlaying(false);
        onCancel();
      }}
    >
      <Row justify="center">
        <Col span={24}>
          <ReactPlayer
            width={1280}
            height={720}
            controls={true}
            playing={playing}
            onPlay={() => {
              setPlaying(true);
            }}
            stopOnUnmount={true}
            url={[
              { src: videoUriHls, type: "application/x-mpegURL" },
              { src: videoUriDash, type: "application/dash+xml" },
            ]}

            // url={"https://www.youtube.com/watch?v=DKLS45PNT0A"}
          />
        </Col>
      </Row>
      <Divider />
      <Row justify="center">
        <Col span={24}>
          <p>{brief}</p>
        </Col>
      </Row>
    </Modal>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(AppVideoModal);
