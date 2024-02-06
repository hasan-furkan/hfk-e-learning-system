import { CSVLink, CSVDownload } from "react-csv";

const MyCSV = ({ headers, data }) => {
  return (
    <div>
      <CSVLink
        filename={"activities.csv"}
        data={data}
        headers={headers}
        style={{
          padding: "10px 20px",
          background: "#1890ff",
          color: "white",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        Download me
      </CSVLink>
    </div>
  );
};

export default MyCSV;
