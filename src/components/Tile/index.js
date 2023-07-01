import { Content, Description, Image, Subtitle, Title, Wrapper } from "./styled";

export const Tile = ({ title, subtitle, subtitle2, subtitleText, subtitleText2, description, img }) => {
  return (
    <Wrapper>
      <Image src={img} />
      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>{subtitleText} <br />
        <Subtitle>{subtitle2}</Subtitle>{subtitleText2}
        <Description>{description}</Description>
      </Content>
    </Wrapper>
  );
};