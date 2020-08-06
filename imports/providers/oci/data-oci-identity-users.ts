// https://www.terraform.io/docs/providers/oci/r/data_oci_identity_users.html
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
      "external_identifier": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "identity_provider_id": {
        "type": "string",
        "optional": true
      },
      "users": {
        "type": [
          "list",
          [
            "object",
            {
              "capabilities": [
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
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "description": "string",
              "email": "string",
              "external_identifier": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "identity_provider_id": "string",
              "inactive_state": "string",
              "name": "string",
              "state": "string",
              "time_created": "string"
            }
          ]
        ],
        "computed": true
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

export interface DataOciIdentityUsersConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly externalIdentifier?: string;
  readonly identityProviderId?: string;
  /** filter block */
  readonly filter?: DataOciIdentityUsersFilter[];
}
export class DataOciIdentityUsersUsersCapabilities extends ComplexComputedList {

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
export class DataOciIdentityUsersUsers extends ComplexComputedList {

  // capabilities - computed: true, optional: false, required: true
  public get capabilities() {
    return 'not implemented' as any;
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // email - computed: true, optional: false, required: true
  public get email() {
    return this.getStringAttribute('email');
  }

  // external_identifier - computed: true, optional: false, required: true
  public get externalIdentifier() {
    return this.getStringAttribute('external_identifier');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_provider_id - computed: true, optional: false, required: true
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }

  // inactive_state - computed: true, optional: false, required: true
  public get inactiveState() {
    return this.getStringAttribute('inactive_state');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export interface DataOciIdentityUsersFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciIdentityUsers extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciIdentityUsersConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_users',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._externalIdentifier = config.externalIdentifier;
    this._identityProviderId = config.identityProviderId;
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

  // external_identifier - computed: false, optional: true, required: false
  private _externalIdentifier?: string;
  public get externalIdentifier() {
    return this._externalIdentifier;
  }
  public set externalIdentifier(value: string | undefined) {
    this._externalIdentifier = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // identity_provider_id - computed: false, optional: true, required: false
  private _identityProviderId?: string;
  public get identityProviderId() {
    return this._identityProviderId;
  }
  public set identityProviderId(value: string | undefined) {
    this._identityProviderId = value;
  }

  // users - computed: true, optional: false, required: true
  public users(index: string) {
    return new DataOciIdentityUsersUsers(this, 'users', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciIdentityUsersFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciIdentityUsersFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      external_identifier: this._externalIdentifier,
      identity_provider_id: this._identityProviderId,
      filter: this._filter,
    };
  }
}
