// https://www.terraform.io/docs/providers/oci/r/database_database.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "character_set": {
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
              "cdb_default": "string",
              "cdb_ip_default": "string"
            }
          ]
        ],
        "computed": true
      },
      "db_backup_config": {
        "type": [
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
        "computed": true
      },
      "db_home_id": {
        "type": "string",
        "required": true
      },
      "db_name": {
        "type": "string",
        "computed": true
      },
      "db_system_id": {
        "type": "string",
        "computed": true
      },
      "db_unique_name": {
        "type": "string",
        "computed": true
      },
      "db_version": {
        "type": "string",
        "optional": true,
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
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "last_backup_timestamp": {
        "type": "string",
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "ncharacter_set": {
        "type": "string",
        "computed": true
      },
      "pdb_name": {
        "type": "string",
        "computed": true
      },
      "source": {
        "type": "string",
        "required": true
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
              "optional": true
            },
            "backup_tde_password": {
              "type": "string",
              "optional": true,
              "sensitive": true
            },
            "character_set": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "db_name": {
              "type": "string",
              "required": true
            },
            "db_unique_name": {
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
            "freeform_tags": {
              "type": [
                "map",
                "string"
              ],
              "optional": true,
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
                          "optional": true
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
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DatabaseDatabaseConfig extends TerraformMetaArguments {
  readonly dbHomeId: string;
  readonly dbVersion?: string;
  readonly source: string;
  /** database block */
  readonly database: DatabaseDatabaseDatabase[];
  /** timeouts block */
  readonly timeouts?: DatabaseDatabaseTimeouts;
}
export class DatabaseDatabaseConnectionStrings extends ComplexComputedList {

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
export class DatabaseDatabaseDbBackupConfigBackupDestinationDetails extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DatabaseDatabaseDbBackupConfig extends ComplexComputedList {

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
export interface DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails {
  readonly id?: string;
  readonly type?: string;
}
export interface DatabaseDatabaseDatabaseDbBackupConfig {
  readonly autoBackupEnabled?: boolean;
  readonly autoBackupWindow?: string;
  readonly recoveryWindowInDays?: number;
  /** backup_destination_details block */
  readonly backupDestinationDetails?: DatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails[];
}
export interface DatabaseDatabaseDatabase {
  readonly adminPassword: string;
  readonly backupId?: string;
  readonly backupTdePassword?: string;
  readonly characterSet?: string;
  readonly dbName: string;
  readonly dbUniqueName?: string;
  readonly dbWorkload?: string;
  readonly definedTags?: { [key: string]: string };
  readonly freeformTags?: { [key: string]: string };
  readonly ncharacterSet?: string;
  readonly pdbName?: string;
  /** db_backup_config block */
  readonly dbBackupConfig?: DatabaseDatabaseDatabaseDbBackupConfig[];
}
export interface DatabaseDatabaseTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DatabaseDatabase extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatabaseDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_database',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dbHomeId = config.dbHomeId;
    this._dbVersion = config.dbVersion;
    this._source = config.source;
    this._database = config.database;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // character_set - computed: true, optional: false, required: true
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_strings - computed: true, optional: false, required: true
  public connectionStrings(index: string) {
    return new DatabaseDatabaseConnectionStrings(this, 'connection_strings', index);
  }

  // db_backup_config - computed: true, optional: false, required: true
  public dbBackupConfig(index: string) {
    return new DatabaseDatabaseDbBackupConfig(this, 'db_backup_config', index);
  }

  // db_home_id - computed: false, optional: false, required: true
  private _dbHomeId: string;
  public get dbHomeId() {
    return this._dbHomeId;
  }
  public set dbHomeId(value: string) {
    this._dbHomeId = value;
  }

  // db_name - computed: true, optional: false, required: true
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // db_system_id - computed: true, optional: false, required: true
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }

  // db_unique_name - computed: true, optional: false, required: true
  public get dbUniqueName() {
    return this.getStringAttribute('db_unique_name');
  }

  // db_version - computed: true, optional: true, required: false
  private _dbVersion?: string;
  public get dbVersion() {
    return this._dbVersion ?? this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string | undefined) {
    this._dbVersion = value;
  }

  // db_workload - computed: true, optional: false, required: true
  public get dbWorkload() {
    return this.getStringAttribute('db_workload');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_backup_timestamp - computed: true, optional: false, required: true
  public get lastBackupTimestamp() {
    return this.getStringAttribute('last_backup_timestamp');
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

  // source - computed: false, optional: false, required: true
  private _source: string;
  public get source() {
    return this._source;
  }
  public set source(value: string) {
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

  // vm_cluster_id - computed: true, optional: false, required: true
  public get vmClusterId() {
    return this.getStringAttribute('vm_cluster_id');
  }

  // database - computed: false, optional: false, required: true
  private _database: DatabaseDatabaseDatabase[];
  public get database() {
    return this._database;
  }
  public set database(value: DatabaseDatabaseDatabase[]) {
    this._database = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatabaseDatabaseTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatabaseDatabaseTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      db_home_id: this._dbHomeId,
      db_version: this._dbVersion,
      source: this._source,
      database: this._database,
      timeouts: this._timeouts,
    };
  }
}
