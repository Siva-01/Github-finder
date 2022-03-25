import { createContext } from "react";
import { useReducer } from "react";
import { createRenderer } from "react-dom/test-utils";
import githubReducer from "./GithubReducer";


const GitHubContext = createContext();


export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  

  
  return (
    <GitHubContext.Provider
      value={{
        ...state,
        dispatch,
    
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContext;
