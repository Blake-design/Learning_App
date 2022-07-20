import { InMemoryCache, makeVar } from "@apollo/client";

export const themeVar = makeVar(localStorage.getItem("preferred-theme"));

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        convos: {
          merge(existing = [], incoming: any[]) {
            return [...incoming];
          },
        },
        theme: {
          read() {
            return themeVar();
          },
        },
      },
    },
  },
});
