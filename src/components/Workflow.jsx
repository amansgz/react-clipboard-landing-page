import { StyledWorkflow, Title, Text, Icon, Feature, FeatureTitle, FeatureText } from "./styles/Workflow.styled";
import { features } from "../constants";

const Workflow = () => (
	<StyledWorkflow>
		<Title>
	  	Supercharge your workflow
	  </Title>
	  <Text>
	  	We’ve got the tools to boost your productivity.
	  </Text>	

	  <div>
		  {features.map((feature) => (
				<Feature key={feature.id}>
					<Icon>
						<img src= {feature.icon} alt= ""/>
					</Icon>	
					<FeatureTitle>
						{feature.title}
					</FeatureTitle>
					<FeatureText>
						{feature.content}
					</FeatureText>
				</Feature>	
			))}
		</div>
	</StyledWorkflow>
);

export default Workflow;