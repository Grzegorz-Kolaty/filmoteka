import { Rate, Star, Textbox, Wrapper, Votes } from "./styled";

export const Rating = ({ rating, votes, header }) => {
  return (
    <Wrapper>
      {rating !== 0 ? (
        <Textbox header={header}>
          <Star />
          <Rate header={header}>{rating} </Rate>
          <Votes header={header}>{votes} votes </Votes>
        </Textbox>
      ) : (
        <Textbox>No rating available</Textbox>
      )}
    </Wrapper>
  );
};
