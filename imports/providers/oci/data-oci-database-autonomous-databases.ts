// https://www.terraform.io/docs/providers/oci/r/data_oci_database_autonomous_databases.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "autonomous_container_database_id": {
        "type": "string",
        "optional": true
      },
      "autonomous_databases": {
        "type": [
          "list",
          [
            "object",
            {
              "admin_password": "string",
              "autonomous_container_database_id": "string",
              "autonomous_database_backup_id": "string",
              "autonomous_database_id": "string",
              "available_upgrade_versions": [
                "list",
                "string"
              ],
              "clone_type": "string",
              "compartment_id": "string",
              "connection_strings": [
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
              "connection_urls": [
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
              "cpu_core_count": "number",
              "data_safe_status": "string",
              "data_storage_size_in_tbs": "number",
              "db_name": "string",
              "db_version": "string",
              "db_workload": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "failed_data_recovery_in_seconds": "number",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "infrastructure_type": "string",
              "is_auto_scaling_enabled": "bool",
              "is_data_guard_enabled": "bool",
              "is_dedicated": "bool",
              "is_free_tier": "bool",
              "is_preview": "bool",
              "is_preview_version_with_service_terms_accepted": "bool",
              "license_model": "string",
              "lifecycle_details": "string",
              "nsg_ids": [
                "list",
                "string"
              ],
              "private_endpoint": "string",
              "private_endpoint_ip": "string",
              "private_endpoint_label": "string",
              "service_console_url": "string",
              "source": "string",
              "source_id": "string",
              "standby_db": [
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
              "state": "string",
              "subnet_id": "string",
              "switchover_to": "string",
              "system_tags": [
                "map",
                "string"
              ],
              "time_created": "string",
              "time_deletion_of_free_autonomous_database": "string",
              "time_maintenance_begin": "string",
              "time_maintenance_end": "string",
              "time_of_last_failover": "string",
              "time_of_last_switchover": "string",
              "time_reclamation_of_free_autonomous_database": "string",
              "timestamp": "string",
              "used_data_storage_size_in_tbs": "number",
              "whitelisted_ips": [
                "list",
                "string"
              ]
            }
          ]
        ],
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "db_version": {
        "type": "string",
        "optional": true
      },
      "db_workload": {
        "type": "string",
        "optional": true
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
      "is_data_guard_enabled": {
        "type": "bool",
        "optional": true
      },
      "is_free_tier": {
        "type": "bool",
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

export interface DataOciDatabaseAutonomousDatabasesConfig extends TerraformMetaArguments {
  readonly autonomousContainerDatabaseId?: string;
  readonly compartmentId: string;
  readonly dbVersion?: string;
  readonly dbWorkload?: string;
  readonly displayName?: string;
  readonly infrastructureType?: string;
  readonly isDataGuardEnabled?: boolean;
  readonly isFreeTier?: boolean;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciDatabaseAutonomousDatabasesFilter[];
}
export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionStrings extends ComplexComputedList {

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
export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesConnectionUrls extends ComplexComputedList {

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
export class DataOciDatabaseAutonomousDatabasesAutonomousDatabasesStandbyDb extends ComplexComputedList {

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
export class DataOciDatabaseAutonomousDatabasesAutonomousDatabases extends ComplexComputedList {

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

  // autonomous_database_id - computed: true, optional: false, required: true
  public get autonomousDatabaseId() {
    return this.getStringAttribute('autonomous_database_id');
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
  public get connectionStrings() {
    return 'not implemented' as any;
  }

  // connection_urls - computed: true, optional: false, required: true
  public get connectionUrls() {
    return 'not implemented' as any;
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
  public get definedTags() {
    return 'not implemented' as any;
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
  public get standbyDb() {
    return 'not implemented' as any;
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
  public get systemTags() {
    return 'not implemented' as any;
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
}
export interface DataOciDatabaseAutonomousDatabasesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseAutonomousDatabases extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousDatabasesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_databases',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autonomousContainerDatabaseId = config.autonomousContainerDatabaseId;
    this._compartmentId = config.compartmentId;
    this._dbVersion = config.dbVersion;
    this._dbWorkload = config.dbWorkload;
    this._displayName = config.displayName;
    this._infrastructureType = config.infrastructureType;
    this._isDataGuardEnabled = config.isDataGuardEnabled;
    this._isFreeTier = config.isFreeTier;
    this._state = config.state;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_container_database_id - computed: false, optional: true, required: false
  private _autonomousContainerDatabaseId?: string;
  public get autonomousContainerDatabaseId() {
    return this._autonomousContainerDatabaseId;
  }
  public set autonomousContainerDatabaseId(value: string | undefined) {
    this._autonomousContainerDatabaseId = value;
  }

  // autonomous_databases - computed: true, optional: false, required: true
  public autonomousDatabases(index: string) {
    return new DataOciDatabaseAutonomousDatabasesAutonomousDatabases(this, 'autonomous_databases', index);
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // db_version - computed: false, optional: true, required: false
  private _dbVersion?: string;
  public get dbVersion() {
    return this._dbVersion;
  }
  public set dbVersion(value: string | undefined) {
    this._dbVersion = value;
  }

  // db_workload - computed: false, optional: true, required: false
  private _dbWorkload?: string;
  public get dbWorkload() {
    return this._dbWorkload;
  }
  public set dbWorkload(value: string | undefined) {
    this._dbWorkload = value;
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

  // is_data_guard_enabled - computed: false, optional: true, required: false
  private _isDataGuardEnabled?: boolean;
  public get isDataGuardEnabled() {
    return this._isDataGuardEnabled;
  }
  public set isDataGuardEnabled(value: boolean | undefined) {
    this._isDataGuardEnabled = value;
  }

  // is_free_tier - computed: false, optional: true, required: false
  private _isFreeTier?: boolean;
  public get isFreeTier() {
    return this._isFreeTier;
  }
  public set isFreeTier(value: boolean | undefined) {
    this._isFreeTier = value;
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
  private _filter?: DataOciDatabaseAutonomousDatabasesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseAutonomousDatabasesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_container_database_id: this._autonomousContainerDatabaseId,
      compartment_id: this._compartmentId,
      db_version: this._dbVersion,
      db_workload: this._dbWorkload,
      display_name: this._displayName,
      infrastructure_type: this._infrastructureType,
      is_data_guard_enabled: this._isDataGuardEnabled,
      is_free_tier: this._isFreeTier,
      state: this._state,
      filter: this._filter,
    };
  }
}
