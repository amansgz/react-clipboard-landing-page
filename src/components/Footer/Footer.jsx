import { StyledFooter, Logo, ListLinks } from "./Footer.styled";
import { logo } from "../../assets";
import SocialLinks from "../SocialLinks/SocialLinks";


const Footer = () => (
	<StyledFooter>
		<Logo>
			<img src= {logo} alt="logo"/>
		</Logo>
		
  	<ListLinks>
      <ul>
    		<li>
    			<a href="#">FAQs</a>
    		</li>
    			<li>
    			<a href="#">Contact Us</a>
    		</li>
    	</ul>

    	<ul>
    		<li>
    			<a href="#">Privacy Policy</a>
    		</li>
    			<li>
    			<a href="#">Press Kit</a>
    		</li>
    	</ul>
    	<ul>
    		<li>
    			<a href="#">Install Guide</a>
    		</li>
    	</ul>
    </ListLinks>

    <SocialLinks />
    
	</StyledFooter>
);

export default Footer;