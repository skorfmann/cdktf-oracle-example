// https://www.terraform.io/docs/providers/oci/r/data_oci_database_autonomous_container_databases.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "autonomous_container_databases": {
        "type": [
          "list",
          [
            "object",
            {
              "autonomous_exadata_infrastructure_id": "string",
              "autonomous_vm_cluster_id": "string",
              "availability_domain": "string",
              "backup_config": [
                "list",
                [
                  "object",
                  {
                    "backup_destination_details": [
                      "list",
                      [
                        "object",
                        {
                          "id": "string",
                          "internet_proxy": "string",
                          "type": "string",
                          "vpc_password": "string",
                          "vpc_user": "string"
                        }
                      ]
                    ],
                    "recovery_window_in_days": "number"
                  }
                ]
              ],
              "compartment_id": "string",
              "db_unique_name": "string",
              "db_version": "string",
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
              "infrastructure_type": "string",
              "last_maintenance_run_id": "string",
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
              "patch_model": "string",
              "service_level_agreement_type": "string",
              "state": "string",
              "time_created": "string"
            }
          ]
        ],
        "computed": true
      },
      "autonomous_exadata_infrastructure_id": {
        "type": "string",
        "optional": true
      },
      "autonomous_vm_cluster_id": {
        "type": "string",
        "optional": true
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
      "infrastructure_type": {
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

export interface DataOciDatabaseAutonomousContainerDatabasesConfig extends TerraformMetaArguments {
  readonly autonomousExadataInfrastructureId?: string;
  readonly autonomousVmClusterId?: string;
  readonly availabilityDomain?: string;
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly infrastructureType?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciDatabaseAutonomousContainerDatabasesFilter[];
}
export class DataOciDatabaseAutonomousContainerDatabasesAutonomousContainerDatabasesBackupConfigBackupDestinationDetails extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // internet_proxy - computed: true, optional: false, required: true
  public get internetProxy() {
    return this.getStringAttribute('internet_proxy');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // vpc_password - computed: true, optional: false, required: true
  public get vpcPassword() {
    return this.getStringAttribute('vpc_password');
  }

  // vpc_user - computed: true, optional: false, required: true
  public get vpcUser() {
    return this.getStringAttribute('vpc_user');
  }
}
export class DataOciDatabaseAutonomousContainerDatabasesAutonomousContainerDatabasesBackupConfig extends ComplexComputedList {

  // backup_destination_details - computed: true, optional: false, required: true
  public get backupDestinationDetails() {
    return 'not implemented' as any;
  }

  // recovery_window_in_days - computed: true, optional: false, required: true
  public get recoveryWindowInDays() {
    return this.getNumberAttribute('recovery_window_in_days');
  }
}
export class DataOciDatabaseAutonomousContainerDatabasesAutonomousContainerDatabasesMaintenanceWindowDaysOfWeek extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciDatabaseAutonomousContainerDatabasesAutonomousContainerDatabasesMaintenanceWindowMonths extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciDatabaseAutonomousContainerDatabasesAutonomousContainerDatabasesMaintenanceWindow extends ComplexComputedList {

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
export class DataOciDatabaseAutonomousContainerDatabasesAutonomousContainerDatabasesMaintenanceWindowDetailsDaysOfWeek extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciDatabaseAutonomousContainerDatabasesAutonomousContainerDatabasesMaintenanceWindowDetailsMonths extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciDatabaseAutonomousContainerDatabasesAutonomousContainerDatabasesMaintenanceWindowDetails extends ComplexComputedList {

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
export class DataOciDatabaseAutonomousContainerDatabasesAutonomousContainerDatabases extends ComplexComputedList {

  // autonomous_exadata_infrastructure_id - computed: true, optional: false, required: true
  public get autonomousExadataInfrastructureId() {
    return this.getStringAttribute('autonomous_exadata_infrastructure_id');
  }

  // autonomous_vm_cluster_id - computed: true, optional: false, required: true
  public get autonomousVmClusterId() {
    return this.getStringAttribute('autonomous_vm_cluster_id');
  }

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // backup_config - computed: true, optional: false, required: true
  public get backupConfig() {
    return 'not implemented' as any;
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // db_unique_name - computed: true, optional: false, required: true
  public get dbUniqueName() {
    return this.getStringAttribute('db_unique_name');
  }

  // db_version - computed: true, optional: false, required: true
  public get dbVersion() {
    return this.getStringAttribute('db_version');
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

  // patch_model - computed: true, optional: false, required: true
  public get patchModel() {
    return this.getStringAttribute('patch_model');
  }

  // service_level_agreement_type - computed: true, optional: false, required: true
  public get serviceLevelAgreementType() {
    return this.getStringAttribute('service_level_agreement_type');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export interface DataOciDatabaseAutonomousContainerDatabasesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseAutonomousContainerDatabases extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousContainerDatabasesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_container_databases',
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
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._infrastructureType = config.infrastructureType;
    this._state = config.state;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_container_databases - computed: true, optional: false, required: true
  public autonomousContainerDatabases(index: string) {
    return new DataOciDatabaseAutonomousContainerDatabasesAutonomousContainerDatabases(this, 'autonomous_container_databases', index);
  }

  // autonomous_exadata_infrastructure_id - computed: false, optional: true, required: false
  private _autonomousExadataInfrastructureId?: string;
  public get autonomousExadataInfrastructureId() {
    return this._autonomousExadataInfrastructureId;
  }
  public set autonomousExadataInfrastructureId(value: string | undefined) {
    this._autonomousExadataInfrastructureId = value;
  }

  // autonomous_vm_cluster_id - computed: false, optional: true, required: false
  private _autonomousVmClusterId?: string;
  public get autonomousVmClusterId() {
    return this._autonomousVmClusterId;
  }
  public set autonomousVmClusterId(value: string | undefined) {
    this._autonomousVmClusterId = value;
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

  // infrastructure_type - computed: false, optional: true, required: false
  private _infrastructureType?: string;
  public get infrastructureType() {
    return this._infrastructureType;
  }
  public set infrastructureType(value: string | undefined) {
    this._infrastructureType = value;
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
  private _filter?: DataOciDatabaseAutonomousContainerDatabasesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseAutonomousContainerDatabasesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_exadata_infrastructure_id: this._autonomousExadataInfrastructureId,
      autonomous_vm_cluster_id: this._autonomousVmClusterId,
      availability_domain: this._availabilityDomain,
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      infrastructure_type: this._infrastructureType,
      state: this._state,
      filter: this._filter,
    };
  }
}
