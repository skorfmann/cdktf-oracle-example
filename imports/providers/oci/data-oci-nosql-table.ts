// https://www.terraform.io/docs/providers/oci/r/data_oci_nosql_table.html
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
      "ddl_statement": {
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
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "computed": true
      },
      "schema": {
        "type": [
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
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "table_limits": {
        "type": [
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
        "computed": true
      },
      "table_name_or_id": {
        "type": "string",
        "required": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_updated": {
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
import { StringMap } from "cdktf";
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciNosqlTableConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly tableNameOrId: string;
}
export class DataOciNosqlTableSchemaColumns extends ComplexComputedList {

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
export class DataOciNosqlTableSchema extends ComplexComputedList {

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
export class DataOciNosqlTableTableLimits extends ComplexComputedList {

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

// Resource

export class DataOciNosqlTable extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciNosqlTableConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_nosql_table',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._tableNameOrId = config.tableNameOrId;
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

  // ddl_statement - computed: true, optional: false, required: true
  public get ddlStatement() {
    return this.getStringAttribute('ddl_statement');
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

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // schema - computed: true, optional: false, required: true
  public schema(index: string) {
    return new DataOciNosqlTableSchema(this, 'schema', index);
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // table_limits - computed: true, optional: false, required: true
  public tableLimits(index: string) {
    return new DataOciNosqlTableTableLimits(this, 'table_limits', index);
  }

  // table_name_or_id - computed: false, optional: false, required: true
  private _tableNameOrId: string;
  public get tableNameOrId() {
    return this._tableNameOrId;
  }
  public set tableNameOrId(value: string) {
    this._tableNameOrId = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      table_name_or_id: this._tableNameOrId,
    };
  }
}
