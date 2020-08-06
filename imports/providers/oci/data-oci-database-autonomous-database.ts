// https://www.terraform.io/docs/providers/oci/r/data_oci_database_autonomous_database.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "admin_password": {
        "type": "string",
        "computed": true,
        "sensitive": true
      },
      "autonomous_container_database_id": {
        "type": "string",
        "computed": true
      },
      "autonomous_database_backup_id": {
        "type": "string",
        "computed": true
      },
      "autonomous_database_id": {
        "type": "string",
        "required": true
      },
      "available_upgrade_versions": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "clone_type": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "connection_strings": {
        "type": [
          "list",
          [
            "object",
            {
              "all_connection_strings": [
                "map",
                "string"
              ],
              "dedicated": "string",
              "high": "string",
              "low": "string",
              "medium": "string"
            }
          ]
        ],
        "computed": true
      },
      "connection_urls": {
        "type": [
          "list",
          [
            "object",
            {
              "apex_url": "string",
              "machine_learning_user_management_url": "string",
              "sql_dev_web_url": "string"
            }
          ]
        ],
        "computed": true
      },
      "cpu_core_count": {
        "type": "number",
        "computed": true
      },
      "data_safe_status": {
        "type": "string",
        "computed": true
      },
      "data_storage_size_in_tbs": {
        "type": "number",
        "computed": true
      },
      "db_name": {
        "type": "string",
        "computed": true
      },
      "db_version": {
        "type": "string",
        "computed": true
      },
      "db_workload": {
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
      "failed_data_recovery_in_seconds": {
        "type": "number",
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
      "is_auto_scaling_enabled": {
        "type": "bool",
        "computed": true
      },
      "is_data_guard_enabled": {
        "type": "bool",
        "computed": true
      },
      "is_dedicated": {
        "type": "bool",
        "computed": true
      },
      "is_free_tier": {
        "type": "bool",
        "computed": true
      },
      "is_preview": {
        "type": "bool",
        "computed": true
      },
      "is_preview_version_with_service_terms_accepted": {
        "type": "bool",
        "computed": true
      },
      "license_model": {
        "type": "string",
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "nsg_ids": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "private_endpoint": {
        "type": "string",
        "computed": true
      },
      "private_endpoint_ip": {
        "type": "string",
        "computed": true
      },
      "private_endpoint_label": {
        "type": "string",
        "computed": true
      },
      "service_console_url": {
        "type": "string",
        "computed": true
      },
      "source": {
        "type": "string",
        "computed": true
      },
      "source_id": {
        "type": "string",
        "computed": true
      },
      "standby_db": {
        "type": [
          "list",
          [
            "object",
            {
              "lag_time_in_seconds": "number",
              "lifecycle_details": "string",
              "state": "string"
            }
          ]
        ],
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "subnet_id": {
        "type": "string",
        "computed": true
      },
      "switchover_to": {
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
      "time_deletion_of_free_autonomous_database": {
        "type": "string",
        "computed": true
      },
      "time_maintenance_begin": {
        "type": "string",
        "computed": true
      },
      "time_maintenance_end": {
        "type": "string",
        "computed": true
      },
      "time_of_last_failover": {
        "type": "string",
        "computed": true
      },
      "time_of_last_switchover": {
        "type": "string",
        "computed": true
      },
      "time_reclamation_of_free_autonomous_database": {
        "type": "string",
        "computed": true
      },
      "timestamp": {
        "type": "string",
        "computed": true
      },
      "used_data_storage_size_in_tbs": {
        "type": "number",
        "computed": true
      },
      "whitelisted_ips": {
        "type": [
          "list",
          "string"
        ],
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

export interface DataOciDatabaseAutonomousDatabaseConfig extends TerraformMetaArguments {
  readonly autonomousDatabaseId: string;
}
export class DataOciDatabaseAutonomousDatabaseConnectionStrings extends ComplexComputedList {

  // all_connection_strings - computed: true, optional: false, required: true
  public get allConnectionStrings() {
    return 'not implemented' as any;
  }

  // dedicated - computed: true, optional: false, required: true
  public get dedicated() {
    return this.getStringAttribute('dedicated');
  }

  // high - computed: true, optional: false, required: true
  public get high() {
    return this.getStringAttribute('high');
  }

  // low - computed: true, optional: false, required: true
  public get low() {
    return this.getStringAttribute('low');
  }

  // medium - computed: true, optional: false, required: true
  public get medium() {
    return this.getStringAttribute('medium');
  }
}
export class DataOciDatabaseAutonomousDatabaseConnectionUrls extends ComplexComputedList {

  // apex_url - computed: true, optional: false, required: true
  public get apexUrl() {
    return this.getStringAttribute('apex_url');
  }

  // machine_learning_user_management_url - computed: true, optional: false, required: true
  public get machineLearningUserManagementUrl() {
    return this.getStringAttribute('machine_learning_user_management_url');
  }

  // sql_dev_web_url - computed: true, optional: false, required: true
  public get sqlDevWebUrl() {
    return this.getStringAttribute('sql_dev_web_url');
  }
}
export class DataOciDatabaseAutonomousDatabaseStandbyDb extends ComplexComputedList {

  // lag_time_in_seconds - computed: true, optional: false, required: true
  public get lagTimeInSeconds() {
    return this.getNumberAttribute('lag_time_in_seconds');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }
}

// Resource

export class DataOciDatabaseAutonomousDatabase extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_database',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autonomousDatabaseId = config.autonomousDatabaseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: true, optional: false, required: true
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }

  // autonomous_container_database_id - computed: true, optional: false, required: true
  public get autonomousContainerDatabaseId() {
    return this.getStringAttribute('autonomous_container_database_id');
  }

  // autonomous_database_backup_id - computed: true, optional: false, required: true
  public get autonomousDatabaseBackupId() {
    return this.getStringAttribute('autonomous_database_backup_id');
  }

  // autonomous_database_id - computed: false, optional: false, required: true
  private _autonomousDatabaseId: string;
  public get autonomousDatabaseId() {
    return this._autonomousDatabaseId;
  }
  public set autonomousDatabaseId(value: string) {
    this._autonomousDatabaseId = value;
  }

  // available_upgrade_versions - computed: true, optional: false, required: true
  public get availableUpgradeVersions() {
    return this.getListAttribute('available_upgrade_versions');
  }

  // clone_type - computed: true, optional: false, required: true
  public get cloneType() {
    return this.getStringAttribute('clone_type');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_strings - computed: true, optional: false, required: true
  public connectionStrings(index: string) {
    return new DataOciDatabaseAutonomousDatabaseConnectionStrings(this, 'connection_strings', index);
  }

  // connection_urls - computed: true, optional: false, required: true
  public connectionUrls(index: string) {
    return new DataOciDatabaseAutonomousDatabaseConnectionUrls(this, 'connection_urls', index);
  }

  // cpu_core_count - computed: true, optional: false, required: true
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }

  // data_safe_status - computed: true, optional: false, required: true
  public get dataSafeStatus() {
    return this.getStringAttribute('data_safe_status');
  }

  // data_storage_size_in_tbs - computed: true, optional: false, required: true
  public get dataStorageSizeInTbs() {
    return this.getNumberAttribute('data_storage_size_in_tbs');
  }

  // db_name - computed: true, optional: false, required: true
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // db_version - computed: true, optional: false, required: true
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // db_workload - computed: true, optional: false, required: true
  public get dbWorkload() {
    return this.getStringAttribute('db_workload');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // failed_data_recovery_in_seconds - computed: true, optional: false, required: true
  public get failedDataRecoveryInSeconds() {
    return this.getNumberAttribute('failed_data_recovery_in_seconds');
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

  // is_auto_scaling_enabled - computed: true, optional: false, required: true
  public get isAutoScalingEnabled() {
    return this.getBooleanAttribute('is_auto_scaling_enabled');
  }

  // is_data_guard_enabled - computed: true, optional: false, required: true
  public get isDataGuardEnabled() {
    return this.getBooleanAttribute('is_data_guard_enabled');
  }

  // is_dedicated - computed: true, optional: false, required: true
  public get isDedicated() {
    return this.getBooleanAttribute('is_dedicated');
  }

  // is_free_tier - computed: true, optional: false, required: true
  public get isFreeTier() {
    return this.getBooleanAttribute('is_free_tier');
  }

  // is_preview - computed: true, optional: false, required: true
  public get isPreview() {
    return this.getBooleanAttribute('is_preview');
  }

  // is_preview_version_with_service_terms_accepted - computed: true, optional: false, required: true
  public get isPreviewVersionWithServiceTermsAccepted() {
    return this.getBooleanAttribute('is_preview_version_with_service_terms_accepted');
  }

  // license_model - computed: true, optional: false, required: true
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // nsg_ids - computed: true, optional: false, required: true
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // private_endpoint - computed: true, optional: false, required: true
  public get privateEndpoint() {
    return this.getStringAttribute('private_endpoint');
  }

  // private_endpoint_ip - computed: true, optional: false, required: true
  public get privateEndpointIp() {
    return this.getStringAttribute('private_endpoint_ip');
  }

  // private_endpoint_label - computed: true, optional: false, required: true
  public get privateEndpointLabel() {
    return this.getStringAttribute('private_endpoint_label');
  }

  // service_console_url - computed: true, optional: false, required: true
  public get serviceConsoleUrl() {
    return this.getStringAttribute('service_console_url');
  }

  // source - computed: true, optional: false, required: true
  public get source() {
    return this.getStringAttribute('source');
  }

  // source_id - computed: true, optional: false, required: true
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // standby_db - computed: true, optional: false, required: true
  public standbyDb(index: string) {
    return new DataOciDatabaseAutonomousDatabaseStandbyDb(this, 'standby_db', index);
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // switchover_to - computed: true, optional: false, required: true
  public get switchoverTo() {
    return this.getStringAttribute('switchover_to');
  }

  // system_tags - computed: true, optional: false, required: true
  public systemTags(key: string): string {
    return new StringMap(this, 'system_tags').lookup(key);
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_deletion_of_free_autonomous_database - computed: true, optional: false, required: true
  public get timeDeletionOfFreeAutonomousDatabase() {
    return this.getStringAttribute('time_deletion_of_free_autonomous_database');
  }

  // time_maintenance_begin - computed: true, optional: false, required: true
  public get timeMaintenanceBegin() {
    return this.getStringAttribute('time_maintenance_begin');
  }

  // time_maintenance_end - computed: true, optional: false, required: true
  public get timeMaintenanceEnd() {
    return this.getStringAttribute('time_maintenance_end');
  }

  // time_of_last_failover - computed: true, optional: false, required: true
  public get timeOfLastFailover() {
    return this.getStringAttribute('time_of_last_failover');
  }

  // time_of_last_switchover - computed: true, optional: false, required: true
  public get timeOfLastSwitchover() {
    return this.getStringAttribute('time_of_last_switchover');
  }

  // time_reclamation_of_free_autonomous_database - computed: true, optional: false, required: true
  public get timeReclamationOfFreeAutonomousDatabase() {
    return this.getStringAttribute('time_reclamation_of_free_autonomous_database');
  }

  // timestamp - computed: true, optional: false, required: true
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // used_data_storage_size_in_tbs - computed: true, optional: false, required: true
  public get usedDataStorageSizeInTbs() {
    return this.getNumberAttribute('used_data_storage_size_in_tbs');
  }

  // whitelisted_ips - computed: true, optional: false, required: true
  public get whitelistedIps() {
    return this.getListAttribute('whitelisted_ips');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_database_id: this._autonomousDatabaseId,
    };
  }
}
