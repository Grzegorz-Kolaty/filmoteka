import React from "react";
import { SearchWrapper, Input, SearchIcon } from "./styled";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../queryParameters";
import { useLocation } from "react-router-dom";

const searchQueryParamName = "search";

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();
  const location = useLocation();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  const placeholderText = location.pathname.includes("/actors")
    ? "Search for actors..."
    : "Search for movies...";

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
