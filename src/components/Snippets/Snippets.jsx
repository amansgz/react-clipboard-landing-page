import { StyledSnippets, Image, Container, Snippet } from "./Snippets.styled";
import { imgComputer } from "../../assets";
import { snippets } from "../../constants/index";

const Snippets = () => (
	<StyledSnippets>
		<h2>
			Keep track of your snippets			
		</h2>
		<p>
			Clipboard instantly stores any item you copy in the cloud, 
		  meaning you can access your snippets immediately on all your 
		  devices. Our Mac and iOS apps will help you organize everything.		
		</p>

		<Container>
			<Image>
				<img src= {imgComputer} alt=""/>
			</Image>

			<div>
			  {snippets.map((snippet) => (
					<Snippet key={snippet.id}>
						<h3>
							{snippet.title}
						</h3>
						<p>
							{snippet.content}
						</p>
					</Snippet>	
				))}
			</div>	
		</Container>

	</StyledSnippets>
);

export default Snippets;