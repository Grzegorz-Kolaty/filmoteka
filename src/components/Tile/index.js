import { useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Wrapper bigposter={bigposter} smallposter={smallposter}>
      <Image src={img} poster={poster} smallposter={smallposter} bigposter={bigposter} />
      <Description smallposter={smallposter} bigposter={bigposter}>
        <Title smallposter={smallposter} bigposter={bigposter}>{title}</Title>
        {date &&
          <Info>
            <Extras>Date of birth: </Extras>
            {date}
          </Info>
        }
        {from &&
          <Info>
            <Extras>Place of birth: </Extras>
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