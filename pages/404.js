
import Link from "next/link";
import Layout from "./components/Layout";

const custom404 = () => (
  <Layout title="Page Not Found">
    <div className="text-center">
      <h1 className="display-1">404</h1>
      <p>
        Esta página no existe, por favor vuelve a {" "}
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default custom404;