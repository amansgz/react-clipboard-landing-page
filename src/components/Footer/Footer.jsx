import { StyledFooter, Logo, ListLinks } from "./Footer.styled";
import { logo } from "../../assets";
import SocialLinks from "../SocialLinks/SocialLinks";


const Footer = () => (
	<StyledFooter>
		<Logo>
			<img src= {logo} alt="logo"/>
		</Logo>
		
  	<ListLinks>
      <div>
    		<li>
    			<a href="#">FAQs</a>
    		</li>
    			<li>
    			<a href="#">Contact Us</a>
    		</li>
    	</div>

    	<div>
    		<li>
    			<a href="#">Privacy Policy</a>
    		</li>
    			<li>
    			<a href="#">Press Kit</a>
    		</li>
    	</div>
    	<div>
    		<li>
    			<a href="#">Install Guide</a>
    		</li>
    	</div>
    </ListLinks>

    <SocialLinks />
    
	</StyledFooter>
);

export default Footer;