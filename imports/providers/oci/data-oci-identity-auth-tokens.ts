// https://www.terraform.io/docs/providers/oci/r/data_oci_identity_auth_tokens.html
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
      "tokens": {
        "type": [
          "list",
          [
            "object",
            {
              "description": "string",
              "id": "string",
              "inactive_state": "string",
              "state": "string",
              "time_created": "string",
              "time_expires": "string",
              "token": "string",
              "user_id": "string"
            }
          ]
        ],
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

export interface DataOciIdentityAuthTokensConfig extends TerraformMetaArguments {
  readonly userId: string;
  /** filter block */
  readonly filter?: DataOciIdentityAuthTokensFilter[];
}
export class DataOciIdentityAuthTokensTokens extends ComplexComputedList {

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // inactive_state - computed: true, optional: false, required: true
  public get inactiveState() {
    return this.getStringAttribute('inactive_state');
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

  // token - computed: true, optional: false, required: true
  public get token() {
    return this.getStringAttribute('token');
  }

  // user_id - computed: true, optional: false, required: true
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}
export interface DataOciIdentityAuthTokensFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciIdentityAuthTokens extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciIdentityAuthTokensConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_auth_tokens',
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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // tokens - computed: true, optional: false, required: true
  public tokens(index: string) {
    return new DataOciIdentityAuthTokensTokens(this, 'tokens', index);
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
  private _filter?: DataOciIdentityAuthTokensFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciIdentityAuthTokensFilter[] | undefined) {
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
