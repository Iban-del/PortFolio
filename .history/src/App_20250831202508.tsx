import { cache, lazy } from "react";

const Main =cache(lazy(() => import("./pages/Main")));

function App() {

  return <>
    <Main/>
  </>
}

export default App
