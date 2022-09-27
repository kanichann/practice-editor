import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Page from "routes/Page";
import Loading from "components/common/loading/Loading";
import StoreProvider from "store/StoreProvider";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <StoreProvider>
          <Page />
        </StoreProvider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
