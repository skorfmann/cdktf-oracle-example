// https://www.terraform.io/docs/providers/oci/r/data_oci_nosql_index.html
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
        "computed": true
      },
      "index_name": {
        "type": "string",
        "required": true
      },
      "is_if_not_exists": {
        "type": "bool",
        "computed": true
      },
      "keys": {
        "type": [
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
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciNosqlIndexConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly indexName: string;
  readonly tableNameOrId: string;
}
export class DataOciNosqlIndexKeys extends ComplexComputedList {

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

// Resource

export class DataOciNosqlIndex extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciNosqlIndexConfig) {
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
    this._indexName = config.indexName;
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

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // index_name - computed: false, optional: false, required: true
  private _indexName: string;
  public get indexName() {
    return this._indexName;
  }
  public set indexName(value: string) {
    this._indexName = value;
  }

  // is_if_not_exists - computed: true, optional: false, required: true
  public get isIfNotExists() {
    return this.getBooleanAttribute('is_if_not_exists');
  }

  // keys - computed: true, optional: false, required: true
  public keys(index: string) {
    return new DataOciNosqlIndexKeys(this, 'keys', index);
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

  // table_name_or_id - computed: false, optional: false, required: true
  private _tableNameOrId: string;
  public get tableNameOrId() {
    return this._tableNameOrId;
  }
  public set tableNameOrId(value: string) {
    this._tableNameOrId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      index_name: this._indexName,
      table_name_or_id: this._tableNameOrId,
    };
  }
}
