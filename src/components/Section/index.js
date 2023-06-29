import { Sections, Title, Body } from "./styled";

export const Section = ({ title, body }) => {
  return (
    <Sections>
      {title && <Title>{title}</Title>}
      <Body>
        {body}
      </Body>
    </Sections>
  );
};