import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
// In your own jest-setup.js (or any other name)
import '@testing-library/jest-dom'

import UserProfile from "./UserProfile";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user profile", () => {
  let user = {
    name: 'Tamil',
    avatar: 'https://avtar.com/slkdjf.png',
    timestamp: (new Date).getUTCSeconds()
  };

  act(() => {
    render(<UserProfile user={user} />, container);
  });
  
  expect(container.querySelector("h3").textContent).toBe("Tamil");
  expect(container.querySelector('img').src).toBe(user.avatar);
  // act(() => {
  //   render(<Hello name="Jenny" />, container);
  // });
  // expect(container.textContent).toBe("Hello, Jenny!");

  // act(() => {
  //   render(<Hello name="Margaret" />, container);
  // });
  // expect(container.textContent).toBe("Hello, Margaret!");
});
