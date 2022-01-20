import React  from "react";
import {render,screen,cleanup} from '@testing-library/react';
import Avatar from './index';

import '@testing-library/jest-dom';
afterEach(cleanup);
test("Testing Avatar",()=>{
    render(<Avatar  bgc="#3BEC05" children="A"/>);
    const author=screen.getByText("A");
    expect(author).toBeInTheDocument();
});