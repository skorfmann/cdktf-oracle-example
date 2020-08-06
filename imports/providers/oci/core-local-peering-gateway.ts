// https://www.terraform.io/docs/providers/oci/r/core_local_peering_gateway.html
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
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
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
      "is_cross_tenancy_peering": {
        "type": "bool",
        "computed": true
      },
      "peer_advertised_cidr": {
        "type": "string",
        "computed": true
      },
      "peer_advertised_cidr_details": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "peer_id": {
        "type": "string",
        "optional": true
      },
      "peering_status": {
        "type": "string",
        "computed": true
      },
      "peering_status_details": {
        "type": "string",
        "computed": true
      },
      "route_table_id": {
        "type": "string",
        "optional": true,
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
      "vcn_id": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
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

export interface CoreLocalPeeringGatewayConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly peerId?: string;
  readonly routeTableId?: string;
  readonly vcnId: string;
  /** timeouts block */
  readonly timeouts?: CoreLocalPeeringGatewayTimeouts;
}
export interface CoreLocalPeeringGatewayTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreLocalPeeringGateway extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreLocalPeeringGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_local_peering_gateway',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._peerId = config.peerId;
    this._routeTableId = config.routeTableId;
    this._vcnId = config.vcnId;
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

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
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

  // peer_id - computed: false, optional: true, required: false
  private _peerId?: string;
  public get peerId() {
    return this._peerId;
  }
  public set peerId(value: string | undefined) {
    this._peerId = value;
  }

  // peering_status - computed: true, optional: false, required: true
  public get peeringStatus() {
    return this.getStringAttribute('peering_status');
  }

  // peering_status_details - computed: true, optional: false, required: true
  public get peeringStatusDetails() {
    return this.getStringAttribute('peering_status_details');
  }

  // route_table_id - computed: true, optional: true, required: false
  private _routeTableId?: string;
  public get routeTableId() {
    return this._routeTableId ?? this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string | undefined) {
    this._routeTableId = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // vcn_id - computed: false, optional: false, required: true
  private _vcnId: string;
  public get vcnId() {
    return this._vcnId;
  }
  public set vcnId(value: string) {
    this._vcnId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreLocalPeeringGatewayTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreLocalPeeringGatewayTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      peer_id: this._peerId,
      route_table_id: this._routeTableId,
      vcn_id: this._vcnId,
      timeouts: this._timeouts,
    };
  }
}
