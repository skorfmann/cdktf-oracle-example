// https://www.terraform.io/docs/providers/oci/r/data_oci_functions_functions.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "application_id": {
        "type": "string",
        "required": true
      },
      "display_name": {
        "type": "string",
        "optional": true
      },
      "functions": {
        "type": [
          "list",
          [
            "object",
            {
              "application_id": "string",
              "compartment_id": "string",
              "config": [
                "map",
                "string"
              ],
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "image": "string",
              "image_digest": "string",
              "invoke_endpoint": "string",
              "memory_in_mbs": "string",
              "state": "string",
              "time_created": "string",
              "time_updated": "string",
              "timeout_in_seconds": "number"
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true
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

export interface DataOciFunctionsFunctionsConfig extends TerraformMetaArguments {
  readonly applicationId: string;
  readonly displayName?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciFunctionsFunctionsFilter[];
}
export class DataOciFunctionsFunctionsFunctions extends ComplexComputedList {

  // application_id - computed: true, optional: false, required: true
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // config - computed: true, optional: false, required: true
  public get config() {
    return 'not implemented' as any;
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
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

  // image - computed: true, optional: false, required: true
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_digest - computed: true, optional: false, required: true
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }

  // invoke_endpoint - computed: true, optional: false, required: true
  public get invokeEndpoint() {
    return this.getStringAttribute('invoke_endpoint');
  }

  // memory_in_mbs - computed: true, optional: false, required: true
  public get memoryInMbs() {
    return this.getStringAttribute('memory_in_mbs');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timeout_in_seconds - computed: true, optional: false, required: true
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
}
export interface DataOciFunctionsFunctionsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciFunctionsFunctions extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciFunctionsFunctionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_functions_functions',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationId = config.applicationId;
    this._displayName = config.displayName;
    this._state = config.state;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId: string;
  public get applicationId() {
    return this._applicationId;
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // functions - computed: true, optional: false, required: true
  public functions(index: string) {
    return new DataOciFunctionsFunctionsFunctions(this, 'functions', index);
  }

  // id - computed: false, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id;
  }
  public set id(value: string | undefined) {
    this._id = value;
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
  private _filter?: DataOciFunctionsFunctionsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciFunctionsFunctionsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: this._applicationId,
      display_name: this._displayName,
      state: this._state,
      filter: this._filter,
    };
  }
}
