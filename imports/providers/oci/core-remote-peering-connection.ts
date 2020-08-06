// https://www.terraform.io/docs/providers/oci/r/core_remote_peering_connection.html
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
      "drg_id": {
        "type": "string",
        "required": true
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
      "peer_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "peer_region_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "peer_tenancy_id": {
        "type": "string",
        "computed": true
      },
      "peering_status": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
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

export interface CoreRemotePeeringConnectionConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly drgId: string;
  readonly freeformTags?: { [key: string]: string };
  readonly peerId?: string;
  readonly peerRegionName?: string;
  /** timeouts block */
  readonly timeouts?: CoreRemotePeeringConnectionTimeouts;
}
export interface CoreRemotePeeringConnectionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreRemotePeeringConnection extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreRemotePeeringConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_remote_peering_connection',
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
    this._drgId = config.drgId;
    this._freeformTags = config.freeformTags;
    this._peerId = config.peerId;
    this._peerRegionName = config.peerRegionName;
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

  // drg_id - computed: false, optional: false, required: true
  private _drgId: string;
  public get drgId() {
    return this._drgId;
  }
  public set drgId(value: string) {
    this._drgId = value;
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

  // peer_id - computed: true, optional: true, required: false
  private _peerId?: string;
  public get peerId() {
    return this._peerId ?? this.getStringAttribute('peer_id');
  }
  public set peerId(value: string | undefined) {
    this._peerId = value;
  }

  // peer_region_name - computed: true, optional: true, required: false
  private _peerRegionName?: string;
  public get peerRegionName() {
    return this._peerRegionName ?? this.getStringAttribute('peer_region_name');
  }
  public set peerRegionName(value: string | undefined) {
    this._peerRegionName = value;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreRemotePeeringConnectionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreRemotePeeringConnectionTimeouts | undefined) {
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
      drg_id: this._drgId,
      freeform_tags: this._freeformTags,
      peer_id: this._peerId,
      peer_region_name: this._peerRegionName,
      timeouts: this._timeouts,
    };
  }
}
