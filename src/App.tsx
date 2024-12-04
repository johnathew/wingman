import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Router from "./routes";

function App() {

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  )
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  )
}
export default App;