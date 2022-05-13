import mainLogo from "@/assets/img/logo/lucraduct-logo.png";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();
  function onClick() {
    return navigate("/");
  }
  return (
    <div className="logo" onClick={onClick}>
      <p>
        <img src={mainLogo} />
      </p>
    </div>
  );
}

export default Logo;
