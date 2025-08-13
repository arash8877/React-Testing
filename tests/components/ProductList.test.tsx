import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import ProductList from "../../src/components/ProductList";
import { server } from "../mocks/server";
import { http, HttpResponse, delay } from "msw";
import { db } from "../mocks/db";

describe("ProductList", () => {
  const productIds: number[] = [];

  // before running our tests, we can populate it with some data with creating 3 products
  // to make sure our tests run in a clean state and don't mess with our global database object,
  //we should always do clean up with afterAll hook

  beforeAll(() => {
    [1, 2, 3].forEach(() => {
      const product = db.product.create();
      productIds.push(product.id);
    });
  });

  afterAll(() => {
    db.product.deleteMany({
      where: { id: { in: productIds } }, //clear only products created in this test ==> productIds array
    });
  });

  it("should render the list of products", async () => {
    render(<ProductList />);

    const items = await screen.findAllByRole("listitem");
    expect(items.length).toBeGreaterThan(0);
  });

  it("should render no product available if no product available", async () => {
    server.use(http.get("/products", () => HttpResponse.json([])));
    render(<ProductList />);

    const message = await screen.findByText(/No products/i);
    expect(message).toBeInTheDocument();
  });

  it("should render an error message when there is an error", async () => {
    server.use(http.get("/products", () => HttpResponse.error()));

    render(<ProductList />);

    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });

  it("should render a loading indicator when fetching data", () => {
    server.use(
      http.get("/products", async () => {
        await delay();
        return HttpResponse.json([]);
      })
    );

    render(<ProductList />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('should remove the loading indicator after data is fetched', async() => {
    render(<ProductList />);
    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i))
  })

  it('should remove the loading indicator if data fetching fails', async() => {
    server.use(http.get("/products", () => HttpResponse.error()));

    render(<ProductList />);
    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i))
  })


});
