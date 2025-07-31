import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("ExpandableText", () => {
  const shortText = "This is a short text";
  const longText = "a".repeat(256);
  const truncatedText = longText.substring(0, 255) + "...";

  it("should render the full text if less than 255 characters", () => {
    render(<ExpandableText text={shortText} />);

    const paragraph = screen.getByText(shortText);
    expect(paragraph).toBeInTheDocument();
  });

  it("should truncate the text if longer than 255 characters", () => {
    render(<ExpandableText text={longText} />);

    const paragraph = screen.getByText(truncatedText);
    expect(paragraph).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument(); // technically, this line is not necessary, as the above line throw an error if the button does not exist
    expect(button).toHaveTextContent(/more/i);
  });

  it("should expand the text when Show More button is clicked", async() => {
    render(<ExpandableText text={longText} />);

    const button = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(button);
   
    expect(screen.getByText(longText)).toBeInTheDocument();
    expect(button).toHaveTextContent(/less/i);
  });

  it("should collapse the text when Show Less button is clicked", async() => {
    render(<ExpandableText text={longText} />);
    const showMoreButton = screen.getByRole("button", { name: /more/i });
    const user = userEvent.setup();
    await user.click(showMoreButton);

    const showLessButton = screen.getByRole("button", { name: /less/i });
    await user.click(showLessButton);
   
    expect(screen.getByText(truncatedText)).toBeInTheDocument();
    expect(showMoreButton).toHaveTextContent(/more/i);
  });
});
