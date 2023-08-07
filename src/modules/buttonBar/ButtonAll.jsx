import { Box, InputBase, styled, Button, ToggleButton } from "@mui/material";
import { setVisibleData, setCurrentStatus } from "../../store/slice";
import { useSelector, useDispatch } from "react-redux";

export default function ButtonAll() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cityWishList.data);
  return (
    <ToggleButton
      variant="outlined"
      onClick={() => {
        dispatch(setVisibleData(data));
        dispatch(setCurrentStatus("all"));
      }}
    >
      All
    </ToggleButton>
  );
}
