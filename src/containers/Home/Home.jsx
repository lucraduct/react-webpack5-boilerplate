import Logo from "@/components/Logo.jsx";

function Home() {
  return (
    <>
      <Logo />
      <div class="middle">
        <h1>There is nothing impossible to they who will try.</h1>
        <hr />
        <p>
          Developed By{" "}
          <a href="http://www.pnaveenteja.com" target="_blank">
            Paravada Naveen Teja
          </a>
        </p>
      </div>
      <div class="bottomleft">
        <p>
          Powered By{" "}
          <a href="http://www.lucraduct.com" target="_blank">
            Lucraduct
          </a>
        </p>
      </div>
    </>
  );
}

export default Home;
