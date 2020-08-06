// https://www.terraform.io/docs/providers/oci/r/data_oci_database_backups.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "backups": {
        "type": [
          "list",
          [
            "object",
            {
              "availability_domain": "string",
              "compartment_id": "string",
              "database_edition": "string",
              "database_id": "string",
              "database_size_in_gbs": "number",
              "display_name": "string",
              "id": "string",
              "lifecycle_details": "string",
              "shape": "string",
              "state": "string",
              "time_ended": "string",
              "time_started": "string",
              "type": "string",
              "version": "string"
            }
          ]
        ],
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "optional": true
      },
      "database_id": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
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

export interface DataOciDatabaseBackupsConfig extends TerraformMetaArguments {
  readonly compartmentId?: string;
  readonly databaseId?: string;
  /** filter block */
  readonly filter?: DataOciDatabaseBackupsFilter[];
}
export class DataOciDatabaseBackupsBackups extends ComplexComputedList {

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // database_edition - computed: true, optional: false, required: true
  public get databaseEdition() {
    return this.getStringAttribute('database_edition');
  }

  // database_id - computed: true, optional: false, required: true
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }

  // database_size_in_gbs - computed: true, optional: false, required: true
  public get databaseSizeInGbs() {
    return this.getNumberAttribute('database_size_in_gbs');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
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

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataOciDatabaseBackupsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseBackups extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseBackupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_database_backups',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._databaseId = config.databaseId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backups - computed: true, optional: false, required: true
  public backups(index: string) {
    return new DataOciDatabaseBackupsBackups(this, 'backups', index);
  }

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string | undefined) {
    this._compartmentId = value;
  }

  // database_id - computed: false, optional: true, required: false
  private _databaseId?: string;
  public get databaseId() {
    return this._databaseId;
  }
  public set databaseId(value: string | undefined) {
    this._databaseId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDatabaseBackupsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseBackupsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      database_id: this._databaseId,
      filter: this._filter,
    };
  }
}
