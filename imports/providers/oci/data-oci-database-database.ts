// https://www.terraform.io/docs/providers/oci/r/data_oci_database_database.html
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
        "computed": true
      },
      "database_id": {
        "type": "string",
        "required": true
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
        "computed": true
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

export interface DataOciDatabaseDatabaseConfig extends TerraformMetaArguments {
  readonly databaseId: string;
}
export class DataOciDatabaseDatabaseConnectionStrings extends ComplexComputedList {

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
export class DataOciDatabaseDatabaseDatabaseDbBackupConfigBackupDestinationDetails extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataOciDatabaseDatabaseDatabaseDbBackupConfig extends ComplexComputedList {

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
export class DataOciDatabaseDatabaseDatabase extends ComplexComputedList {

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
export class DataOciDatabaseDatabaseDbBackupConfigBackupDestinationDetails extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataOciDatabaseDatabaseDbBackupConfig extends ComplexComputedList {

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

// Resource

export class DataOciDatabaseDatabase extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseDatabaseConfig) {
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
    this._databaseId = config.databaseId;
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
    return new DataOciDatabaseDatabaseConnectionStrings(this, 'connection_strings', index);
  }

  // database - computed: true, optional: false, required: true
  public database(index: string) {
    return new DataOciDatabaseDatabaseDatabase(this, 'database', index);
  }

  // database_id - computed: false, optional: false, required: true
  private _databaseId: string;
  public get databaseId() {
    return this._databaseId;
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }

  // db_backup_config - computed: true, optional: false, required: true
  public dbBackupConfig(index: string) {
    return new DataOciDatabaseDatabaseDbBackupConfig(this, 'db_backup_config', index);
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
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      database_id: this._databaseId,
    };
  }
}
