import { Typography } from "@mui/material";
import { Container } from "@mui/system";

const AboutUs = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
        <Typography variant="h1">AboutUs</Typography>
    </Container>
  );
};

export default AboutUs;
