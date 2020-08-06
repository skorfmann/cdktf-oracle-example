// https://www.terraform.io/docs/providers/oci/r/core_volume_backup_policy.html
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
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "destination_region": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "optional": true,
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
      "time_created": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "schedules": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "backup_type": {
              "type": "string",
              "required": true
            },
            "day_of_month": {
              "type": "number",
              "optional": true
            },
            "day_of_week": {
              "type": "string",
              "optional": true
            },
            "hour_of_day": {
              "type": "number",
              "optional": true
            },
            "month": {
              "type": "string",
              "optional": true
            },
            "offset_seconds": {
              "type": "number",
              "optional": true
            },
            "offset_type": {
              "type": "string",
              "optional": true
            },
            "period": {
              "type": "string",
              "required": true
            },
            "retention_seconds": {
              "type": "number",
              "required": true
            },
            "time_zone": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        }
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

// Configuration

export interface CoreVolumeBackupPolicyConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly destinationRegion?: string;
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  /** schedules block */
  readonly schedules?: CoreVolumeBackupPolicySchedules[];
  /** timeouts block */
  readonly timeouts?: CoreVolumeBackupPolicyTimeouts;
}
export interface CoreVolumeBackupPolicySchedules {
  readonly backupType: string;
  readonly dayOfMonth?: number;
  readonly dayOfWeek?: string;
  readonly hourOfDay?: number;
  readonly month?: string;
  readonly offsetSeconds?: number;
  readonly offsetType?: string;
  readonly period: string;
  readonly retentionSeconds: number;
  readonly timeZone?: string;
}
export interface CoreVolumeBackupPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreVolumeBackupPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreVolumeBackupPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_volume_backup_policy',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._destinationRegion = config.destinationRegion;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._schedules = config.schedules;
    this._timeouts = config.timeouts;
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

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // destination_region - computed: true, optional: true, required: false
  private _destinationRegion?: string;
  public get destinationRegion() {
    return this._destinationRegion ?? this.getStringAttribute('destination_region');
  }
  public set destinationRegion(value: string | undefined) {
    this._destinationRegion = value;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
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

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // schedules - computed: false, optional: true, required: false
  private _schedules?: CoreVolumeBackupPolicySchedules[];
  public get schedules() {
    return this._schedules;
  }
  public set schedules(value: CoreVolumeBackupPolicySchedules[] | undefined) {
    this._schedules = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreVolumeBackupPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreVolumeBackupPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      destination_region: this._destinationRegion,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      schedules: this._schedules,
      timeouts: this._timeouts,
    };
  }
}
