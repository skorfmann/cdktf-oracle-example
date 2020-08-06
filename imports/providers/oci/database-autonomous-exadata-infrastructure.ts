// https://www.terraform.io/docs/providers/oci/r/database_autonomous_exadata_infrastructure.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "availability_domain": {
        "type": "string",
        "required": true
      },
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
      "display_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "domain": {
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
      "hostname": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "last_maintenance_run_id": {
        "type": "string",
        "computed": true
      },
      "license_model": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "maintenance_window": {
        "type": [
          "list",
          [
            "object",
            {
              "days_of_week": [
                "list",
                [
                  "object",
                  {
                    "name": "string"
                  }
                ]
              ],
              "hours_of_day": [
                "list",
                "number"
              ],
              "lead_time_in_weeks": "number",
              "months": [
                "list",
                [
                  "object",
                  {
                    "name": "string"
                  }
                ]
              ],
              "preference": "string",
              "weeks_of_month": [
                "list",
                "number"
              ]
            }
          ]
        ],
        "computed": true
      },
      "next_maintenance_run_id": {
        "type": "string",
        "computed": true
      },
      "nsg_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "shape": {
        "type": "string",
        "required": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "subnet_id": {
        "type": "string",
        "required": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "maintenance_window_details": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "hours_of_day": {
              "type": [
                "list",
                "number"
              ],
              "optional": true,
              "computed": true
            },
            "lead_time_in_weeks": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "preference": {
              "type": "string",
              "required": true
            },
            "weeks_of_month": {
              "type": [
                "list",
                "number"
              ],
              "optional": true,
              "computed": true
            }
          },
          "block_types": {
            "days_of_week": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "name": {
                    "type": "string",
                    "required": true
                  }
                }
              }
            },
            "months": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "name": {
                    "type": "string",
                    "required": true
                  }
                }
              }
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DatabaseAutonomousExadataInfrastructureConfig extends TerraformMetaArguments {
  readonly availabilityDomain: string;
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly domain?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly licenseModel?: string;
  readonly nsgIds?: string[];
  readonly shape: string;
  readonly subnetId: string;
  /** maintenance_window_details block */
  readonly maintenanceWindowDetails?: DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails[];
  /** timeouts block */
  readonly timeouts?: DatabaseAutonomousExadataInfrastructureTimeouts;
}
export class DatabaseAutonomousExadataInfrastructureMaintenanceWindowDaysOfWeek extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DatabaseAutonomousExadataInfrastructureMaintenanceWindowMonths extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DatabaseAutonomousExadataInfrastructureMaintenanceWindow extends ComplexComputedList {

  // days_of_week - computed: true, optional: false, required: true
  public get daysOfWeek() {
    return 'not implemented' as any;
  }

  // hours_of_day - computed: true, optional: false, required: true
  public get hoursOfDay() {
    return 'not implemented' as any;
  }

  // lead_time_in_weeks - computed: true, optional: false, required: true
  public get leadTimeInWeeks() {
    return this.getNumberAttribute('lead_time_in_weeks');
  }

  // months - computed: true, optional: false, required: true
  public get months() {
    return 'not implemented' as any;
  }

  // preference - computed: true, optional: false, required: true
  public get preference() {
    return this.getStringAttribute('preference');
  }

  // weeks_of_month - computed: true, optional: false, required: true
  public get weeksOfMonth() {
    return 'not implemented' as any;
  }
}
export interface DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek {
  readonly name: string;
}
export interface DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths {
  readonly name: string;
}
export interface DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails {
  readonly hoursOfDay?: number[];
  readonly leadTimeInWeeks?: number;
  readonly preference: string;
  readonly weeksOfMonth?: number[];
  /** days_of_week block */
  readonly daysOfWeek?: DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsDaysOfWeek[];
  /** months block */
  readonly months?: DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetailsMonths[];
}
export interface DatabaseAutonomousExadataInfrastructureTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DatabaseAutonomousExadataInfrastructure extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatabaseAutonomousExadataInfrastructureConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_exadata_infrastructure',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._domain = config.domain;
    this._freeformTags = config.freeformTags;
    this._licenseModel = config.licenseModel;
    this._nsgIds = config.nsgIds;
    this._shape = config.shape;
    this._subnetId = config.subnetId;
    this._maintenanceWindowDetails = config.maintenanceWindowDetails;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain: string;
  public get availabilityDomain() {
    return this._availabilityDomain;
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }

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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string;
  public get domain() {
    return this._domain ?? this.getStringAttribute('domain');
  }
  public set domain(value: string | undefined) {
    this._domain = value;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // hostname - computed: true, optional: false, required: true
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_maintenance_run_id - computed: true, optional: false, required: true
  public get lastMaintenanceRunId() {
    return this.getStringAttribute('last_maintenance_run_id');
  }

  // license_model - computed: true, optional: true, required: false
  private _licenseModel?: string;
  public get licenseModel() {
    return this._licenseModel ?? this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string | undefined) {
    this._licenseModel = value;
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // maintenance_window - computed: true, optional: false, required: true
  public maintenanceWindow(index: string) {
    return new DatabaseAutonomousExadataInfrastructureMaintenanceWindow(this, 'maintenance_window', index);
  }

  // next_maintenance_run_id - computed: true, optional: false, required: true
  public get nextMaintenanceRunId() {
    return this.getStringAttribute('next_maintenance_run_id');
  }

  // nsg_ids - computed: false, optional: true, required: false
  private _nsgIds?: string[];
  public get nsgIds() {
    return this._nsgIds;
  }
  public set nsgIds(value: string[] | undefined) {
    this._nsgIds = value;
  }

  // shape - computed: false, optional: false, required: true
  private _shape: string;
  public get shape() {
    return this._shape;
  }
  public set shape(value: string) {
    this._shape = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this._subnetId;
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // maintenance_window_details - computed: false, optional: true, required: false
  private _maintenanceWindowDetails?: DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails[];
  public get maintenanceWindowDetails() {
    return this._maintenanceWindowDetails;
  }
  public set maintenanceWindowDetails(value: DatabaseAutonomousExadataInfrastructureMaintenanceWindowDetails[] | undefined) {
    this._maintenanceWindowDetails = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatabaseAutonomousExadataInfrastructureTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatabaseAutonomousExadataInfrastructureTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: this._availabilityDomain,
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      domain: this._domain,
      freeform_tags: this._freeformTags,
      license_model: this._licenseModel,
      nsg_ids: this._nsgIds,
      shape: this._shape,
      subnet_id: this._subnetId,
      maintenance_window_details: this._maintenanceWindowDetails,
      timeouts: this._timeouts,
    };
  }
}
