import { StyledAccess } from "./Access.styled";
import { imgDevices } from "../../assets";

const Access = () => (

  <StyledAccess>
    <h2>
      Access Clipboard anywhere  
    </h2>
    <p>
      Whether you’re on the go, or at your computer, you can access all your Clipboard 
      snippets in a few simple clicks.
    </p>  
    <picture>
      <img src= {imgDevices} alt="devices"/>
    </picture>
  </StyledAccess>
);

export default Access;