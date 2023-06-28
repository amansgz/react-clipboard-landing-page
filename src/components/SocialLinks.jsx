import { ListSocialLinks } from "./styles/SocialLinks.styled";
import Facebook from "./SocialIcons/Facebook";
import Twitter from "./SocialIcons/Twitter";
import Instagram from "./SocialIcons/Instagram";

const SocialLinks = () => (
	<div>
		<ListSocialLinks>
			<li>
				<a href="">
					<Facebook />
				</a>
			</li>		

			<li>
				<a href="">
					<Twitter />
				</a>
			</li>

			<li>
				<a href="">
					<Instagram />
				</a>
			</li>
		</ListSocialLinks>	
	</div>
);

export default SocialLinks;