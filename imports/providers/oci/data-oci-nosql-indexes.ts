// https://www.terraform.io/docs/providers/oci/r/data_oci_nosql_indexes.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "index_collection": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "id": "string",
              "is_if_not_exists": "bool",
              "keys": [
                "list",
                [
                  "object",
                  {
                    "column_name": "string",
                    "json_field_type": "string",
                    "json_path": "string"
                  }
                ]
              ],
              "lifecycle_details": "string",
              "name": "string",
              "state": "string",
              "table_id": "string",
              "table_name": "string",
              "table_name_or_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true
      },
      "state": {
        "type": "string",
        "optional": true
      },
      "table_name_or_id": {
        "type": "string",
        "required": true
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

export interface DataOciNosqlIndexesConfig extends TerraformMetaArguments {
  readonly compartmentId?: string;
  readonly name?: string;
  readonly state?: string;
  readonly tableNameOrId: string;
  /** filter block */
  readonly filter?: DataOciNosqlIndexesFilter[];
}
export class DataOciNosqlIndexesIndexCollectionKeys extends ComplexComputedList {

  // column_name - computed: true, optional: false, required: true
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // json_field_type - computed: true, optional: false, required: true
  public get jsonFieldType() {
    return this.getStringAttribute('json_field_type');
  }

  // json_path - computed: true, optional: false, required: true
  public get jsonPath() {
    return this.getStringAttribute('json_path');
  }
}
export class DataOciNosqlIndexesIndexCollection extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_if_not_exists - computed: true, optional: false, required: true
  public get isIfNotExists() {
    return this.getBooleanAttribute('is_if_not_exists');
  }

  // keys - computed: true, optional: false, required: true
  public get keys() {
    return 'not implemented' as any;
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // table_id - computed: true, optional: false, required: true
  public get tableId() {
    return this.getStringAttribute('table_id');
  }

  // table_name - computed: true, optional: false, required: true
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // table_name_or_id - computed: true, optional: false, required: true
  public get tableNameOrId() {
    return this.getStringAttribute('table_name_or_id');
  }
}
export interface DataOciNosqlIndexesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciNosqlIndexes extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciNosqlIndexesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_nosql_indexes',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._name = config.name;
    this._state = config.state;
    this._tableNameOrId = config.tableNameOrId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string | undefined) {
    this._compartmentId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // index_collection - computed: true, optional: false, required: true
  public indexCollection(index: string) {
    return new DataOciNosqlIndexesIndexCollection(this, 'index_collection', index);
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // table_name_or_id - computed: false, optional: false, required: true
  private _tableNameOrId: string;
  public get tableNameOrId() {
    return this._tableNameOrId;
  }
  public set tableNameOrId(value: string) {
    this._tableNameOrId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciNosqlIndexesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciNosqlIndexesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      name: this._name,
      state: this._state,
      table_name_or_id: this._tableNameOrId,
      filter: this._filter,
    };
  }
}
