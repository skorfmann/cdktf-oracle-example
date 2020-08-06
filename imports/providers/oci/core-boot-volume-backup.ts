// https://www.terraform.io/docs/providers/oci/r/core_boot_volume_backup.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "boot_volume_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "optional": true,
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
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
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
        "optional": true,
        "computed": true
      },
      "unique_size_in_gbs": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "source_details": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "boot_volume_backup_id": {
              "type": "string",
              "required": true
            },
            "kms_key_id": {
              "type": "string",
              "optional": true
            },
            "region": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface CoreBootVolumeBackupConfig extends TerraformMetaArguments {
  readonly bootVolumeId?: string;
  readonly compartmentId?: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly type?: string;
  /** source_details block */
  readonly sourceDetails?: CoreBootVolumeBackupSourceDetails[];
  /** timeouts block */
  readonly timeouts?: CoreBootVolumeBackupTimeouts;
}
export interface CoreBootVolumeBackupSourceDetails {
  readonly bootVolumeBackupId: string;
  readonly kmsKeyId?: string;
  readonly region: string;
}
export interface CoreBootVolumeBackupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreBootVolumeBackup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreBootVolumeBackupConfig = {}) {
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
    this._bootVolumeId = config.bootVolumeId;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._type = config.type;
    this._sourceDetails = config.sourceDetails;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // boot_volume_id - computed: true, optional: true, required: false
  private _bootVolumeId?: string;
  public get bootVolumeId() {
    return this._bootVolumeId ?? this.getStringAttribute('boot_volume_id');
  }
  public set bootVolumeId(value: string | undefined) {
    this._bootVolumeId = value;
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string;
  public get compartmentId() {
    return this._compartmentId ?? this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string | undefined) {
    this._compartmentId = value;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // expiration_time - computed: true, optional: false, required: true
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // type - computed: true, optional: true, required: false
  private _type?: string;
  public get type() {
    return this._type ?? this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }

  // unique_size_in_gbs - computed: true, optional: false, required: true
  public get uniqueSizeInGbs() {
    return this.getStringAttribute('unique_size_in_gbs');
  }

  // source_details - computed: false, optional: true, required: false
  private _sourceDetails?: CoreBootVolumeBackupSourceDetails[];
  public get sourceDetails() {
    return this._sourceDetails;
  }
  public set sourceDetails(value: CoreBootVolumeBackupSourceDetails[] | undefined) {
    this._sourceDetails = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreBootVolumeBackupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreBootVolumeBackupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      boot_volume_id: this._bootVolumeId,
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      type: this._type,
      source_details: this._sourceDetails,
      timeouts: this._timeouts,
    };
  }
}
