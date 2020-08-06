// https://www.terraform.io/docs/providers/oci/r/data_oci_vault_secret.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "current_version_number": {
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
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "key_id": {
        "type": "string",
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "metadata": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "secret_id": {
        "type": "string",
        "required": true
      },
      "secret_name": {
        "type": "string",
        "computed": true
      },
      "secret_rules": {
        "type": [
          "list",
          [
            "object",
            {
              "is_enforced_on_deleted_secret_versions": "bool",
              "is_secret_content_retrieval_blocked_on_expiry": "bool",
              "rule_type": "string",
              "secret_version_expiry_interval": "string",
              "time_of_absolute_expiry": "string"
            }
          ]
        ],
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
      "time_of_current_version_expiry": {
        "type": "string",
        "computed": true
      },
      "time_of_deletion": {
        "type": "string",
        "computed": true
      },
      "vault_id": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciVaultSecretConfig extends TerraformMetaArguments {
  readonly secretId: string;
}
export class DataOciVaultSecretSecretRules extends ComplexComputedList {

  // is_enforced_on_deleted_secret_versions - computed: true, optional: false, required: true
  public get isEnforcedOnDeletedSecretVersions() {
    return this.getBooleanAttribute('is_enforced_on_deleted_secret_versions');
  }

  // is_secret_content_retrieval_blocked_on_expiry - computed: true, optional: false, required: true
  public get isSecretContentRetrievalBlockedOnExpiry() {
    return this.getBooleanAttribute('is_secret_content_retrieval_blocked_on_expiry');
  }

  // rule_type - computed: true, optional: false, required: true
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }

  // secret_version_expiry_interval - computed: true, optional: false, required: true
  public get secretVersionExpiryInterval() {
    return this.getStringAttribute('secret_version_expiry_interval');
  }

  // time_of_absolute_expiry - computed: true, optional: false, required: true
  public get timeOfAbsoluteExpiry() {
    return this.getStringAttribute('time_of_absolute_expiry');
  }
}

// Resource

export class DataOciVaultSecret extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciVaultSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_vault_secret',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._secretId = config.secretId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // current_version_number - computed: true, optional: false, required: true
  public get currentVersionNumber() {
    return this.getStringAttribute('current_version_number');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key_id - computed: true, optional: false, required: true
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // metadata - computed: true, optional: false, required: true
  public metadata(key: string): string {
    return new StringMap(this, 'metadata').lookup(key);
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId: string;
  public get secretId() {
    return this._secretId;
  }
  public set secretId(value: string) {
    this._secretId = value;
  }

  // secret_name - computed: true, optional: false, required: true
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }

  // secret_rules - computed: true, optional: false, required: true
  public secretRules(index: string) {
    return new DataOciVaultSecretSecretRules(this, 'secret_rules', index);
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_of_current_version_expiry - computed: true, optional: false, required: true
  public get timeOfCurrentVersionExpiry() {
    return this.getStringAttribute('time_of_current_version_expiry');
  }

  // time_of_deletion - computed: true, optional: false, required: true
  public get timeOfDeletion() {
    return this.getStringAttribute('time_of_deletion');
  }

  // vault_id - computed: true, optional: false, required: true
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      secret_id: this._secretId,
    };
  }
}
