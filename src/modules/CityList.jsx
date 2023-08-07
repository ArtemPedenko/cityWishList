import {
  Box,
  InputBase,
  styled,
  Stack,
  Typography,
  Container,
} from "@mui/material";
import { AutoSizer } from "react-virtualized";
import { FixedSizeList as List } from "react-window";
import { useSelector, useDispatch } from "react-redux";
import CityListCard from "./cityList/CityListCard";
import { forwardRef } from "react";
import SearchBar from "./SearchBar";
import ButtonBar from "./ButtonBar";

const innerElementType = forwardRef(({ style, ...rest }, ref) => {
  return (
    <Container>
      <SearchBar />
      <ButtonBar />
      <div
        ref={ref}
        style={{
          ...style,
          height: `${parseFloat(style.height) + 50 * 2}px`,
        }}
        {...rest}
      />
    </Container>
  );
});

export default function CityList({ visibleData }) {
  const dispatch = useDispatch();

  const rowRenderer = ({
    index, // Index of row
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    parent, // Reference to the parent List (instance)
    style, // Style object to be applied to row (to position it);
  }) => (
    <Box
      style={{
        ...style,
        top: `${parseFloat(style.top) + 87}px`,
        height: `${parseFloat(style.height) + 50}px`,
      }}
    >
      <CityListCard cityItem={visibleData[index]} />
    </Box>
  );



  return (
    <AutoSizer style={{ width: "1200px", height: "95vh" }}>
      {({ height, width }) => (
        <List
          width={width}
          height={height}
          itemCount={visibleData.length}
          itemSize={100}
          innerElementType={innerElementType}
        >
          {rowRenderer}
        </List>
      )}
    </AutoSizer>
  );
}
