import { StyledHeader } from "./styles/Header.styled";
import { CyanButton, BlueButton } from "./styles/Button.styled";
import { logo } from '../assets';

const Header = () => (
	<StyledHeader>
		<picture>
			<img src= {logo} alt="logo"/>
		</picture>	
		<h1>
			A history of everything you copy
		</h1>
		<p>
			Clipboard allows you to track and organize everything you 
		  copy. Instantly access your clipboard on all your devices.
		</p>
		<div>
			<CyanButton>
				Download for iOS
			</CyanButton>
			<BlueButton>
				Download for Mac
			</BlueButton>
		</div>	
	</StyledHeader>
);

export default Header;