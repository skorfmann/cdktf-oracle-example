// https://www.terraform.io/docs/providers/oci/r/data_oci_core_volume_backups.html
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
      "source_volume_backup_id": {
        "type": "string",
        "optional": true
      },
      "state": {
        "type": "string",
        "optional": true
      },
      "volume_backups": {
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
              "expiration_time": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "kms_key_id": "string",
              "size_in_gbs": "string",
              "size_in_mbs": "string",
              "source_details": [
                "list",
                [
                  "object",
                  {
                    "kms_key_id": "string",
                    "region": "string",
                    "volume_backup_id": "string"
                  }
                ]
              ],
              "source_type": "string",
              "source_volume_backup_id": "string",
              "state": "string",
              "system_tags": [
                "map",
                "string"
              ],
              "time_created": "string",
              "time_request_received": "string",
              "type": "string",
              "unique_size_in_gbs": "string",
              "unique_size_in_mbs": "string",
              "volume_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "volume_id": {
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

export interface DataOciCoreVolumeBackupsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly sourceVolumeBackupId?: string;
  readonly state?: string;
  readonly volumeId?: string;
  /** filter block */
  readonly filter?: DataOciCoreVolumeBackupsFilter[];
}
export class DataOciCoreVolumeBackupsVolumeBackupsSourceDetails extends ComplexComputedList {

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // region - computed: true, optional: false, required: true
  public get region() {
    return this.getStringAttribute('region');
  }

  // volume_backup_id - computed: true, optional: false, required: true
  public get volumeBackupId() {
    return this.getStringAttribute('volume_backup_id');
  }
}
export class DataOciCoreVolumeBackupsVolumeBackups extends ComplexComputedList {

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

  // expiration_time - computed: true, optional: false, required: true
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // size_in_gbs - computed: true, optional: false, required: true
  public get sizeInGbs() {
    return this.getStringAttribute('size_in_gbs');
  }

  // size_in_mbs - computed: true, optional: false, required: true
  public get sizeInMbs() {
    return this.getStringAttribute('size_in_mbs');
  }

  // source_details - computed: true, optional: false, required: true
  public get sourceDetails() {
    return 'not implemented' as any;
  }

  // source_type - computed: true, optional: false, required: true
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // source_volume_backup_id - computed: true, optional: false, required: true
  public get sourceVolumeBackupId() {
    return this.getStringAttribute('source_volume_backup_id');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: true
  public get systemTags() {
    return 'not implemented' as any;
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

  // volume_id - computed: true, optional: false, required: true
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
}
export interface DataOciCoreVolumeBackupsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreVolumeBackups extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreVolumeBackupsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_volume_backups',
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
    this._sourceVolumeBackupId = config.sourceVolumeBackupId;
    this._state = config.state;
    this._volumeId = config.volumeId;
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

  // source_volume_backup_id - computed: false, optional: true, required: false
  private _sourceVolumeBackupId?: string;
  public get sourceVolumeBackupId() {
    return this._sourceVolumeBackupId;
  }
  public set sourceVolumeBackupId(value: string | undefined) {
    this._sourceVolumeBackupId = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // volume_backups - computed: true, optional: false, required: true
  public volumeBackups(index: string) {
    return new DataOciCoreVolumeBackupsVolumeBackups(this, 'volume_backups', index);
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: string;
  public get volumeId() {
    return this._volumeId;
  }
  public set volumeId(value: string | undefined) {
    this._volumeId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreVolumeBackupsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreVolumeBackupsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      source_volume_backup_id: this._sourceVolumeBackupId,
      state: this._state,
      volume_id: this._volumeId,
      filter: this._filter,
    };
  }
}
