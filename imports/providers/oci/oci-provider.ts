// https://www.terraform.io/docs/providers/oci/r/oci_provider.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "auth": {
        "type": "string",
        "description": "(Optional) The type of auth to use. Options are 'ApiKey', 'SecurityToken' and 'InstancePrincipal'. By default, 'ApiKey' will be used.",
        "optional": true
      },
      "config_file_profile": {
        "type": "string",
        "description": "(Optional) The profile name to be used from config file, if not set it will be DEFAULT.",
        "optional": true
      },
      "disable_auto_retries": {
        "type": "bool",
        "description": "(Optional) Disable automatic retries for retriable errors.\nAutomatic retries were introduced to solve some eventual consistency problems but it also introduced performance issues on destroy operations.",
        "optional": true
      },
      "fingerprint": {
        "type": "string",
        "description": "(Optional) The fingerprint for the user's RSA key. This can be found in user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.",
        "optional": true
      },
      "private_key": {
        "type": "string",
        "description": "(Optional) A PEM formatted RSA private key for the user.\nA private_key or a private_key_path must be provided if auth is set to 'ApiKey', ignored otherwise.",
        "optional": true,
        "sensitive": true
      },
      "private_key_password": {
        "type": "string",
        "description": "(Optional) The password used to secure the private key.",
        "optional": true,
        "sensitive": true
      },
      "private_key_path": {
        "type": "string",
        "description": "(Optional) The path to the user's PEM formatted private key.\nA private_key or a private_key_path must be provided if auth is set to 'ApiKey', ignored otherwise.",
        "optional": true
      },
      "region": {
        "type": "string",
        "description": "(Required) The region for API connections (e.g. us-ashburn-1).",
        "optional": true
      },
      "retry_duration_seconds": {
        "type": "number",
        "description": "(Optional) The minimum duration (in seconds) to retry a resource operation in response to an error.\nThe actual retry duration may be longer due to jittering of retry operations. This value is ignored if the `disable_auto_retries` field is set to true.",
        "optional": true
      },
      "tenancy_ocid": {
        "type": "string",
        "description": "(Optional) The tenancy OCID for a user. The tenancy OCID can be found at the bottom of user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.",
        "optional": true
      },
      "user_ocid": {
        "type": "string",
        "description": "(Optional) The user OCID. This can be found in user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.",
        "optional": true
      },
      "alias": {
        "type": "string",
        "description": "Alias name",
        "optional": true,
        "computed": false
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformProvider } from 'cdktf';

// Configuration

export interface OciProviderConfig {
  /** (Optional) The type of auth to use. Options are 'ApiKey', 'SecurityToken' and 'InstancePrincipal'. By default, 'ApiKey' will be used. */
  readonly auth?: string;
  /** (Optional) The profile name to be used from config file, if not set it will be DEFAULT. */
  readonly configFileProfile?: string;
  /** (Optional) Disable automatic retries for retriable errors.
Automatic retries were introduced to solve some eventual consistency problems but it also introduced performance issues on destroy operations. */
  readonly disableAutoRetries?: boolean;
  /** (Optional) The fingerprint for the user's RSA key. This can be found in user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise. */
  readonly fingerprint?: string;
  /** (Optional) A PEM formatted RSA private key for the user.
A private_key or a private_key_path must be provided if auth is set to 'ApiKey', ignored otherwise. */
  readonly privateKey?: string;
  /** (Optional) The password used to secure the private key. */
  readonly privateKeyPassword?: string;
  /** (Optional) The path to the user's PEM formatted private key.
A private_key or a private_key_path must be provided if auth is set to 'ApiKey', ignored otherwise. */
  readonly privateKeyPath?: string;
  /** (Required) The region for API connections (e.g. us-ashburn-1). */
  readonly region?: string;
  /** (Optional) The minimum duration (in seconds) to retry a resource operation in response to an error.
The actual retry duration may be longer due to jittering of retry operations. This value is ignored if the `disable_auto_retries` field is set to true. */
  readonly retryDurationSeconds?: number;
  /** (Optional) The tenancy OCID for a user. The tenancy OCID can be found at the bottom of user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise. */
  readonly tenancyOcid?: string;
  /** (Optional) The user OCID. This can be found in user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise. */
  readonly userOcid?: string;
  /** Alias name */
  readonly alias?: string;
}

// Resource

export class OciProvider extends TerraformProvider {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OciProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersionConstraint: '~> 3.0'
      }
    });
    this._auth = config.auth;
    this._configFileProfile = config.configFileProfile;
    this._disableAutoRetries = config.disableAutoRetries;
    this._fingerprint = config.fingerprint;
    this._privateKey = config.privateKey;
    this._privateKeyPassword = config.privateKeyPassword;
    this._privateKeyPath = config.privateKeyPath;
    this._region = config.region;
    this._retryDurationSeconds = config.retryDurationSeconds;
    this._tenancyOcid = config.tenancyOcid;
    this._userOcid = config.userOcid;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth - computed: false, optional: true, required: false
  private _auth?: string;
  public get auth() {
    return this._auth;
  }
  public set auth(value: string | undefined) {
    this._auth = value;
  }

  // config_file_profile - computed: false, optional: true, required: false
  private _configFileProfile?: string;
  public get configFileProfile() {
    return this._configFileProfile;
  }
  public set configFileProfile(value: string | undefined) {
    this._configFileProfile = value;
  }

  // disable_auto_retries - computed: false, optional: true, required: false
  private _disableAutoRetries?: boolean;
  public get disableAutoRetries() {
    return this._disableAutoRetries;
  }
  public set disableAutoRetries(value: boolean | undefined) {
    this._disableAutoRetries = value;
  }

  // fingerprint - computed: false, optional: true, required: false
  private _fingerprint?: string;
  public get fingerprint() {
    return this._fingerprint;
  }
  public set fingerprint(value: string | undefined) {
    this._fingerprint = value;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string;
  public get privateKey() {
    return this._privateKey;
  }
  public set privateKey(value: string | undefined) {
    this._privateKey = value;
  }

  // private_key_password - computed: false, optional: true, required: false
  private _privateKeyPassword?: string;
  public get privateKeyPassword() {
    return this._privateKeyPassword;
  }
  public set privateKeyPassword(value: string | undefined) {
    this._privateKeyPassword = value;
  }

  // private_key_path - computed: false, optional: true, required: false
  private _privateKeyPath?: string;
  public get privateKeyPath() {
    return this._privateKeyPath;
  }
  public set privateKeyPath(value: string | undefined) {
    this._privateKeyPath = value;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // retry_duration_seconds - computed: false, optional: true, required: false
  private _retryDurationSeconds?: number;
  public get retryDurationSeconds() {
    return this._retryDurationSeconds;
  }
  public set retryDurationSeconds(value: number | undefined) {
    this._retryDurationSeconds = value;
  }

  // tenancy_ocid - computed: false, optional: true, required: false
  private _tenancyOcid?: string;
  public get tenancyOcid() {
    return this._tenancyOcid;
  }
  public set tenancyOcid(value: string | undefined) {
    this._tenancyOcid = value;
  }

  // user_ocid - computed: false, optional: true, required: false
  private _userOcid?: string;
  public get userOcid() {
    return this._userOcid;
  }
  public set userOcid(value: string | undefined) {
    this._userOcid = value;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string;
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      auth: this._auth,
      config_file_profile: this._configFileProfile,
      disable_auto_retries: this._disableAutoRetries,
      fingerprint: this._fingerprint,
      private_key: this._privateKey,
      private_key_password: this._privateKeyPassword,
      private_key_path: this._privateKeyPath,
      region: this._region,
      retry_duration_seconds: this._retryDurationSeconds,
      tenancy_ocid: this._tenancyOcid,
      user_ocid: this._userOcid,
      alias: this._alias,
    };
  }
}
