// https://www.terraform.io/docs/providers/oci/r/data_oci_core_virtual_circuits.html
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
      "display_name": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "state": {
        "type": "string",
        "optional": true
      },
      "virtual_circuits": {
        "type": [
          "list",
          [
            "object",
            {
              "bandwidth_shape_name": "string",
              "bgp_management": "string",
              "bgp_session_state": "string",
              "compartment_id": "string",
              "cross_connect_mappings": [
                "list",
                [
                  "object",
                  {
                    "bgp_md5auth_key": "string",
                    "cross_connect_or_cross_connect_group_id": "string",
                    "customer_bgp_peering_ip": "string",
                    "customer_bgp_peering_ipv6": "string",
                    "oracle_bgp_peering_ip": "string",
                    "oracle_bgp_peering_ipv6": "string",
                    "vlan": "number"
                  }
                ]
              ],
              "customer_asn": "string",
              "customer_bgp_asn": "number",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "gateway_id": "string",
              "id": "string",
              "oracle_bgp_asn": "number",
              "provider_service_id": "string",
              "provider_service_key_name": "string",
              "provider_state": "string",
              "public_prefixes": [
                "list",
                [
                  "object",
                  {
                    "cidr_block": "string"
                  }
                ]
              ],
              "reference_comment": "string",
              "region": "string",
              "service_type": "string",
              "state": "string",
              "time_created": "string",
              "type": "string",
              "virtual_circuit_id": "string"
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

export interface DataOciCoreVirtualCircuitsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciCoreVirtualCircuitsFilter[];
}
export class DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings extends ComplexComputedList {

  // bgp_md5auth_key - computed: true, optional: false, required: true
  public get bgpMd5AuthKey() {
    return this.getStringAttribute('bgp_md5auth_key');
  }

  // cross_connect_or_cross_connect_group_id - computed: true, optional: false, required: true
  public get crossConnectOrCrossConnectGroupId() {
    return this.getStringAttribute('cross_connect_or_cross_connect_group_id');
  }

  // customer_bgp_peering_ip - computed: true, optional: false, required: true
  public get customerBgpPeeringIp() {
    return this.getStringAttribute('customer_bgp_peering_ip');
  }

  // customer_bgp_peering_ipv6 - computed: true, optional: false, required: true
  public get customerBgpPeeringIpv6() {
    return this.getStringAttribute('customer_bgp_peering_ipv6');
  }

  // oracle_bgp_peering_ip - computed: true, optional: false, required: true
  public get oracleBgpPeeringIp() {
    return this.getStringAttribute('oracle_bgp_peering_ip');
  }

  // oracle_bgp_peering_ipv6 - computed: true, optional: false, required: true
  public get oracleBgpPeeringIpv6() {
    return this.getStringAttribute('oracle_bgp_peering_ipv6');
  }

  // vlan - computed: true, optional: false, required: true
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
}
export class DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes extends ComplexComputedList {

  // cidr_block - computed: true, optional: false, required: true
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
}
export class DataOciCoreVirtualCircuitsVirtualCircuits extends ComplexComputedList {

  // bandwidth_shape_name - computed: true, optional: false, required: true
  public get bandwidthShapeName() {
    return this.getStringAttribute('bandwidth_shape_name');
  }

  // bgp_management - computed: true, optional: false, required: true
  public get bgpManagement() {
    return this.getStringAttribute('bgp_management');
  }

  // bgp_session_state - computed: true, optional: false, required: true
  public get bgpSessionState() {
    return this.getStringAttribute('bgp_session_state');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // cross_connect_mappings - computed: true, optional: false, required: true
  public get crossConnectMappings() {
    return 'not implemented' as any;
  }

  // customer_asn - computed: true, optional: false, required: true
  public get customerAsn() {
    return this.getStringAttribute('customer_asn');
  }

  // customer_bgp_asn - computed: true, optional: false, required: true
  public get customerBgpAsn() {
    return this.getNumberAttribute('customer_bgp_asn');
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

  // gateway_id - computed: true, optional: false, required: true
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // oracle_bgp_asn - computed: true, optional: false, required: true
  public get oracleBgpAsn() {
    return this.getNumberAttribute('oracle_bgp_asn');
  }

  // provider_service_id - computed: true, optional: false, required: true
  public get providerServiceId() {
    return this.getStringAttribute('provider_service_id');
  }

  // provider_service_key_name - computed: true, optional: false, required: true
  public get providerServiceKeyName() {
    return this.getStringAttribute('provider_service_key_name');
  }

  // provider_state - computed: true, optional: false, required: true
  public get providerState() {
    return this.getStringAttribute('provider_state');
  }

  // public_prefixes - computed: true, optional: false, required: true
  public get publicPrefixes() {
    return 'not implemented' as any;
  }

  // reference_comment - computed: true, optional: false, required: true
  public get referenceComment() {
    return this.getStringAttribute('reference_comment');
  }

  // region - computed: true, optional: false, required: true
  public get region() {
    return this.getStringAttribute('region');
  }

  // service_type - computed: true, optional: false, required: true
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // virtual_circuit_id - computed: true, optional: false, required: true
  public get virtualCircuitId() {
    return this.getStringAttribute('virtual_circuit_id');
  }
}
export interface DataOciCoreVirtualCircuitsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreVirtualCircuits extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreVirtualCircuitsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_virtual_circuits',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._state = config.state;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
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

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // virtual_circuits - computed: true, optional: false, required: true
  public virtualCircuits(index: string) {
    return new DataOciCoreVirtualCircuitsVirtualCircuits(this, 'virtual_circuits', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreVirtualCircuitsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreVirtualCircuitsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      state: this._state,
      filter: this._filter,
    };
  }
}
