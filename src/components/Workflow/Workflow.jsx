import { StyledWorkflow, Icon, Feature, FeatureTitle, FeatureText } from "./Workflow.styled";
import { features } from "../../constants/index";

const Workflow = () => (
	<StyledWorkflow>
		<h2>
	  	Supercharge your workflow
	  </h2>
	  <p>
	  	We’ve got the tools to boost your productivity.
	  </p>	

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