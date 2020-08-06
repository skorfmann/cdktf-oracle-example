// https://www.terraform.io/docs/providers/oci/r/database_autonomous_container_database.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "autonomous_exadata_infrastructure_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "autonomous_vm_cluster_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "availability_domain": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "db_unique_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "db_version": {
        "type": "string",
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
        "required": true
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
      "infrastructure_type": {
        "type": "string",
        "computed": true
      },
      "last_maintenance_run_id": {
        "type": "string",
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
      "patch_model": {
        "type": "string",
        "required": true
      },
      "service_level_agreement_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "backup_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "recovery_window_in_days": {
              "type": "number",
              "optional": true,
              "computed": true
            }
          },
          "block_types": {
            "backup_destination_details": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "id": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "internet_proxy": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "type": {
                    "type": "string",
                    "required": true
                  },
                  "vpc_password": {
                    "type": "string",
                    "optional": true,
                    "sensitive": true
                  },
                  "vpc_user": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "max_items": 1
      },
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

export interface DatabaseAutonomousContainerDatabaseConfig extends TerraformMetaArguments {
  readonly autonomousExadataInfrastructureId?: string;
  readonly autonomousVmClusterId?: string;
  readonly compartmentId?: string;
  readonly dbUniqueName?: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName: string;
  readonly freeformTags?: { [key: string]: string };
  readonly patchModel: string;
  readonly serviceLevelAgreementType?: string;
  /** backup_config block */
  readonly backupConfig?: DatabaseAutonomousContainerDatabaseBackupConfig[];
  /** maintenance_window_details block */
  readonly maintenanceWindowDetails?: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails[];
  /** timeouts block */
  readonly timeouts?: DatabaseAutonomousContainerDatabaseTimeouts;
}
export class DatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DatabaseAutonomousContainerDatabaseMaintenanceWindowMonths extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DatabaseAutonomousContainerDatabaseMaintenanceWindow extends ComplexComputedList {

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
export interface DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails {
  readonly id?: string;
  readonly internetProxy?: string;
  readonly type: string;
  readonly vpcPassword?: string;
  readonly vpcUser?: string;
}
export interface DatabaseAutonomousContainerDatabaseBackupConfig {
  readonly recoveryWindowInDays?: number;
  /** backup_destination_details block */
  readonly backupDestinationDetails?: DatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails[];
}
export interface DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek {
  readonly name: string;
}
export interface DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths {
  readonly name: string;
}
export interface DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails {
  readonly hoursOfDay?: number[];
  readonly leadTimeInWeeks?: number;
  readonly preference: string;
  readonly weeksOfMonth?: number[];
  /** days_of_week block */
  readonly daysOfWeek?: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek[];
  /** months block */
  readonly months?: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths[];
}
export interface DatabaseAutonomousContainerDatabaseTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DatabaseAutonomousContainerDatabase extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatabaseAutonomousContainerDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_container_database',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autonomousExadataInfrastructureId = config.autonomousExadataInfrastructureId;
    this._autonomousVmClusterId = config.autonomousVmClusterId;
    this._compartmentId = config.compartmentId;
    this._dbUniqueName = config.dbUniqueName;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._patchModel = config.patchModel;
    this._serviceLevelAgreementType = config.serviceLevelAgreementType;
    this._backupConfig = config.backupConfig;
    this._maintenanceWindowDetails = config.maintenanceWindowDetails;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_exadata_infrastructure_id - computed: true, optional: true, required: false
  private _autonomousExadataInfrastructureId?: string;
  public get autonomousExadataInfrastructureId() {
    return this._autonomousExadataInfrastructureId ?? this.getStringAttribute('autonomous_exadata_infrastructure_id');
  }
  public set autonomousExadataInfrastructureId(value: string | undefined) {
    this._autonomousExadataInfrastructureId = value;
  }

  // autonomous_vm_cluster_id - computed: true, optional: true, required: false
  private _autonomousVmClusterId?: string;
  public get autonomousVmClusterId() {
    return this._autonomousVmClusterId ?? this.getStringAttribute('autonomous_vm_cluster_id');
  }
  public set autonomousVmClusterId(value: string | undefined) {
    this._autonomousVmClusterId = value;
  }

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string;
  public get compartmentId() {
    return this._compartmentId ?? this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string | undefined) {
    this._compartmentId = value;
  }

  // db_unique_name - computed: true, optional: true, required: false
  private _dbUniqueName?: string;
  public get dbUniqueName() {
    return this._dbUniqueName ?? this.getStringAttribute('db_unique_name');
  }
  public set dbUniqueName(value: string | undefined) {
    this._dbUniqueName = value;
  }

  // db_version - computed: true, optional: false, required: true
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
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

  // infrastructure_type - computed: true, optional: false, required: true
  public get infrastructureType() {
    return this.getStringAttribute('infrastructure_type');
  }

  // last_maintenance_run_id - computed: true, optional: false, required: true
  public get lastMaintenanceRunId() {
    return this.getStringAttribute('last_maintenance_run_id');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // maintenance_window - computed: true, optional: false, required: true
  public maintenanceWindow(index: string) {
    return new DatabaseAutonomousContainerDatabaseMaintenanceWindow(this, 'maintenance_window', index);
  }

  // next_maintenance_run_id - computed: true, optional: false, required: true
  public get nextMaintenanceRunId() {
    return this.getStringAttribute('next_maintenance_run_id');
  }

  // patch_model - computed: false, optional: false, required: true
  private _patchModel: string;
  public get patchModel() {
    return this._patchModel;
  }
  public set patchModel(value: string) {
    this._patchModel = value;
  }

  // service_level_agreement_type - computed: true, optional: true, required: false
  private _serviceLevelAgreementType?: string;
  public get serviceLevelAgreementType() {
    return this._serviceLevelAgreementType ?? this.getStringAttribute('service_level_agreement_type');
  }
  public set serviceLevelAgreementType(value: string | undefined) {
    this._serviceLevelAgreementType = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // backup_config - computed: false, optional: true, required: false
  private _backupConfig?: DatabaseAutonomousContainerDatabaseBackupConfig[];
  public get backupConfig() {
    return this._backupConfig;
  }
  public set backupConfig(value: DatabaseAutonomousContainerDatabaseBackupConfig[] | undefined) {
    this._backupConfig = value;
  }

  // maintenance_window_details - computed: false, optional: true, required: false
  private _maintenanceWindowDetails?: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails[];
  public get maintenanceWindowDetails() {
    return this._maintenanceWindowDetails;
  }
  public set maintenanceWindowDetails(value: DatabaseAutonomousContainerDatabaseMaintenanceWindowDetails[] | undefined) {
    this._maintenanceWindowDetails = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatabaseAutonomousContainerDatabaseTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatabaseAutonomousContainerDatabaseTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_exadata_infrastructure_id: this._autonomousExadataInfrastructureId,
      autonomous_vm_cluster_id: this._autonomousVmClusterId,
      compartment_id: this._compartmentId,
      db_unique_name: this._dbUniqueName,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      patch_model: this._patchModel,
      service_level_agreement_type: this._serviceLevelAgreementType,
      backup_config: this._backupConfig,
      maintenance_window_details: this._maintenanceWindowDetails,
      timeouts: this._timeouts,
    };
  }
}
