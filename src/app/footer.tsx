import { Box, Divider, Typography } from "@mui/material/";
import Link from "next/link";

// import classes from "./index.module.scss";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-400 h-60"
    // id={classes.homefooter} className={classes.footer}
    >
      <nav className="w-5/6 m-auto mt-10"
      //   className={classes.nav}
      >
        {/**error starts here! */}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography
            sx={{ fontWeight: "bold", fontSize: "h5.fontSize", width: "20%" }}
          >
            The Giving Heart
          </Typography>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography sx={{ fontWeight: "bold" }}>Contact Us</Typography>
            <Typography>Info@givingheart.com</Typography>
            <Typography>(302)-532-2922</Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography sx={{ fontWeight: "bold" }}>Useful Links</Typography>
            <Link
              href="https://github.com/payloadcms/payload/tree/master/templates/website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate
            </Link>
            <Link
              href="https://github.com/payloadcms/payload/tree/master/templates/website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Volunteer
            </Link>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            height="50%"
          >
            <Typography sx={{ fontWeight: "bold" }}>Socials</Typography>
            <Box display="flex" flexDirection="row">
              <img src="" alt="S1" />
              <img src="" alt="S2" />
              <img src="" alt="S3" />
            </Box>
          </Box>
        </Box>

        <Divider
          flexItem
          sx={{
            backgroundColor: "#000000",
            opacity: "0.6",
            height: "1px",
            margin: "20px 0",
          }}
        />

        <Box
          margin="2rem 0 1rem 0"
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography sx={{ fontSize: "body2.fontSize" }}>
            The Giving Heart
          </Typography>
          <Typography
            sx={{
              fontSize: "body2.fontSize",
            }}
          >
            Privacy Policy | Terms of Use
          </Typography>
        </Box>
      </nav>
    </footer>
  );
}
