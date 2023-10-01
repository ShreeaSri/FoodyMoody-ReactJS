import { render, screen } from "@testing-library/react";
import RestaurantCard, { withDiscountLabel } from "../RestaurantCard";
import MOCK_DATA from "../MockData/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with prop data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("McDonald's");

  expect(name).toBeInTheDocument();
});

// it("should render the discount restaurant card", () => {
//   render(withDiscountLabel);

//   const name = screen.getByText("McDonald's");

//   expect(name).toBeInTheDocument();
// });
