import { connect } from "react-redux";
import { Layout } from "antd";
const { Content } = Layout;

const AppContent = (props) => {
  const { children, ...other } = props;

  return (
    <Content {...other} style={{ flex: 1, padding: "0 50px", minHeight: 500 }}>
      {children}
    </Content>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(AppContent);
