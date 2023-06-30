import styled from "styled-components";
import { COLORS } from "../../constants/values";

export const Button = styled.button`
	width: 80vw;
	padding: 1em 2.5em;
	margin: .8em;
	border: none;
	color: #FFF;
	border-radius: 24px;
	cursor: pointer;
	transition: opacity .1s ease;

	&:hover,
	&:focus {
		opacity: 0.8;
	}
	@media (min-width: 600px) {
		max-width: 180px;
	}
`
export const ButtonsBox = styled.div`
	margin-top: 1.5em;

	@media (min-width: 768px) {
		display: flex;
	}
`
export const CyanButton = styled(Button)`
	background-color: ${COLORS.primary1};
	box-shadow: 0 4px 6px ${COLORS.primary1};
`

export const BlueButton = styled(Button)`
	background-color: ${COLORS.primary2};
	box-shadow: 0 4px 6px ${COLORS.primary2};
`