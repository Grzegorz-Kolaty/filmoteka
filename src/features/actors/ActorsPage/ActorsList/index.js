import { Row, PersonTile, Title, Picture, Tile } from "./styled";
import Liu from "../images/Liu.png";
import Donnie from "../images/Donnie.png";
import Jason from "../images/Jason.png";
import Lee from "../images/Lee.png";
import JSL from "../images/JSL.png";
import Scott from "../images/Scott.png";

export const ActorsList = () => {
  return (
    <Row>
      <PersonTile>
        <Tile>
          <Picture src={Liu} />
          <Title>Liu</Title>
        </Tile>
      </PersonTile>
      <PersonTile>
        <Tile>
          <Picture src={Donnie} />
          <Title>Donnie</Title>
        </Tile>
      </PersonTile>
      <PersonTile>
        <Tile>
          <Picture src={Jason} />
          <Title>Jason</Title>
        </Tile>
      </PersonTile>
      <PersonTile>
        <Tile>
          <Picture src={Lee} />
          <Title>Lee</Title>
        </Tile>
      </PersonTile>
      <PersonTile>
        <Tile>
          <Picture src={JSL} />
          <Title>JSL</Title>
        </Tile>
      </PersonTile>
      <PersonTile>
        <Tile>
          <Picture src={Scott} />
          <Title>Scott</Title>
        </Tile>
      </PersonTile>
    </Row>
  );
};
