import { Tile } from "../../../components/Tile";
import actor from "../../../components/images/actor.png";

export const ActorTile = () => {
  return (
    <>
      <Tile
        img={actor}
        title="Liu Yifei"
        subtitle="Date of birth: "
        subtitleText="25.08.1987"
        subtitle2="Place of birth: "
        subtitleText2="Wuhan, Hubei, China"
        description="Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu lived there for four years."
      />
    </>
  );
}