// https://www.terraform.io/docs/providers/oci/r/kms_vault.html
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
      "crypto_endpoint": {
        "type": "string",
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
      "display_name": {
        "type": "string",
        "required": true
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
      "management_endpoint": {
        "type": "string",
        "computed": true
      },
      "restore_trigger": {
        "type": "bool",
        "optional": true
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
        "optional": true,
        "computed": true
      },
      "vault_type": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "restore_from_file": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "content_length": {
              "type": "string",
              "required": true
            },
            "content_md5": {
              "type": "string",
              "optional": true
            },
            "restore_vault_from_file_details": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "restore_from_object_store": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "bucket": {
              "type": "string",
              "optional": true
            },
            "destination": {
              "type": "string",
              "required": true
            },
            "namespace": {
              "type": "string",
              "optional": true
            },
            "object": {
              "type": "string",
              "optional": true
            },
            "uri": {
              "type": "string",
              "optional": true
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

export interface KmsVaultConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName: string;
  readonly freeformTags?: { [key: string]: string };
  readonly restoreTrigger?: boolean;
  readonly timeOfDeletion?: string;
  readonly vaultType: string;
  /** restore_from_file block */
  readonly restoreFromFile?: KmsVaultRestoreFromFile[];
  /** restore_from_object_store block */
  readonly restoreFromObjectStore?: KmsVaultRestoreFromObjectStore[];
  /** timeouts block */
  readonly timeouts?: KmsVaultTimeouts;
}
export interface KmsVaultRestoreFromFile {
  readonly contentLength: string;
  readonly contentMd5?: string;
  readonly restoreVaultFromFileDetails: string;
}
export interface KmsVaultRestoreFromObjectStore {
  readonly bucket?: string;
  readonly destination: string;
  readonly namespace?: string;
  readonly object?: string;
  readonly uri?: string;
}
export interface KmsVaultTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class KmsVault extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KmsVaultConfig) {
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
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._restoreTrigger = config.restoreTrigger;
    this._timeOfDeletion = config.timeOfDeletion;
    this._vaultType = config.vaultType;
    this._restoreFromFile = config.restoreFromFile;
    this._restoreFromObjectStore = config.restoreFromObjectStore;
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

  // crypto_endpoint - computed: true, optional: false, required: true
  public get cryptoEndpoint() {
    return this.getStringAttribute('crypto_endpoint');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
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

  // management_endpoint - computed: true, optional: false, required: true
  public get managementEndpoint() {
    return this.getStringAttribute('management_endpoint');
  }

  // restore_trigger - computed: false, optional: true, required: false
  private _restoreTrigger?: boolean;
  public get restoreTrigger() {
    return this._restoreTrigger;
  }
  public set restoreTrigger(value: boolean | undefined) {
    this._restoreTrigger = value;
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

  // time_of_deletion - computed: true, optional: true, required: false
  private _timeOfDeletion?: string;
  public get timeOfDeletion() {
    return this._timeOfDeletion ?? this.getStringAttribute('time_of_deletion');
  }
  public set timeOfDeletion(value: string | undefined) {
    this._timeOfDeletion = value;
  }

  // vault_type - computed: false, optional: false, required: true
  private _vaultType: string;
  public get vaultType() {
    return this._vaultType;
  }
  public set vaultType(value: string) {
    this._vaultType = value;
  }

  // restore_from_file - computed: false, optional: true, required: false
  private _restoreFromFile?: KmsVaultRestoreFromFile[];
  public get restoreFromFile() {
    return this._restoreFromFile;
  }
  public set restoreFromFile(value: KmsVaultRestoreFromFile[] | undefined) {
    this._restoreFromFile = value;
  }

  // restore_from_object_store - computed: false, optional: true, required: false
  private _restoreFromObjectStore?: KmsVaultRestoreFromObjectStore[];
  public get restoreFromObjectStore() {
    return this._restoreFromObjectStore;
  }
  public set restoreFromObjectStore(value: KmsVaultRestoreFromObjectStore[] | undefined) {
    this._restoreFromObjectStore = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KmsVaultTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: KmsVaultTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      restore_trigger: this._restoreTrigger,
      time_of_deletion: this._timeOfDeletion,
      vault_type: this._vaultType,
      restore_from_file: this._restoreFromFile,
      restore_from_object_store: this._restoreFromObjectStore,
      timeouts: this._timeouts,
    };
  }
}
