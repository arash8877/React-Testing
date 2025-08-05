import { render, screen } from "@testing-library/react";
import OrderStatusSelector from "../../src/components/OrderStatusSelector";
import { Theme } from "@radix-ui/themes";
import userEvent from "@testing-library/user-event";
import Label from "../../src/components/Label";

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
    const onChange = vi.fn();
    render(
      <Theme>
        <OrderStatusSelector onChange={onChange} />
      </Theme>
    );

    return {
      dropDown: screen.getByRole("combobox"),
      getOptions: () => screen.getAllByRole("option"),
      getOption: (label: RegExp) => screen.findByRole("option", { name: label }),
      user: userEvent.setup(),
      onChange,
    };
  };

  it("should render New as the default value", () => {
    const { dropDown } = renderComponent();
    expect(dropDown).toHaveTextContent("New");
  });

  it("should render correct statuses", async () => {
    const { dropDown, getOptions, user } = renderComponent();
    await user.click(dropDown);

    const options = await getOptions();
    expect(options).toHaveLength(3);
    const labels = options.map((option) => option.textContent);
    expect(labels).toEqual(["New", "Processed", "Fulfilled"]);
  });

  it.each([
    { label: /processed/i, value: "processed" },
    { label: /fulfilled/i, value: "fulfilled" },
    // { label: /new/i, value: "new" } ===> does not work ass this option is a default option
  ])(
    "should call onChange with $value when $label option is selected",
    async ({ label, value }) => {
      const { dropDown, user, onChange, getOption } = renderComponent();
      await user.click(dropDown);

      const option = await getOption(label);
      await user.click(option);

      expect(onChange).toHaveBeenCalledWith(value);
    }
  );

  it("should call onChange with new when the New option is selected", async () => {
    const { dropDown, user, onChange, getOption } = renderComponent();
    await user.click(dropDown);

    const processedOption = await getOption(/processed/i);
    await user.click(processedOption);

    await user.click(dropDown);
    const newOption = await getOption(/new/i);
    await user.click(newOption);

    expect(onChange).toHaveBeenCalledWith("new");
  });
});
