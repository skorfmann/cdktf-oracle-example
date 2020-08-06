import { Construct } from 'constructs';
import { App, TerraformStack } from 'cdktf';
import { OciProvider, CoreDedicatedVmHost } from './imports/providers/oci'

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new OciProvider(this, 'main', {})

    // more resoruces
  }
}

const app = new App({stackTraces: false});
new MyStack(app, 'oracle');
app.synth();
