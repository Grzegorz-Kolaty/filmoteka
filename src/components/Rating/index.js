import { Rate, Star, Textbox, Wrapper } from "./styled";

export const Rating = ({ rating, votes }) => {
  console.log(rating);
  return (
    <Wrapper>
      {rating > 0
        ? (
          <Textbox>
            <Star />
            <Rate>{rating}</Rate>
            {votes} votes
          </Textbox>
        ) : (
          <Textbox>No rating available</Textbox>
        )}
    </Wrapper>
  );
}