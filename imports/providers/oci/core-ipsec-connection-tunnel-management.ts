// https://www.terraform.io/docs/providers/oci/r/core_ipsec_connection_tunnel_management.html
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
      "cpe_ip": {
        "type": "string",
        "computed": true
      },
      "display_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ike_version": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ipsec_id": {
        "type": "string",
        "required": true
      },
      "routing": {
        "type": "string",
        "required": true
      },
      "shared_secret": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "status": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_status_updated": {
        "type": "string",
        "computed": true
      },
      "tunnel_id": {
        "type": "string",
        "required": true
      },
      "vpn_ip": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "bgp_session_info": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "bgp_state": {
              "type": "string",
              "computed": true
            },
            "customer_bgp_asn": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "customer_interface_ip": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "oracle_bgp_asn": {
              "type": "string",
              "computed": true
            },
            "oracle_interface_ip": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        }
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

export interface CoreIpsecConnectionTunnelManagementConfig extends TerraformMetaArguments {
  readonly displayName?: string;
  readonly ikeVersion?: string;
  readonly ipsecId: string;
  readonly routing: string;
  readonly sharedSecret?: string;
  readonly tunnelId: string;
  /** bgp_session_info block */
  readonly bgpSessionInfo?: CoreIpsecConnectionTunnelManagementBgpSessionInfo[];
  /** timeouts block */
  readonly timeouts?: CoreIpsecConnectionTunnelManagementTimeouts;
}
export interface CoreIpsecConnectionTunnelManagementBgpSessionInfo {
  readonly customerBgpAsn?: string;
  readonly customerInterfaceIp?: string;
  readonly oracleInterfaceIp?: string;
}
export interface CoreIpsecConnectionTunnelManagementTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreIpsecConnectionTunnelManagement extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreIpsecConnectionTunnelManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_ipsec_connection_tunnel_management',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._ikeVersion = config.ikeVersion;
    this._ipsecId = config.ipsecId;
    this._routing = config.routing;
    this._sharedSecret = config.sharedSecret;
    this._tunnelId = config.tunnelId;
    this._bgpSessionInfo = config.bgpSessionInfo;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // cpe_ip - computed: true, optional: false, required: true
  public get cpeIp() {
    return this.getStringAttribute('cpe_ip');
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ike_version - computed: true, optional: true, required: false
  private _ikeVersion?: string;
  public get ikeVersion() {
    return this._ikeVersion ?? this.getStringAttribute('ike_version');
  }
  public set ikeVersion(value: string | undefined) {
    this._ikeVersion = value;
  }

  // ipsec_id - computed: false, optional: false, required: true
  private _ipsecId: string;
  public get ipsecId() {
    return this._ipsecId;
  }
  public set ipsecId(value: string) {
    this._ipsecId = value;
  }

  // routing - computed: false, optional: false, required: true
  private _routing: string;
  public get routing() {
    return this._routing;
  }
  public set routing(value: string) {
    this._routing = value;
  }

  // shared_secret - computed: true, optional: true, required: false
  private _sharedSecret?: string;
  public get sharedSecret() {
    return this._sharedSecret ?? this.getStringAttribute('shared_secret');
  }
  public set sharedSecret(value: string | undefined) {
    this._sharedSecret = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_status_updated - computed: true, optional: false, required: true
  public get timeStatusUpdated() {
    return this.getStringAttribute('time_status_updated');
  }

  // tunnel_id - computed: false, optional: false, required: true
  private _tunnelId: string;
  public get tunnelId() {
    return this._tunnelId;
  }
  public set tunnelId(value: string) {
    this._tunnelId = value;
  }

  // vpn_ip - computed: true, optional: false, required: true
  public get vpnIp() {
    return this.getStringAttribute('vpn_ip');
  }

  // bgp_session_info - computed: false, optional: true, required: false
  private _bgpSessionInfo?: CoreIpsecConnectionTunnelManagementBgpSessionInfo[];
  public get bgpSessionInfo() {
    return this._bgpSessionInfo;
  }
  public set bgpSessionInfo(value: CoreIpsecConnectionTunnelManagementBgpSessionInfo[] | undefined) {
    this._bgpSessionInfo = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreIpsecConnectionTunnelManagementTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreIpsecConnectionTunnelManagementTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: this._displayName,
      ike_version: this._ikeVersion,
      ipsec_id: this._ipsecId,
      routing: this._routing,
      shared_secret: this._sharedSecret,
      tunnel_id: this._tunnelId,
      bgp_session_info: this._bgpSessionInfo,
      timeouts: this._timeouts,
    };
  }
}
