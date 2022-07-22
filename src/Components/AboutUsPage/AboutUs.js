import { Box, CircularProgress, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

const center = {lat: 32.062, lng: 34.776}

const AboutUs = () => {
  const {isLoaded, loadError} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
  })

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
        <Typography variant="h1">AboutUs</Typography>

        {!isLoaded ? <CircularProgress /> :
        <Box height={500} width={670}>
          <GoogleMap center={center} zoom={15} mapContainerStyle={{width: '100%', height: '100%'}}>

          </GoogleMap>
        </Box>}
    </Container>
  );
};

export default AboutUs;
