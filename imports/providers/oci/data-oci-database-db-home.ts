// https://www.terraform.io/docs/providers/oci/r/data_oci_database_db_home.html
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
      "database": {
        "type": [
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
        "computed": true
      },
      "db_home_id": {
        "type": "string",
        "required": true
      },
      "db_home_location": {
        "type": "string",
        "computed": true
      },
      "db_system_id": {
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

export interface DataOciDatabaseDbHomeConfig extends TerraformMetaArguments {
  readonly dbHomeId: string;
}
export class DataOciDatabaseDbHomeDatabaseConnectionStrings extends ComplexComputedList {

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
export class DataOciDatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataOciDatabaseDbHomeDatabaseDbBackupConfig extends ComplexComputedList {

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
export class DataOciDatabaseDbHomeDatabase extends ComplexComputedList {

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

// Resource

export class DataOciDatabaseDbHome extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseDbHomeConfig) {
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
    this._dbHomeId = config.dbHomeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // database - computed: true, optional: false, required: true
  public database(index: string) {
    return new DataOciDatabaseDbHomeDatabase(this, 'database', index);
  }

  // db_home_id - computed: false, optional: false, required: true
  private _dbHomeId: string;
  public get dbHomeId() {
    return this._dbHomeId;
  }
  public set dbHomeId(value: string) {
    this._dbHomeId = value;
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      db_home_id: this._dbHomeId,
    };
  }
}
