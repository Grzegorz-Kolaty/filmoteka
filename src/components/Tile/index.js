import { Content, Description, Image, Subtitle, Title, TitleSmall, Wrapper } from "./styled";

export const Tile = ({ person, list, title, titleSmall, subtitle, subtitle2, subtitleText, subtitleText2, description, img }) => {
  return (
    <Wrapper person={person}>
      <Image src={img} list={list} />
      <Content>
        {title && <Title>{title}</Title>}
        {titleSmall && <TitleSmall>{titleSmall}</TitleSmall>}
        {subtitle && subtitleText && <div><Subtitle>{subtitle}</Subtitle>{subtitleText}<br /></div>}
        {subtitle2 && subtitleText2 && <div><Subtitle>{subtitle2}</Subtitle>{subtitleText2}</div>}
        {description && <Description>{description}</Description>}
      </Content>
    </Wrapper>
  );
};