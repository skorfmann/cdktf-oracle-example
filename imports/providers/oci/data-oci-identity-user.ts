// https://www.terraform.io/docs/providers/oci/r/data_oci_identity_user.html
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
      "email": {
        "type": "string",
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
        "computed": true
      },
      "id": {
        "type": "string",
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
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "user_id": {
        "type": "string",
        "required": true
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

export interface DataOciIdentityUserConfig extends TerraformMetaArguments {
  readonly userId: string;
}
export class DataOciIdentityUserCapabilities extends ComplexComputedList {

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

// Resource

export class DataOciIdentityUser extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciIdentityUserConfig) {
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
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capabilities - computed: true, optional: false, required: true
  public capabilities(index: string) {
    return new DataOciIdentityUserCapabilities(this, 'capabilities', index);
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
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
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
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

  // user_id - computed: false, optional: false, required: true
  private _userId: string;
  public get userId() {
    return this._userId;
  }
  public set userId(value: string) {
    this._userId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      user_id: this._userId,
    };
  }
}
