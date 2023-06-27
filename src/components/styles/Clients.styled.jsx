import styled from "styled-components";

export const StyledClients = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 3em;

	@media (min-width: 768px) {
		flex-direction: row;
	}
`
export const Logo = styled.picture`
	width: 40vw;
	max-width: 160px;
	margin: 2em;
`