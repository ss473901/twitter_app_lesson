import styled from "styled-components";

export const Title = styled("h1")({
  fontSize: "1.5em",
  textAlign: "center",
  color: "palevioletred",
});

export const Wrapper = styled("section")({
  padding: "4em",
  background: "papaywhip",
});

//Card
export const Grid = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
  width: "800px",
  height: "1200px",
  alignItems: "center",
});

export const Root = styled("div")({
  width: "100vw",
  height: "100vh",
});

export const CardContainer = styled("div")({
  display: "flex",
});

export const Card = styled("div")({
  width: "300px",
  height: "200px",
  border: "double #000",
  position: "relative",
});

//Header
export const Header = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  height: "120px",
});

//Footer
export const Footer = styled("div")({
  display: "flex",
});
