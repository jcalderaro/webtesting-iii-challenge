// -------------------------------------------------------------------------------------- //

// ### Gate

// - defaults to `unlocked` and `open`
// - cannot be closed or opened if it is locked

// ### Controls Component

// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
// - the closed toggle button is disabled if the gate is locked
// - the locked toggle button is disabled if the gate is open

// -------------------------------------------------------------------------------------- //

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Controls from "../controls/Controls";

// -------------------------------------------------------------------------------------- //

test("Controls renders correctly", () => {
    expect(render(<Controls />)).toMatchSnapshot();
});

// -------------------------------------------------------------------------------------- //

test("toggled-locked and toggle-closed is called on button clicks", () => {
    const toggleLocked = jest.fn();
    const toggleClosed = jest.fn();
    const { getByText } = render(
        <Controls 
        toggleLocked={toggleLocked}
        toggleClosed={toggleClosed}
         />
    );
    fireEvent.click(getByText(/Close Gate/i));
    expect(toggleClosed).toHaveBeenCalled();
})

// -------------------------------------------------------------------------------------- //

test("ToggleOpen opens Gate and toggleLocked locks gate", () => {
    const toggleLocked = jest.fn();
    const toggleOpen = jest.fn();
    const { getByText } = render(
        <Controls 
        locked={false}
        closed={true}
        toggleLocked={toggleLocked}
        toggleClosed={toggleOpen}
         />
    );
    fireEvent.click(getByText(/Open Gate/i));
    expect(toggleOpen).toHaveBeenCalled();
    fireEvent.click(getByText(/Lock Gate/i));
    expect(toggleLocked).toHaveBeenCalled();
})

// -------------------------------------------------------------------------------------- //
