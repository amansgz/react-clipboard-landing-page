import styled from "styled-components";

export const StyledClients = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 3em;

	@media (min-width: 600px) {
		flex-direction: row;
		flex-wrap: wrap;
	}
`
export const Logo = styled.picture`
	width: 40vw;
	max-width: 160px;
	margin: 2em;
`