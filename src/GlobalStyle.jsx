import { createGlobalStyle } from "styled-components";
import { COLORS, SIZES } from "./constants/values";

export const GlobalStyle = createGlobalStyle `
	*,
	*:before,
	*:after {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	body {
		max-width: 1440px;
		margin: auto;
		font-family: 'Bai Jamjuree', sans-serif;
		line-height: 1.3;
	}
	h1 {
		font-size: ${SIZES.fs1};
	}
	h2{
		font-size: ${SIZES.fs2};
	}
	h3 {
		font-size: ${SIZES.fs3};	
	}
	h1, 
	h2,
	h3 {		
		color: ${COLORS.neutral1};
	}
	p {
		font-size: ${SIZES.fs4};
		color: ${COLORS.neutral2};
		line-height: 1.5;
	}
	picture {
		display: block;
	}
	img {
		display: block;
		width: 100%;
		object-fit: cover;
	}
	ul {
		list-style-type: none;
	}
	a {
		text-decoration: none;
		color: ${COLORS.neutral1};
	}
	
`