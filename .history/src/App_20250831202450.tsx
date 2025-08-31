import { lazy } from "react";

const Passions = lazy(() => import("./pages/Main"));

function App() {

  return <>
    <Main/>
  </>
}

export default App
