import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Space, Spin, Row, Col } from "antd";

import AppPage from "../../components/AppPage";
import TileCard from "./_partials/TileCard";

import { fetchTiles } from "../../redux/tiles";

const Tiles = ({ fetchTiles, tiles }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchTiles(() => {
      setLoading(false);
    });
  }, []);

  return (
    <AppPage title={"Tiles"}>
      {loading ? (
        <Space size="middle" className="spinner-wrp">
          <Spin size="large" />
        </Space>
      ) : (
        <>
          {tiles && tiles.length > 0 ? (
            <Row gutter={[10, 10]}>
              {tiles.map((tile, index) => {
                return (
                  <Col
                    key={`${tile.id}`}
                    xs={24}
                    sm={12}
                    md={8}
                    xl={6}
                    xxl={4}
                  >
                    <TileCard tile={tile} />
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
  tiles: state.tiles.tiles,
});

export default connect(mapStateToProps, {
  fetchTiles: fetchTiles,
})(Tiles);
