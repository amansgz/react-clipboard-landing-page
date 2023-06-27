import { StyledClients, Logo } from "./styles/Clients.styled";
import { logoGoogle, logoHp, logoIbm, logoMicrosoft, logoVectorGraphics } from "../assets";
import { clients } from "../constants";

const Clients = () => (
	<StyledClients>
		{clients.map((client) => (
			<div key={client.id}>
				<Logo>
					<img src= {client.logo} alt= {client.alt}/>
				</Logo>	
			</div>	
		))}
	</StyledClients>
);

export default Clients;