import { Router, useRouter } from "next/router";

export default function FourOhFour() {
  const router = useRouter();
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          height: "100vh",
          margin: "0 auto",
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "white" }}>404 - Page Not Found</h1>
        <h2
          style={{ color: "purple", cursor: "pointer" }}
          onClick={() => {
            router.push("/");
          }}
        >
          Go back home
        </h2>
      </div>
    </>
  );
}
