// https://www.terraform.io/docs/providers/oci/r/data_oci_core_ipsec_connections.html
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
      "connections": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "cpe_id": "string",
              "cpe_local_identifier": "string",
              "cpe_local_identifier_type": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "drg_id": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "state": "string",
              "static_routes": [
                "list",
                "string"
              ],
              "time_created": "string"
            }
          ]
        ],
        "computed": true
      },
      "cpe_id": {
        "type": "string",
        "optional": true
      },
      "drg_id": {
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

export interface DataOciCoreIpsecConnectionsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly cpeId?: string;
  readonly drgId?: string;
  /** filter block */
  readonly filter?: DataOciCoreIpsecConnectionsFilter[];
}
export class DataOciCoreIpsecConnectionsConnections extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // cpe_id - computed: true, optional: false, required: true
  public get cpeId() {
    return this.getStringAttribute('cpe_id');
  }

  // cpe_local_identifier - computed: true, optional: false, required: true
  public get cpeLocalIdentifier() {
    return this.getStringAttribute('cpe_local_identifier');
  }

  // cpe_local_identifier_type - computed: true, optional: false, required: true
  public get cpeLocalIdentifierType() {
    return this.getStringAttribute('cpe_local_identifier_type');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // drg_id - computed: true, optional: false, required: true
  public get drgId() {
    return this.getStringAttribute('drg_id');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // static_routes - computed: true, optional: false, required: true
  public get staticRoutes() {
    return this.getListAttribute('static_routes');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export interface DataOciCoreIpsecConnectionsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreIpsecConnections extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreIpsecConnectionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_ipsec_connections',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._cpeId = config.cpeId;
    this._drgId = config.drgId;
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

  // connections - computed: true, optional: false, required: true
  public connections(index: string) {
    return new DataOciCoreIpsecConnectionsConnections(this, 'connections', index);
  }

  // cpe_id - computed: false, optional: true, required: false
  private _cpeId?: string;
  public get cpeId() {
    return this._cpeId;
  }
  public set cpeId(value: string | undefined) {
    this._cpeId = value;
  }

  // drg_id - computed: false, optional: true, required: false
  private _drgId?: string;
  public get drgId() {
    return this._drgId;
  }
  public set drgId(value: string | undefined) {
    this._drgId = value;
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
  private _filter?: DataOciCoreIpsecConnectionsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreIpsecConnectionsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      cpe_id: this._cpeId,
      drg_id: this._drgId,
      filter: this._filter,
    };
  }
}
