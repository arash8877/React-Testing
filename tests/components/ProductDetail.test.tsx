import { render, screen } from "@testing-library/react";
import ProductDetail from "../../src/components/ProductDetail";
import { products } from "../mocks/data";

describe("ProductDetail", () => {
  it("should render the list of products", async () => {
    render(<ProductDetail productId={1} />);

    // it is not the best practice as the price or name of the product can be changed in the future
    // expect(await screen.findByText(/product 1/i)).toBeInTheDocument();
    // expect(await screen.findByText(/price: \$10/i)).toBeInTheDocument();

    expect(await screen.findByText(new RegExp(products[0].name))).toBeInTheDocument();
    expect(await screen.findByText(new RegExp(products[0].price.toString()))).toBeInTheDocument();
  });
});
