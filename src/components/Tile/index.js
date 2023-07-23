import { useMediaQuery } from 'react-responsive';
import { Tags } from "../Genre";
import { Rating } from "../Rating";
import {
  Info,
  Description,
  Image,
  Title,
  Wrapper,
  Extras
} from "./styled";

export const Tile = ({ img, bigposter, poster, smallposter, date, title, from, genre, genres, rating, votes, overview }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Wrapper bigposter={bigposter} smallposter={smallposter} poster={poster}>
      <Image src={img} />
      <Description smallposter={smallposter} bigposter={bigposter} poster={poster}>
        <Title smallposter={smallposter} bigposter={bigposter}>{title}</Title>
        {date &&
          <Info>
            {bigposter && <Extras>Date of birth: </Extras>}
            {date}
          </Info>
        }
        {from &&
          <Info>
            {bigposter && <Extras>Place of birth: </Extras>}
            {from}
          </Info>
        }
        {genre && <Tags ids={genre} genres={genres} />}
        {rating && <Rating rating={rating} votes={votes} />}
        {!isMobile && bigposter && overview && <Info bigposter={bigposter}>{overview}</Info>}
      </Description>
      {isMobile && bigposter && overview && <Info bigposter={bigposter}>{overview}</Info>}
    </Wrapper>
  );
};
