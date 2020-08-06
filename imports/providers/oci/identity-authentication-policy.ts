// https://www.terraform.io/docs/providers/oci/r/identity_authentication_policy.html
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
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "password_policy": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "is_lowercase_characters_required": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "is_numeric_characters_required": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "is_special_characters_required": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "is_uppercase_characters_required": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "is_username_containment_allowed": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "minimum_password_length": {
              "type": "number",
              "optional": true,
              "computed": true
            }
          }
        },
        "max_items": 1
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IdentityAuthenticationPolicyConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  /** password_policy block */
  readonly passwordPolicy?: IdentityAuthenticationPolicyPasswordPolicy[];
  /** timeouts block */
  readonly timeouts?: IdentityAuthenticationPolicyTimeouts;
}
export interface IdentityAuthenticationPolicyPasswordPolicy {
  readonly isLowercaseCharactersRequired?: boolean;
  readonly isNumericCharactersRequired?: boolean;
  readonly isSpecialCharactersRequired?: boolean;
  readonly isUppercaseCharactersRequired?: boolean;
  readonly isUsernameContainmentAllowed?: boolean;
  readonly minimumPasswordLength?: number;
}
export interface IdentityAuthenticationPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class IdentityAuthenticationPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IdentityAuthenticationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_authentication_policy',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._passwordPolicy = config.passwordPolicy;
    this._timeouts = config.timeouts;
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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // password_policy - computed: false, optional: true, required: false
  private _passwordPolicy?: IdentityAuthenticationPolicyPasswordPolicy[];
  public get passwordPolicy() {
    return this._passwordPolicy;
  }
  public set passwordPolicy(value: IdentityAuthenticationPolicyPasswordPolicy[] | undefined) {
    this._passwordPolicy = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IdentityAuthenticationPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IdentityAuthenticationPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      password_policy: this._passwordPolicy,
      timeouts: this._timeouts,
    };
  }
}
