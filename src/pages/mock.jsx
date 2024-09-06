import pdf from "../assets/Home - v1.pdf";
import "../styles/pages/mock.scss";

const Mock = () => {
  return (
    <div style={{ height: "750px" }}>
      <iframe
        src={pdf}
        style={{ width: "100%", height: "100%", border: "none" }}
        title="PDF Viewer"
      ></iframe>
    </div>
  );
};

export default Mock;
