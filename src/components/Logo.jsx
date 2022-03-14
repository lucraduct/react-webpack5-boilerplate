import mainLogo from "@/assets/img/logo/lucraduct-logo.png";
import { useHistory } from "react-router-dom";

function Logo() {
  const history = useHistory();
  function onClick() {
    return history.push("/");
  }
  return (
    <div class="logo" onClick={onClick}>
      <p>
        <img src={mainLogo} />
      </p>
    </div>
  );
}

export default Logo;
