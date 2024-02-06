import { Progress, Space, Card, Typography } from "antd";
import { CSVLink, CSVDownload } from "react-csv";
const { Title } = Typography;
const ActivitiesComponent = ({
  title,
  percent,
  totalCourseHourse,
  lastHours,
}) => {
  return (
    <Card
      title={title}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CSVLink
        style={{
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "green",
          color: "white",
          cursor: "pointer",
          textDecoration: "none",
          textAlign: "center",
          right: "0",
        }}
        data={[
          ["Total Course Hours", "Last Hours"],
          [totalCourseHourse, lastHours],
        ]}
        filename={"activities.csv"}
      >
        Download me
      </CSVLink>
      <Space direction="horizontal">
        <div
          style={{
            display: "flex",
          }}
        >
          <Progress type="circle" percent={percent} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Title level={5}>
              Total Course <br />{" "}
              <span
                style={{
                  color: "#1890ff",
                  fontWeight: "bold",
                  marginLeft: "10px",
                }}
              >
                Hours ({totalCourseHourse})
              </span>
            </Title>
            <Title level={5}>Last hours ({lastHours})</Title>
          </div>
        </div>
      </Space>
    </Card>
  );
};

export default ActivitiesComponent;
