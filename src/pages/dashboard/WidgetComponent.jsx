import { Card } from "antd";
import MyCSV from "../../components/csv";

const WidgetComponent = ({ children, title, style }) => {
  return (
    <Card
      title={title}
      style={{
        borderRadius: 10,
        overflowY: "auto",
        ...style,
      }}
    >
      <MyCSV
        headers={["Name", "Surname"]}
        data={[
          ["Ahmet", "Mehmet"],
          ["Ali", "Veli"],
        ]}
      />
      {children}
    </Card>
  );
};

export default WidgetComponent;
