// https://www.terraform.io/docs/providers/oci/r/data_oci_nosql_tables.html
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
      "id": {
        "type": "string",
        "optional": true,
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
      "table_collection": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "ddl_statement": "string",
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
              "name": "string",
              "schema": [
                "list",
                [
                  "object",
                  {
                    "columns": [
                      "list",
                      [
                        "object",
                        {
                          "default_value": "string",
                          "is_nullable": "bool",
                          "name": "string",
                          "type": "string"
                        }
                      ]
                    ],
                    "primary_key": [
                      "list",
                      "string"
                    ],
                    "shard_key": [
                      "list",
                      "string"
                    ],
                    "ttl": "number"
                  }
                ]
              ],
              "state": "string",
              "table_limits": [
                "list",
                [
                  "object",
                  {
                    "max_read_units": "number",
                    "max_storage_in_gbs": "number",
                    "max_write_units": "number"
                  }
                ]
              ],
              "time_created": "string",
              "time_updated": "string"
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

export interface DataOciNosqlTablesConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly name?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciNosqlTablesFilter[];
}
export class DataOciNosqlTablesTableCollectionSchemaColumns extends ComplexComputedList {

  // default_value - computed: true, optional: false, required: true
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // is_nullable - computed: true, optional: false, required: true
  public get isNullable() {
    return this.getBooleanAttribute('is_nullable');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataOciNosqlTablesTableCollectionSchema extends ComplexComputedList {

  // columns - computed: true, optional: false, required: true
  public get columns() {
    return 'not implemented' as any;
  }

  // primary_key - computed: true, optional: false, required: true
  public get primaryKey() {
    return this.getListAttribute('primary_key');
  }

  // shard_key - computed: true, optional: false, required: true
  public get shardKey() {
    return this.getListAttribute('shard_key');
  }

  // ttl - computed: true, optional: false, required: true
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
}
export class DataOciNosqlTablesTableCollectionTableLimits extends ComplexComputedList {

  // max_read_units - computed: true, optional: false, required: true
  public get maxReadUnits() {
    return this.getNumberAttribute('max_read_units');
  }

  // max_storage_in_gbs - computed: true, optional: false, required: true
  public get maxStorageInGbs() {
    return this.getNumberAttribute('max_storage_in_gbs');
  }

  // max_write_units - computed: true, optional: false, required: true
  public get maxWriteUnits() {
    return this.getNumberAttribute('max_write_units');
  }
}
export class DataOciNosqlTablesTableCollection extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // ddl_statement - computed: true, optional: false, required: true
  public get ddlStatement() {
    return this.getStringAttribute('ddl_statement');
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

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // schema - computed: true, optional: false, required: true
  public get schema() {
    return 'not implemented' as any;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // table_limits - computed: true, optional: false, required: true
  public get tableLimits() {
    return 'not implemented' as any;
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
export interface DataOciNosqlTablesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciNosqlTables extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciNosqlTablesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_nosql_tables',
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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // table_collection - computed: true, optional: false, required: true
  public tableCollection(index: string) {
    return new DataOciNosqlTablesTableCollection(this, 'table_collection', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciNosqlTablesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciNosqlTablesFilter[] | undefined) {
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
      filter: this._filter,
    };
  }
}
