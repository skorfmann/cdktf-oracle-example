// https://www.terraform.io/docs/providers/oci/r/data_oci_core_ipsec_connection_tunnels.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ip_sec_connection_tunnels": {
        "type": [
          "list",
          [
            "object",
            {
              "bgp_session_info": [
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
              "compartment_id": "string",
              "cpe_ip": "string",
              "display_name": "string",
              "id": "string",
              "ike_version": "string",
              "routing": "string",
              "state": "string",
              "status": "string",
              "time_created": "string",
              "time_status_updated": "string",
              "vpn_ip": "string"
            }
          ]
        ],
        "computed": true
      },
      "ipsec_id": {
        "type": "string",
        "required": true
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

export interface DataOciCoreIpsecConnectionTunnelsConfig extends TerraformMetaArguments {
  readonly ipsecId: string;
  /** filter block */
  readonly filter?: DataOciCoreIpsecConnectionTunnelsFilter[];
}
export class DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo extends ComplexComputedList {

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
export class DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels extends ComplexComputedList {

  // bgp_session_info - computed: true, optional: false, required: true
  public get bgpSessionInfo() {
    return 'not implemented' as any;
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

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // ike_version - computed: true, optional: false, required: true
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
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

  // vpn_ip - computed: true, optional: false, required: true
  public get vpnIp() {
    return this.getStringAttribute('vpn_ip');
  }
}
export interface DataOciCoreIpsecConnectionTunnelsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreIpsecConnectionTunnels extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreIpsecConnectionTunnelsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_ipsec_connection_tunnels',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ipsecId = config.ipsecId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_sec_connection_tunnels - computed: true, optional: false, required: true
  public ipSecConnectionTunnels(index: string) {
    return new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels(this, 'ip_sec_connection_tunnels', index);
  }

  // ipsec_id - computed: false, optional: false, required: true
  private _ipsecId: string;
  public get ipsecId() {
    return this._ipsecId;
  }
  public set ipsecId(value: string) {
    this._ipsecId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreIpsecConnectionTunnelsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreIpsecConnectionTunnelsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      ipsec_id: this._ipsecId,
      filter: this._filter,
    };
  }
}
