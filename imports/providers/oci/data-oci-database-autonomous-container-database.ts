// https://www.terraform.io/docs/providers/oci/r/data_oci_database_autonomous_container_database.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "autonomous_container_database_id": {
        "type": "string",
        "required": true
      },
      "autonomous_exadata_infrastructure_id": {
        "type": "string",
        "computed": true
      },
      "autonomous_vm_cluster_id": {
        "type": "string",
        "computed": true
      },
      "availability_domain": {
        "type": "string",
        "computed": true
      },
      "backup_config": {
        "type": [
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
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "db_unique_name": {
        "type": "string",
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
        "computed": true
      },
      "display_name": {
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
      "maintenance_window_details": {
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
        "computed": true
      },
      "service_level_agreement_type": {
        "type": "string",
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
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataOciDatabaseAutonomousContainerDatabaseConfig extends TerraformMetaArguments {
  readonly autonomousContainerDatabaseId: string;
}
export class DataOciDatabaseAutonomousContainerDatabaseBackupConfigBackupDestinationDetails extends ComplexComputedList {

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
export class DataOciDatabaseAutonomousContainerDatabaseBackupConfig extends ComplexComputedList {

  // backup_destination_details - computed: true, optional: false, required: true
  public get backupDestinationDetails() {
    return 'not implemented' as any;
  }

  // recovery_window_in_days - computed: true, optional: false, required: true
  public get recoveryWindowInDays() {
    return this.getNumberAttribute('recovery_window_in_days');
  }
}
export class DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDaysOfWeek extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowMonths extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindow extends ComplexComputedList {

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
export class DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsDaysOfWeek extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetailsMonths extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetails extends ComplexComputedList {

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

// Resource

export class DataOciDatabaseAutonomousContainerDatabase extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousContainerDatabaseConfig) {
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
    this._autonomousContainerDatabaseId = config.autonomousContainerDatabaseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_container_database_id - computed: false, optional: false, required: true
  private _autonomousContainerDatabaseId: string;
  public get autonomousContainerDatabaseId() {
    return this._autonomousContainerDatabaseId;
  }
  public set autonomousContainerDatabaseId(value: string) {
    this._autonomousContainerDatabaseId = value;
  }

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
  public backupConfig(index: string) {
    return new DataOciDatabaseAutonomousContainerDatabaseBackupConfig(this, 'backup_config', index);
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
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
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
  public maintenanceWindow(index: string) {
    return new DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindow(this, 'maintenance_window', index);
  }

  // maintenance_window_details - computed: true, optional: false, required: true
  public maintenanceWindowDetails(index: string) {
    return new DataOciDatabaseAutonomousContainerDatabaseMaintenanceWindowDetails(this, 'maintenance_window_details', index);
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_container_database_id: this._autonomousContainerDatabaseId,
    };
  }
}
