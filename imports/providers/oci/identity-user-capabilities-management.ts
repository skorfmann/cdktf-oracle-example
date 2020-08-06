// https://www.terraform.io/docs/providers/oci/r/identity_user_capabilities_management.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "can_use_api_keys": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "can_use_auth_tokens": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "can_use_console_password": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "can_use_customer_secret_keys": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "can_use_smtp_credentials": {
        "type": "bool",
        "optional": true,
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

export interface IdentityUserCapabilitiesManagementConfig extends TerraformMetaArguments {
  readonly canUseApiKeys?: boolean;
  readonly canUseAuthTokens?: boolean;
  readonly canUseConsolePassword?: boolean;
  readonly canUseCustomerSecretKeys?: boolean;
  readonly canUseSmtpCredentials?: boolean;
  readonly userId: string;
  /** timeouts block */
  readonly timeouts?: IdentityUserCapabilitiesManagementTimeouts;
}
export interface IdentityUserCapabilitiesManagementTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class IdentityUserCapabilitiesManagement extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IdentityUserCapabilitiesManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_user_capabilities_management',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._canUseApiKeys = config.canUseApiKeys;
    this._canUseAuthTokens = config.canUseAuthTokens;
    this._canUseConsolePassword = config.canUseConsolePassword;
    this._canUseCustomerSecretKeys = config.canUseCustomerSecretKeys;
    this._canUseSmtpCredentials = config.canUseSmtpCredentials;
    this._userId = config.userId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_use_api_keys - computed: true, optional: true, required: false
  private _canUseApiKeys?: boolean;
  public get canUseApiKeys() {
    return this._canUseApiKeys ?? this.getBooleanAttribute('can_use_api_keys');
  }
  public set canUseApiKeys(value: boolean | undefined) {
    this._canUseApiKeys = value;
  }

  // can_use_auth_tokens - computed: true, optional: true, required: false
  private _canUseAuthTokens?: boolean;
  public get canUseAuthTokens() {
    return this._canUseAuthTokens ?? this.getBooleanAttribute('can_use_auth_tokens');
  }
  public set canUseAuthTokens(value: boolean | undefined) {
    this._canUseAuthTokens = value;
  }

  // can_use_console_password - computed: true, optional: true, required: false
  private _canUseConsolePassword?: boolean;
  public get canUseConsolePassword() {
    return this._canUseConsolePassword ?? this.getBooleanAttribute('can_use_console_password');
  }
  public set canUseConsolePassword(value: boolean | undefined) {
    this._canUseConsolePassword = value;
  }

  // can_use_customer_secret_keys - computed: true, optional: true, required: false
  private _canUseCustomerSecretKeys?: boolean;
  public get canUseCustomerSecretKeys() {
    return this._canUseCustomerSecretKeys ?? this.getBooleanAttribute('can_use_customer_secret_keys');
  }
  public set canUseCustomerSecretKeys(value: boolean | undefined) {
    this._canUseCustomerSecretKeys = value;
  }

  // can_use_smtp_credentials - computed: true, optional: true, required: false
  private _canUseSmtpCredentials?: boolean;
  public get canUseSmtpCredentials() {
    return this._canUseSmtpCredentials ?? this.getBooleanAttribute('can_use_smtp_credentials');
  }
  public set canUseSmtpCredentials(value: boolean | undefined) {
    this._canUseSmtpCredentials = value;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IdentityUserCapabilitiesManagementTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IdentityUserCapabilitiesManagementTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      can_use_api_keys: this._canUseApiKeys,
      can_use_auth_tokens: this._canUseAuthTokens,
      can_use_console_password: this._canUseConsolePassword,
      can_use_customer_secret_keys: this._canUseCustomerSecretKeys,
      can_use_smtp_credentials: this._canUseSmtpCredentials,
      user_id: this._userId,
      timeouts: this._timeouts,
    };
  }
}
