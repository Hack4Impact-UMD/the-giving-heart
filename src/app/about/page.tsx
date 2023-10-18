import Navbar from "../navbar";
import Image from "next/image";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>About</h1>
        <div>
          <main
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                gap: "10px",
                backgroundColor: "white",
              }}
            >
              <div className="column">
                {/* <Image
                  src="link"
                  alt="Background Image"
                  width="100"
                  height="100"
                />{" "} */}
              </div>
              <div className="column">
                <h2 style={{ color: "black" }}>Est. 2002</h2>{" "}
              </div>
              <div className="column">
                {/* <Image
                  src="link"
                  alt="Background Image"
                  width="100"
                  height="100"
                />{" "} */}
              </div>
            </div>

            <div>
              <h2 style={{ display: "flex", justifyContent: "center" }}>
                Who We Are
              </h2>
              <p style={{ display: "flex", justifyContent: "center" }}>
                This is the content for the section.
              </p>
            </div>

            <div>
              <div>
                <h2 style={{ display: "flex", justifyContent: "center" }}>
                  Ways We Help Others
                </h2>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  {/* <Image src="link" alt=" Image" width="100" height="100" />
                  <Image src="link" alt=" Image" width="100" height="100" />
                  <Image src="link" alt=" Image" width="100" height="100" /> */}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </main>
  );
}
