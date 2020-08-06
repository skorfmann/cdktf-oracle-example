// https://www.terraform.io/docs/providers/oci/r/data_oci_database_vm_cluster_patch_history_entry.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "action": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "patch_history_entry_id": {
        "type": "string",
        "required": true
      },
      "patch_id": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_ended": {
        "type": "string",
        "computed": true
      },
      "time_started": {
        "type": "string",
        "computed": true
      },
      "vm_cluster_id": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataOciDatabaseVmClusterPatchHistoryEntryConfig extends TerraformMetaArguments {
  readonly patchHistoryEntryId: string;
  readonly vmClusterId: string;
}

// Resource

export class DataOciDatabaseVmClusterPatchHistoryEntry extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseVmClusterPatchHistoryEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_vm_cluster_patch_history_entry',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._patchHistoryEntryId = config.patchHistoryEntryId;
    this._vmClusterId = config.vmClusterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: true
  public get action() {
    return this.getStringAttribute('action');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // patch_history_entry_id - computed: false, optional: false, required: true
  private _patchHistoryEntryId: string;
  public get patchHistoryEntryId() {
    return this._patchHistoryEntryId;
  }
  public set patchHistoryEntryId(value: string) {
    this._patchHistoryEntryId = value;
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

  // vm_cluster_id - computed: false, optional: false, required: true
  private _vmClusterId: string;
  public get vmClusterId() {
    return this._vmClusterId;
  }
  public set vmClusterId(value: string) {
    this._vmClusterId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      patch_history_entry_id: this._patchHistoryEntryId,
      vm_cluster_id: this._vmClusterId,
    };
  }
}
