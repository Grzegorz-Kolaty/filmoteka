import { Sections, Title, Body } from "./styled";

const Section = ({ title, body }) => (
  <Sections>
    <Title><b>{title}</b></Title>
    <Body>
      {body}
    </Body>
  </Sections>
);

export default Section;