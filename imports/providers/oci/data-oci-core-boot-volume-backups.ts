// https://www.terraform.io/docs/providers/oci/r/data_oci_core_boot_volume_backups.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "boot_volume_backups": {
        "type": [
          "list",
          [
            "object",
            {
              "boot_volume_id": "string",
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
              "image_id": "string",
              "kms_key_id": "string",
              "size_in_gbs": "string",
              "source_boot_volume_backup_id": "string",
              "source_details": [
                "list",
                [
                  "object",
                  {
                    "boot_volume_backup_id": "string",
                    "kms_key_id": "string",
                    "region": "string"
                  }
                ]
              ],
              "source_type": "string",
              "state": "string",
              "system_tags": [
                "map",
                "string"
              ],
              "time_created": "string",
              "time_request_received": "string",
              "type": "string",
              "unique_size_in_gbs": "string"
            }
          ]
        ],
        "computed": true
      },
      "boot_volume_id": {
        "type": "string",
        "optional": true
      },
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
      "source_boot_volume_backup_id": {
        "type": "string",
        "optional": true
      },
      "state": {
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

export interface DataOciCoreBootVolumeBackupsConfig extends TerraformMetaArguments {
  readonly bootVolumeId?: string;
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly sourceBootVolumeBackupId?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciCoreBootVolumeBackupsFilter[];
}
export class DataOciCoreBootVolumeBackupsBootVolumeBackupsSourceDetails extends ComplexComputedList {

  // boot_volume_backup_id - computed: true, optional: false, required: true
  public get bootVolumeBackupId() {
    return this.getStringAttribute('boot_volume_backup_id');
  }

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // region - computed: true, optional: false, required: true
  public get region() {
    return this.getStringAttribute('region');
  }
}
export class DataOciCoreBootVolumeBackupsBootVolumeBackups extends ComplexComputedList {

  // boot_volume_id - computed: true, optional: false, required: true
  public get bootVolumeId() {
    return this.getStringAttribute('boot_volume_id');
  }

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

  // image_id - computed: true, optional: false, required: true
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // size_in_gbs - computed: true, optional: false, required: true
  public get sizeInGbs() {
    return this.getStringAttribute('size_in_gbs');
  }

  // source_boot_volume_backup_id - computed: true, optional: false, required: true
  public get sourceBootVolumeBackupId() {
    return this.getStringAttribute('source_boot_volume_backup_id');
  }

  // source_details - computed: true, optional: false, required: true
  public get sourceDetails() {
    return 'not implemented' as any;
  }

  // source_type - computed: true, optional: false, required: true
  public get sourceType() {
    return this.getStringAttribute('source_type');
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
}
export interface DataOciCoreBootVolumeBackupsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreBootVolumeBackups extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreBootVolumeBackupsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_boot_volume_backups',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bootVolumeId = config.bootVolumeId;
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._sourceBootVolumeBackupId = config.sourceBootVolumeBackupId;
    this._state = config.state;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // boot_volume_backups - computed: true, optional: false, required: true
  public bootVolumeBackups(index: string) {
    return new DataOciCoreBootVolumeBackupsBootVolumeBackups(this, 'boot_volume_backups', index);
  }

  // boot_volume_id - computed: false, optional: true, required: false
  private _bootVolumeId?: string;
  public get bootVolumeId() {
    return this._bootVolumeId;
  }
  public set bootVolumeId(value: string | undefined) {
    this._bootVolumeId = value;
  }

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

  // source_boot_volume_backup_id - computed: false, optional: true, required: false
  private _sourceBootVolumeBackupId?: string;
  public get sourceBootVolumeBackupId() {
    return this._sourceBootVolumeBackupId;
  }
  public set sourceBootVolumeBackupId(value: string | undefined) {
    this._sourceBootVolumeBackupId = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreBootVolumeBackupsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreBootVolumeBackupsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      boot_volume_id: this._bootVolumeId,
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      source_boot_volume_backup_id: this._sourceBootVolumeBackupId,
      state: this._state,
      filter: this._filter,
    };
  }
}
