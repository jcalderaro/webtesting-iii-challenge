// -------------------------------------------------------------------------------------- //

// ### Dashboard

// - shows the controls and display

// -------------------------------------------------------------------------------------- //

import React from "react";
import {render, fireEvent } from "@testing-library/react";
import Dashboard from "../dashboard/Dashboard";

// -------------------------------------------------------------------------------------- //

test("Dashboard renders correctly", () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
});

// -------------------------------------------------------------------------------------- //