export const ActorPage = () => {
  return (
    <Container>
      <Section body={<ActorTile />} />
      <Section
        title="Movies - cast(4)"
        body={<MoviesList />} />
      <Section
        title="Movies crew(4)"
        body={<MoviesList />} />
    </Container>
  );
};
