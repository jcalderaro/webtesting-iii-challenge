// -------------------------------------------------------------------------------------- //

// ### Display Component
// - displays if gate is open/closed and if it is locked/unlocked

// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise

// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class

// -------------------------------------------------------------------------------------- //

import React from "react";
import {render, fireEvent } from "@testing-library/react";
import Display from "../display/Display";

// -------------------------------------------------------------------------------------- //

test("Display renders correctly", () => {
    expect(render(<Display />)).toMatchSnapshot();
});

// -------------------------------------------------------------------------------------- //

test("displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise", () => {
    const { getByText } = render(
        <Display 
        closed={true}
        />
    )
    expect(getByText(/Closed/i));
})

// -------------------------------------------------------------------------------------- //

test("displays 'Open' if the `closed` prop is `true` and 'Open' if otherwise", () => {
    const { getByText } = render(
        <Display 
        closed={false}
        />
    )
    expect(getByText(/Open/i));
})

// -------------------------------------------------------------------------------------- //

test("when `locked` or `closed` use the `red-led` class", () => {
    
    const { getByText } = render(
        <Display 
        locked={true}
        closed={true}
        />
    )
    const lockedDiv = getByText('Locked')
    const closedDiv = getByText('Closed')
    expect(lockedDiv.className).toBe('led red-led')
    expect(closedDiv.className).toBe('led red-led')
})

// -------------------------------------------------------------------------------------- //