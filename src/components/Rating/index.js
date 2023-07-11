import { Rate, Star, Textbox } from "./styled";

export const Rating = ({ rating, votes }) => {
  console.log(rating);
  return (
    <>
      {rating > 0
        ?
        <Textbox>
          <Star />
          <Rate>{rating.toFixed(1)}</Rate>
          {votes} votes
        </Textbox>

        : <Textbox>No rating available</Textbox>
      }
    </>
  );
};
