import { createContext, useContext } from "react";

const themeContext = createContext();
export const useThemeContext = () => useContext(themeContext);

//* Task công ty dí quá nên em không có thời gian viết cái dark mode huhu=))
