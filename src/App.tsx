import React, { Suspense, lazy } from "react";
import Spinner from "./Components/Spinner";
const HomePage = lazy(() => import("./Pages/HomePage"));
const App: React.FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <HomePage />;
    </Suspense>
  );
};

export default App;
