import styled from "styled-components";
import { COLORS } from "./values";

export const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	text-align: center;
	background-color: #FFF;
	background-image: url(../assets/bg-header-mobile.png);
	background-repeat: no-repeat;
	background-position: top center;
	background-size: cover;
	border: 1px solid blue;

	picture {
		width: 10vw;
	}
	h1 {
		width: 70vw;
	}
	p {
		width: 72vw;
		max-width: 490px;
	}
	div {
		@media (min-width: 768px) {
			display: flex;
		}
	}
`
