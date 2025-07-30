import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

describe("UserList", () => {
  it("should render no users when the users array is empty", () => {
    render(<UserList users={[]} />);

    expect(screen.getByText(/no user/i)).toBeInTheDocument();
  });

  it("should render a list of users", () => {
    const users = [
      { id: 1, name: "Arash" },
      { id: 2, name: "John" },
    ];
    render(<UserList users={users} />);

    users.forEach((user) => {
      const userLink = screen.getByRole("link", { name: user.name });
      expect(userLink).toBeInTheDocument();
      expect(userLink).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
