import { render, screen } from "@testing-library/react";
import ProductDetail from "../../src/components/ProductDetail";
import { products } from "../mocks/data";
import { server } from "../mocks/server";
import { HttpResponse, http } from "msw";

describe("ProductDetail", () => {
  it("should render the list of products", async () => {
    render(<ProductDetail productId={1} />);

    // it is not the best practice as the price or name of the product can be changed in the future
    // expect(await screen.findByText(/product 1/i)).toBeInTheDocument();
    // expect(await screen.findByText(/price: \$10/i)).toBeInTheDocument();

    expect(await screen.findByText(new RegExp(products[0].name))).toBeInTheDocument();
    expect(await screen.findByText(new RegExp(products[0].price.toString()))).toBeInTheDocument();
  });

  it("should render a message if product is not found", async() => {
    server.use(http.get("/products/1", () => HttpResponse.json(null)));

    render(<ProductDetail productId={1} />);

    const message = await screen.findByText(/not found/i);

    expect(message).toBeInTheDocument();
  });

  it("should render an error for invalid productId ", async() => {

    render(<ProductDetail productId={0} />);

    const message = await screen.findByText(/invalid/i);

    expect(message).toBeInTheDocument();
  });
});
