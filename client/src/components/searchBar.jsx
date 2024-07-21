import React from "react";
import TextField from "@mui/material/TextField";
const SearchBar = ({ setSearchQuery }) => {
  return (
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Enter an Id"
      variant="outlined"
      placeholder="Search..."
      size="small"
    />
  );
};

const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    const queryLower = query.toLowerCase();
    return data.filter((item) => {
      return item._id.toLowerCase().includes(queryLower);
    });
  }
};

export { SearchBar, filterData };
