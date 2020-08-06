// https://www.terraform.io/docs/providers/oci/r/data_oci_core_volume_backup_policies.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "volume_backup_policies": {
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
              "destination_region": "string",
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "schedules": [
                "list",
                [
                  "object",
                  {
                    "backup_type": "string",
                    "day_of_month": "number",
                    "day_of_week": "string",
                    "hour_of_day": "number",
                    "month": "string",
                    "offset_seconds": "number",
                    "offset_type": "string",
                    "period": "string",
                    "retention_seconds": "number",
                    "time_zone": "string"
                  }
                ]
              ],
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

export interface DataOciCoreVolumeBackupPoliciesConfig extends TerraformMetaArguments {
  readonly compartmentId?: string;
  /** filter block */
  readonly filter?: DataOciCoreVolumeBackupPoliciesFilter[];
}
export class DataOciCoreVolumeBackupPoliciesVolumeBackupPoliciesSchedules extends ComplexComputedList {

  // backup_type - computed: true, optional: false, required: true
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }

  // day_of_month - computed: true, optional: false, required: true
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }

  // day_of_week - computed: true, optional: false, required: true
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }

  // hour_of_day - computed: true, optional: false, required: true
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }

  // month - computed: true, optional: false, required: true
  public get month() {
    return this.getStringAttribute('month');
  }

  // offset_seconds - computed: true, optional: false, required: true
  public get offsetSeconds() {
    return this.getNumberAttribute('offset_seconds');
  }

  // offset_type - computed: true, optional: false, required: true
  public get offsetType() {
    return this.getStringAttribute('offset_type');
  }

  // period - computed: true, optional: false, required: true
  public get period() {
    return this.getStringAttribute('period');
  }

  // retention_seconds - computed: true, optional: false, required: true
  public get retentionSeconds() {
    return this.getNumberAttribute('retention_seconds');
  }

  // time_zone - computed: true, optional: false, required: true
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
}
export class DataOciCoreVolumeBackupPoliciesVolumeBackupPolicies extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // destination_region - computed: true, optional: false, required: true
  public get destinationRegion() {
    return this.getStringAttribute('destination_region');
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

  // schedules - computed: true, optional: false, required: true
  public get schedules() {
    return 'not implemented' as any;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export interface DataOciCoreVolumeBackupPoliciesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreVolumeBackupPolicies extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreVolumeBackupPoliciesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_core_volume_backup_policies',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string | undefined) {
    this._compartmentId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // volume_backup_policies - computed: true, optional: false, required: true
  public volumeBackupPolicies(index: string) {
    return new DataOciCoreVolumeBackupPoliciesVolumeBackupPolicies(this, 'volume_backup_policies', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreVolumeBackupPoliciesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreVolumeBackupPoliciesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      filter: this._filter,
    };
  }
}
