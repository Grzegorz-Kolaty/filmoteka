import React from "react";

import { SearchWrapper, Input } from "./styled";
const Search = () => {
  return (
    <SearchWrapper>
      <Input placeholder="Search for movies..." type="text" />
    </SearchWrapper>
  );
};
export default Search;
