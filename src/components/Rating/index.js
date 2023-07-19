import { Rate, Star, Textbox, Wrapper, Votes } from "./styled";

export const Rating = ({ rating, votes, header }) => {
  console.log(rating);
  return (
    <Wrapper header={header}>
      {rating && rating !== 0 ? (
        <Textbox header={header}>
          <Star header={header} />
          <Rate header={header}>{rating.toFixed(1)} </Rate>
          <Votes header={header}>{votes} votes </Votes>
        </Textbox>
      ) : (
        <Textbox>No rating available</Textbox>
      )}
    </Wrapper>
  );
};
