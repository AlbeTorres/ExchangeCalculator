import { Select } from "@/components/Select";
import { TextField } from "@/components/TextField";

import { Button } from "@/components/button";
import { useConvert } from "@/lib/hooks/currency.hooks";
import { getCurrenciesCodes } from "@/lib/request/currecy.request";
import { regexps } from "@/utils/validations";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

export type CurrencyFormData = {
  from: string;
  to: string;
  amount: number;
};

export default function Home({ currencies }: { currencies: string[] }) {
  const [value, setvalue] = useState<{ converted: number; code: string } | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CurrencyFormData>({});

  const convert = useConvert();

  const onSubmit = (data: CurrencyFormData) => {
    const amount = data.amount;
    const to = data.to;
    const from = data.from;
    convert.mutate(
      {
        from: data.from,
        to: data.to,
      },
      {
        onSuccess: (data) => {
          setvalue({ converted: (amount / data.rates[from]) * data.rates[to], code: to });
        },
      },
    );
  };

  return (
    <>
      <Main>
        <Containerex>
          <H1>Exchange Calculator</H1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Container $w={20} $h={20}>
              <Div>
                <TextField
                  error={errors.amount?.message?.toString()}
                  textAlign="start"
                  label="Amount"
                  h={2}
                  {...register("amount", {
                    required: {
                      value: true,
                      message: "Amount required",
                    },
                    pattern: {
                      value: regexps.precio,
                      message: "You must place a valid value",
                    },
                  })}
                />
                <Select register={register} items={currencies} name="from" h={2} label="From" />
                <Select register={register} items={currencies} name="to" h={2} label="to" />
              </Div>
              {value && (
                <p data-testid={`p`}>
                  {value.converted} <span>{value.code}</span>
                </p>
              )}
              <Button type="submit" variant="contained">
                Convert
              </Button>
            </Container>
          </form>
        </Containerex>
      </Main>
    </>
  );
}

const Container = styled.div<{
  $h?: number;
  $w?: number;
}>`
  height: ${({ $h }) => ($h ? `${$h}rem` : "100vh")};
  width: ${({ $w }) => ($w ? `${$w}rem` : "100%")};
  padding: 2rem;
  background-color: #f1f1f5;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
`;

const Main = styled.main<{
  $h?: number;
  $w?: number;
}>`
  height: ${({ $h }) => ($h ? `${$h}rem` : "100vh")};
  width: ${({ $w }) => ($w ? `${$w}rem` : "100%")};
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

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await getCurrenciesCodes();
  const currencies = res.symbols;

  const keysSymbols = Object.keys(currencies);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      currencies: keysSymbols,
    },
  };
}
