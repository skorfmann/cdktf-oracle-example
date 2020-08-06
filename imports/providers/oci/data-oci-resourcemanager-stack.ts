// https://www.terraform.io/docs/providers/oci/r/data_oci_resourcemanager_stack.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "config_source": {
        "type": [
          "list",
          [
            "object",
            {
              "config_source_type": "string",
              "working_directory": "string",
              "zip_file_base64encoded": "string"
            }
          ]
        ],
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "stack_id": {
        "type": "string",
        "required": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "variables": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataOciResourcemanagerStackConfig extends TerraformMetaArguments {
  readonly stackId: string;
}
export class DataOciResourcemanagerStackConfigSource extends ComplexComputedList {

  // config_source_type - computed: true, optional: false, required: true
  public get configSourceType() {
    return this.getStringAttribute('config_source_type');
  }

  // working_directory - computed: true, optional: false, required: true
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }

  // zip_file_base64encoded - computed: true, optional: false, required: true
  public get zipFileBase64Encoded() {
    return this.getStringAttribute('zip_file_base64encoded');
  }
}

// Resource

export class DataOciResourcemanagerStack extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciResourcemanagerStackConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_resourcemanager_stack',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._stackId = config.stackId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // config_source - computed: true, optional: false, required: true
  public configSource(index: string) {
    return new DataOciResourcemanagerStackConfigSource(this, 'config_source', index);
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId: string;
  public get stackId() {
    return this._stackId;
  }
  public set stackId(value: string) {
    this._stackId = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // variables - computed: true, optional: false, required: true
  public variables(key: string): string {
    return new StringMap(this, 'variables').lookup(key);
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      stack_id: this._stackId,
    };
  }
}
