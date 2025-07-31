import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvents from "@testing-library/user-event";

// describe('TermsAndConditions', () => {

//     it('should render with correct text and initial state', () => {
//         render(<TermsAndConditions />);

//         const heading = screen.getByRole('heading');
//         expect(heading).toBeInTheDocument();
//         expect(heading).toHaveTextContent('Terms & Conditions');

//         const checkbox = screen.getByRole('checkbox');
//         expect(checkbox).toBeInTheDocument();
//         expect(checkbox).not.toBeChecked();

//         const button = screen.getByRole('button');
//         expect(button).toBeInTheDocument();
//         expect(button).toBeDisabled();
//     })

//     it('should enable the button when the checkbox is checked', async() => {
//         render(<TermsAndConditions />);

//         const checkbox = screen.getByRole('checkbox');
//         const user = userEvents.setup();
//         await user.click(checkbox);

//         expect(screen.getByRole('button')).toBeEnabled();
//     })

// })

describe("TermsAndConditions", () => {
  const renderComponent = () => {
    render(<TermsAndConditions />);

    return {
      heading: screen.getByRole("heading"),
      checkbox: screen.getByRole("checkbox"),
      button: screen.getByRole("button"),
    };
  };

  it("should render with correct text and initial state", () => {
    const { heading, checkbox, button } = renderComponent();

    expect(heading).toHaveTextContent("Terms & Conditions");
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });

  it("should enable the button when the checkbox is checked", async () => {
    const { checkbox, button } = renderComponent();

    const user = userEvents.setup();
    await user.click(checkbox);

    expect(button).toBeEnabled();
  });
});
