// https://www.terraform.io/docs/providers/oci/r/data_oci_core_volume_group_backups.html
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
      "display_name": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "volume_group_backups": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
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
              "size_in_gbs": "string",
              "size_in_mbs": "string",
              "state": "string",
              "time_created": "string",
              "time_request_received": "string",
              "type": "string",
              "unique_size_in_gbs": "string",
              "unique_size_in_mbs": "string",
              "volume_backup_ids": [
                "list",
                "string"
              ],
              "volume_group_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "volume_group_id": {
        "type": "string",
        "optional": true
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

export interface DataOciCoreVolumeGroupBackupsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly volumeGroupId?: string;
  /** filter block */
  readonly filter?: DataOciCoreVolumeGroupBackupsFilter[];
}
export class DataOciCoreVolumeGroupBackupsVolumeGroupBackups extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // size_in_gbs - computed: true, optional: false, required: true
  public get sizeInGbs() {
    return this.getStringAttribute('size_in_gbs');
  }

  // size_in_mbs - computed: true, optional: false, required: true
  public get sizeInMbs() {
    return this.getStringAttribute('size_in_mbs');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_request_received - computed: true, optional: false, required: true
  public get timeRequestReceived() {
    return this.getStringAttribute('time_request_received');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // unique_size_in_gbs - computed: true, optional: false, required: true
  public get uniqueSizeInGbs() {
    return this.getStringAttribute('unique_size_in_gbs');
  }

  // unique_size_in_mbs - computed: true, optional: false, required: true
  public get uniqueSizeInMbs() {
    return this.getStringAttribute('unique_size_in_mbs');
  }

  // volume_backup_ids - computed: true, optional: false, required: true
  public get volumeBackupIds() {
    return this.getListAttribute('volume_backup_ids');
  }

  // volume_group_id - computed: true, optional: false, required: true
  public get volumeGroupId() {
    return this.getStringAttribute('volume_group_id');
  }
}
export interface DataOciCoreVolumeGroupBackupsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreVolumeGroupBackups extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreVolumeGroupBackupsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_volume_group_backups',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._volumeGroupId = config.volumeGroupId;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // volume_group_backups - computed: true, optional: false, required: true
  public volumeGroupBackups(index: string) {
    return new DataOciCoreVolumeGroupBackupsVolumeGroupBackups(this, 'volume_group_backups', index);
  }

  // volume_group_id - computed: false, optional: true, required: false
  private _volumeGroupId?: string;
  public get volumeGroupId() {
    return this._volumeGroupId;
  }
  public set volumeGroupId(value: string | undefined) {
    this._volumeGroupId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreVolumeGroupBackupsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreVolumeGroupBackupsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      volume_group_id: this._volumeGroupId,
      filter: this._filter,
    };
  }
}
