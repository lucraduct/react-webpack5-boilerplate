import { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import routePaths from "@/constants/routePaths";

const App = () => (
  <BrowserRouter>
    <Suspense fallback={"Loading..."}>
      <Routes>
        {routePaths.map((props, index) => (
          <Route key={`route_${index}`} {...props} />
        ))}
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
