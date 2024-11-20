import { useNavigate } from "react-router-dom";
export default function NOtContent(props) {
  const { text, btnText } = props;
  const navigate = useNavigate();
  const handleHomeNavigate = () => {
    navigate("/");
  };

  return (
    <div className="text-white text-center my-5 mx-auto p-0 p-md-5 rounded">
      <h2>{text}</h2>
      <button
        className="btn btn-success btn-lg mt-3"
        onClick={handleHomeNavigate}
      >
        {btnText}
      </button>
    </div>
  );
}
