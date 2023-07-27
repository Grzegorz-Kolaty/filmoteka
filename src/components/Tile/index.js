import { useMediaQuery } from 'react-responsive';
import { Tags } from "../Genre";
import { Rating } from "../Rating";
import {
  Info,
  Description,
  Image,
  Title,
  Wrapper,
  Extras,
  Overview,
  WrapperExtras
} from "./styled";

export const Tile = ({ img, bigposter, poster, smallposter, date, title, from, genre, genres, rating, votes, overview }) => {
  const isMobile = useMediaQuery({ maxWidth: 900 });

  return (
    <Wrapper bigposter={bigposter} smallposter={smallposter} poster={poster}>
      <Image src={img} bigposter={bigposter}/>
      <Description smallposter={smallposter} bigposter={bigposter} poster={poster}>
        <Title smallposter={smallposter} bigposter={bigposter}>{title}</Title>
        <WrapperExtras>{date &&
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
        </WrapperExtras>
        {genre && <Tags ids={genre} genres={genres} />}
        {rating && <Rating rating={rating} votes={votes} />}
        {!isMobile && bigposter && overview && <Overview bigposter={bigposter}>{overview}</Overview>}
      </Description>
      {isMobile && bigposter && overview && <Overview bigposter={bigposter}>{overview}</Overview>}
    </Wrapper>
  );
};
