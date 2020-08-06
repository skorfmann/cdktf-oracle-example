// https://www.terraform.io/docs/providers/oci/r/data_oci_database_db_homes.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "backup_id": {
        "type": "string",
        "optional": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "db_homes": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
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
                    "one_off_patches": [
                      "list",
                      "string"
                    ],
                    "pdb_name": "string",
                    "state": "string",
                    "time_created": "string",
                    "time_stamp_for_point_in_time_recovery": "string"
                  }
                ]
              ],
              "db_home_id": "string",
              "db_home_location": "string",
              "db_system_id": "string",
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
              "source": "string",
              "state": "string",
              "time_created": "string",
              "vm_cluster_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "db_system_id": {
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
      "state": {
        "type": "string",
        "optional": true
      },
      "vm_cluster_id": {
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

export interface DataOciDatabaseDbHomesConfig extends TerraformMetaArguments {
  readonly backupId?: string;
  readonly compartmentId: string;
  readonly dbSystemId?: string;
  readonly displayName?: string;
  readonly state?: string;
  readonly vmClusterId?: string;
  /** filter block */
  readonly filter?: DataOciDatabaseDbHomesFilter[];
}
export class DataOciDatabaseDbHomesDbHomesDatabaseConnectionStrings extends ComplexComputedList {

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
export class DataOciDatabaseDbHomesDbHomesDatabaseDbBackupConfigBackupDestinationDetails extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataOciDatabaseDbHomesDbHomesDatabaseDbBackupConfig extends ComplexComputedList {

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
export class DataOciDatabaseDbHomesDbHomesDatabase extends ComplexComputedList {

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

  // one_off_patches - computed: true, optional: false, required: true
  public get oneOffPatches() {
    return this.getListAttribute('one_off_patches');
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
export class DataOciDatabaseDbHomesDbHomes extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // database - computed: true, optional: false, required: true
  public get database() {
    return 'not implemented' as any;
  }

  // db_home_id - computed: true, optional: false, required: true
  public get dbHomeId() {
    return this.getStringAttribute('db_home_id');
  }

  // db_home_location - computed: true, optional: false, required: true
  public get dbHomeLocation() {
    return this.getStringAttribute('db_home_location');
  }

  // db_system_id - computed: true, optional: false, required: true
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
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
export interface DataOciDatabaseDbHomesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseDbHomes extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseDbHomesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_db_homes',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backupId = config.backupId;
    this._compartmentId = config.compartmentId;
    this._dbSystemId = config.dbSystemId;
    this._displayName = config.displayName;
    this._state = config.state;
    this._vmClusterId = config.vmClusterId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // db_homes - computed: true, optional: false, required: true
  public dbHomes(index: string) {
    return new DataOciDatabaseDbHomesDbHomes(this, 'db_homes', index);
  }

  // db_system_id - computed: false, optional: true, required: false
  private _dbSystemId?: string;
  public get dbSystemId() {
    return this._dbSystemId;
  }
  public set dbSystemId(value: string | undefined) {
    this._dbSystemId = value;
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

  // vm_cluster_id - computed: false, optional: true, required: false
  private _vmClusterId?: string;
  public get vmClusterId() {
    return this._vmClusterId;
  }
  public set vmClusterId(value: string | undefined) {
    this._vmClusterId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDatabaseDbHomesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseDbHomesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_id: this._backupId,
      compartment_id: this._compartmentId,
      db_system_id: this._dbSystemId,
      display_name: this._displayName,
      state: this._state,
      vm_cluster_id: this._vmClusterId,
      filter: this._filter,
    };
  }
}
