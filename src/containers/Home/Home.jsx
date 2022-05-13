import { Link } from "react-router-dom";
import Logo from "@/components/Logo.jsx";

function Home() {
  return (
    <>
      <Logo />
      <div className="middle">
        <h1>There is nothing impossible to they who will try.</h1>
        <hr />
        <p>
          Developed By{" "}
          <Link to="http://www.pnaveenteja.com" target="_blank">
            Paravada Naveen Teja
          </Link>
        </p>
      </div>
      <div className="bottomleft">
        <p>
          Powered By{" "}
          <Link to="http://www.lucraduct.com" target="_blank">
            Lucraduct
          </Link>
        </p>
      </div>
    </>
  );
}

export default Home;
