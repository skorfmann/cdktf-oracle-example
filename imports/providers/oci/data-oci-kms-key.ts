// https://www.terraform.io/docs/providers/oci/r/data_oci_kms_key.html
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
      "current_key_version": {
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
      "desired_state": {
        "type": "string",
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
      "key_id": {
        "type": "string",
        "required": true
      },
      "key_shape": {
        "type": [
          "list",
          [
            "object",
            {
              "algorithm": "string",
              "length": "number"
            }
          ]
        ],
        "computed": true
      },
      "management_endpoint": {
        "type": "string",
        "required": true
      },
      "restore_from_file": {
        "type": [
          "list",
          [
            "object",
            {
              "content_length": "string",
              "content_md5": "string",
              "restore_key_from_file_details": "string"
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

export interface DataOciKmsKeyConfig extends TerraformMetaArguments {
  readonly keyId: string;
  readonly managementEndpoint: string;
}
export class DataOciKmsKeyKeyShape extends ComplexComputedList {

  // algorithm - computed: true, optional: false, required: true
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // length - computed: true, optional: false, required: true
  public get length() {
    return this.getNumberAttribute('length');
  }
}
export class DataOciKmsKeyRestoreFromFile extends ComplexComputedList {

  // content_length - computed: true, optional: false, required: true
  public get contentLength() {
    return this.getStringAttribute('content_length');
  }

  // content_md5 - computed: true, optional: false, required: true
  public get contentMd5() {
    return this.getStringAttribute('content_md5');
  }

  // restore_key_from_file_details - computed: true, optional: false, required: true
  public get restoreKeyFromFileDetails() {
    return this.getStringAttribute('restore_key_from_file_details');
  }
}
export class DataOciKmsKeyRestoreFromObjectStore extends ComplexComputedList {

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

export class DataOciKmsKey extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciKmsKeyConfig) {
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
    this._keyId = config.keyId;
    this._managementEndpoint = config.managementEndpoint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // current_key_version - computed: true, optional: false, required: true
  public get currentKeyVersion() {
    return this.getStringAttribute('current_key_version');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // desired_state - computed: true, optional: false, required: true
  public get desiredState() {
    return this.getStringAttribute('desired_state');
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

  // key_id - computed: false, optional: false, required: true
  private _keyId: string;
  public get keyId() {
    return this._keyId;
  }
  public set keyId(value: string) {
    this._keyId = value;
  }

  // key_shape - computed: true, optional: false, required: true
  public keyShape(index: string) {
    return new DataOciKmsKeyKeyShape(this, 'key_shape', index);
  }

  // management_endpoint - computed: false, optional: false, required: true
  private _managementEndpoint: string;
  public get managementEndpoint() {
    return this._managementEndpoint;
  }
  public set managementEndpoint(value: string) {
    this._managementEndpoint = value;
  }

  // restore_from_file - computed: true, optional: false, required: true
  public restoreFromFile(index: string) {
    return new DataOciKmsKeyRestoreFromFile(this, 'restore_from_file', index);
  }

  // restore_from_object_store - computed: true, optional: false, required: true
  public restoreFromObjectStore(index: string) {
    return new DataOciKmsKeyRestoreFromObjectStore(this, 'restore_from_object_store', index);
  }

  // restore_trigger - computed: true, optional: false, required: true
  public get restoreTrigger() {
    return this.getBooleanAttribute('restore_trigger');
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
      key_id: this._keyId,
      management_endpoint: this._managementEndpoint,
    };
  }
}
