import { ListSocialLinks } from "./SocialLinks.styled";
import Facebook from "../SocialIcons/Facebook";
import Twitter from "../SocialIcons/Twitter";
import Instagram from "../SocialIcons/Instagram";

const SocialLinks = () => (
	<div>
		<ListSocialLinks>
			<li>
				<a href="#" aria-label="Go to Facebook">
					<Facebook />
				</a>
			</li>		

			<li>
				<a href="#" aria-label="Go to Twitter">
					<Twitter />
				</a>
			</li>

			<li>
				<a href="#" aria-label="Go to Instagram">
					<Instagram />
				</a>
			</li>
		</ListSocialLinks>	
	</div>
);

export default SocialLinks;