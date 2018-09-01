import React from "react";
import Counter from "./Counter";
import renderer from "react-test-renderer";
import { Button } from "react-native";

it("counter", () => {
  const rendered = renderer.create(<Counter />);
  const counter = rendered.getInstance();
  expect(counter.state.count).toBe(0);
  const button = rendered.root.findByType(Button).props.onPress();
  expect(counter.state.count).toBe(1);
});

it("counter snapshot with initial state", () => {
  const rendered = renderer.create(<Counter />).toJSON();
  expect(rendered).toMatchSnapshot();
});

it("counter snapshot with one Press", () => {
  const rendered = renderer.create(<Counter />);
  const button = rendered.root.findByType(Button).props.onPress();
  expect(rendered.toJSON()).toMatchSnapshot();
});