// https://www.terraform.io/docs/providers/oci/r/nosql_index.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "is_if_not_exists": {
        "type": "bool",
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
      "state": {
        "type": "string",
        "computed": true
      },
      "table_id": {
        "type": "string",
        "computed": true
      },
      "table_name": {
        "type": "string",
        "computed": true
      },
      "table_name_or_id": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "keys": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "column_name": {
              "type": "string",
              "required": true
            },
            "json_field_type": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "json_path": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        },
        "min_items": 1
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

// Configuration

export interface NosqlIndexConfig extends TerraformMetaArguments {
  readonly compartmentId?: string;
  readonly isIfNotExists?: boolean;
  readonly name: string;
  readonly tableNameOrId: string;
  /** keys block */
  readonly keys: NosqlIndexKeys[];
  /** timeouts block */
  readonly timeouts?: NosqlIndexTimeouts;
}
export interface NosqlIndexKeys {
  readonly columnName: string;
  readonly jsonFieldType?: string;
  readonly jsonPath?: string;
}
export interface NosqlIndexTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class NosqlIndex extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NosqlIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_nosql_index',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._isIfNotExists = config.isIfNotExists;
    this._name = config.name;
    this._tableNameOrId = config.tableNameOrId;
    this._keys = config.keys;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string;
  public get compartmentId() {
    return this._compartmentId ?? this.getStringAttribute('compartment_id');
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

  // is_if_not_exists - computed: true, optional: true, required: false
  private _isIfNotExists?: boolean;
  public get isIfNotExists() {
    return this._isIfNotExists ?? this.getBooleanAttribute('is_if_not_exists');
  }
  public set isIfNotExists(value: boolean | undefined) {
    this._isIfNotExists = value;
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

  // table_name_or_id - computed: false, optional: false, required: true
  private _tableNameOrId: string;
  public get tableNameOrId() {
    return this._tableNameOrId;
  }
  public set tableNameOrId(value: string) {
    this._tableNameOrId = value;
  }

  // keys - computed: false, optional: false, required: true
  private _keys: NosqlIndexKeys[];
  public get keys() {
    return this._keys;
  }
  public set keys(value: NosqlIndexKeys[]) {
    this._keys = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NosqlIndexTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: NosqlIndexTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      is_if_not_exists: this._isIfNotExists,
      name: this._name,
      table_name_or_id: this._tableNameOrId,
      keys: this._keys,
      timeouts: this._timeouts,
    };
  }
}
