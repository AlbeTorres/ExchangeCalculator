import kaxios from "../config/axios";
import { FetchCurrecyConvert, GetCurrencies } from "./currency,type";

const key = process.env.NEXT_PUBLIC_API_KEY;

export const getCurrenciesCodes: GetCurrencies = () =>
  kaxios.get(`/symbols?access_key=${key}`).then((r) => r.data);

export const fetchCurrencyConvertion: FetchCurrecyConvert = ({ from, to }) =>
  kaxios
    .post(
      `/latest
?access_key=${key}&symbols=${from},${to}`,
    )
    .then((r) => r.data);
