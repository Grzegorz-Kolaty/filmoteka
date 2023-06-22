import { Row, PersonTile, PersonTitle, Picture, Tile } from "./styled";
import Liu from "./images/Liu.png";
import Donnie from "./images/Donnie.png";
import Jason from "./images/Jason.png";
import Lee from "./images/Lee.png";
import JSL from "./images/JSL.png";
import Scott from "./images/Scott.png";

function PeoplePage() {
  return (
    <Row>
      <PersonTile>
        <Tile>
          <Picture src={Liu} />
          <PersonTitle>Liu</PersonTitle>
        </Tile>
      </PersonTile>
      <PersonTile>
        <Tile>
          <Picture src={Donnie} />
          <PersonTitle>Donnie</PersonTitle>
        </Tile>
      </PersonTile>
      <PersonTile>
        <Tile>
          <Picture src={Jason} />
          <PersonTitle>Jason</PersonTitle>
        </Tile>
      </PersonTile>
      <PersonTile>
        <Tile>
          <Picture src={Lee} />
          <PersonTitle>Lee</PersonTitle>
        </Tile>
      </PersonTile>
      <PersonTile>
        <Tile>
          <Picture src={JSL} />
          <PersonTitle>JSL</PersonTitle>
        </Tile>
      </PersonTile>
      <PersonTile>
        <Tile>
          <Picture src={Scott} />
          <PersonTitle>Scott</PersonTitle>
        </Tile>
      </PersonTile>
    </Row>
  );
}

export default PeoplePage;
