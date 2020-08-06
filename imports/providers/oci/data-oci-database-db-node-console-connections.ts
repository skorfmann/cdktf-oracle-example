// https://www.terraform.io/docs/providers/oci/r/data_oci_database_db_node_console_connections.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "console_connections": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "connection_string": "string",
              "db_node_id": "string",
              "fingerprint": "string",
              "id": "string",
              "public_key": "string",
              "state": "string"
            }
          ]
        ],
        "computed": true
      },
      "db_node_id": {
        "type": "string",
        "required": true
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

export interface DataOciDatabaseDbNodeConsoleConnectionsConfig extends TerraformMetaArguments {
  readonly dbNodeId: string;
  /** filter block */
  readonly filter?: DataOciDatabaseDbNodeConsoleConnectionsFilter[];
}
export class DataOciDatabaseDbNodeConsoleConnectionsConsoleConnections extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_string - computed: true, optional: false, required: true
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // db_node_id - computed: true, optional: false, required: true
  public get dbNodeId() {
    return this.getStringAttribute('db_node_id');
  }

  // fingerprint - computed: true, optional: false, required: true
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // public_key - computed: true, optional: false, required: true
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataOciDatabaseDbNodeConsoleConnectionsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseDbNodeConsoleConnections extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseDbNodeConsoleConnectionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_db_node_console_connections',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dbNodeId = config.dbNodeId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // console_connections - computed: true, optional: false, required: true
  public consoleConnections(index: string) {
    return new DataOciDatabaseDbNodeConsoleConnectionsConsoleConnections(this, 'console_connections', index);
  }

  // db_node_id - computed: false, optional: false, required: true
  private _dbNodeId: string;
  public get dbNodeId() {
    return this._dbNodeId;
  }
  public set dbNodeId(value: string) {
    this._dbNodeId = value;
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
  private _filter?: DataOciDatabaseDbNodeConsoleConnectionsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseDbNodeConsoleConnectionsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      db_node_id: this._dbNodeId,
      filter: this._filter,
    };
  }
}
