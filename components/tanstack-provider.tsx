"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryOptions = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const TanstackProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryOptions}>{children}</QueryClientProvider>
  );
};

export default TanstackProvider;
