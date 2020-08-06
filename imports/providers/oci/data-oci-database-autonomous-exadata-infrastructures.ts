// https://www.terraform.io/docs/providers/oci/r/data_oci_database_autonomous_exadata_infrastructures.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "autonomous_exadata_infrastructures": {
        "type": [
          "list",
          [
            "object",
            {
              "availability_domain": "string",
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "domain": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "hostname": "string",
              "id": "string",
              "last_maintenance_run_id": "string",
              "license_model": "string",
              "lifecycle_details": "string",
              "maintenance_window": [
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
              "maintenance_window_details": [
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
              "next_maintenance_run_id": "string",
              "nsg_ids": [
                "list",
                "string"
              ],
              "shape": "string",
              "state": "string",
              "subnet_id": "string",
              "time_created": "string"
            }
          ]
        ],
        "computed": true
      },
      "availability_domain": {
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

export interface DataOciDatabaseAutonomousExadataInfrastructuresConfig extends TerraformMetaArguments {
  readonly availabilityDomain?: string;
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciDatabaseAutonomousExadataInfrastructuresFilter[];
}
export class DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeek extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonths extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindow extends ComplexComputedList {

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
export class DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeek extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonths extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetails extends ComplexComputedList {

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
export class DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructures extends ComplexComputedList {

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
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

  // domain - computed: true, optional: false, required: true
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // hostname - computed: true, optional: false, required: true
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_maintenance_run_id - computed: true, optional: false, required: true
  public get lastMaintenanceRunId() {
    return this.getStringAttribute('last_maintenance_run_id');
  }

  // license_model - computed: true, optional: false, required: true
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // maintenance_window - computed: true, optional: false, required: true
  public get maintenanceWindow() {
    return 'not implemented' as any;
  }

  // maintenance_window_details - computed: true, optional: false, required: true
  public get maintenanceWindowDetails() {
    return 'not implemented' as any;
  }

  // next_maintenance_run_id - computed: true, optional: false, required: true
  public get nextMaintenanceRunId() {
    return this.getStringAttribute('next_maintenance_run_id');
  }

  // nsg_ids - computed: true, optional: false, required: true
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export interface DataOciDatabaseAutonomousExadataInfrastructuresFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseAutonomousExadataInfrastructures extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousExadataInfrastructuresConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_exadata_infrastructures',
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
    this._displayName = config.displayName;
    this._state = config.state;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_exadata_infrastructures - computed: true, optional: false, required: true
  public autonomousExadataInfrastructures(index: string) {
    return new DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructures(this, 'autonomous_exadata_infrastructures', index);
  }

  // availability_domain - computed: false, optional: true, required: false
  private _availabilityDomain?: string;
  public get availabilityDomain() {
    return this._availabilityDomain;
  }
  public set availabilityDomain(value: string | undefined) {
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

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDatabaseAutonomousExadataInfrastructuresFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseAutonomousExadataInfrastructuresFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: this._availabilityDomain,
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      state: this._state,
      filter: this._filter,
    };
  }
}
