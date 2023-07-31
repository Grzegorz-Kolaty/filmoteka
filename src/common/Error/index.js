import {Wrapper, Icon, Info, Message, ButtonLink} from "./styled";

export const Error = () => (
  <Wrapper>
    <Icon />
    <Info>Oooops! Something went wrong…</Info>
    <Message>Please check your network connection and try again</Message>
    <ButtonLink to="/">Back to home page</ButtonLink>
  </Wrapper>
);