import React from "react";
import { Header } from ".";
import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MockedProvider } from "@apollo/client/testing";
import { QUERY_ME } from "../utils/queries";

const mocks = [
  {
    request: {
      query: QUERY_ME,
    },
    result: {
      data: {
        me: {
          _id: "test",
          name: "test",
          username: "test",
          email: "test",
          avatar: "test",
          bio: "test",
          friends: [
            {
              _id: "test",
              username: "test",
              avatar: "test",
            },
          ],
          settings: {
            _id: "test",
            theme: "test",
            showActive: true,
            shareEmail: true,
          },
        },
      },
    },
  },
];

afterEach(cleanup);

test("Header render with App Name", () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </MockedProvider>
  );
});
