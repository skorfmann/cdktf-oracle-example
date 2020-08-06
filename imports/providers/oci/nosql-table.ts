// https://www.terraform.io/docs/providers/oci/r/nosql_table.html
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
      "name": {
        "type": "string",
        "required": true
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
      "table_limits": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "max_read_units": {
              "type": "number",
              "required": true
            },
            "max_storage_in_gbs": {
              "type": "number",
              "required": true
            },
            "max_write_units": {
              "type": "number",
              "required": true
            }
          }
        },
        "min_items": 1,
        "max_items": 1
      },
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface NosqlTableConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly ddlStatement: string;
  readonly definedTags?: { [key: string]: string };
  readonly freeformTags?: { [key: string]: string };
  readonly name: string;
  /** table_limits block */
  readonly tableLimits: NosqlTableTableLimits[];
  /** timeouts block */
  readonly timeouts?: NosqlTableTimeouts;
}
export class NosqlTableSchemaColumns extends ComplexComputedList {

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
export class NosqlTableSchema extends ComplexComputedList {

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
export interface NosqlTableTableLimits {
  readonly maxReadUnits: number;
  readonly maxStorageInGbs: number;
  readonly maxWriteUnits: number;
}
export interface NosqlTableTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class NosqlTable extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NosqlTableConfig) {
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
    this._ddlStatement = config.ddlStatement;
    this._definedTags = config.definedTags;
    this._freeformTags = config.freeformTags;
    this._name = config.name;
    this._tableLimits = config.tableLimits;
    this._timeouts = config.timeouts;
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

  // ddl_statement - computed: false, optional: false, required: true
  private _ddlStatement: string;
  public get ddlStatement() {
    return this._ddlStatement;
  }
  public set ddlStatement(value: string) {
    this._ddlStatement = value;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
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

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // schema - computed: true, optional: false, required: true
  public schema(index: string) {
    return new NosqlTableSchema(this, 'schema', index);
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

  // table_limits - computed: false, optional: false, required: true
  private _tableLimits: NosqlTableTableLimits[];
  public get tableLimits() {
    return this._tableLimits;
  }
  public set tableLimits(value: NosqlTableTableLimits[]) {
    this._tableLimits = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NosqlTableTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: NosqlTableTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      ddl_statement: this._ddlStatement,
      defined_tags: this._definedTags,
      freeform_tags: this._freeformTags,
      name: this._name,
      table_limits: this._tableLimits,
      timeouts: this._timeouts,
    };
  }
}
