import { StyledSnippets, Title, Text, Image, Container, Snippet, SnippetTitle, SnippetText } from "./styles/Snippets.styled";
import { imgComputer } from "../assets";
import { snippets } from "../constants";

const Snippets = () => (
	<StyledSnippets>
		<Title>
			Keep track of your snippets			
		</Title>
		<Text>
			Clipboard instantly stores any item you copy in the cloud, 
		  meaning you can access your snippets immediately on all your 
		  devices. Our Mac and iOS apps will help you organize everything.		
		</Text>

		<Container>
			<Image>
				<img src= {imgComputer} alt=""/>
			</Image>

			<div>
			  {snippets.map((snippet) => (
					<Snippet key={snippet.id}>
						<SnippetTitle>
							{snippet.title}
						</SnippetTitle>
						<SnippetText>
							{snippet.content}
						</SnippetText>
					</Snippet>	
				))}
			</div>	
		</Container>

	</StyledSnippets>
);

export default Snippets;