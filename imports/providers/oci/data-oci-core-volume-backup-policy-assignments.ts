// https://www.terraform.io/docs/providers/oci/r/data_oci_core_volume_backup_policy_assignments.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "asset_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "volume_backup_policy_assignments": {
        "type": [
          "list",
          [
            "object",
            {
              "asset_id": "string",
              "id": "string",
              "policy_id": "string",
              "time_created": "string"
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

export interface DataOciCoreVolumeBackupPolicyAssignmentsConfig extends TerraformMetaArguments {
  readonly assetId: string;
  /** filter block */
  readonly filter?: DataOciCoreVolumeBackupPolicyAssignmentsFilter[];
}
export class DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments extends ComplexComputedList {

  // asset_id - computed: true, optional: false, required: true
  public get assetId() {
    return this.getStringAttribute('asset_id');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_id - computed: true, optional: false, required: true
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export interface DataOciCoreVolumeBackupPolicyAssignmentsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreVolumeBackupPolicyAssignments extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreVolumeBackupPolicyAssignmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_volume_backup_policy_assignments',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._assetId = config.assetId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_id - computed: false, optional: false, required: true
  private _assetId: string;
  public get assetId() {
    return this._assetId;
  }
  public set assetId(value: string) {
    this._assetId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // volume_backup_policy_assignments - computed: true, optional: false, required: true
  public volumeBackupPolicyAssignments(index: string) {
    return new DataOciCoreVolumeBackupPolicyAssignmentsVolumeBackupPolicyAssignments(this, 'volume_backup_policy_assignments', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreVolumeBackupPolicyAssignmentsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreVolumeBackupPolicyAssignmentsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      asset_id: this._assetId,
      filter: this._filter,
    };
  }
}
