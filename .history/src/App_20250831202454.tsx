import { lazy } from "react";

const Main = lazy(() => import("./pages/Main"));

function App() {

  return <>
    <Main/>
  </>
}

export default App
