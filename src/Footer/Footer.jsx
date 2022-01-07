import React from "react";
// import "./Footer.css";
import Grid from "@mui/material/Grid";
import { Box, Link } from "@mui/material";
import { Container } from "@mui/material";
import { color } from "@mui/system";

const Footer = () => {
  return (
    <>
      <footer>
        <Box
          px={{ xs: 2, sm: 5 }}
          py={{ xs: 2, sm: 5 }}
          bgcolor="#212121"
          color="white"
        >
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>
                  {" "}
                  <h3>Help</h3>
                </Box>
                <br />
                <Box>
                  <Link href="#" color="inherit">
                    Contact
                  </Link>
                </Box>
                <br />
                <Box>
                  <Link href="#" color="inherit">
                    Support
                  </Link>
                </Box>
                <br />
                <Box>
                  <Link href="#" color="inherit">
                    Privacy
                  </Link>
                </Box>
                <br />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>
                  {" "}
                  <h3>Account</h3>
                </Box>
                <br />
                <Box>
                  <Link href="#" color="inherit">
                    Login
                  </Link>
                </Box>
                <br />
                <Box>
                  <Link href="#" color="inherit">
                    Registers
                  </Link>
                </Box>
                <br />
                <Box>
                  <Link href="#" color="inherit">
                    Privacys
                  </Link>
                </Box>
                <br />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>
                  {" "}
                  <h3>Accounts</h3>
                </Box>
                <Box>
                  <br />
                  <Link href="#" color="inherit">
                    Login
                  </Link>
                </Box>
                <br />
                <Box>
                  <Link href="#" color="inherit">
                    Register
                  </Link>
                </Box>
                <br />
                <Box>
                  <Link href="#" color="inherit">
                    Privacy
                  </Link>
                </Box>
                <br />
              </Grid>
            </Grid>
            <Box textAlign="center" pt={{ xs: 5, sm: 5 }} pb={{ xs: 5, sm: 0 }}>
              Movie-Review-App &reg; {new Date().getFullYear()}
            </Box>
          </Container>
        </Box>
        {/* <Grid container spacing={4}>
          <Grid xs={4}>
            <h2>Company</h2>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </Grid>
          <Grid xs={4}>
            <h2>Company</h2>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </Grid>
          <Grid xs={4}>
            <h2>Company</h2>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </Grid>
        </Grid> */}
      </footer>
    </>
  );
};
export default Footer;
