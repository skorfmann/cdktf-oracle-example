// https://www.terraform.io/docs/providers/oci/r/identity_user.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "capabilities": {
        "type": [
          "list",
          [
            "object",
            {
              "can_use_api_keys": "bool",
              "can_use_auth_tokens": "bool",
              "can_use_console_password": "bool",
              "can_use_customer_secret_keys": "bool",
              "can_use_oauth2client_credentials": "bool",
              "can_use_smtp_credentials": "bool"
            }
          ]
        ],
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "description": {
        "type": "string",
        "required": true
      },
      "email": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "external_identifier": {
        "type": "string",
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "identity_provider_id": {
        "type": "string",
        "computed": true
      },
      "inactive_state": {
        "type": "string",
        "computed": true
      },
      "name": {
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
      }
    },
    "block_types": {
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface IdentityUserConfig extends TerraformMetaArguments {
  readonly compartmentId?: string;
  readonly definedTags?: { [key: string]: string };
  readonly description: string;
  readonly email?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly name: string;
  /** timeouts block */
  readonly timeouts?: IdentityUserTimeouts;
}
export class IdentityUserCapabilities extends ComplexComputedList {

  // can_use_api_keys - computed: true, optional: false, required: true
  public get canUseApiKeys() {
    return this.getBooleanAttribute('can_use_api_keys');
  }

  // can_use_auth_tokens - computed: true, optional: false, required: true
  public get canUseAuthTokens() {
    return this.getBooleanAttribute('can_use_auth_tokens');
  }

  // can_use_console_password - computed: true, optional: false, required: true
  public get canUseConsolePassword() {
    return this.getBooleanAttribute('can_use_console_password');
  }

  // can_use_customer_secret_keys - computed: true, optional: false, required: true
  public get canUseCustomerSecretKeys() {
    return this.getBooleanAttribute('can_use_customer_secret_keys');
  }

  // can_use_oauth2client_credentials - computed: true, optional: false, required: true
  public get canUseOauth2ClientCredentials() {
    return this.getBooleanAttribute('can_use_oauth2client_credentials');
  }

  // can_use_smtp_credentials - computed: true, optional: false, required: true
  public get canUseSmtpCredentials() {
    return this.getBooleanAttribute('can_use_smtp_credentials');
  }
}
export interface IdentityUserTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class IdentityUser extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IdentityUserConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_user',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._email = config.email;
    this._freeformTags = config.freeformTags;
    this._name = config.name;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capabilities - computed: true, optional: false, required: true
  public capabilities(index: string) {
    return new IdentityUserCapabilities(this, 'capabilities', index);
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string;
  public get compartmentId() {
    return this._compartmentId ?? this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string | undefined) {
    this._compartmentId = value;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // description - computed: false, optional: false, required: true
  private _description: string;
  public get description() {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }

  // email - computed: true, optional: true, required: false
  private _email?: string;
  public get email() {
    return this._email ?? this.getStringAttribute('email');
  }
  public set email(value: string | undefined) {
    this._email = value;
  }

  // external_identifier - computed: true, optional: false, required: true
  public get externalIdentifier() {
    return this.getStringAttribute('external_identifier');
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // identity_provider_id - computed: true, optional: false, required: true
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }

  // inactive_state - computed: true, optional: false, required: true
  public get inactiveState() {
    return this.getStringAttribute('inactive_state');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IdentityUserTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IdentityUserTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      description: this._description,
      email: this._email,
      freeform_tags: this._freeformTags,
      name: this._name,
      timeouts: this._timeouts,
    };
  }
}
