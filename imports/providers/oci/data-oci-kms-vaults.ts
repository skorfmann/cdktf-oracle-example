// https://www.terraform.io/docs/providers/oci/r/data_oci_kms_vaults.html
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
      "vaults": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "crypto_endpoint": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "management_endpoint": "string",
              "restore_from_file": [
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
              "restored_from_vault_id": "string",
              "state": "string",
              "time_created": "string",
              "time_of_deletion": "string",
              "vault_type": "string"
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

export interface DataOciKmsVaultsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  /** filter block */
  readonly filter?: DataOciKmsVaultsFilter[];
}
export class DataOciKmsVaultsVaultsRestoreFromFile extends ComplexComputedList {

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
export class DataOciKmsVaultsVaultsRestoreFromObjectStore extends ComplexComputedList {

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
export class DataOciKmsVaultsVaults extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // crypto_endpoint - computed: true, optional: false, required: true
  public get cryptoEndpoint() {
    return this.getStringAttribute('crypto_endpoint');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
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

  // vault_type - computed: true, optional: false, required: true
  public get vaultType() {
    return this.getStringAttribute('vault_type');
  }
}
export interface DataOciKmsVaultsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciKmsVaults extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciKmsVaultsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_kms_vaults',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
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

  // vaults - computed: true, optional: false, required: true
  public vaults(index: string) {
    return new DataOciKmsVaultsVaults(this, 'vaults', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciKmsVaultsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciKmsVaultsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      filter: this._filter,
    };
  }
}
