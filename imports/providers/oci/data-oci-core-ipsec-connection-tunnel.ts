// https://www.terraform.io/docs/providers/oci/r/data_oci_core_ipsec_connection_tunnel.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "bgp_session_info": {
        "type": [
          "list",
          [
            "object",
            {
              "bgp_state": "string",
              "customer_bgp_asn": "string",
              "customer_interface_ip": "string",
              "oracle_bgp_asn": "string",
              "oracle_interface_ip": "string"
            }
          ]
        ],
        "computed": true
      },
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
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ike_version": {
        "type": "string",
        "computed": true
      },
      "ipsec_id": {
        "type": "string",
        "required": true
      },
      "routing": {
        "type": "string",
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
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciCoreIpsecConnectionTunnelConfig extends TerraformMetaArguments {
  readonly ipsecId: string;
  readonly tunnelId: string;
}
export class DataOciCoreIpsecConnectionTunnelBgpSessionInfo extends ComplexComputedList {

  // bgp_state - computed: true, optional: false, required: true
  public get bgpState() {
    return this.getStringAttribute('bgp_state');
  }

  // customer_bgp_asn - computed: true, optional: false, required: true
  public get customerBgpAsn() {
    return this.getStringAttribute('customer_bgp_asn');
  }

  // customer_interface_ip - computed: true, optional: false, required: true
  public get customerInterfaceIp() {
    return this.getStringAttribute('customer_interface_ip');
  }

  // oracle_bgp_asn - computed: true, optional: false, required: true
  public get oracleBgpAsn() {
    return this.getStringAttribute('oracle_bgp_asn');
  }

  // oracle_interface_ip - computed: true, optional: false, required: true
  public get oracleInterfaceIp() {
    return this.getStringAttribute('oracle_interface_ip');
  }
}

// Resource

export class DataOciCoreIpsecConnectionTunnel extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreIpsecConnectionTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_ipsec_connection_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ipsecId = config.ipsecId;
    this._tunnelId = config.tunnelId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgp_session_info - computed: true, optional: false, required: true
  public bgpSessionInfo(index: string) {
    return new DataOciCoreIpsecConnectionTunnelBgpSessionInfo(this, 'bgp_session_info', index);
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // cpe_ip - computed: true, optional: false, required: true
  public get cpeIp() {
    return this.getStringAttribute('cpe_ip');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ike_version - computed: true, optional: false, required: true
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }

  // ipsec_id - computed: false, optional: false, required: true
  private _ipsecId: string;
  public get ipsecId() {
    return this._ipsecId;
  }
  public set ipsecId(value: string) {
    this._ipsecId = value;
  }

  // routing - computed: true, optional: false, required: true
  public get routing() {
    return this.getStringAttribute('routing');
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      ipsec_id: this._ipsecId,
      tunnel_id: this._tunnelId,
    };
  }
}
