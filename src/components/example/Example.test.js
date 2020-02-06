// Import dependencies
import React from "react"

// import react-testing methods
import { render, screen, fireEvent } from "@testing-library/react"

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect"

import ExampleComponent from "./Example"

test("shows component title", () => {
  // ARRANGE
  render(<ExampleComponent />)

  const regexForTitle = /zombie apocalypse/i

  // Get the element that has the text we expect.
  const elementWithExpectedText = screen.queryByText(regexForTitle)

  // ACT
  // No user action involved here so no action to take.

  // ASSERT
  // Confirm the element has the expected text
  expect(elementWithExpectedText).toBeInTheDocument()
})

test("button click displays a message", () => {
  // ARRANGE
  const { queryByText, getByText, getByRole } = render(<ExampleComponent />)
  // ASSERT BEFORE ACTING
  expect(queryByText(/you've been bitten!/i)).toBeNull()

  // ACT
  fireEvent.click(getByText(/dead inside/i))

  // ASSERT AFTER ACTING
  expect(getByText(/you've been bitten!/i)).toBeInTheDocument()
  expect(getByRole("button")).toHaveAttribute("disabled")
})
