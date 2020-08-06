// https://www.terraform.io/docs/providers/oci/r/data_oci_core_boot_volume_backup.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "boot_volume_backup_id": {
        "type": "string",
        "required": true
      },
      "boot_volume_id": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "expiration_time": {
        "type": "string",
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "image_id": {
        "type": "string",
        "computed": true
      },
      "kms_key_id": {
        "type": "string",
        "computed": true
      },
      "size_in_gbs": {
        "type": "string",
        "computed": true
      },
      "source_boot_volume_backup_id": {
        "type": "string",
        "computed": true
      },
      "source_details": {
        "type": [
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
        "computed": true
      },
      "source_type": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "system_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_request_received": {
        "type": "string",
        "computed": true
      },
      "type": {
        "type": "string",
        "computed": true
      },
      "unique_size_in_gbs": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciCoreBootVolumeBackupConfig extends TerraformMetaArguments {
  readonly bootVolumeBackupId: string;
}
export class DataOciCoreBootVolumeBackupSourceDetails extends ComplexComputedList {

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

// Resource

export class DataOciCoreBootVolumeBackup extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreBootVolumeBackupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_boot_volume_backup',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bootVolumeBackupId = config.bootVolumeBackupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // boot_volume_backup_id - computed: false, optional: false, required: true
  private _bootVolumeBackupId: string;
  public get bootVolumeBackupId() {
    return this._bootVolumeBackupId;
  }
  public set bootVolumeBackupId(value: string) {
    this._bootVolumeBackupId = value;
  }

  // boot_volume_id - computed: true, optional: false, required: true
  public get bootVolumeId() {
    return this.getStringAttribute('boot_volume_id');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
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
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
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
  public sourceDetails(index: string) {
    return new DataOciCoreBootVolumeBackupSourceDetails(this, 'source_details', index);
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
  public systemTags(key: string): string {
    return new StringMap(this, 'system_tags').lookup(key);
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      boot_volume_backup_id: this._bootVolumeBackupId,
    };
  }
}
