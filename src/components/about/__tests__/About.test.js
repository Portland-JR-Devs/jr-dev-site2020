import React from "react"
import renderer from "react-test-renderer"
// import react-testing methods
import { render, screen, fireEvent } from "@testing-library/react"

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect"

//import AboutComponent from "../About"

import About from "../About"

describe("About", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<About title="ABOUT US" />)
    expect(tree).toMatchSnapshot("About.test.js")
  })
  test("shows component title", () => {
    // ARRANGE
    render(<About title="ABOUT US" />)

    const regexForTitle = /About Us/i

    // Get the element that has the text we expect.
    const elementWithExpectedText = screen.queryByText(regexForTitle)

    // ACT
    // No user action involved here so no action to take.

    // ASSERT
    // Confirm the element has the expected text
    expect(elementWithExpectedText).toBeInTheDocument()
  })
})
