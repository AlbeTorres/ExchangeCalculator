import { Select } from "@/components/Select";
import { TextField } from "@/components/TextField";
import { Button } from "@/components/button";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Main>
        <Containerex>
          <H1>Exchange Calculator</H1>
          <Container w={20} h={20}>
            <Div>
              <TextField textAlign="start" label="Amount" h={2} />
              <Select h={2} label="From" />
              <Select h={2} label="to" />
            </Div>
            <Button variant="contained">Calcular</Button>
          </Container>
        </Containerex>
      </Main>
    </>
  );
}

const Container = styled.div<{
  h?: number;
  w?: number;
}>`
  height: ${({ h }) => (h ? `${h}rem` : "100vh")};
  width: ${({ w }) => (w ? `${w}rem` : "100%")};
  padding: 2rem;
  background-color: #f1f1f5;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
`;

const Main = styled.main<{
  h?: number;
  w?: number;
}>`
  height: ${({ h }) => (h ? `${h}rem` : "100vh")};
  width: ${({ w }) => (w ? `${w}rem` : "100%")};
  display: grid;
  place-items: center;
  background-color: #18189c;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const H1 = styled.h1`
  font-size: larger;
  font-weight: bold;
  color: white;
  padding: 1rem;
`;

const Containerex = styled.div`
  width: fit-content;
  height: fit-content;
`;
