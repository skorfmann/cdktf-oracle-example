// https://www.terraform.io/docs/providers/oci/r/data_oci_database_vm_cluster_patches.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "patches": {
        "type": [
          "list",
          [
            "object",
            {
              "available_actions": [
                "list",
                "string"
              ],
              "description": "string",
              "id": "string",
              "last_action": "string",
              "lifecycle_details": "string",
              "state": "string",
              "time_released": "string",
              "version": "string"
            }
          ]
        ],
        "computed": true
      },
      "vm_cluster_id": {
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

export interface DataOciDatabaseVmClusterPatchesConfig extends TerraformMetaArguments {
  readonly vmClusterId: string;
  /** filter block */
  readonly filter?: DataOciDatabaseVmClusterPatchesFilter[];
}
export class DataOciDatabaseVmClusterPatchesPatches extends ComplexComputedList {

  // available_actions - computed: true, optional: false, required: true
  public get availableActions() {
    return this.getListAttribute('available_actions');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_action - computed: true, optional: false, required: true
  public get lastAction() {
    return this.getStringAttribute('last_action');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_released - computed: true, optional: false, required: true
  public get timeReleased() {
    return this.getStringAttribute('time_released');
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataOciDatabaseVmClusterPatchesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseVmClusterPatches extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseVmClusterPatchesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_vm_cluster_patches',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._vmClusterId = config.vmClusterId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // patches - computed: true, optional: false, required: true
  public patches(index: string) {
    return new DataOciDatabaseVmClusterPatchesPatches(this, 'patches', index);
  }

  // vm_cluster_id - computed: false, optional: false, required: true
  private _vmClusterId: string;
  public get vmClusterId() {
    return this._vmClusterId;
  }
  public set vmClusterId(value: string) {
    this._vmClusterId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDatabaseVmClusterPatchesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseVmClusterPatchesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      vm_cluster_id: this._vmClusterId,
      filter: this._filter,
    };
  }
}
