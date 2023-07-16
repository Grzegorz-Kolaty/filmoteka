import { useState, useEffect } from "react";
import { Tag, Wrapper } from "./styled";

export const Tags = ({ ids, genres }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const tagNames = ids.map((id) => {
      const genre = genres.find((genre) => genre.id === id);
      return genre ? genre.name : "";
    });

    setTags(tagNames);
  }, [ids, genres]);

  return (
    <Wrapper>
      {tags.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </Wrapper>
  );
};
