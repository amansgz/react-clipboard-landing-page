import styled from "styled-components";
import { COLORS, SIZES } from "./values";

export const Button = styled.button`
	padding: 1em 2em;
	margin: .5em;
	border: none;
	color: #FFF;
	border-radius: 24px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
	cursor: pointer;
	transition: opacity .1s ease;

`

export const CyanButton = styled(Button)`
	background-color: ${COLORS.primary1};
`

export const BlueButton = styled(Button)`
	background-color: ${COLORS.primary2};
`
