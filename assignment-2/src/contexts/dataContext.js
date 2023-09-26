import { createContext, useContext } from "react";
import useDataProvider from "../hook/useDataProvider";

const dataContext = createContext();
export const useDataContext = () => useContext(dataContext);

export function DataProvider({ children }) {
	const data = useDataProvider();
	return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}
