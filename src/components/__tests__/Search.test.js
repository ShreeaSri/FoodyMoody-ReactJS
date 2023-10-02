import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../MockData/restResponse.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search rest list for chai input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsbeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsbeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchinput = screen.getByTestId("searchInput");

  fireEvent.change(searchinput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  //screen should load 2 res cards

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(0);
});

it("Should filter top rated restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsbeforeFIlter = screen.getAllByTestId("resCard");

  expect(cardsbeforeFIlter.length).toBe(20);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated restaurants",
  });

  fireEvent.click(topRatedBtn);

  //screen should load 2 res cards

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(20);
});
