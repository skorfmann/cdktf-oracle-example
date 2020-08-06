// https://www.terraform.io/docs/providers/oci/r/data_oci_database_databases.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "databases": {
        "type": [
          "list",
          [
            "object",
            {
              "character_set": "string",
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
                    "cdb_default": "string",
                    "cdb_ip_default": "string"
                  }
                ]
              ],
              "database": [
                "list",
                [
                  "object",
                  {
                    "admin_password": "string",
                    "backup_id": "string",
                    "backup_tde_password": "string",
                    "character_set": "string",
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
                    "ncharacter_set": "string",
                    "pdb_name": "string"
                  }
                ]
              ],
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
              "db_home_id": "string",
              "db_name": "string",
              "db_system_id": "string",
              "db_unique_name": "string",
              "db_version": "string",
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
              "last_backup_timestamp": "string",
              "lifecycle_details": "string",
              "ncharacter_set": "string",
              "pdb_name": "string",
              "source": "string",
              "state": "string",
              "time_created": "string",
              "vm_cluster_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "db_home_id": {
        "type": "string",
        "optional": true
      },
      "db_name": {
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
      },
      "system_id": {
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

export interface DataOciDatabaseDatabasesConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly dbHomeId?: string;
  readonly dbName?: string;
  readonly state?: string;
  readonly systemId?: string;
  /** filter block */
  readonly filter?: DataOciDatabaseDatabasesFilter[];
}
export class DataOciDatabaseDatabasesDatabasesConnectionStrings extends ComplexComputedList {

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
export class DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfigBackupDestinationDetails extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataOciDatabaseDatabasesDatabasesDatabaseDbBackupConfig extends ComplexComputedList {

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
export class DataOciDatabaseDatabasesDatabasesDatabase extends ComplexComputedList {

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

  // ncharacter_set - computed: true, optional: false, required: true
  public get ncharacterSet() {
    return this.getStringAttribute('ncharacter_set');
  }

  // pdb_name - computed: true, optional: false, required: true
  public get pdbName() {
    return this.getStringAttribute('pdb_name');
  }
}
export class DataOciDatabaseDatabasesDatabasesDbBackupConfigBackupDestinationDetails extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataOciDatabaseDatabasesDatabasesDbBackupConfig extends ComplexComputedList {

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
export class DataOciDatabaseDatabasesDatabases extends ComplexComputedList {

  // character_set - computed: true, optional: false, required: true
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_strings - computed: true, optional: false, required: true
  public get connectionStrings() {
    return 'not implemented' as any;
  }

  // database - computed: true, optional: false, required: true
  public get database() {
    return 'not implemented' as any;
  }

  // db_backup_config - computed: true, optional: false, required: true
  public get dbBackupConfig() {
    return 'not implemented' as any;
  }

  // db_home_id - computed: true, optional: false, required: true
  public get dbHomeId() {
    return this.getStringAttribute('db_home_id');
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

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
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

  // source - computed: true, optional: false, required: true
  public get source() {
    return this.getStringAttribute('source');
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
}
export interface DataOciDatabaseDatabasesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseDatabases extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseDatabasesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_databases',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._dbHomeId = config.dbHomeId;
    this._dbName = config.dbName;
    this._state = config.state;
    this._systemId = config.systemId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // databases - computed: true, optional: false, required: true
  public databases(index: string) {
    return new DataOciDatabaseDatabasesDatabases(this, 'databases', index);
  }

  // db_home_id - computed: false, optional: true, required: false
  private _dbHomeId?: string;
  public get dbHomeId() {
    return this._dbHomeId;
  }
  public set dbHomeId(value: string | undefined) {
    this._dbHomeId = value;
  }

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string;
  public get dbName() {
    return this._dbName;
  }
  public set dbName(value: string | undefined) {
    this._dbName = value;
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

  // system_id - computed: false, optional: true, required: false
  private _systemId?: string;
  public get systemId() {
    return this._systemId;
  }
  public set systemId(value: string | undefined) {
    this._systemId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDatabaseDatabasesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseDatabasesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      db_home_id: this._dbHomeId,
      db_name: this._dbName,
      state: this._state,
      system_id: this._systemId,
      filter: this._filter,
    };
  }
}
