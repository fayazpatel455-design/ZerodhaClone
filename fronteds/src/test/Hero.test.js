import React from "react";
import {render, screen} from "@testing-library/react"

import "@testing-library/jest-dom";

import Hero from "../landing_page/home/Hero";

// Test Suite
describe('Hero component', () => {
    test('render hero image',()=>{
        render(<Hero/>);
        const heroImage=screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","Media/images/homeHero.png")
    });
    test('render signup button',()=>{
        render(<Hero/>);
        const signupButton=screen.getByRole("button",{name:"Signup now"});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary")
    });
});
