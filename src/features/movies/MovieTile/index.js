import { Rating } from "../../../components/Rating";
import { Tile } from "../../../components/Tile";
import poster from "../../../components/images/poster.png";

export const MovieTile = () => {
  return (
    <Tile
      img={poster}
      title="Mulan"
      year="2020"
      subtitle="Production: "
      subtitleText="China, United States"
      subtitle2="Release date: "
      subtitleText2="24.10.2020"
      description="A young Chinese maiden disguises herself as a male warrior in order to save her father.
          Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father."
    />
  );
};