// https://www.terraform.io/docs/providers/oci/r/data_oci_identity_authentication_policy.html
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
        "computed": true
      },
      "password_policy": {
        "type": [
          "list",
          [
            "object",
            {
              "is_lowercase_characters_required": "bool",
              "is_numeric_characters_required": "bool",
              "is_special_characters_required": "bool",
              "is_uppercase_characters_required": "bool",
              "is_username_containment_allowed": "bool",
              "minimum_password_length": "number"
            }
          ]
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

// Configuration

export interface DataOciIdentityAuthenticationPolicyConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
}
export class DataOciIdentityAuthenticationPolicyPasswordPolicy extends ComplexComputedList {

  // is_lowercase_characters_required - computed: true, optional: false, required: true
  public get isLowercaseCharactersRequired() {
    return this.getBooleanAttribute('is_lowercase_characters_required');
  }

  // is_numeric_characters_required - computed: true, optional: false, required: true
  public get isNumericCharactersRequired() {
    return this.getBooleanAttribute('is_numeric_characters_required');
  }

  // is_special_characters_required - computed: true, optional: false, required: true
  public get isSpecialCharactersRequired() {
    return this.getBooleanAttribute('is_special_characters_required');
  }

  // is_uppercase_characters_required - computed: true, optional: false, required: true
  public get isUppercaseCharactersRequired() {
    return this.getBooleanAttribute('is_uppercase_characters_required');
  }

  // is_username_containment_allowed - computed: true, optional: false, required: true
  public get isUsernameContainmentAllowed() {
    return this.getBooleanAttribute('is_username_containment_allowed');
  }

  // minimum_password_length - computed: true, optional: false, required: true
  public get minimumPasswordLength() {
    return this.getNumberAttribute('minimum_password_length');
  }
}

// Resource

export class DataOciIdentityAuthenticationPolicy extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciIdentityAuthenticationPolicyConfig) {
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

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // password_policy - computed: true, optional: false, required: true
  public passwordPolicy(index: string) {
    return new DataOciIdentityAuthenticationPolicyPasswordPolicy(this, 'password_policy', index);
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
    };
  }
}
