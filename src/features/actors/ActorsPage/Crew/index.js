import { Row, PersonTile, Title, Picture, Tile } from "../ActorsList/styled";
import Niki from "./images/Niki.png";
import Photos from "./images/Photos.png";
import Music from "./images/Music.png";
import Screenplay from "./images/Screenplay.png";
import { Subtitle } from "./styled";

export const Crew = () => {
  return (
    <Row>
      <PersonTile>
        <Tile>
          <Picture src={Niki} />
          <Title>Niki Caro</Title>
          <Subtitle>Director</Subtitle>
        </Tile>
      </PersonTile>
      <PersonTile>
        <Tile>
          <Picture src={Photos} />
          <Title>Photos</Title>
          <Subtitle>Komandor Tung</Subtitle>
        </Tile>
      </PersonTile>
      <PersonTile>
        <Tile>
          <Picture src={Music} />
          <Title>Jason Scott Lee</Title>
          <Subtitle>Music</Subtitle>
        </Tile>
      </PersonTile>
      <PersonTile>
        <Tile>
          <Picture src={Screenplay} />
          <Title>Jason Scott Lee</Title>
          <Subtitle>Screenplay</Subtitle>
        </Tile>
      </PersonTile>
    </Row>
  );
};
