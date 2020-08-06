// https://www.terraform.io/docs/providers/oci/r/data_oci_resourcemanager_stacks.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "display_name": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true
      },
      "stacks": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "config_source": [
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
              "defined_tags": [
                "map",
                "string"
              ],
              "description": "string",
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "state": "string",
              "time_created": "string",
              "variables": [
                "map",
                "string"
              ]
            }
          ]
        ],
        "computed": true
      },
      "state": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "regex": {
              "type": "bool",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciResourcemanagerStacksConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciResourcemanagerStacksFilter[];
}
export class DataOciResourcemanagerStacksStacksConfigSource extends ComplexComputedList {

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
export class DataOciResourcemanagerStacksStacks extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // config_source - computed: true, optional: false, required: true
  public get configSource() {
    return 'not implemented' as any;
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
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
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
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
  public get variables() {
    return 'not implemented' as any;
  }
}
export interface DataOciResourcemanagerStacksFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciResourcemanagerStacks extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciResourcemanagerStacksConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_resourcemanager_stacks',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._state = config.state;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id;
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // stacks - computed: true, optional: false, required: true
  public stacks(index: string) {
    return new DataOciResourcemanagerStacksStacks(this, 'stacks', index);
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciResourcemanagerStacksFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciResourcemanagerStacksFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      state: this._state,
      filter: this._filter,
    };
  }
}
