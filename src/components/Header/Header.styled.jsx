import styled from "styled-components";
import { COLORS } from "../../constants/values";


export const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 4em 1em;
	
	text-align: center;
	background-color: #FFF;
	background-image: url(../assets/bg-header-mobile.png);
	background-repeat: no-repeat;
	background-position: center 0px;
	background-size: contain;

	@media (min-width: 768px) {
		background-image: url(../assets/bg-header-desktop.png);
	}	
`
export const Logo = styled.picture`
	width: 25vw;
	max-width: 160px;
	padding: 3em 0;
`
export const Title = styled.h1`
	width: 75vw;
	font-weight: 600;
`
export const Text = styled.p`
	width: 82vw;
	max-width: 605px;
	padding: 1em 0;
`