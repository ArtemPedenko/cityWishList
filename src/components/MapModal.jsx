import { Modal, Box } from "@mui/material";
import { YMaps, Map, ZoomControl } from "react-yandex-maps";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function MapModal(props) {
  const { open, close, lat, lng } = props;
  console.log("lat " + lat);
  return (
    <Modal keepMounted open={open} onClose={close}>
      <Box sx={style}>
        <YMaps query={{ apikey: "e44dac90-043e-402c-8f0d-01fcbf571ff5" }}>
          <Map
            width="500px"
            height="500px"
            defaultState={{ center: [lat, lng], zoom: 11 }}
          >
            <ZoomControl />
          </Map>
        </YMaps>
      </Box>
    </Modal>
  );
}
