// https://www.terraform.io/docs/providers/oci/r/data_oci_database_vm_cluster_patch.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "available_actions": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "last_action": {
        "type": "string",
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "patch_id": {
        "type": "string",
        "required": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_released": {
        "type": "string",
        "computed": true
      },
      "version": {
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

export interface DataOciDatabaseVmClusterPatchConfig extends TerraformMetaArguments {
  readonly patchId: string;
  readonly vmClusterId: string;
}

// Resource

export class DataOciDatabaseVmClusterPatch extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseVmClusterPatchConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_vm_cluster_patch',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._patchId = config.patchId;
    this._vmClusterId = config.vmClusterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_actions - computed: true, optional: false, required: true
  public get availableActions() {
    return this.getListAttribute('available_actions');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_action - computed: true, optional: false, required: true
  public get lastAction() {
    return this.getStringAttribute('last_action');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // patch_id - computed: false, optional: false, required: true
  private _patchId: string;
  public get patchId() {
    return this._patchId;
  }
  public set patchId(value: string) {
    this._patchId = value;
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
      patch_id: this._patchId,
      vm_cluster_id: this._vmClusterId,
    };
  }
}
