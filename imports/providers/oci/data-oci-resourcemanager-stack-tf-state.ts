// https://www.terraform.io/docs/providers/oci/r/data_oci_resourcemanager_stack_tf_state.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "local_path": {
        "type": "string",
        "required": true
      },
      "stack_id": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataOciResourcemanagerStackTfStateConfig extends TerraformMetaArguments {
  readonly localPath: string;
  readonly stackId: string;
}

// Resource

export class DataOciResourcemanagerStackTfState extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciResourcemanagerStackTfStateConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_resourcemanager_stack_tf_state',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._localPath = config.localPath;
    this._stackId = config.stackId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // local_path - computed: false, optional: false, required: true
  private _localPath: string;
  public get localPath() {
    return this._localPath;
  }
  public set localPath(value: string) {
    this._localPath = value;
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId: string;
  public get stackId() {
    return this._stackId;
  }
  public set stackId(value: string) {
    this._stackId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      local_path: this._localPath,
      stack_id: this._stackId,
    };
  }
}
