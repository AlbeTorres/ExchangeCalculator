import { Function } from "./types";

export type GetCurrenciesOutput = {
  success: boolean;
  symbols: { [key: string]: string };
};

export type GetCurrenciesInput = void;

export type GetCurrencies = Function<GetCurrenciesInput, GetCurrenciesOutput>;

export type FetchCurrecyConvert = Function<FetchCurrecyConvertInput, FetchCurrecyConvertOutput>;

export type FetchCurrecyConvertOutput = { rates: { [key: string]: number } };

export type FetchCurrecyConvertInput = {
  from: string;
  to: string;
};
