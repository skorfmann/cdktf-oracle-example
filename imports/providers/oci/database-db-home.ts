// https://www.terraform.io/docs/providers/oci/r/database_db_home.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "db_home_location": {
        "type": "string",
        "computed": true
      },
      "db_system_id": {
        "type": "string",
        "optional": true,
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
        "optional": true,
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
      "source": {
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
      "vm_cluster_id": {
        "type": "string",
        "optional": true,
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
            "one_off_patches": {
              "type": [
                "list",
                "string"
              ],
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

// Configuration

export interface DatabaseDbHomeConfig extends TerraformMetaArguments {
  readonly dbSystemId?: string;
  readonly dbVersion?: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly source?: string;
  readonly vmClusterId?: string;
  /** database block */
  readonly database: DatabaseDbHomeDatabase[];
  /** timeouts block */
  readonly timeouts?: DatabaseDbHomeTimeouts;
}
export interface DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails {
  readonly id?: string;
  readonly type?: string;
}
export interface DatabaseDbHomeDatabaseDbBackupConfig {
  readonly autoBackupEnabled?: boolean;
  readonly autoBackupWindow?: string;
  readonly recoveryWindowInDays?: number;
  /** backup_destination_details block */
  readonly backupDestinationDetails?: DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails[];
}
export interface DatabaseDbHomeDatabase {
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
  readonly dbBackupConfig?: DatabaseDbHomeDatabaseDbBackupConfig[];
}
export interface DatabaseDbHomeTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DatabaseDbHome extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatabaseDbHomeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_db_home',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dbSystemId = config.dbSystemId;
    this._dbVersion = config.dbVersion;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._source = config.source;
    this._vmClusterId = config.vmClusterId;
    this._database = config.database;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // db_home_location - computed: true, optional: false, required: true
  public get dbHomeLocation() {
    return this.getStringAttribute('db_home_location');
  }

  // db_system_id - computed: true, optional: true, required: false
  private _dbSystemId?: string;
  public get dbSystemId() {
    return this._dbSystemId ?? this.getStringAttribute('db_system_id');
  }
  public set dbSystemId(value: string | undefined) {
    this._dbSystemId = value;
  }

  // db_version - computed: true, optional: true, required: false
  private _dbVersion?: string;
  public get dbVersion() {
    return this._dbVersion ?? this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string | undefined) {
    this._dbVersion = value;
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

  // last_patch_history_entry_id - computed: true, optional: false, required: true
  public get lastPatchHistoryEntryId() {
    return this.getStringAttribute('last_patch_history_entry_id');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // source - computed: true, optional: true, required: false
  private _source?: string;
  public get source() {
    return this._source ?? this.getStringAttribute('source');
  }
  public set source(value: string | undefined) {
    this._source = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // vm_cluster_id - computed: true, optional: true, required: false
  private _vmClusterId?: string;
  public get vmClusterId() {
    return this._vmClusterId ?? this.getStringAttribute('vm_cluster_id');
  }
  public set vmClusterId(value: string | undefined) {
    this._vmClusterId = value;
  }

  // database - computed: false, optional: false, required: true
  private _database: DatabaseDbHomeDatabase[];
  public get database() {
    return this._database;
  }
  public set database(value: DatabaseDbHomeDatabase[]) {
    this._database = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatabaseDbHomeTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatabaseDbHomeTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      db_system_id: this._dbSystemId,
      db_version: this._dbVersion,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      source: this._source,
      vm_cluster_id: this._vmClusterId,
      database: this._database,
      timeouts: this._timeouts,
    };
  }
}
