// https://www.terraform.io/docs/providers/oci/r/data_oci_database_autonomous_database_backups.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "autonomous_database_backups": {
        "type": [
          "list",
          [
            "object",
            {
              "autonomous_database_id": "string",
              "compartment_id": "string",
              "database_size_in_tbs": "number",
              "display_name": "string",
              "id": "string",
              "is_automatic": "bool",
              "is_restorable": "bool",
              "lifecycle_details": "string",
              "state": "string",
              "time_ended": "string",
              "time_started": "string",
              "type": "string"
            }
          ]
        ],
        "computed": true
      },
      "autonomous_database_id": {
        "type": "string",
        "optional": true
      },
      "compartment_id": {
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

export interface DataOciDatabaseAutonomousDatabaseBackupsConfig extends TerraformMetaArguments {
  readonly autonomousDatabaseId?: string;
  readonly compartmentId?: string;
  readonly displayName?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciDatabaseAutonomousDatabaseBackupsFilter[];
}
export class DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups extends ComplexComputedList {

  // autonomous_database_id - computed: true, optional: false, required: true
  public get autonomousDatabaseId() {
    return this.getStringAttribute('autonomous_database_id');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // database_size_in_tbs - computed: true, optional: false, required: true
  public get databaseSizeInTbs() {
    return this.getNumberAttribute('database_size_in_tbs');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_automatic - computed: true, optional: false, required: true
  public get isAutomatic() {
    return this.getBooleanAttribute('is_automatic');
  }

  // is_restorable - computed: true, optional: false, required: true
  public get isRestorable() {
    return this.getBooleanAttribute('is_restorable');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_ended - computed: true, optional: false, required: true
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }

  // time_started - computed: true, optional: false, required: true
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataOciDatabaseAutonomousDatabaseBackupsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseAutonomousDatabaseBackups extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousDatabaseBackupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_database_backups',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autonomousDatabaseId = config.autonomousDatabaseId;
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._state = config.state;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_database_backups - computed: true, optional: false, required: true
  public autonomousDatabaseBackups(index: string) {
    return new DataOciDatabaseAutonomousDatabaseBackupsAutonomousDatabaseBackups(this, 'autonomous_database_backups', index);
  }

  // autonomous_database_id - computed: false, optional: true, required: false
  private _autonomousDatabaseId?: string;
  public get autonomousDatabaseId() {
    return this._autonomousDatabaseId;
  }
  public set autonomousDatabaseId(value: string | undefined) {
    this._autonomousDatabaseId = value;
  }

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string | undefined) {
    this._compartmentId = value;
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
  private _filter?: DataOciDatabaseAutonomousDatabaseBackupsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseAutonomousDatabaseBackupsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_database_id: this._autonomousDatabaseId,
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      state: this._state,
      filter: this._filter,
    };
  }
}
