import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { TraineeInfrastructure } from './trainee-infra';
import { TraineePipeline } from './trainee-pipeline';
import { TraineeGitHubProps } from './trainee-props';

/**
 * Parameters to the Trainee stack
 */
export interface TraineeStackProps extends cdk.StackProps {
	/** GitHub-related parameters */
	gitHub: TraineeGitHubProps

	/** Name of SSH key pair to be used with EC2 instances */
	keyPairName: string
}

export class TraineeStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props: TraineeStackProps) {
		super(scope, id, props);

		// the infrastructure construct
		const infrastructure = new TraineeInfrastructure(this, 'infrastructure', props);

		// the code pipeline construct
		const pipeline = new TraineePipeline(this, 'pipeline', {
			...props,
			autoScalingGroup: infrastructure.autoScalingGroup
		});

		// add tags to all (infrastructure and pipeline) resources
		// that this stack creates
		cdk.Tags.of(this).add('app:name', 'trainee')
	}
}
