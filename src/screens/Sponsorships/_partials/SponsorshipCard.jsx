import React, { useState } from "react";

import { connect } from "react-redux";
import {
  Card,
  Row,
  Col,
  Divider,
  Tooltip,
  Button,
  Statistic,
  Tabs,
} from "antd";

import { VideoCameraOutlined } from "@ant-design/icons";

import AppVideoModal from "../../../components/AppVideoModal";
import Avatar from "antd/lib/avatar/avatar";

const { Meta } = Card;
const { TabPane } = Tabs;

const ActionButton = (props) => {
  const { tooltip, onClick, children } = props;
  return (
    <Tooltip title={tooltip}>
      <Button type={"primary"} onClick={onClick}>
        {children}
      </Button>
    </Tooltip>
  );
};

const SponsorshipCard = (props) => {
  const { sponsorship } = props;

  //Video Modal
  const [videoUriDash, setVideoUriDash] = useState("");
  const [videoUriHls, setVideoUriHls] = useState("");
  const [brief, setBrief] = useState("");
  const [title, setTitle] = useState("");

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Card
        hoverable
        cover={<img alt="example" src={sponsorship.coverTileUri} />}
        actions={[
          <ActionButton
            tooltip={"Watch Video"}
            onClick={() => {
              setVideoUriDash(sponsorship.videoUriDash);
              setVideoUriHls(sponsorship.videoUriHls);
              setBrief(sponsorship.brief);
              setTitle(sponsorship.brandName);
              setModalVisible(true);
            }}
          >
            <VideoCameraOutlined /> Watch Video
          </ActionButton>,
        ]}
      >
        <Row>
          <Col span={24}>
            <Meta
              title={sponsorship.brandName}
              description={sponsorship.brandInfo}
            />
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={24}>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Statistics" key="1">
                <Row>
                  <Col span={12}>
                    <Statistic
                      title={"Cash Incentive"}
                      value={
                        sponsorship.cashIncentive
                          ? sponsorship.cashIncentive.amount
                          : 0
                      }
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title={"Charity Donation Incentive"}
                      value={
                        sponsorship.charityDonationIncentive
                          ? sponsorship.charityDonationIncentive.amount
                          : 0
                      }
                    />
                  </Col>
                </Row>
                <Divider />
                <Row>
                  <Col span={12}>
                    <Statistic
                      title={"Question Count"}
                      value={sponsorship.questionCount}
                    />
                  </Col>
                </Row>
              </TabPane>
              {sponsorship.charityDonationIncentive ? (
                <TabPane tab="Charity" key="2">
                  <Row>
                    <Col span={6}>
                      <Avatar
                        src={
                          sponsorship.charityDonationIncentive.charityLogoUri
                        }
                      />
                    </Col>
                    <Col span={18}>
                      <h2>
                        {sponsorship.charityDonationIncentive.charityName}
                      </h2>
                    </Col>
                  </Row>
                </TabPane>
              ) : null}
            </Tabs>
          </Col>
        </Row>
      </Card>
      <AppVideoModal
        title={title}
        visible={modalVisible}
        videoUriDash={videoUriDash}
        videoUriHls={videoUriHls}
        brief={brief}
        onCancel={() => {
          setModalVisible(false);
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(SponsorshipCard);
