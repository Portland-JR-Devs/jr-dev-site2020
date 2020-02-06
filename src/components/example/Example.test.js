// Import dependencies
import React from "react"

// import react-testing methods
import { render, screen, fireEvent } from "@testing-library/react"

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect"

import ExampleComponent from "./Example"

test("shows component title", () => {
  // ARRANGE
  const title = "Zombie Apocalypse"
  render(<ExampleComponent componentTitle={title}></ExampleComponent>)

  // ACT
  // 1. Get the element that has the text we expect.
  const elementWithExpectedText = screen.getByText(/zombie apocalypse/i)

  //ASSERT
  // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()

  expect(elementWithExpectedText).toBeInTheDocument()

  expect(elementWithExpectedText).toHaveAttribute("id", "example-title")
})

test("button click displays a message", () => {
  // ARRANGE
  const { queryByText, getByText, getByRole } = render(
    <ExampleComponent componentTitle="Zombie Apocalypse" />
  )
  // ASSERT BEFORE ACTING
  expect(queryByText(/you've been bitten!/i)).toBeNull()
  expect(getByRole("button")).toHaveTextContent(/dead inside/i)

  // ACT
  fireEvent.click(getByText(/dead inside/i))

  // ASSERT AFTER ACTING
  expect(getByText(/you've been bitten!/i)).toBeInTheDocument()
  expect(getByRole("button")).toHaveTextContent(/zombies!!!/i)
  expect(getByRole("button")).toHaveAttribute("disabled")
})
