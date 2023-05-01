import React from 'react'

const viewportContext = React.createContext({});

export const ViewportProvider = ({ children }) => {

  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

export const useViewport = () => {
    /* We can use the "useContext" Hook to acccess a context from within
       another Hook, remember, Hooks are composable! */
    const { width, height } = React.useContext(viewportContext);
    return { width, height };
  }

