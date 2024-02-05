# Trainee CDK (ASG)

[Cloud Development Kit](https://aws.amazon.com/cdk/) (CDK) backend
to build and deploy the [trainee-frontend](http://github.com/lucisuta/trainee-frontend)
demo application to an AWS autoscaling group of EC2 instances
in an automated manner.

Demonstrates how to use
[CodePipeline](https://aws.amazon.com/codepipeline/),
[CodeBuild](https://aws.amazon.com/codebuild/),
and [CodeDeploy](https://aws.amazon.com/codedeploy/).

### CDK Commands

* `npm run build` compile TypeScript to JS
* `npm run watch` watch for changes and compile
* `npm run test` perform the Jest unit tests
* `npx cdk deploy` deploy this stack to your default AWS account and region
* `npx cdk diff` compare deployed stack with current state
* `npx cdk synth` emits the synthesized CloudFormation template
