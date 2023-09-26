import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchCurrencyConvertion, getCurrenciesCodes } from "../request/currecy.request";

/**
 * @deprecated
 */
export const useGetCurrencies = () => {
  return useQuery(["Currencies"], () => getCurrenciesCodes());
};

export const useConvert = () => useMutation(fetchCurrencyConvertion);
