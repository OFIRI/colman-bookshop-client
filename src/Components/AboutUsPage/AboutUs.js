import { Box, CircularProgress, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../Utils/axios";

const center = {lat: 32.062, lng: 34.776}

const AboutUs = () => {
  const [markers, setMarkers] = useState([]);
  const {isLoaded, loadError} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
  })

  useEffect(() => {
    const fetchShops = async () => {
      const {data} = axios.get(BASE_URL + 'shops');
      setMarkers(data.map((loc)=> {
        return loc.coordinates;  
      }));
    }

    fetchShops()
  },[]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
        <Typography variant="h1">AboutUs</Typography>
        <Typography variant="h6" style={{margin: "20px 0"}}>Founded by bestselling author, Kosta Kostyukov, TOAR Bookshop is a new independent bookstore now open at 21st Eilat street, Holon. Featuring new books, author events, unique gifts, and with a coffee, wine and beer bar planned for the near future, TOAR Bookshop aims to be a space for folks to gather to share their passion for the written word. </Typography>
        <Typography variant="h6" style={{margin: "20px 0"}}>TOAR Bookshop's name is inspired by that feeling you get when lost in a good book. According to Kosta: "Growing up I spent more time in the land of books than I did in real life. I lived in those neverlands that you can only visit in stories. The places you grew up in that never actually existed. The ones you got lost in and the ones you found yourself in. Those strange countries that are real and important, in spite of the fact that they exist nowhere at all but inside you." </Typography>
        
        {!isLoaded ? <CircularProgress /> :
        <Box height={500} width={670}>
          <GoogleMap center={center} zoom={15} mapContainerStyle={{width: '100%', height: '100%'}}>
            {markers.map(marker => <Marker position={{lat: marker.lat, lng: marker.long}}/>)}
          </GoogleMap>
        </Box>}
    </Container>
  );
};

export default AboutUs;
