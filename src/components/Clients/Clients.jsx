import { StyledClients, Logo } from "./Clients.styled";
import { logoGoogle, logoHp, logoIbm, logoMicrosoft, logoVectorGraphics } from "../../assets";
import { clients } from "../../constants/index";

const Clients = () => (
	<StyledClients>
		<h2>Clients</h2>
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