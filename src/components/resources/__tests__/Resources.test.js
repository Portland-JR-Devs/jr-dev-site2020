import React from "react"
import renderer from "react-test-renderer"

import Resources from "../Resources"

describe("Resources", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Resources />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
