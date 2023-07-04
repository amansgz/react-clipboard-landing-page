import styled from "styled-components";
import { COLORS } from "../../constants/values";


export const StyledFooter = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 3em 2em 1em;
	text-align: center;
	background-color: ${COLORS.neutral3};

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-around;
	}
`

export const Logo = styled.picture`
	width: 12vw;
	max-width: 50px;
	margin: 1em;
`

export const ListLinks = styled.div`
	@media (min-width: 768px) {
		display: flex;
		text-align: left;
	}
		
	li {
		margin: 1.5em;

		@media (min-width: 900px) {
			margin-right: 4em;
		}	
	}
	a {
		transition: color .1s ease;
	}
	a:hover,
	a:focus {
		color: ${COLORS.primary1};
	}
`