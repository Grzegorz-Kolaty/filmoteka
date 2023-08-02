import React from "react";
import { SearchWrapper, Input, SearchIcon } from "./styled";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../queryParameters";

const searchQueryParamName = "search";

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  const placeholderText = "Search for movies...";

  return (
    <SearchWrapper>
      <SearchIcon />
      <Input
        placeholder={placeholderText}
        type="text"
        value={query || ""}
        onChange={onInputChange}
      />
    </SearchWrapper>
  );
};

export default Search;
