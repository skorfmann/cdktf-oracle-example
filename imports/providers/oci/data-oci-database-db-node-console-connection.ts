// https://www.terraform.io/docs/providers/oci/r/data_oci_database_db_node_console_connection.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "connection_string": {
        "type": "string",
        "computed": true
      },
      "db_node_id": {
        "type": "string",
        "required": true
      },
      "fingerprint": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "required": true
      },
      "public_key": {
        "type": "string",
        "computed": true
      },
      "state": {
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

// Configuration

export interface DataOciDatabaseDbNodeConsoleConnectionConfig extends TerraformMetaArguments {
  readonly dbNodeId: string;
  readonly id: string;
}

// Resource

export class DataOciDatabaseDbNodeConsoleConnection extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseDbNodeConsoleConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_db_node_console_connection',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dbNodeId = config.dbNodeId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_string - computed: true, optional: false, required: true
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // db_node_id - computed: false, optional: false, required: true
  private _dbNodeId: string;
  public get dbNodeId() {
    return this._dbNodeId;
  }
  public set dbNodeId(value: string) {
    this._dbNodeId = value;
  }

  // fingerprint - computed: true, optional: false, required: true
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  // public_key - computed: true, optional: false, required: true
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      db_node_id: this._dbNodeId,
      id: this._id,
    };
  }
}
