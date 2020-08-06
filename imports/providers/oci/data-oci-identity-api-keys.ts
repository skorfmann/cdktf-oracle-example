// https://www.terraform.io/docs/providers/oci/r/data_oci_identity_api_keys.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "api_keys": {
        "type": [
          "list",
          [
            "object",
            {
              "fingerprint": "string",
              "id": "string",
              "inactive_status": "string",
              "key_value": "string",
              "state": "string",
              "time_created": "string",
              "user_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "user_id": {
        "type": "string",
        "required": true
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

export interface DataOciIdentityApiKeysConfig extends TerraformMetaArguments {
  readonly userId: string;
  /** filter block */
  readonly filter?: DataOciIdentityApiKeysFilter[];
}
export class DataOciIdentityApiKeysApiKeys extends ComplexComputedList {

  // fingerprint - computed: true, optional: false, required: true
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // inactive_status - computed: true, optional: false, required: true
  public get inactiveStatus() {
    return this.getStringAttribute('inactive_status');
  }

  // key_value - computed: true, optional: false, required: true
  public get keyValue() {
    return this.getStringAttribute('key_value');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // user_id - computed: true, optional: false, required: true
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}
export interface DataOciIdentityApiKeysFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciIdentityApiKeys extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciIdentityApiKeysConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_api_keys',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._userId = config.userId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_keys - computed: true, optional: false, required: true
  public apiKeys(index: string) {
    return new DataOciIdentityApiKeysApiKeys(this, 'api_keys', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId: string;
  public get userId() {
    return this._userId;
  }
  public set userId(value: string) {
    this._userId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciIdentityApiKeysFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciIdentityApiKeysFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      user_id: this._userId,
      filter: this._filter,
    };
  }
}
