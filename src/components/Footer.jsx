import { StyledFooter, Logo, ListLinks, ListSocialLinks } from "./styles/Footer.styled";
import { footerLinks, socialMedia } from "../constants"; 
import { logo } from "../assets";

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

    <ListSocialLinks>
    	{socialMedia.map((item, index) => (
    		<li key= {item.id}>
    			<a href="">
    				<img src= {item.icon} alt=""/>
    			</a>
    		</li>	
    	))}
    </ListSocialLinks>
    
	</StyledFooter>
);

export default Footer;