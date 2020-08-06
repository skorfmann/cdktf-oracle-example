// https://www.terraform.io/docs/providers/oci/r/data_oci_mysql_mysql_backups.html
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
      "backups": {
        "type": [
          "list",
          [
            "object",
            {
              "backup_size_in_gbs": "number",
              "backup_type": "string",
              "compartment_id": "string",
              "creation_type": "string",
              "data_storage_size_in_gb": "number",
              "db_system_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "description": "string",
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "lifecycle_details": "string",
              "mysql_version": "string",
              "retention_in_days": "number",
              "shape_name": "string",
              "state": "string",
              "time_created": "string",
              "time_updated": "string"
            }
          ]
        ],
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
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

export interface DataOciMysqlMysqlBackupsConfig extends TerraformMetaArguments {
  readonly backupId?: string;
  readonly compartmentId: string;
  readonly dbSystemId?: string;
  readonly displayName?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciMysqlMysqlBackupsFilter[];
}
export class DataOciMysqlMysqlBackupsBackups extends ComplexComputedList {

  // backup_size_in_gbs - computed: true, optional: false, required: true
  public get backupSizeInGbs() {
    return this.getNumberAttribute('backup_size_in_gbs');
  }

  // backup_type - computed: true, optional: false, required: true
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // creation_type - computed: true, optional: false, required: true
  public get creationType() {
    return this.getStringAttribute('creation_type');
  }

  // data_storage_size_in_gb - computed: true, optional: false, required: true
  public get dataStorageSizeInGb() {
    return this.getNumberAttribute('data_storage_size_in_gb');
  }

  // db_system_id - computed: true, optional: false, required: true
  public get dbSystemId() {
    return this.getStringAttribute('db_system_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
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

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // mysql_version - computed: true, optional: false, required: true
  public get mysqlVersion() {
    return this.getStringAttribute('mysql_version');
  }

  // retention_in_days - computed: true, optional: false, required: true
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }

  // shape_name - computed: true, optional: false, required: true
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}
export interface DataOciMysqlMysqlBackupsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciMysqlMysqlBackups extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciMysqlMysqlBackupsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_mysql_mysql_backups',
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

  // backups - computed: true, optional: false, required: true
  public backups(index: string) {
    return new DataOciMysqlMysqlBackupsBackups(this, 'backups', index);
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
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

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciMysqlMysqlBackupsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciMysqlMysqlBackupsFilter[] | undefined) {
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
      filter: this._filter,
    };
  }
}
