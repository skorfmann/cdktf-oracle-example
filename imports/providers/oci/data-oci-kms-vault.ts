// https://www.terraform.io/docs/providers/oci/r/data_oci_kms_vault.html
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
      "crypto_endpoint": {
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
      "display_name": {
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
      "management_endpoint": {
        "type": "string",
        "computed": true
      },
      "restore_from_file": {
        "type": [
          "list",
          [
            "object",
            {
              "content_length": "string",
              "content_md5": "string",
              "restore_vault_from_file_details": "string"
            }
          ]
        ],
        "computed": true
      },
      "restore_from_object_store": {
        "type": [
          "list",
          [
            "object",
            {
              "bucket": "string",
              "destination": "string",
              "namespace": "string",
              "object": "string",
              "uri": "string"
            }
          ]
        ],
        "computed": true
      },
      "restore_trigger": {
        "type": "bool",
        "computed": true
      },
      "restored_from_vault_id": {
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
      "time_of_deletion": {
        "type": "string",
        "computed": true
      },
      "vault_id": {
        "type": "string",
        "required": true
      },
      "vault_type": {
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

export interface DataOciKmsVaultConfig extends TerraformMetaArguments {
  readonly vaultId: string;
}
export class DataOciKmsVaultRestoreFromFile extends ComplexComputedList {

  // content_length - computed: true, optional: false, required: true
  public get contentLength() {
    return this.getStringAttribute('content_length');
  }

  // content_md5 - computed: true, optional: false, required: true
  public get contentMd5() {
    return this.getStringAttribute('content_md5');
  }

  // restore_vault_from_file_details - computed: true, optional: false, required: true
  public get restoreVaultFromFileDetails() {
    return this.getStringAttribute('restore_vault_from_file_details');
  }
}
export class DataOciKmsVaultRestoreFromObjectStore extends ComplexComputedList {

  // bucket - computed: true, optional: false, required: true
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // destination - computed: true, optional: false, required: true
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // namespace - computed: true, optional: false, required: true
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // object - computed: true, optional: false, required: true
  public get object() {
    return this.getStringAttribute('object');
  }

  // uri - computed: true, optional: false, required: true
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

// Resource

export class DataOciKmsVault extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciKmsVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_kms_vault',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._vaultId = config.vaultId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // crypto_endpoint - computed: true, optional: false, required: true
  public get cryptoEndpoint() {
    return this.getStringAttribute('crypto_endpoint');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // management_endpoint - computed: true, optional: false, required: true
  public get managementEndpoint() {
    return this.getStringAttribute('management_endpoint');
  }

  // restore_from_file - computed: true, optional: false, required: true
  public restoreFromFile(index: string) {
    return new DataOciKmsVaultRestoreFromFile(this, 'restore_from_file', index);
  }

  // restore_from_object_store - computed: true, optional: false, required: true
  public restoreFromObjectStore(index: string) {
    return new DataOciKmsVaultRestoreFromObjectStore(this, 'restore_from_object_store', index);
  }

  // restore_trigger - computed: true, optional: false, required: true
  public get restoreTrigger() {
    return this.getBooleanAttribute('restore_trigger');
  }

  // restored_from_vault_id - computed: true, optional: false, required: true
  public get restoredFromVaultId() {
    return this.getStringAttribute('restored_from_vault_id');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_of_deletion - computed: true, optional: false, required: true
  public get timeOfDeletion() {
    return this.getStringAttribute('time_of_deletion');
  }

  // vault_id - computed: false, optional: false, required: true
  private _vaultId: string;
  public get vaultId() {
    return this._vaultId;
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }

  // vault_type - computed: true, optional: false, required: true
  public get vaultType() {
    return this.getStringAttribute('vault_type');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      vault_id: this._vaultId,
    };
  }
}
