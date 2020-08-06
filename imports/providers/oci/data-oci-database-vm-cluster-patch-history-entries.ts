// https://www.terraform.io/docs/providers/oci/r/data_oci_database_vm_cluster_patch_history_entries.html
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
      "patch_history_entries": {
        "type": [
          "list",
          [
            "object",
            {
              "action": "string",
              "id": "string",
              "lifecycle_details": "string",
              "patch_id": "string",
              "state": "string",
              "time_ended": "string",
              "time_started": "string"
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

export interface DataOciDatabaseVmClusterPatchHistoryEntriesConfig extends TerraformMetaArguments {
  readonly vmClusterId: string;
  /** filter block */
  readonly filter?: DataOciDatabaseVmClusterPatchHistoryEntriesFilter[];
}
export class DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntries extends ComplexComputedList {

  // action - computed: true, optional: false, required: true
  public get action() {
    return this.getStringAttribute('action');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // patch_id - computed: true, optional: false, required: true
  public get patchId() {
    return this.getStringAttribute('patch_id');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_ended - computed: true, optional: false, required: true
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }

  // time_started - computed: true, optional: false, required: true
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }
}
export interface DataOciDatabaseVmClusterPatchHistoryEntriesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseVmClusterPatchHistoryEntries extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseVmClusterPatchHistoryEntriesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_vm_cluster_patch_history_entries',
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

  // patch_history_entries - computed: true, optional: false, required: true
  public patchHistoryEntries(index: string) {
    return new DataOciDatabaseVmClusterPatchHistoryEntriesPatchHistoryEntries(this, 'patch_history_entries', index);
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
  private _filter?: DataOciDatabaseVmClusterPatchHistoryEntriesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseVmClusterPatchHistoryEntriesFilter[] | undefined) {
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
