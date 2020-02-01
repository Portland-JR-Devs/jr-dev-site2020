import React from "./node_modules/react"
import renderer from "./node_modules/react-test-renderer"

import Resources from "../Resources"

describe("Resources", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Resources />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
