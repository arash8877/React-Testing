import { render, screen } from "@testing-library/react";
import OrderStatusSelector from "../../src/components/OrderStatusSelector";
import { Theme } from "@radix-ui/themes";
import userEvent from "@testing-library/user-event";

describe("OrderStatusSelector", () => {
  // it("should render New as the default value", () => {
  //   render(
  //     <Theme>
  //       <OrderStatusSelector onChange={vi.fn()} />
  //     </Theme>
  //   );
  //   const button = screen.getByRole("combobox");
  //   expect(button).toHaveTextContent("New");
  // });

  // it("should render correct statuses", async () => {
  //   render(
  //     <Theme>
  //       <OrderStatusSelector onChange={vi.fn()} />
  //     </Theme>
  //   );
  //   const button = screen.getByRole("combobox");
  //   const user = userEvent.setup();
  //   await user.click(button);

  //   const options = await screen.findAllByRole("option");
  //   expect(options).toHaveLength(3);
  //   const labels = options.map(option => option.textContent);
  //   expect(labels).toEqual(["New", "Processed", "Fulfilled"]);
  // });

  const renderComponent = () => {
    render(
      <Theme>
        <OrderStatusSelector onChange={vi.fn()} />
      </Theme>
    );

    return {
      dropDown: screen.getByRole("combobox"),
      getOptions: ()=> screen.getAllByRole("option"),
    };
  };

  it("should render New as the default value", () => {
    const { dropDown } = renderComponent();
    expect(dropDown).toHaveTextContent("New");
  });


    it("should render correct statuses", async () => {
  const { dropDown, getOptions } = renderComponent();
    const user = userEvent.setup();
    await user.click(dropDown);

    const options = await getOptions();
    expect(options).toHaveLength(3);
    const labels = options.map(option => option.textContent);
    expect(labels).toEqual(["New", "Processed", "Fulfilled"]);
  });



});
