import styled from "styled-components";

export const StyledSnippets = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 3em 2em;
	text-align: center;

	@media (min-width: 1200px) {
		padding: 3em 0;
		overflow: hidden;
	}	
	h2 {
		width: 60vw;	
	}
	p {
		width: 82vw;
		max-width: 685px;
		padding: 1em 0;
	}
`

export const Container = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (min-width: 1200px) {
		flex-direction: row;
		justify-content: space-between;
	}

	div {
		@media (min-width: 1200px) {	
			width: 50vw;
			max-width: 720px;
	}
`

export const Image = styled.picture`
	width: 85vw;
	max-width: 700px;
	padding: 4em 0;
	margin: auto;

	@media (min-width: 1200px) {
		transform: translateX(-6%);
		padding-bottom: 0;
		margin: 0;
	}
`

export const Snippet = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 1em;

		@media (min-width: 768px) {
			padding-left: 7em;
		}

	h3 {
		padding: .5em;

		@media (min-width: 768px) {
			align-self: start;
			padding-left: 0;
		}
	}	
	p {
		width: 82vw;
		max-width: 398px;

		@media (min-width: 768px) {
			text-align: left;
			align-self: start;
		}
	}	

`