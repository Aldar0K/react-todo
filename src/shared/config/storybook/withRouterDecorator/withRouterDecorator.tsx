import { Decorator } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

export const withRouterDecorator = (initialEntries?: string[]): Decorator => (Story) => (
  <MemoryRouter initialEntries={initialEntries || ['/']}>
    <Story />
  </MemoryRouter>
);