// https://www.terraform.io/docs/providers/oci/r/data_oci_database_db_home_patch_history_entries.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "db_home_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "patch_history_entries": {
        "type": [
          "list",
          [
            "object",
            {
              "action": "string",
              "id": "string",
              "lifecycle_details": "string",
              "patch_id": "string",
              "state": "string",
              "time_ended": "string",
              "time_started": "string"
            }
          ]
        ],
        "computed": true
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

export interface DataOciDatabaseDbHomePatchHistoryEntriesConfig extends TerraformMetaArguments {
  readonly dbHomeId: string;
  /** filter block */
  readonly filter?: DataOciDatabaseDbHomePatchHistoryEntriesFilter[];
}
export class DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntries extends ComplexComputedList {

  // action - computed: true, optional: false, required: true
  public get action() {
    return this.getStringAttribute('action');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // patch_id - computed: true, optional: false, required: true
  public get patchId() {
    return this.getStringAttribute('patch_id');
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
}
export interface DataOciDatabaseDbHomePatchHistoryEntriesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseDbHomePatchHistoryEntries extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseDbHomePatchHistoryEntriesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_db_home_patch_history_entries',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dbHomeId = config.dbHomeId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_home_id - computed: false, optional: false, required: true
  private _dbHomeId: string;
  public get dbHomeId() {
    return this._dbHomeId;
  }
  public set dbHomeId(value: string) {
    this._dbHomeId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // patch_history_entries - computed: true, optional: false, required: true
  public patchHistoryEntries(index: string) {
    return new DataOciDatabaseDbHomePatchHistoryEntriesPatchHistoryEntries(this, 'patch_history_entries', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDatabaseDbHomePatchHistoryEntriesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseDbHomePatchHistoryEntriesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      db_home_id: this._dbHomeId,
      filter: this._filter,
    };
  }
}
