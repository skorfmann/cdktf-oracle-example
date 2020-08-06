// https://www.terraform.io/docs/providers/oci/r/data_oci_core_instance_console_connections.html
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
      "instance_console_connections": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "connection_string": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "fingerprint": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "instance_id": "string",
              "public_key": "string",
              "state": "string",
              "vnc_connection_string": "string"
            }
          ]
        ],
        "computed": true
      },
      "instance_id": {
        "type": "string",
        "optional": true
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

export interface DataOciCoreInstanceConsoleConnectionsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly instanceId?: string;
  /** filter block */
  readonly filter?: DataOciCoreInstanceConsoleConnectionsFilter[];
}
export class DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnections extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_string - computed: true, optional: false, required: true
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // fingerprint - computed: true, optional: false, required: true
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: true
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // public_key - computed: true, optional: false, required: true
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // vnc_connection_string - computed: true, optional: false, required: true
  public get vncConnectionString() {
    return this.getStringAttribute('vnc_connection_string');
  }
}
export interface DataOciCoreInstanceConsoleConnectionsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreInstanceConsoleConnections extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreInstanceConsoleConnectionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_instance_console_connections',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._instanceId = config.instanceId;
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

  // instance_console_connections - computed: true, optional: false, required: true
  public instanceConsoleConnections(index: string) {
    return new DataOciCoreInstanceConsoleConnectionsInstanceConsoleConnections(this, 'instance_console_connections', index);
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string;
  public get instanceId() {
    return this._instanceId;
  }
  public set instanceId(value: string | undefined) {
    this._instanceId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreInstanceConsoleConnectionsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreInstanceConsoleConnectionsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      instance_id: this._instanceId,
      filter: this._filter,
    };
  }
}
