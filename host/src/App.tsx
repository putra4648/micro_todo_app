import React, { Suspense } from "react";

const Button = React.lazy(() => import("todoApp/Button"));

function App() {
  return (
    <>
      <div>This is Host App</div>
      <Suspense>
        <Button />
      </Suspense>
    </>
  );
}

export default App;
