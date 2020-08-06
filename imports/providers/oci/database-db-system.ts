// https://www.terraform.io/docs/providers/oci/r/database_db_system.html
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
      "backup_network_nsg_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "backup_subnet_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "cluster_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "cpu_core_count": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "data_storage_percentage": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "data_storage_size_in_gb": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "database_edition": {
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
      "disk_redundancy": {
        "type": "string",
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
      "fault_domains": {
        "type": [
          "list",
          "string"
        ],
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
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "iorm_config_cache": {
        "type": [
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
        "computed": true
      },
      "last_maintenance_run_id": {
        "type": "string",
        "computed": true
      },
      "last_patch_history_entry_id": {
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
      "listener_port": {
        "type": "number",
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
      "node_count": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "nsg_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "reco_storage_size_in_gb": {
        "type": "number",
        "computed": true
      },
      "scan_dns_record_id": {
        "type": "string",
        "computed": true
      },
      "scan_ip_ids": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "shape": {
        "type": "string",
        "required": true
      },
      "source": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "sparse_diskgroup": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "ssh_public_keys": {
        "type": [
          "set",
          "string"
        ],
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
      },
      "time_zone": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "version": {
        "type": "string",
        "computed": true
      },
      "vip_ids": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      }
    },
    "block_types": {
      "db_home": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "db_home_location": {
              "type": "string",
              "computed": true
            },
            "db_version": {
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
              "computed": true
            },
            "last_patch_history_entry_id": {
              "type": "string",
              "computed": true
            },
            "lifecycle_details": {
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
          },
          "block_types": {
            "database": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "admin_password": {
                    "type": "string",
                    "required": true,
                    "sensitive": true
                  },
                  "backup_id": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "backup_tde_password": {
                    "type": "string",
                    "optional": true,
                    "computed": true,
                    "sensitive": true
                  },
                  "character_set": {
                    "type": "string",
                    "optional": true,
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
                          "cdb_default": "string",
                          "cdb_ip_default": "string"
                        }
                      ]
                    ],
                    "computed": true
                  },
                  "database_id": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "db_name": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "db_unique_name": {
                    "type": "string",
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
                    "computed": true
                  },
                  "lifecycle_details": {
                    "type": "string",
                    "computed": true
                  },
                  "ncharacter_set": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "pdb_name": {
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
                  },
                  "time_stamp_for_point_in_time_recovery": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  }
                },
                "block_types": {
                  "db_backup_config": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "auto_backup_enabled": {
                          "type": "bool",
                          "optional": true,
                          "computed": true
                        },
                        "auto_backup_window": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
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
                              "type": {
                                "type": "string",
                                "optional": true,
                                "computed": true
                              }
                            }
                          }
                        }
                      }
                    },
                    "max_items": 1
                  }
                }
              },
              "min_items": 1,
              "max_items": 1
            }
          }
        },
        "min_items": 1,
        "max_items": 1
      },
      "db_system_options": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "storage_management": {
              "type": "string",
              "optional": true,
              "computed": true
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
              "optional": true,
              "computed": true
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
                    "optional": true,
                    "computed": true
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
                    "optional": true,
                    "computed": true
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

export interface DatabaseDbSystemConfig extends TerraformMetaArguments {
  readonly availabilityDomain: string;
  readonly backupNetworkNsgIds?: string[];
  readonly backupSubnetId?: string;
  readonly clusterName?: string;
  readonly compartmentId: string;
  readonly cpuCoreCount?: number;
  readonly dataStoragePercentage?: number;
  readonly dataStorageSizeInGb?: number;
  readonly databaseEdition: string;
  readonly definedTags?: { [key: string]: string };
  readonly diskRedundancy?: string;
  readonly displayName?: string;
  readonly domain?: string;
  readonly faultDomains?: string[];
  readonly freeformTags?: { [key: string]: string };
  readonly hostname: string;
  readonly licenseModel?: string;
  readonly nodeCount?: number;
  readonly nsgIds?: string[];
  readonly shape: string;
  readonly source?: string;
  readonly sparseDiskgroup?: boolean;
  readonly sshPublicKeys: string[];
  readonly subnetId: string;
  readonly timeZone?: string;
  /** db_home block */
  readonly dbHome: DatabaseDbSystemDbHome[];
  /** db_system_options block */
  readonly dbSystemOptions?: DatabaseDbSystemDbSystemOptions[];
  /** maintenance_window_details block */
  readonly maintenanceWindowDetails?: DatabaseDbSystemMaintenanceWindowDetails[];
  /** timeouts block */
  readonly timeouts?: DatabaseDbSystemTimeouts;
}
export class DatabaseDbSystemIormConfigCacheDbPlans extends ComplexComputedList {

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
export class DatabaseDbSystemIormConfigCache extends ComplexComputedList {

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
export class DatabaseDbSystemMaintenanceWindowDaysOfWeek extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DatabaseDbSystemMaintenanceWindowMonths extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DatabaseDbSystemMaintenanceWindow extends ComplexComputedList {

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
export interface DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails {
  readonly id?: string;
  readonly type?: string;
}
export interface DatabaseDbSystemDbHomeDatabaseDbBackupConfig {
  readonly autoBackupEnabled?: boolean;
  readonly autoBackupWindow?: string;
  readonly recoveryWindowInDays?: number;
  /** backup_destination_details block */
  readonly backupDestinationDetails?: DatabaseDbSystemDbHomeDatabaseDbBackupConfigBackupDestinationDetails[];
}
export interface DatabaseDbSystemDbHomeDatabase {
  readonly adminPassword: string;
  readonly backupId?: string;
  readonly backupTdePassword?: string;
  readonly characterSet?: string;
  readonly databaseId?: string;
  readonly dbName?: string;
  readonly dbWorkload?: string;
  readonly definedTags?: { [key: string]: string };
  readonly freeformTags?: { [key: string]: string };
  readonly ncharacterSet?: string;
  readonly pdbName?: string;
  readonly timeStampForPointInTimeRecovery?: string;
  /** db_backup_config block */
  readonly dbBackupConfig?: DatabaseDbSystemDbHomeDatabaseDbBackupConfig[];
}
export interface DatabaseDbSystemDbHome {
  readonly dbVersion?: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  /** database block */
  readonly database: DatabaseDbSystemDbHomeDatabase[];
}
export interface DatabaseDbSystemDbSystemOptions {
  readonly storageManagement?: string;
}
export interface DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek {
  readonly name?: string;
}
export interface DatabaseDbSystemMaintenanceWindowDetailsMonths {
  readonly name?: string;
}
export interface DatabaseDbSystemMaintenanceWindowDetails {
  readonly hoursOfDay?: number[];
  readonly leadTimeInWeeks?: number;
  readonly preference?: string;
  readonly weeksOfMonth?: number[];
  /** days_of_week block */
  readonly daysOfWeek?: DatabaseDbSystemMaintenanceWindowDetailsDaysOfWeek[];
  /** months block */
  readonly months?: DatabaseDbSystemMaintenanceWindowDetailsMonths[];
}
export interface DatabaseDbSystemTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DatabaseDbSystem extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatabaseDbSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_db_system',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityDomain = config.availabilityDomain;
    this._backupNetworkNsgIds = config.backupNetworkNsgIds;
    this._backupSubnetId = config.backupSubnetId;
    this._clusterName = config.clusterName;
    this._compartmentId = config.compartmentId;
    this._cpuCoreCount = config.cpuCoreCount;
    this._dataStoragePercentage = config.dataStoragePercentage;
    this._dataStorageSizeInGb = config.dataStorageSizeInGb;
    this._databaseEdition = config.databaseEdition;
    this._definedTags = config.definedTags;
    this._diskRedundancy = config.diskRedundancy;
    this._displayName = config.displayName;
    this._domain = config.domain;
    this._faultDomains = config.faultDomains;
    this._freeformTags = config.freeformTags;
    this._hostname = config.hostname;
    this._licenseModel = config.licenseModel;
    this._nodeCount = config.nodeCount;
    this._nsgIds = config.nsgIds;
    this._shape = config.shape;
    this._source = config.source;
    this._sparseDiskgroup = config.sparseDiskgroup;
    this._sshPublicKeys = config.sshPublicKeys;
    this._subnetId = config.subnetId;
    this._timeZone = config.timeZone;
    this._dbHome = config.dbHome;
    this._dbSystemOptions = config.dbSystemOptions;
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

  // backup_network_nsg_ids - computed: false, optional: true, required: false
  private _backupNetworkNsgIds?: string[];
  public get backupNetworkNsgIds() {
    return this._backupNetworkNsgIds;
  }
  public set backupNetworkNsgIds(value: string[] | undefined) {
    this._backupNetworkNsgIds = value;
  }

  // backup_subnet_id - computed: true, optional: true, required: false
  private _backupSubnetId?: string;
  public get backupSubnetId() {
    return this._backupSubnetId ?? this.getStringAttribute('backup_subnet_id');
  }
  public set backupSubnetId(value: string | undefined) {
    this._backupSubnetId = value;
  }

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string;
  public get clusterName() {
    return this._clusterName ?? this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string | undefined) {
    this._clusterName = value;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // cpu_core_count - computed: true, optional: true, required: false
  private _cpuCoreCount?: number;
  public get cpuCoreCount() {
    return this._cpuCoreCount ?? this.getNumberAttribute('cpu_core_count');
  }
  public set cpuCoreCount(value: number | undefined) {
    this._cpuCoreCount = value;
  }

  // data_storage_percentage - computed: true, optional: true, required: false
  private _dataStoragePercentage?: number;
  public get dataStoragePercentage() {
    return this._dataStoragePercentage ?? this.getNumberAttribute('data_storage_percentage');
  }
  public set dataStoragePercentage(value: number | undefined) {
    this._dataStoragePercentage = value;
  }

  // data_storage_size_in_gb - computed: true, optional: true, required: false
  private _dataStorageSizeInGb?: number;
  public get dataStorageSizeInGb() {
    return this._dataStorageSizeInGb ?? this.getNumberAttribute('data_storage_size_in_gb');
  }
  public set dataStorageSizeInGb(value: number | undefined) {
    this._dataStorageSizeInGb = value;
  }

  // database_edition - computed: false, optional: false, required: true
  private _databaseEdition: string;
  public get databaseEdition() {
    return this._databaseEdition;
  }
  public set databaseEdition(value: string) {
    this._databaseEdition = value;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // disk_redundancy - computed: true, optional: true, required: false
  private _diskRedundancy?: string;
  public get diskRedundancy() {
    return this._diskRedundancy ?? this.getStringAttribute('disk_redundancy');
  }
  public set diskRedundancy(value: string | undefined) {
    this._diskRedundancy = value;
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

  // fault_domains - computed: true, optional: true, required: false
  private _faultDomains?: string[];
  public get faultDomains() {
    return this._faultDomains ?? this.getListAttribute('fault_domains');
  }
  public set faultDomains(value: string[] | undefined) {
    this._faultDomains = value;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname: string;
  public get hostname() {
    return this._hostname;
  }
  public set hostname(value: string) {
    this._hostname = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // iorm_config_cache - computed: true, optional: false, required: true
  public iormConfigCache(index: string) {
    return new DatabaseDbSystemIormConfigCache(this, 'iorm_config_cache', index);
  }

  // last_maintenance_run_id - computed: true, optional: false, required: true
  public get lastMaintenanceRunId() {
    return this.getStringAttribute('last_maintenance_run_id');
  }

  // last_patch_history_entry_id - computed: true, optional: false, required: true
  public get lastPatchHistoryEntryId() {
    return this.getStringAttribute('last_patch_history_entry_id');
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

  // listener_port - computed: true, optional: false, required: true
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }

  // maintenance_window - computed: true, optional: false, required: true
  public maintenanceWindow(index: string) {
    return new DatabaseDbSystemMaintenanceWindow(this, 'maintenance_window', index);
  }

  // next_maintenance_run_id - computed: true, optional: false, required: true
  public get nextMaintenanceRunId() {
    return this.getStringAttribute('next_maintenance_run_id');
  }

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number;
  public get nodeCount() {
    return this._nodeCount ?? this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number | undefined) {
    this._nodeCount = value;
  }

  // nsg_ids - computed: false, optional: true, required: false
  private _nsgIds?: string[];
  public get nsgIds() {
    return this._nsgIds;
  }
  public set nsgIds(value: string[] | undefined) {
    this._nsgIds = value;
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

  // shape - computed: false, optional: false, required: true
  private _shape: string;
  public get shape() {
    return this._shape;
  }
  public set shape(value: string) {
    this._shape = value;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string;
  public get source() {
    return this._source ?? this.getStringAttribute('source');
  }
  public set source(value: string | undefined) {
    this._source = value;
  }

  // sparse_diskgroup - computed: true, optional: true, required: false
  private _sparseDiskgroup?: boolean;
  public get sparseDiskgroup() {
    return this._sparseDiskgroup ?? this.getBooleanAttribute('sparse_diskgroup');
  }
  public set sparseDiskgroup(value: boolean | undefined) {
    this._sparseDiskgroup = value;
  }

  // ssh_public_keys - computed: false, optional: false, required: true
  private _sshPublicKeys: string[];
  public get sshPublicKeys() {
    return this._sshPublicKeys;
  }
  public set sshPublicKeys(value: string[]) {
    this._sshPublicKeys = value;
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

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string;
  public get timeZone() {
    return this._timeZone ?? this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string | undefined) {
    this._timeZone = value;
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // vip_ids - computed: true, optional: false, required: true
  public get vipIds() {
    return this.getListAttribute('vip_ids');
  }

  // db_home - computed: false, optional: false, required: true
  private _dbHome: DatabaseDbSystemDbHome[];
  public get dbHome() {
    return this._dbHome;
  }
  public set dbHome(value: DatabaseDbSystemDbHome[]) {
    this._dbHome = value;
  }

  // db_system_options - computed: false, optional: true, required: false
  private _dbSystemOptions?: DatabaseDbSystemDbSystemOptions[];
  public get dbSystemOptions() {
    return this._dbSystemOptions;
  }
  public set dbSystemOptions(value: DatabaseDbSystemDbSystemOptions[] | undefined) {
    this._dbSystemOptions = value;
  }

  // maintenance_window_details - computed: false, optional: true, required: false
  private _maintenanceWindowDetails?: DatabaseDbSystemMaintenanceWindowDetails[];
  public get maintenanceWindowDetails() {
    return this._maintenanceWindowDetails;
  }
  public set maintenanceWindowDetails(value: DatabaseDbSystemMaintenanceWindowDetails[] | undefined) {
    this._maintenanceWindowDetails = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatabaseDbSystemTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatabaseDbSystemTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: this._availabilityDomain,
      backup_network_nsg_ids: this._backupNetworkNsgIds,
      backup_subnet_id: this._backupSubnetId,
      cluster_name: this._clusterName,
      compartment_id: this._compartmentId,
      cpu_core_count: this._cpuCoreCount,
      data_storage_percentage: this._dataStoragePercentage,
      data_storage_size_in_gb: this._dataStorageSizeInGb,
      database_edition: this._databaseEdition,
      defined_tags: this._definedTags,
      disk_redundancy: this._diskRedundancy,
      display_name: this._displayName,
      domain: this._domain,
      fault_domains: this._faultDomains,
      freeform_tags: this._freeformTags,
      hostname: this._hostname,
      license_model: this._licenseModel,
      node_count: this._nodeCount,
      nsg_ids: this._nsgIds,
      shape: this._shape,
      source: this._source,
      sparse_diskgroup: this._sparseDiskgroup,
      ssh_public_keys: this._sshPublicKeys,
      subnet_id: this._subnetId,
      time_zone: this._timeZone,
      db_home: this._dbHome,
      db_system_options: this._dbSystemOptions,
      maintenance_window_details: this._maintenanceWindowDetails,
      timeouts: this._timeouts,
    };
  }
}
