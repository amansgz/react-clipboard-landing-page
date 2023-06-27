import { StyledAccess, Title, Text, Image } from "./styles/Access.styled";
import { imgDevices } from "../assets";

const Access = () => (

  <StyledAccess>
    <Title>
      Access Clipboard anywhere  
    </Title>
    <Text>
      Whether you’re on the go, or at your computer, you can access all your Clipboard 
      snippets in a few simple clicks.
    </Text>  
    <Image>
      <img src= {imgDevices} alt="devices"/>
    </Image>
  </StyledAccess>
);

export default Access;