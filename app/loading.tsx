import Image from "next/image";
import loader from "@/assets/loader.gif";

const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Image
  src={loader}
  width={150}
  alt="Loading..."
  style={{ height: 'auto' }} // Maintain natural aspect ratio
/>
    </div>
  );
};

export default LoadingPage;
