import { InMemoryCache, makeVar } from "@apollo/client";

export const themeVar = makeVar(localStorage.getItem("preferred-theme"));

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        theme: {
          read() {
            return themeVar();
          },
        },
      },
    },
  },
});
