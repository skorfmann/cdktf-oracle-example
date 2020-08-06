// https://www.terraform.io/docs/providers/oci/r/mysql_mysql_backup.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "backup_size_in_gbs": {
        "type": "number",
        "computed": true
      },
      "backup_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "creation_type": {
        "type": "string",
        "computed": true
      },
      "data_storage_size_in_gb": {
        "type": "number",
        "computed": true
      },
      "db_system_id": {
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
      "description": {
        "type": "string",
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
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "mysql_version": {
        "type": "string",
        "computed": true
      },
      "retention_in_days": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "shape_name": {
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
      "time_updated": {
        "type": "string",
        "computed": true
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

// Configuration

export interface MysqlMysqlBackupConfig extends TerraformMetaArguments {
  readonly backupType?: string;
  readonly dbSystemId: string;
  readonly definedTags?: { [key: string]: string };
  readonly description?: string;
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly retentionInDays?: number;
  /** timeouts block */
  readonly timeouts?: MysqlMysqlBackupTimeouts;
}
export interface MysqlMysqlBackupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class MysqlMysqlBackup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MysqlMysqlBackupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_mysql_mysql_backup',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backupType = config.backupType;
    this._dbSystemId = config.dbSystemId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._retentionInDays = config.retentionInDays;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_size_in_gbs - computed: true, optional: false, required: true
  public get backupSizeInGbs() {
    return this.getNumberAttribute('backup_size_in_gbs');
  }

  // backup_type - computed: true, optional: true, required: false
  private _backupType?: string;
  public get backupType() {
    return this._backupType ?? this.getStringAttribute('backup_type');
  }
  public set backupType(value: string | undefined) {
    this._backupType = value;
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

  // db_system_id - computed: false, optional: false, required: true
  private _dbSystemId: string;
  public get dbSystemId() {
    return this._dbSystemId;
  }
  public set dbSystemId(value: string) {
    this._dbSystemId = value;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description ?? this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
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

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // mysql_version - computed: true, optional: false, required: true
  public get mysqlVersion() {
    return this.getStringAttribute('mysql_version');
  }

  // retention_in_days - computed: true, optional: true, required: false
  private _retentionInDays?: number;
  public get retentionInDays() {
    return this._retentionInDays ?? this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number | undefined) {
    this._retentionInDays = value;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MysqlMysqlBackupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: MysqlMysqlBackupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_type: this._backupType,
      db_system_id: this._dbSystemId,
      defined_tags: this._definedTags,
      description: this._description,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      retention_in_days: this._retentionInDays,
      timeouts: this._timeouts,
    };
  }
}
