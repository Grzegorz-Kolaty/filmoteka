import React from "react";
import { SearchWrapper, Input, SearchIcon } from "./styled";
import searchQueryParamName from "../searchQueryParamName";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../queryParameters";

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <SearchWrapper>
      <SearchIcon />
      <Input
        placeholder="Search for movies..."
        type="text"
        value={query || ""}
        onChange={onInputChange}
      />
    </SearchWrapper>
  );
};

export default Search;
