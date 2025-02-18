import { Col, Row, Select } from "antd";
import {
  DashboardStatusCard,
} from "../components";
import "./styles/dashboard.css";
import { Option } from "antd/es/mentions";
import { CreditCardOutlined, DollarCircleTwoTone } from "@ant-design/icons"
import { EarningListTable } from "../components/tables/earning-list-table";

export const Earning = () => {
  
  
  return (
    <Row
      gutter={[0, 16]}
      className="dashboard"
      style={{ background: "#CACACA" }}
    >
      {/* dashboard-status-bar */}
      <Col span={24}>
        <Row gutter={16} className="dashboard-status-bar">
          <Col span={12}>
            <DashboardStatusCard icon={<CreditCardOutlined style={{ fontSize: 40, color: "#010101" }}/>} title="Total Earnings" desc="450" />
          </Col>
          <Col span={12}>
          <DashboardStatusCard icon={<DollarCircleTwoTone style={{ fontSize: 40, color: "#010101" }}/>} title="Subscription Purchased" desc="85" />
          </Col>
        </Row>
      </Col>
      <Col span={24}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding:"15px 0"
        }}
      >
        <h4
          style={{
            width:"100%",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          Earning
        </h4>

        <div className="" style={{ width:"100%"}}>
          <Select placeholder="This Month" defaultValue={"This Month"} style={{width:"100%"}}>
            <Option value="january">January</Option>
            <Option value="february">February</Option>
          </Select>
        </div>
      </Col>

      {/* dashboard-table-section */}
      <Col span={24}>
        <EarningListTable />
      </Col>
    </Row>
  );
};
