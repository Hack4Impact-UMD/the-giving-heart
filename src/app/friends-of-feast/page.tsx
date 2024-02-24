



export default function About() {
  
    return (
      <main className="flex min-h-screen flex-col items-center">
        <div
        className="flex items-center justify-center md:p-16 p-2 pt-16 overflow-hidden"
        style={{
            // TODO: get better header image, current one is very pixelated 
          backgroundImage:
            "url(../_images/friends-of-the-feast.png), linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5))",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "40vh",
          position: "relative",
        }}
      >
        <div>
          <h2 className="text-5xl font-semibold leading-33 tracking-normal text-center text-white">
            Friends of The Feast
          </h2>
        </div>
      </div>

      </main>
    );
  }
  