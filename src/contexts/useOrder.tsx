import { createContext, ReactNode } from "react";


type UseOrderData = {
  makeOrder(productId: string): void;
}

type OrderProviderProps = {
  children: ReactNode;
}

export const useOrder = createContext({} as UseOrderData);


export function orderProvider({ children }: OrderProviderProps) {

  function makeOrder(productId: string) {
    console.log(productId);
  }

  return (
    <useOrder.Provider value={{ makeOrder }}>
      {children}
    </useOrder.Provider>
  )
}