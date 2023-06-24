import Section from "../../../components/Section";
import Header from "../../../components/Header";
import { Container } from "../../../components/Container";
import { MoviesList } from "./MoviesList";
import { NotFound, Loading } from "./styled";

export const MoviesPage = () => {
  const loading = true;
  const error = false;

  return (
    <Container>
      {loading ? (
        <>
          <Header title="Searching for results" />
          <Section body={<Loading />} />
        </>
      ) : error ? (
        <>
          <Header title="Sorry, there are no results for Mulan" />
          <Section body={<NotFound />} />
        </>
      ) : (
        <>
          <Header title="Search result for Mulan(6)" />
          <Section body={<MoviesList />} />
        </>
      )}
    </Container>
  );
};

export default MoviesPage;
import poster from "../../../images/poster.png";
import {
  Tile,
  MoviesTile,
  Title,
  Subtitle,
  Tags,
  Tag,
  Image,
  Description,
  MoviesTileFrame,
} from "./styled";

export const App = () => {
  return (
    <Tile>
      <MoviesTile>
        <MoviesTileFrame>
          <Image src={poster} alt="" />
          <Description>
            <Title>Mulan</Title>
            <Subtitle>2020</Subtitle>
            <Tags>
              <Tag>Action</Tag>
              <Tag>Action</Tag>
              <Tag>Action</Tag>
            </Tags>
          </Description>
        </MoviesTileFrame>
      </MoviesTile>
      <MoviesTile>
        <MoviesTileFrame>
          <Image src={poster} alt="" />
          <Description>
            <Title>Mulan</Title>
            <Subtitle>2020</Subtitle>
            <Tags>
              <Tag>Action</Tag>
              <Tag>Action</Tag>
              <Tag>Action</Tag>
            </Tags>
          </Description>
        </MoviesTileFrame>
      </MoviesTile>
      <MoviesTile>
        <MoviesTileFrame>
          <Image src={poster} alt="" />
          <Description>
            <Title>Mulan</Title>
            <Subtitle>2020</Subtitle>
            <Tags>
              <Tag>Action</Tag>
              <Tag>Action</Tag>
              <Tag>Action</Tag>
            </Tags>
          </Description>
        </MoviesTileFrame>
      </MoviesTile>
      <MoviesTile>
        <MoviesTileFrame>
          <Image src={poster} alt="" />
          <Description>
            <Title>Mulan</Title>
            <Subtitle>2020</Subtitle>
            <Tags>
              <Tag>Action</Tag>
              <Tag>Action</Tag>
              <Tag>Action</Tag>
            </Tags>
          </Description>
        </MoviesTileFrame>
      </MoviesTile>
      <MoviesTile>
        <MoviesTileFrame>
          <Image src={poster} alt="" />
          <Description>
            <Title>Mulan</Title>
            <Subtitle>2020</Subtitle>
            <Tags>
              <Tag>Action</Tag>
              <Tag>Action</Tag>
              <Tag>Action</Tag>
            </Tags>
          </Description>
        </MoviesTileFrame>
      </MoviesTile>
    </Tile>
  );
};

export default App;
