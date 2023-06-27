import { createGlobalStyle } from "styled-components";
import { COLORS, SIZES } from "./components/styles/values";

export const GlobalStyle = createGlobalStyle `
	*,
	*:before,
	*:after {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	body {
		font-family: 'Bai Jamjuree', sans-serif;
		line-height: 1.3;
	}
	h1 {
		font-size: ${SIZES.fs1};
	}
	h2 {
		font-size: ${SIZES.fs2};
	}

	h1, 
	h2 {		
		color: ${COLORS.neutral1};
	}
	p {
		font-size: ${SIZES.fs3};
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
`