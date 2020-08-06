// https://www.terraform.io/docs/providers/oci/r/data_oci_database_db_systems.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "availability_domain": {
        "type": "string",
        "optional": true
      },
      "backup_id": {
        "type": "string",
        "optional": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "db_systems": {
        "type": [
          "list",
          [
            "object",
            {
              "availability_domain": "string",
              "backup_network_nsg_ids": [
                "list",
                "string"
              ],
              "backup_subnet_id": "string",
              "cluster_name": "string",
              "compartment_id": "string",
              "cpu_core_count": "number",
              "data_storage_percentage": "number",
              "data_storage_size_in_gb": "number",
              "database_edition": "string",
              "db_home": [
                "list",
                [
                  "object",
                  {
                    "database": [
                      "list",
                      [
                        "object",
                        {
                          "admin_password": "string",
                          "backup_id": "string",
                          "backup_tde_password": "string",
                          "character_set": "string",
                          "connection_strings": [
                            "list",
                            [
                              "object",
                              {
                                "all_connection_strings": [
                                  "map",
                                  "string"
                                ],
                                "cdb_default": "string",
                                "cdb_ip_default": "string"
                              }
                            ]
                          ],
                          "database_id": "string",
                          "db_backup_config": [
                            "list",
                            [
                              "object",
                              {
                                "auto_backup_enabled": "bool",
                                "auto_backup_window": "string",
                                "backup_destination_details": [
                                  "list",
                                  [
                                    "object",
                                    {
                                      "id": "string",
                                      "type": "string"
                                    }
                                  ]
                                ],
                                "recovery_window_in_days": "number"
                              }
                            ]
                          ],
                          "db_name": "string",
                          "db_unique_name": "string",
                          "db_workload": "string",
                          "defined_tags": [
                            "map",
                            "string"
                          ],
                          "freeform_tags": [
                            "map",
                            "string"
                          ],
                          "id": "string",
                          "lifecycle_details": "string",
                          "ncharacter_set": "string",
                          "pdb_name": "string",
                          "state": "string",
                          "time_created": "string",
                          "time_stamp_for_point_in_time_recovery": "string"
                        }
                      ]
                    ],
                    "db_home_location": "string",
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
                    "last_patch_history_entry_id": "string",
                    "lifecycle_details": "string",
                    "state": "string",
                    "time_created": "string"
                  }
                ]
              ],
              "db_system_options": [
                "list",
                [
                  "object",
                  {
                    "storage_management": "string"
                  }
                ]
              ],
              "defined_tags": [
                "map",
                "string"
              ],
              "disk_redundancy": "string",
              "display_name": "string",
              "domain": "string",
              "fault_domains": [
                "list",
                "string"
              ],
              "freeform_tags": [
                "map",
                "string"
              ],
              "hostname": "string",
              "id": "string",
              "iorm_config_cache": [
                "list",
                [
                  "object",
                  {
                    "db_plans": [
                      "list",
                      [
                        "object",
                        {
                          "db_name": "string",
                          "flash_cache_limit": "string",
                          "share": "number"
                        }
                      ]
                    ],
                    "db_system_id": "string",
                    "lifecycle_details": "string",
                    "objective": "string",
                    "state": "string"
                  }
                ]
              ],
              "last_maintenance_run_id": "string",
              "last_patch_history_entry_id": "string",
              "license_model": "string",
              "lifecycle_details": "string",
              "listener_port": "number",
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
              "node_count": "number",
              "nsg_ids": [
                "list",
                "string"
              ],
              "reco_storage_size_in_gb": "number",
              "scan_dns_record_id": "string",
              "scan_ip_ids": [
                "list",
                "string"
              ],
              "shape": "string",
              "source": "string",
              "sparse_diskgroup": "bool",
              "ssh_public_keys": [
                "list",
                "string"
              ],
              "state": "string",
              "subnet_id": "string",
              "time_created": "string",
              "time_zone": "string",
              "version": "string",
              "vip_ids": [
                "list",
                "string"
              ]
            }
          ]
        ],
        "computed": true
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

export interface DataOciDatabaseDbSystemsConfig extends TerraformMetaArguments {
  readonly availabilityDomain?: string;
  readonly backupId?: string;
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciDatabaseDbSystemsFilter[];
}
export class DataOciDatabaseDbSystemsDbSystemsDbHomeDatabaseConnectionStrings extends ComplexComputedList {

  // all_connection_strings - computed: true, optional: false, required: true
  public get allConnectionStrings() {
    return 'not implemented' as any;
  }

  // cdb_default - computed: true, optional: false, required: true
  public get cdbDefault() {
    return this.getStringAttribute('cdb_default');
  }

  // cdb_ip_default - computed: true, optional: false, required: true
  public get cdbIpDefault() {
    return this.getStringAttribute('cdb_ip_default');
  }
}
export class DataOciDatabaseDbSystemsDbSystemsDbHomeDatabaseDbBackupConfigBackupDestinationDetails extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataOciDatabaseDbSystemsDbSystemsDbHomeDatabaseDbBackupConfig extends ComplexComputedList {

  // auto_backup_enabled - computed: true, optional: false, required: true
  public get autoBackupEnabled() {
    return this.getBooleanAttribute('auto_backup_enabled');
  }

  // auto_backup_window - computed: true, optional: false, required: true
  public get autoBackupWindow() {
    return this.getStringAttribute('auto_backup_window');
  }

  // backup_destination_details - computed: true, optional: false, required: true
  public get backupDestinationDetails() {
    return 'not implemented' as any;
  }

  // recovery_window_in_days - computed: true, optional: false, required: true
  public get recoveryWindowInDays() {
    return this.getNumberAttribute('recovery_window_in_days');
  }
}
export class DataOciDatabaseDbSystemsDbSystemsDbHomeDatabase extends ComplexComputedList {

  // admin_password - computed: true, optional: false, required: true
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }

  // backup_id - computed: true, optional: false, required: true
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }

  // backup_tde_password - computed: true, optional: false, required: true
  public get backupTdePassword() {
    return this.getStringAttribute('backup_tde_password');
  }

  // character_set - computed: true, optional: false, required: true
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }

  // connection_strings - computed: true, optional: false, required: true
  public get connectionStrings() {
    return 'not implemented' as any;
  }

  // database_id - computed: true, optional: false, required: true
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }

  // db_backup_config - computed: true, optional: false, required: true
  public get dbBackupConfig() {
    return 'not implemented' as any;
  }

  // db_name - computed: true, optional: false, required: true
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // db_unique_name - computed: true, optional: false, required: true
  public get dbUniqueName() {
    return this.getStringAttribute('db_unique_name');
  }

  // db_workload - computed: true, optional: false, required: true
  public get dbWorkload() {
    return this.getStringAttribute('db_workload');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // ncharacter_set - computed: true, optional: false, required: true
  public get ncharacterSet() {
    return this.getStringAttribute('ncharacter_set');
  }

  // pdb_name - computed: true, optional: false, required: true
  public get pdbName() {
    return this.getStringAttribute('pdb_name');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_stamp_for_point_in_time_recovery - computed: true, optional: false, required: true
  public get timeStampForPointInTimeRecovery() {
    return this.getStringAttribute('time_stamp_for_point_in_time_recovery');
  }
}
export class DataOciDatabaseDbSystemsDbSystemsDbHome extends ComplexComputedList {

  // database - computed: true, optional: false, required: true
  public get database() {
    return 'not implemented' as any;
  }

  // db_home_location - computed: true, optional: false, required: true
  public get dbHomeLocation() {
    return this.getStringAttribute('db_home_location');
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

  // last_patch_history_entry_id - computed: true, optional: false, required: true
  public get lastPatchHistoryEntryId() {
    return this.getStringAttribute('last_patch_history_entry_id');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
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
export class DataOciDatabaseDbSystemsDbSystemsDbSystemOptions extends ComplexComputedList {

  // storage_management - computed: true, optional: false, required: true
  public get storageManagement() {
    return this.getStringAttribute('storage_management');
  }
}
export class DataOciDatabaseDbSystemsDbSystemsIormConfigCacheDbPlans extends ComplexComputedList {

  // db_name - computed: true, optional: false, required: true
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // flash_cache_limit - computed: true, optional: false, required: true
  public get flashCacheLimit() {
    return this.getStringAttribute('flash_cache_limit');
  }

  // share - computed: true, optional: false, required: true
  public get share() {
    return this.getNumberAttribute('share');
  }
}
export class DataOciDatabaseDbSystemsDbSystemsIormConfigCache extends ComplexComputedList {

  // db_plans - computed: true, optional: false, required: true
  public get dbPlans() {
    return 'not implemented' as any;
  }

  // db_system_id - computed: true, optional: false, required: true
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // objective - computed: true, optional: false, required: true
  public get objective() {
    return this.getStringAttribute('objective');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }
}
export class DataOciDatabaseDbSystemsDbSystemsMaintenanceWindowDaysOfWeek extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciDatabaseDbSystemsDbSystemsMaintenanceWindowMonths extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciDatabaseDbSystemsDbSystemsMaintenanceWindow extends ComplexComputedList {

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
export class DataOciDatabaseDbSystemsDbSystemsMaintenanceWindowDetailsDaysOfWeek extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciDatabaseDbSystemsDbSystemsMaintenanceWindowDetailsMonths extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataOciDatabaseDbSystemsDbSystemsMaintenanceWindowDetails extends ComplexComputedList {

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
export class DataOciDatabaseDbSystemsDbSystems extends ComplexComputedList {

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // backup_network_nsg_ids - computed: true, optional: false, required: true
  public get backupNetworkNsgIds() {
    return this.getListAttribute('backup_network_nsg_ids');
  }

  // backup_subnet_id - computed: true, optional: false, required: true
  public get backupSubnetId() {
    return this.getStringAttribute('backup_subnet_id');
  }

  // cluster_name - computed: true, optional: false, required: true
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // cpu_core_count - computed: true, optional: false, required: true
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }

  // data_storage_percentage - computed: true, optional: false, required: true
  public get dataStoragePercentage() {
    return this.getNumberAttribute('data_storage_percentage');
  }

  // data_storage_size_in_gb - computed: true, optional: false, required: true
  public get dataStorageSizeInGb() {
    return this.getNumberAttribute('data_storage_size_in_gb');
  }

  // database_edition - computed: true, optional: false, required: true
  public get databaseEdition() {
    return this.getStringAttribute('database_edition');
  }

  // db_home - computed: true, optional: false, required: true
  public get dbHome() {
    return 'not implemented' as any;
  }

  // db_system_options - computed: true, optional: false, required: true
  public get dbSystemOptions() {
    return 'not implemented' as any;
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // disk_redundancy - computed: true, optional: false, required: true
  public get diskRedundancy() {
    return this.getStringAttribute('disk_redundancy');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // domain - computed: true, optional: false, required: true
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // fault_domains - computed: true, optional: false, required: true
  public get faultDomains() {
    return this.getListAttribute('fault_domains');
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

  // iorm_config_cache - computed: true, optional: false, required: true
  public get iormConfigCache() {
    return 'not implemented' as any;
  }

  // last_maintenance_run_id - computed: true, optional: false, required: true
  public get lastMaintenanceRunId() {
    return this.getStringAttribute('last_maintenance_run_id');
  }

  // last_patch_history_entry_id - computed: true, optional: false, required: true
  public get lastPatchHistoryEntryId() {
    return this.getStringAttribute('last_patch_history_entry_id');
  }

  // license_model - computed: true, optional: false, required: true
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // listener_port - computed: true, optional: false, required: true
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
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

  // node_count - computed: true, optional: false, required: true
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // nsg_ids - computed: true, optional: false, required: true
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // reco_storage_size_in_gb - computed: true, optional: false, required: true
  public get recoStorageSizeInGb() {
    return this.getNumberAttribute('reco_storage_size_in_gb');
  }

  // scan_dns_record_id - computed: true, optional: false, required: true
  public get scanDnsRecordId() {
    return this.getStringAttribute('scan_dns_record_id');
  }

  // scan_ip_ids - computed: true, optional: false, required: true
  public get scanIpIds() {
    return this.getListAttribute('scan_ip_ids');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // source - computed: true, optional: false, required: true
  public get source() {
    return this.getStringAttribute('source');
  }

  // sparse_diskgroup - computed: true, optional: false, required: true
  public get sparseDiskgroup() {
    return this.getBooleanAttribute('sparse_diskgroup');
  }

  // ssh_public_keys - computed: true, optional: false, required: true
  public get sshPublicKeys() {
    return this.getListAttribute('ssh_public_keys');
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

  // time_zone - computed: true, optional: false, required: true
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // vip_ids - computed: true, optional: false, required: true
  public get vipIds() {
    return this.getListAttribute('vip_ids');
  }
}
export interface DataOciDatabaseDbSystemsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseDbSystems extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseDbSystemsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_db_systems',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityDomain = config.availabilityDomain;
    this._backupId = config.backupId;
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._state = config.state;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: true, required: false
  private _availabilityDomain?: string;
  public get availabilityDomain() {
    return this._availabilityDomain;
  }
  public set availabilityDomain(value: string | undefined) {
    this._availabilityDomain = value;
  }

  // backup_id - computed: false, optional: true, required: false
  private _backupId?: string;
  public get backupId() {
    return this._backupId;
  }
  public set backupId(value: string | undefined) {
    this._backupId = value;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // db_systems - computed: true, optional: false, required: true
  public dbSystems(index: string) {
    return new DataOciDatabaseDbSystemsDbSystems(this, 'db_systems', index);
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
  private _filter?: DataOciDatabaseDbSystemsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseDbSystemsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: this._availabilityDomain,
      backup_id: this._backupId,
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      state: this._state,
      filter: this._filter,
    };
  }
}
