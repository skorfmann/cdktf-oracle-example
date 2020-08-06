// https://www.terraform.io/docs/providers/oci/r/data_oci_kms_keys.html
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
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "keys": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "current_key_version": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "desired_state": "string",
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "key_shape": [
                "list",
                [
                  "object",
                  {
                    "algorithm": "string",
                    "length": "number"
                  }
                ]
              ],
              "management_endpoint": "string",
              "restore_from_file": [
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
              "restore_from_object_store": [
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
              "restore_trigger": "bool",
              "restored_from_key_id": "string",
              "state": "string",
              "time_created": "string",
              "time_of_deletion": "string",
              "vault_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "management_endpoint": {
        "type": "string",
        "required": true
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

export interface DataOciKmsKeysConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly managementEndpoint: string;
  /** filter block */
  readonly filter?: DataOciKmsKeysFilter[];
}
export class DataOciKmsKeysKeysKeyShape extends ComplexComputedList {

  // algorithm - computed: true, optional: false, required: true
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // length - computed: true, optional: false, required: true
  public get length() {
    return this.getNumberAttribute('length');
  }
}
export class DataOciKmsKeysKeysRestoreFromFile extends ComplexComputedList {

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
export class DataOciKmsKeysKeysRestoreFromObjectStore extends ComplexComputedList {

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
export class DataOciKmsKeysKeys extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // current_key_version - computed: true, optional: false, required: true
  public get currentKeyVersion() {
    return this.getStringAttribute('current_key_version');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
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
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_shape - computed: true, optional: false, required: true
  public get keyShape() {
    return 'not implemented' as any;
  }

  // management_endpoint - computed: true, optional: false, required: true
  public get managementEndpoint() {
    return this.getStringAttribute('management_endpoint');
  }

  // restore_from_file - computed: true, optional: false, required: true
  public get restoreFromFile() {
    return 'not implemented' as any;
  }

  // restore_from_object_store - computed: true, optional: false, required: true
  public get restoreFromObjectStore() {
    return 'not implemented' as any;
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
}
export interface DataOciKmsKeysFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciKmsKeys extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciKmsKeysConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_kms_keys',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._managementEndpoint = config.managementEndpoint;
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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // keys - computed: true, optional: false, required: true
  public keys(index: string) {
    return new DataOciKmsKeysKeys(this, 'keys', index);
  }

  // management_endpoint - computed: false, optional: false, required: true
  private _managementEndpoint: string;
  public get managementEndpoint() {
    return this._managementEndpoint;
  }
  public set managementEndpoint(value: string) {
    this._managementEndpoint = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciKmsKeysFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciKmsKeysFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      management_endpoint: this._managementEndpoint,
      filter: this._filter,
    };
  }
}
