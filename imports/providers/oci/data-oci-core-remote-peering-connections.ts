// https://www.terraform.io/docs/providers/oci/r/data_oci_core_remote_peering_connections.html
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
      "drg_id": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "remote_peering_connections": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
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
              "is_cross_tenancy_peering": "bool",
              "peer_id": "string",
              "peer_region_name": "string",
              "peer_tenancy_id": "string",
              "peering_status": "string",
              "state": "string",
              "time_created": "string"
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

export interface DataOciCoreRemotePeeringConnectionsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly drgId?: string;
  /** filter block */
  readonly filter?: DataOciCoreRemotePeeringConnectionsFilter[];
}
export class DataOciCoreRemotePeeringConnectionsRemotePeeringConnections extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // is_cross_tenancy_peering - computed: true, optional: false, required: true
  public get isCrossTenancyPeering() {
    return this.getBooleanAttribute('is_cross_tenancy_peering');
  }

  // peer_id - computed: true, optional: false, required: true
  public get peerId() {
    return this.getStringAttribute('peer_id');
  }

  // peer_region_name - computed: true, optional: false, required: true
  public get peerRegionName() {
    return this.getStringAttribute('peer_region_name');
  }

  // peer_tenancy_id - computed: true, optional: false, required: true
  public get peerTenancyId() {
    return this.getStringAttribute('peer_tenancy_id');
  }

  // peering_status - computed: true, optional: false, required: true
  public get peeringStatus() {
    return this.getStringAttribute('peering_status');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export interface DataOciCoreRemotePeeringConnectionsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreRemotePeeringConnections extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreRemotePeeringConnectionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_remote_peering_connections',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
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

  // remote_peering_connections - computed: true, optional: false, required: true
  public remotePeeringConnections(index: string) {
    return new DataOciCoreRemotePeeringConnectionsRemotePeeringConnections(this, 'remote_peering_connections', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreRemotePeeringConnectionsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreRemotePeeringConnectionsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      drg_id: this._drgId,
      filter: this._filter,
    };
  }
}
