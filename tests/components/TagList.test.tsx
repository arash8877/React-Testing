import { render, screen } from "@testing-library/react";
import TagList from "../../src/components/TagList";

// this test, testing an async component that fetches data
// TagList component includes an async function

describe("TagList", () => {
  it("should render tags", async () => {
    render(<TagList />);

    // await waitFor(() => {
    //   const listItems = screen.getAllByRole("listitem");
    //   expect(listItems.length).toBeGreaterThan(0);
    // });

    const listItems = await screen.findAllByRole("listitem"); // findAllByRole is a combination of waitFor() and getAllByRole and 
    expect(listItems.length).toBeGreaterThan(0);
  });
});
