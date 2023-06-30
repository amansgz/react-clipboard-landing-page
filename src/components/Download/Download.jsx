import { StyledDownload, Title, Text } from "./Download.styled";
import { ButtonsBox, CyanButton, BlueButton } from "../Button/Button.styled";

const Download = () => (
	<StyledDownload>
		<Title>
			Clipboard for iOS and Mac OS
		</Title>
		<Text>
	  	Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
	  	and you’re ready to start adding to your clipboard.
	  </Text>	
	<ButtonsBox>
	  <CyanButton>
	  	Download for iOS
	  </CyanButton>

	  <BlueButton>	
	  	Download for Mac
	  </BlueButton>	
	</ButtonsBox>  
  </StyledDownload>
);

export default Download;