import React from "react";

import { SearchWrapper, Input, SearchIcon } from "./styled";
const Search = () => {
  return (
    <SearchWrapper>
      <SearchIcon />
      <Input placeholder="Search for movies..." type="text" />
    </SearchWrapper>
  );
};
export default Search;
