// https://www.terraform.io/docs/providers/oci/r/database_autonomous_database.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "admin_password": {
        "type": "string",
        "required": true,
        "sensitive": true
      },
      "autonomous_container_database_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "autonomous_database_backup_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "autonomous_database_id": {
        "type": "string",
        "optional": true,
        "computed": true
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
        "optional": true,
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
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
        "required": true
      },
      "data_safe_status": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "data_storage_size_in_tbs": {
        "type": "number",
        "required": true
      },
      "db_name": {
        "type": "string",
        "required": true
      },
      "db_version": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "db_workload": {
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
      "failed_data_recovery_in_seconds": {
        "type": "number",
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
      "infrastructure_type": {
        "type": "string",
        "computed": true
      },
      "is_auto_scaling_enabled": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "is_data_guard_enabled": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "is_dedicated": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "is_free_tier": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "is_preview": {
        "type": "bool",
        "computed": true
      },
      "is_preview_version_with_service_terms_accepted": {
        "type": "bool",
        "optional": true,
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
      "nsg_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
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
        "optional": true,
        "computed": true
      },
      "service_console_url": {
        "type": "string",
        "computed": true
      },
      "source": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "source_id": {
        "type": "string",
        "optional": true,
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
        "optional": true,
        "computed": true
      },
      "switchover_to": {
        "type": "string",
        "optional": true
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
        "optional": true,
        "computed": true
      },
      "used_data_storage_size_in_tbs": {
        "type": "number",
        "computed": true
      },
      "whitelisted_ips": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
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
import { StringMap } from "cdktf";

// Configuration

export interface DatabaseAutonomousDatabaseConfig extends TerraformMetaArguments {
  readonly adminPassword: string;
  readonly autonomousContainerDatabaseId?: string;
  readonly autonomousDatabaseBackupId?: string;
  readonly autonomousDatabaseId?: string;
  readonly cloneType?: string;
  readonly compartmentId: string;
  readonly cpuCoreCount: number;
  readonly dataSafeStatus?: string;
  readonly dataStorageSizeInTbs: number;
  readonly dbName: string;
  readonly dbVersion?: string;
  readonly dbWorkload?: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly isAutoScalingEnabled?: boolean;
  readonly isDataGuardEnabled?: boolean;
  readonly isDedicated?: boolean;
  readonly isFreeTier?: boolean;
  readonly isPreviewVersionWithServiceTermsAccepted?: boolean;
  readonly licenseModel?: string;
  readonly nsgIds?: string[];
  readonly privateEndpointLabel?: string;
  readonly source?: string;
  readonly sourceId?: string;
  readonly subnetId?: string;
  readonly switchoverTo?: string;
  readonly timestamp?: string;
  readonly whitelistedIps?: string[];
  /** timeouts block */
  readonly timeouts?: DatabaseAutonomousDatabaseTimeouts;
}
export class DatabaseAutonomousDatabaseConnectionStrings extends ComplexComputedList {

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
export class DatabaseAutonomousDatabaseConnectionUrls extends ComplexComputedList {

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
export class DatabaseAutonomousDatabaseStandbyDb extends ComplexComputedList {

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
export interface DatabaseAutonomousDatabaseTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DatabaseAutonomousDatabase extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatabaseAutonomousDatabaseConfig) {
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
    this._adminPassword = config.adminPassword;
    this._autonomousContainerDatabaseId = config.autonomousContainerDatabaseId;
    this._autonomousDatabaseBackupId = config.autonomousDatabaseBackupId;
    this._autonomousDatabaseId = config.autonomousDatabaseId;
    this._cloneType = config.cloneType;
    this._compartmentId = config.compartmentId;
    this._cpuCoreCount = config.cpuCoreCount;
    this._dataSafeStatus = config.dataSafeStatus;
    this._dataStorageSizeInTbs = config.dataStorageSizeInTbs;
    this._dbName = config.dbName;
    this._dbVersion = config.dbVersion;
    this._dbWorkload = config.dbWorkload;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._isAutoScalingEnabled = config.isAutoScalingEnabled;
    this._isDataGuardEnabled = config.isDataGuardEnabled;
    this._isDedicated = config.isDedicated;
    this._isFreeTier = config.isFreeTier;
    this._isPreviewVersionWithServiceTermsAccepted = config.isPreviewVersionWithServiceTermsAccepted;
    this._licenseModel = config.licenseModel;
    this._nsgIds = config.nsgIds;
    this._privateEndpointLabel = config.privateEndpointLabel;
    this._source = config.source;
    this._sourceId = config.sourceId;
    this._subnetId = config.subnetId;
    this._switchoverTo = config.switchoverTo;
    this._timestamp = config.timestamp;
    this._whitelistedIps = config.whitelistedIps;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword: string;
  public get adminPassword() {
    return this._adminPassword;
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }

  // autonomous_container_database_id - computed: true, optional: true, required: false
  private _autonomousContainerDatabaseId?: string;
  public get autonomousContainerDatabaseId() {
    return this._autonomousContainerDatabaseId ?? this.getStringAttribute('autonomous_container_database_id');
  }
  public set autonomousContainerDatabaseId(value: string | undefined) {
    this._autonomousContainerDatabaseId = value;
  }

  // autonomous_database_backup_id - computed: true, optional: true, required: false
  private _autonomousDatabaseBackupId?: string;
  public get autonomousDatabaseBackupId() {
    return this._autonomousDatabaseBackupId ?? this.getStringAttribute('autonomous_database_backup_id');
  }
  public set autonomousDatabaseBackupId(value: string | undefined) {
    this._autonomousDatabaseBackupId = value;
  }

  // autonomous_database_id - computed: true, optional: true, required: false
  private _autonomousDatabaseId?: string;
  public get autonomousDatabaseId() {
    return this._autonomousDatabaseId ?? this.getStringAttribute('autonomous_database_id');
  }
  public set autonomousDatabaseId(value: string | undefined) {
    this._autonomousDatabaseId = value;
  }

  // available_upgrade_versions - computed: true, optional: false, required: true
  public get availableUpgradeVersions() {
    return this.getListAttribute('available_upgrade_versions');
  }

  // clone_type - computed: true, optional: true, required: false
  private _cloneType?: string;
  public get cloneType() {
    return this._cloneType ?? this.getStringAttribute('clone_type');
  }
  public set cloneType(value: string | undefined) {
    this._cloneType = value;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // connection_strings - computed: true, optional: false, required: true
  public connectionStrings(index: string) {
    return new DatabaseAutonomousDatabaseConnectionStrings(this, 'connection_strings', index);
  }

  // connection_urls - computed: true, optional: false, required: true
  public connectionUrls(index: string) {
    return new DatabaseAutonomousDatabaseConnectionUrls(this, 'connection_urls', index);
  }

  // cpu_core_count - computed: false, optional: false, required: true
  private _cpuCoreCount: number;
  public get cpuCoreCount() {
    return this._cpuCoreCount;
  }
  public set cpuCoreCount(value: number) {
    this._cpuCoreCount = value;
  }

  // data_safe_status - computed: true, optional: true, required: false
  private _dataSafeStatus?: string;
  public get dataSafeStatus() {
    return this._dataSafeStatus ?? this.getStringAttribute('data_safe_status');
  }
  public set dataSafeStatus(value: string | undefined) {
    this._dataSafeStatus = value;
  }

  // data_storage_size_in_tbs - computed: false, optional: false, required: true
  private _dataStorageSizeInTbs: number;
  public get dataStorageSizeInTbs() {
    return this._dataStorageSizeInTbs;
  }
  public set dataStorageSizeInTbs(value: number) {
    this._dataStorageSizeInTbs = value;
  }

  // db_name - computed: false, optional: false, required: true
  private _dbName: string;
  public get dbName() {
    return this._dbName;
  }
  public set dbName(value: string) {
    this._dbName = value;
  }

  // db_version - computed: true, optional: true, required: false
  private _dbVersion?: string;
  public get dbVersion() {
    return this._dbVersion ?? this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string | undefined) {
    this._dbVersion = value;
  }

  // db_workload - computed: true, optional: true, required: false
  private _dbWorkload?: string;
  public get dbWorkload() {
    return this._dbWorkload ?? this.getStringAttribute('db_workload');
  }
  public set dbWorkload(value: string | undefined) {
    this._dbWorkload = value;
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

  // failed_data_recovery_in_seconds - computed: true, optional: false, required: true
  public get failedDataRecoveryInSeconds() {
    return this.getNumberAttribute('failed_data_recovery_in_seconds');
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

  // is_auto_scaling_enabled - computed: true, optional: true, required: false
  private _isAutoScalingEnabled?: boolean;
  public get isAutoScalingEnabled() {
    return this._isAutoScalingEnabled ?? this.getBooleanAttribute('is_auto_scaling_enabled');
  }
  public set isAutoScalingEnabled(value: boolean | undefined) {
    this._isAutoScalingEnabled = value;
  }

  // is_data_guard_enabled - computed: true, optional: true, required: false
  private _isDataGuardEnabled?: boolean;
  public get isDataGuardEnabled() {
    return this._isDataGuardEnabled ?? this.getBooleanAttribute('is_data_guard_enabled');
  }
  public set isDataGuardEnabled(value: boolean | undefined) {
    this._isDataGuardEnabled = value;
  }

  // is_dedicated - computed: true, optional: true, required: false
  private _isDedicated?: boolean;
  public get isDedicated() {
    return this._isDedicated ?? this.getBooleanAttribute('is_dedicated');
  }
  public set isDedicated(value: boolean | undefined) {
    this._isDedicated = value;
  }

  // is_free_tier - computed: true, optional: true, required: false
  private _isFreeTier?: boolean;
  public get isFreeTier() {
    return this._isFreeTier ?? this.getBooleanAttribute('is_free_tier');
  }
  public set isFreeTier(value: boolean | undefined) {
    this._isFreeTier = value;
  }

  // is_preview - computed: true, optional: false, required: true
  public get isPreview() {
    return this.getBooleanAttribute('is_preview');
  }

  // is_preview_version_with_service_terms_accepted - computed: true, optional: true, required: false
  private _isPreviewVersionWithServiceTermsAccepted?: boolean;
  public get isPreviewVersionWithServiceTermsAccepted() {
    return this._isPreviewVersionWithServiceTermsAccepted ?? this.getBooleanAttribute('is_preview_version_with_service_terms_accepted');
  }
  public set isPreviewVersionWithServiceTermsAccepted(value: boolean | undefined) {
    this._isPreviewVersionWithServiceTermsAccepted = value;
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

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[];
  public get nsgIds() {
    return this._nsgIds ?? this.getListAttribute('nsg_ids');
  }
  public set nsgIds(value: string[] | undefined) {
    this._nsgIds = value;
  }

  // private_endpoint - computed: true, optional: false, required: true
  public get privateEndpoint() {
    return this.getStringAttribute('private_endpoint');
  }

  // private_endpoint_ip - computed: true, optional: false, required: true
  public get privateEndpointIp() {
    return this.getStringAttribute('private_endpoint_ip');
  }

  // private_endpoint_label - computed: true, optional: true, required: false
  private _privateEndpointLabel?: string;
  public get privateEndpointLabel() {
    return this._privateEndpointLabel ?? this.getStringAttribute('private_endpoint_label');
  }
  public set privateEndpointLabel(value: string | undefined) {
    this._privateEndpointLabel = value;
  }

  // service_console_url - computed: true, optional: false, required: true
  public get serviceConsoleUrl() {
    return this.getStringAttribute('service_console_url');
  }

  // source - computed: true, optional: true, required: false
  private _source?: string;
  public get source() {
    return this._source ?? this.getStringAttribute('source');
  }
  public set source(value: string | undefined) {
    this._source = value;
  }

  // source_id - computed: true, optional: true, required: false
  private _sourceId?: string;
  public get sourceId() {
    return this._sourceId ?? this.getStringAttribute('source_id');
  }
  public set sourceId(value: string | undefined) {
    this._sourceId = value;
  }

  // standby_db - computed: true, optional: false, required: true
  public standbyDb(index: string) {
    return new DatabaseAutonomousDatabaseStandbyDb(this, 'standby_db', index);
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this._subnetId ?? this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }

  // switchover_to - computed: false, optional: true, required: false
  private _switchoverTo?: string;
  public get switchoverTo() {
    return this._switchoverTo;
  }
  public set switchoverTo(value: string | undefined) {
    this._switchoverTo = value;
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

  // timestamp - computed: true, optional: true, required: false
  private _timestamp?: string;
  public get timestamp() {
    return this._timestamp ?? this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string | undefined) {
    this._timestamp = value;
  }

  // used_data_storage_size_in_tbs - computed: true, optional: false, required: true
  public get usedDataStorageSizeInTbs() {
    return this.getNumberAttribute('used_data_storage_size_in_tbs');
  }

  // whitelisted_ips - computed: false, optional: true, required: false
  private _whitelistedIps?: string[];
  public get whitelistedIps() {
    return this._whitelistedIps;
  }
  public set whitelistedIps(value: string[] | undefined) {
    this._whitelistedIps = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatabaseAutonomousDatabaseTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatabaseAutonomousDatabaseTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_password: this._adminPassword,
      autonomous_container_database_id: this._autonomousContainerDatabaseId,
      autonomous_database_backup_id: this._autonomousDatabaseBackupId,
      autonomous_database_id: this._autonomousDatabaseId,
      clone_type: this._cloneType,
      compartment_id: this._compartmentId,
      cpu_core_count: this._cpuCoreCount,
      data_safe_status: this._dataSafeStatus,
      data_storage_size_in_tbs: this._dataStorageSizeInTbs,
      db_name: this._dbName,
      db_version: this._dbVersion,
      db_workload: this._dbWorkload,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      is_auto_scaling_enabled: this._isAutoScalingEnabled,
      is_data_guard_enabled: this._isDataGuardEnabled,
      is_dedicated: this._isDedicated,
      is_free_tier: this._isFreeTier,
      is_preview_version_with_service_terms_accepted: this._isPreviewVersionWithServiceTermsAccepted,
      license_model: this._licenseModel,
      nsg_ids: this._nsgIds,
      private_endpoint_label: this._privateEndpointLabel,
      source: this._source,
      source_id: this._sourceId,
      subnet_id: this._subnetId,
      switchover_to: this._switchoverTo,
      timestamp: this._timestamp,
      whitelisted_ips: this._whitelistedIps,
      timeouts: this._timeouts,
    };
  }
}
