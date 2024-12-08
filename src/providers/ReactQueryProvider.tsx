"use client";

import { useState } from "react";

import {
  Mutation,
  MutationCache,
  Query,
  QueryCache,
  QueryClient,
  QueryClientProvider,
  QueryKey,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function ReactQueryProviders({ children }: React.PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchIntervalInBackground: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            retry: false,
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
        queryCache: new QueryCache({
          onError: (error, query) => errorHandler({ error, query }),
        }),
        mutationCache: new MutationCache({
          onError: (error, _variables, _context, mutation) =>
            errorHandler({
              error,
              shouldBeHandledLocally: !!mutation.options.onError,
              mutation,
            }),
        }),
      })
  );

  const errorHandler = async ({
    error,
  }: // shouldBeHandledLocally = false,
  // query,
  // mutation,
  {
    error: unknown;
    shouldBeHandledLocally?: boolean;
    query?: Query<unknown, unknown, unknown, QueryKey>;
    mutation?: Mutation<unknown, unknown, unknown, unknown>;
  }) => {
    console.log(error);
  };

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
