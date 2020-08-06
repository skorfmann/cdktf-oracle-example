// https://www.terraform.io/docs/providers/oci/r/kms_key.html
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
      "current_key_version": {
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
      "desired_state": {
        "type": "string",
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
        "required": true
      },
      "restore_trigger": {
        "type": "bool",
        "optional": true
      },
      "restored_from_key_id": {
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
      "vault_id": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "key_shape": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "algorithm": {
              "type": "string",
              "required": true
            },
            "length": {
              "type": "number",
              "required": true
            }
          }
        },
        "min_items": 1,
        "max_items": 1
      },
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
            "restore_key_from_file_details": {
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

export interface KmsKeyConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly desiredState?: string;
  readonly displayName: string;
  readonly freeformTags?: { [key: string]: string };
  readonly managementEndpoint: string;
  readonly restoreTrigger?: boolean;
  readonly timeOfDeletion?: string;
  /** key_shape block */
  readonly keyShape: KmsKeyKeyShape[];
  /** restore_from_file block */
  readonly restoreFromFile?: KmsKeyRestoreFromFile[];
  /** restore_from_object_store block */
  readonly restoreFromObjectStore?: KmsKeyRestoreFromObjectStore[];
  /** timeouts block */
  readonly timeouts?: KmsKeyTimeouts;
}
export interface KmsKeyKeyShape {
  readonly algorithm: string;
  readonly length: number;
}
export interface KmsKeyRestoreFromFile {
  readonly contentLength: string;
  readonly contentMd5?: string;
  readonly restoreKeyFromFileDetails: string;
}
export interface KmsKeyRestoreFromObjectStore {
  readonly bucket?: string;
  readonly destination: string;
  readonly namespace?: string;
  readonly object?: string;
  readonly uri?: string;
}
export interface KmsKeyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class KmsKey extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KmsKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_kms_key',
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
    this._desiredState = config.desiredState;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._managementEndpoint = config.managementEndpoint;
    this._restoreTrigger = config.restoreTrigger;
    this._timeOfDeletion = config.timeOfDeletion;
    this._keyShape = config.keyShape;
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

  // current_key_version - computed: true, optional: false, required: true
  public get currentKeyVersion() {
    return this.getStringAttribute('current_key_version');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // desired_state - computed: true, optional: true, required: false
  private _desiredState?: string;
  public get desiredState() {
    return this._desiredState ?? this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string | undefined) {
    this._desiredState = value;
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

  // management_endpoint - computed: false, optional: false, required: true
  private _managementEndpoint: string;
  public get managementEndpoint() {
    return this._managementEndpoint;
  }
  public set managementEndpoint(value: string) {
    this._managementEndpoint = value;
  }

  // restore_trigger - computed: false, optional: true, required: false
  private _restoreTrigger?: boolean;
  public get restoreTrigger() {
    return this._restoreTrigger;
  }
  public set restoreTrigger(value: boolean | undefined) {
    this._restoreTrigger = value;
  }

  // restored_from_key_id - computed: true, optional: false, required: true
  public get restoredFromKeyId() {
    return this.getStringAttribute('restored_from_key_id');
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

  // vault_id - computed: true, optional: false, required: true
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }

  // key_shape - computed: false, optional: false, required: true
  private _keyShape: KmsKeyKeyShape[];
  public get keyShape() {
    return this._keyShape;
  }
  public set keyShape(value: KmsKeyKeyShape[]) {
    this._keyShape = value;
  }

  // restore_from_file - computed: false, optional: true, required: false
  private _restoreFromFile?: KmsKeyRestoreFromFile[];
  public get restoreFromFile() {
    return this._restoreFromFile;
  }
  public set restoreFromFile(value: KmsKeyRestoreFromFile[] | undefined) {
    this._restoreFromFile = value;
  }

  // restore_from_object_store - computed: false, optional: true, required: false
  private _restoreFromObjectStore?: KmsKeyRestoreFromObjectStore[];
  public get restoreFromObjectStore() {
    return this._restoreFromObjectStore;
  }
  public set restoreFromObjectStore(value: KmsKeyRestoreFromObjectStore[] | undefined) {
    this._restoreFromObjectStore = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KmsKeyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: KmsKeyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      desired_state: this._desiredState,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      management_endpoint: this._managementEndpoint,
      restore_trigger: this._restoreTrigger,
      time_of_deletion: this._timeOfDeletion,
      key_shape: this._keyShape,
      restore_from_file: this._restoreFromFile,
      restore_from_object_store: this._restoreFromObjectStore,
      timeouts: this._timeouts,
    };
  }
}
