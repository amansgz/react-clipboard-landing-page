import styled from "styled-components";
import { COLORS } from "./values";

export const ListSocialLinks = styled.ul`
	display: flex;
	margin-top: 1.5em;

	li {
		margin: 1em;
		margin-top:0;
	}
	a svg path {
		transition: fill .1s ease;
	}
	a svg path:hover,
	a svg path:focus {
		fill: ${COLORS.primary1};
	}
`