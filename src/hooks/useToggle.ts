import { useState, useCallback } from "react";

export const useToggle = (initialState:Boolean = false): [ Boolean, any ] => {
    // Initialize the state
   const [state, setState] = useState<Boolean>(initialState);
   // Define and memorize toggler function in case we pass down the comopnent,
   // This function change the boolean value to it's opposite value
   const toggle = useCallback((): void => setState(state => !state), []);
   return [state, toggle]
}

