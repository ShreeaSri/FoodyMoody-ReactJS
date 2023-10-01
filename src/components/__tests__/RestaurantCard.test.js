import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../MockData/resCardMock.json";
import { withDiscountLabel } from "../RestaurantCard";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with prop data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});

// will do it later

it("should render the discount restaurant card", () => {
  const RestaurantCardDiscount = withDiscountLabel(RestaurantCard);

  render(<RestaurantCardDiscount resData={MOCK_DATA} />);

  const discount = screen.getByText("50% OFF UPTO ₹100");

  expect(discount).toBeTruthy();
});
