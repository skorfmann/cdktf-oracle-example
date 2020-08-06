// https://www.terraform.io/docs/providers/oci/r/data_oci_core_local_peering_gateways.html
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
      "local_peering_gateways": {
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
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "is_cross_tenancy_peering": "bool",
              "peer_advertised_cidr": "string",
              "peer_advertised_cidr_details": [
                "list",
                "string"
              ],
              "peer_id": "string",
              "peering_status": "string",
              "peering_status_details": "string",
              "route_table_id": "string",
              "state": "string",
              "time_created": "string",
              "vcn_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "vcn_id": {
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

export interface DataOciCoreLocalPeeringGatewaysConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly vcnId?: string;
  /** filter block */
  readonly filter?: DataOciCoreLocalPeeringGatewaysFilter[];
}
export class DataOciCoreLocalPeeringGatewaysLocalPeeringGateways extends ComplexComputedList {

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

  // peer_advertised_cidr - computed: true, optional: false, required: true
  public get peerAdvertisedCidr() {
    return this.getStringAttribute('peer_advertised_cidr');
  }

  // peer_advertised_cidr_details - computed: true, optional: false, required: true
  public get peerAdvertisedCidrDetails() {
    return this.getListAttribute('peer_advertised_cidr_details');
  }

  // peer_id - computed: true, optional: false, required: true
  public get peerId() {
    return this.getStringAttribute('peer_id');
  }

  // peering_status - computed: true, optional: false, required: true
  public get peeringStatus() {
    return this.getStringAttribute('peering_status');
  }

  // peering_status_details - computed: true, optional: false, required: true
  public get peeringStatusDetails() {
    return this.getStringAttribute('peering_status_details');
  }

  // route_table_id - computed: true, optional: false, required: true
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // vcn_id - computed: true, optional: false, required: true
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
}
export interface DataOciCoreLocalPeeringGatewaysFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreLocalPeeringGateways extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreLocalPeeringGatewaysConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_local_peering_gateways',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._vcnId = config.vcnId;
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

  // local_peering_gateways - computed: true, optional: false, required: true
  public localPeeringGateways(index: string) {
    return new DataOciCoreLocalPeeringGatewaysLocalPeeringGateways(this, 'local_peering_gateways', index);
  }

  // vcn_id - computed: false, optional: true, required: false
  private _vcnId?: string;
  public get vcnId() {
    return this._vcnId;
  }
  public set vcnId(value: string | undefined) {
    this._vcnId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreLocalPeeringGatewaysFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreLocalPeeringGatewaysFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      vcn_id: this._vcnId,
      filter: this._filter,
    };
  }
}
