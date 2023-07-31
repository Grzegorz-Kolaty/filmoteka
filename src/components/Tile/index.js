import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useMediaQuery } from "react-responsive";
import { Tags } from "../Genre";
import { Rating } from "../Rating";
import { Info, Description, Image, Title, Wrapper, Extras, Overview, WrapperExtras } from "./styled";

export const Tile = ({ id, img, bigposter, poster, smallposter, date, title, from, genre, genres, rating, votes, overview, type }) => {
  const isMobile = useMediaQuery({ maxWidth: 900 });

  const TileLink = ({ bigposter, ...rest }) => {
    if (bigposter) {
      return <div {...rest} />;
    } else {
      return <Link {...rest} />;
    }
  };

  return (
    <Wrapper as={TileLink} to={!bigposter && (type === "movie" ? `/movie/${id}` : `/person/${id}`)}
      bigposter={bigposter}
      smallposter={smallposter}
      poster={poster}>

      <Image src={img} bigposter={bigposter} />

      <Description
        smallposter={smallposter}
        bigposter={bigposter}
        poster={poster}>

        <Title
          smallposter={smallposter}
          bigposter={bigposter}>
          {title}
        </Title>

        <WrapperExtras>
          {from &&
            <Info>
              {bigposter &&
                <Extras>
                  {type === "movie"
                    ? "Production: "
                    : "Place of birth: "}
                </Extras>}
              {from}
            </Info>}
          {date &&
            <Info>
              {bigposter &&
                <Extras>
                  {type === "movie"
                    ? "Release date: "
                    : "Date of birth: "}
                </Extras>}
              {date}
            </Info>}

        </WrapperExtras>

        {genre && <Tags ids={genre} genres={genres} />}
        {type === "movie" && <Rating rating={rating !== undefined ? rating : 0} votes={votes} />}

        {!isMobile && bigposter && overview &&
          <Overview bigposter={bigposter}>{overview}</Overview>}
      </Description>

      {isMobile && bigposter && overview &&
        <Overview bigposter={bigposter}>{overview}</Overview>}

    </Wrapper>
  );
};
