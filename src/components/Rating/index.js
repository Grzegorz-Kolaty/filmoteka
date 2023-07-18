import { Rate, Star, Textbox, Wrapper } from "./styled";

export const Rating = ({ rating, votes, header }) => {
  console.log(rating);
  return (
    <Wrapper header={header}>
      {rating && rating !== 0 ? (
        <Textbox>
          <Star />
          <Rate>{rating.toFixed(1)}</Rate>
          {votes} votes
        </Textbox>
      ) : (
        <Textbox>No rating available</Textbox>
      )}
    </Wrapper>
  );
}