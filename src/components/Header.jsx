import { StyledHeader, Logo, Title, Text } from "./styles/Header.styled";
import {ButtonsBox, CyanButton, BlueButton } from "./styles/Button.styled";
import { logo } from "../assets";


const Header = () => (
	<StyledHeader>
		<Logo>
			<img src= {logo} alt="logo"/>
		</Logo>	
		<Title>
			A history of everything you copy
		</Title>
		<Text>
			Clipboard allows you to track and organize everything you 
		  copy. Instantly access your clipboard on all your devices.
		</Text>
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