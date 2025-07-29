import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Greet from "../src/components/Greet";
import '@testing-library/jest-dom/vitest';

describe("Greet", () => {
  it("should render Hello with the name when name is provided", () => {
    render (<Greet name='Arash'/>)
   const heading = screen.getByRole('heading');
   expect(heading).toBeInTheDocument();
   expect(heading).toHaveTextContent(/Arash/i);
  });

  it("should render login button when name is not provided ", () => {
    render (<Greet name=''/>)
   const button = screen.getByRole('button');
   expect(button).toBeInTheDocument();
   expect(button).toHaveTextContent(/Login/i);
  });
});
