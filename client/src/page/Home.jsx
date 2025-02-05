import { Layout } from "../components/Layout";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}/api/hello`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <Layout>
      <div>
        <h1 className="mt-24 mb-4 text-3xl font-bold">Home</h1>
        <p>{message}</p>
        <p className="my-3 font-bold">
          This is a starter template for a{" "}
          <b>React/Vite/Tailwind/Express project.</b>
        </p>
        <p className="mt-4">
          <a
            className="text-blue-500 hover:underline"
            href="https://github.com/goodalchemy/react-vite-tailwind-express-starter"
            target="_blank"
            rel="noreferrer"
          >
            Documentation
          </a>
        </p>
      </div>
    </Layout>
  );
}
