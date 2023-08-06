import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import MapModal from "../../components/MapModal";
import {
  Box,
  InputBase,
  styled,
  Stack,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { addToSelected } from "../../utils";
import { setSelectedData } from "../../store/slice";
import { HighlightText, Lighter } from "../../utils";

export default function CityListCard(props) {
  const { data } = props;
  //console.log(data)
  const dispatch = useDispatch();
  const selectedData = useSelector((state) => state.cityWishList.selectedData);
  const searchingText = useSelector((state) => state.cityWishList.searchingText);
  const currentList = useSelector((state) => state.cityWishList.currentList);

  const [open, setOpen] = useState(false);
  const modalOpen = () => setOpen(true);
  const modalClose = () => setOpen(false);

  return (
    <>
      <Container
        sx={{
          display: "flex",
          backgroundColor: "primary.main",
          color: "secondary.main",
          padding: "10px",
          mt: "10px",
          borderRadius: "5px",
          alignItems: "center",
          width: "1150px",
          justifyContent: "space-between",
        }}
      >
        <Stack spacing={2}>
          <Typography>
            <Lighter  str={data.city} filter={searchingText}/>
          </Typography>
          <Typography>
          <Lighter  str={data.country} filter={searchingText}/>
          </Typography>
        </Stack>
        <Box >
          <Stack spacing={1}   >
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={modalOpen}
            >
              See on map
            </Button>
            
            

              {currentList === "all" ? 
            <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={() =>
              dispatch(setSelectedData(addToSelected(selectedData, data)))
            }
          >
            I want to visit
          </Button>
          :
          <Button variant="outlined" color="secondary" size="small" >
          delete
        </Button>
            }

          </Stack>
        </Box>
      </Container>
      <MapModal open={open} close={modalClose} />
    </>
  );
}
