function Main({ nummer, inhalt }) {
  return (
    <main className="main card">
      <h4>
        {nummer}. {inhalt}
      </h4>
    </main>
  );
}

Main.defaultProps = {
  nummer: 1,
  inhalt: "Elaine",
};

export default Main;
