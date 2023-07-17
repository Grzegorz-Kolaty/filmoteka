import { Rate, Star, Textbox, Wrapper } from "./styled";

export const RatingHeader = ({ rating, votes }) => {
  console.log(rating);
  return (
    <Wrapper>
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
};