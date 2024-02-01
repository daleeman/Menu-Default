import { createContext, useContext } from "react";
import foodlist from "../components/foodlist";

export const DefaultContext = createContext();
export function useDefaultContext() {
  const globalState = useContext(DefaultContext);
  return globalState;
}

// export const FoodListContext = createContext();
// export function useFoodListContext() {
//   const foodList = useContext(FoodListContext);
//   return foodList;
// }
