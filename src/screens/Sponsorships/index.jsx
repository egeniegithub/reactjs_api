import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import AppPage from "../../components/AppPage";
import SponsorshipCard from "./_partials/SponsorshipCard";

import { Space, Spin, Row, Col } from "antd";

import { fetchSponsorships } from "../../redux/sponsorships";

const Sponsorships = ({ fetchSponsorships, sponsorships }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchSponsorships(() => {
      setLoading(false);
    });
  }, []);

  return (
    <AppPage title={"Sponsorships"}>
      {loading ? (
        <Space size="middle">
          <Spin size="large" />
        </Space>
      ) : (
        <>
          {sponsorships && sponsorships.length > 0 ? (
            <Row gutter={[10, 10]}>
              {sponsorships.map((sponsorship, index) => {
                return (
                  <Col key={`${sponsorship.sponsorshipId}`} xs={24} sm={12} md={12} xl={8} xxl={6}>
                    <SponsorshipCard
                      key={`${index}_${sponsorship.sponsorshipId}`}
                      sponsorship={sponsorship}
                    />
                  </Col>
                );
              })}
            </Row>
          ) : (
            <></>
          )}
        </>
      )}
    </AppPage>
  );
};

const mapStateToProps = (state) => ({
  sponsorships: state.sponsorships.sponsorships,
});

export default connect(mapStateToProps, {
  fetchSponsorships: fetchSponsorships,
})(Sponsorships);
