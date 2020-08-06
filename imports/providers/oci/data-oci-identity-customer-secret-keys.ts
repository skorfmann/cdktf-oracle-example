// https://www.terraform.io/docs/providers/oci/r/data_oci_identity_customer_secret_keys.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "customer_secret_keys": {
        "type": [
          "list",
          [
            "object",
            {
              "display_name": "string",
              "id": "string",
              "inactive_state": "string",
              "key": "string",
              "state": "string",
              "time_created": "string",
              "time_expires": "string",
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

export interface DataOciIdentityCustomerSecretKeysConfig extends TerraformMetaArguments {
  readonly userId: string;
  /** filter block */
  readonly filter?: DataOciIdentityCustomerSecretKeysFilter[];
}
export class DataOciIdentityCustomerSecretKeysCustomerSecretKeys extends ComplexComputedList {

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // inactive_state - computed: true, optional: false, required: true
  public get inactiveState() {
    return this.getStringAttribute('inactive_state');
  }

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_expires - computed: true, optional: false, required: true
  public get timeExpires() {
    return this.getStringAttribute('time_expires');
  }

  // user_id - computed: true, optional: false, required: true
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}
export interface DataOciIdentityCustomerSecretKeysFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciIdentityCustomerSecretKeys extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciIdentityCustomerSecretKeysConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_customer_secret_keys',
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

  // customer_secret_keys - computed: true, optional: false, required: true
  public customerSecretKeys(index: string) {
    return new DataOciIdentityCustomerSecretKeysCustomerSecretKeys(this, 'customer_secret_keys', index);
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
  private _filter?: DataOciIdentityCustomerSecretKeysFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciIdentityCustomerSecretKeysFilter[] | undefined) {
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
