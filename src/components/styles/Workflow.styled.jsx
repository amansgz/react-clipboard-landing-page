import styled from "styled-components";

export const StyledWorkflow = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 3em 2em;
	text-align: center;

	div {
		@media (min-width: 768px) {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 1em;
			margin: 2em 0;
		}		
	}
`
export const Title = styled.h2`
	width: 60vw;
`
export const Text = styled.p`
	width: 80vw;
	max-width: 675px;
	padding: 1em 0;
`
export const Feature = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1em;
	text-align: center;

	&:nth-child(3) {
		padding-top: .8em;
	}	

	@media (min-width: 768px) {
		justify-content: flex-start;
	}
`
export const Icon = styled.picture`
	width: 10vw;
	max-width: 50px;
	margin: 2em;
`
export const FeatureTitle = styled.h3`
	padding-bottom: .5em;
`
export const FeatureText = styled.p`
	width: 85vw;
	max-width: 400px;
`