import { StyledHeader, Logo } from "./Header.styled";
import {ButtonsBox, CyanButton, BlueButton } from "../Button/Button.styled";
import { logo } from "../../assets";


const Header = () => (
	<StyledHeader>
		<Logo>
			<img src= {logo} alt="logo"/>
		</Logo>	
		<h1>
			A history of everything you copy
		</h1>
		<p>
			Clipboard allows you to track and organize everything you 
		  copy. Instantly access your clipboard on all your devices.
		</p>
		<ButtonsBox>
			<CyanButton>
				Download for iOS
			</CyanButton>
			<BlueButton>
				Download for Mac
			</BlueButton>
		</ButtonsBox>	
	</StyledHeader>
);

export default Header;