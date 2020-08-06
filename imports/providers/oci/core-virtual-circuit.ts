// https://www.terraform.io/docs/providers/oci/r/core_virtual_circuit.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "bandwidth_shape_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "bgp_management": {
        "type": "string",
        "computed": true
      },
      "bgp_session_state": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "customer_asn": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "customer_bgp_asn": {
        "type": "number",
        "optional": true,
        "computed": true
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
      "gateway_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "oracle_bgp_asn": {
        "type": "number",
        "computed": true
      },
      "provider_service_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "provider_service_key_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "provider_state": {
        "type": "string",
        "computed": true
      },
      "reference_comment": {
        "type": "string",
        "computed": true
      },
      "region": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "service_type": {
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
      },
      "type": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "cross_connect_mappings": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "bgp_md5auth_key": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "cross_connect_or_cross_connect_group_id": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "customer_bgp_peering_ip": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "customer_bgp_peering_ipv6": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "oracle_bgp_peering_ip": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "oracle_bgp_peering_ipv6": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "vlan": {
              "type": "number",
              "optional": true,
              "computed": true
            }
          }
        }
      },
      "public_prefixes": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "cidr_block": {
              "type": "string",
              "required": true
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

export interface CoreVirtualCircuitConfig extends TerraformMetaArguments {
  readonly bandwidthShapeName?: string;
  readonly compartmentId: string;
  readonly customerAsn?: string;
  readonly customerBgpAsn?: number;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly gatewayId?: string;
  readonly providerServiceId?: string;
  readonly providerServiceKeyName?: string;
  readonly region?: string;
  readonly type: string;
  /** cross_connect_mappings block */
  readonly crossConnectMappings?: CoreVirtualCircuitCrossConnectMappings[];
  /** public_prefixes block */
  readonly publicPrefixes?: CoreVirtualCircuitPublicPrefixes[];
  /** timeouts block */
  readonly timeouts?: CoreVirtualCircuitTimeouts;
}
export interface CoreVirtualCircuitCrossConnectMappings {
  readonly bgpMd5AuthKey?: string;
  readonly crossConnectOrCrossConnectGroupId?: string;
  readonly customerBgpPeeringIp?: string;
  readonly customerBgpPeeringIpv6?: string;
  readonly oracleBgpPeeringIp?: string;
  readonly oracleBgpPeeringIpv6?: string;
  readonly vlan?: number;
}
export interface CoreVirtualCircuitPublicPrefixes {
  readonly cidrBlock: string;
}
export interface CoreVirtualCircuitTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreVirtualCircuit extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreVirtualCircuitConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_virtual_circuit',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bandwidthShapeName = config.bandwidthShapeName;
    this._compartmentId = config.compartmentId;
    this._customerAsn = config.customerAsn;
    this._customerBgpAsn = config.customerBgpAsn;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._gatewayId = config.gatewayId;
    this._providerServiceId = config.providerServiceId;
    this._providerServiceKeyName = config.providerServiceKeyName;
    this._region = config.region;
    this._type = config.type;
    this._crossConnectMappings = config.crossConnectMappings;
    this._publicPrefixes = config.publicPrefixes;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_shape_name - computed: true, optional: true, required: false
  private _bandwidthShapeName?: string;
  public get bandwidthShapeName() {
    return this._bandwidthShapeName ?? this.getStringAttribute('bandwidth_shape_name');
  }
  public set bandwidthShapeName(value: string | undefined) {
    this._bandwidthShapeName = value;
  }

  // bgp_management - computed: true, optional: false, required: true
  public get bgpManagement() {
    return this.getStringAttribute('bgp_management');
  }

  // bgp_session_state - computed: true, optional: false, required: true
  public get bgpSessionState() {
    return this.getStringAttribute('bgp_session_state');
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // customer_asn - computed: true, optional: true, required: false
  private _customerAsn?: string;
  public get customerAsn() {
    return this._customerAsn ?? this.getStringAttribute('customer_asn');
  }
  public set customerAsn(value: string | undefined) {
    this._customerAsn = value;
  }

  // customer_bgp_asn - computed: true, optional: true, required: false
  private _customerBgpAsn?: number;
  public get customerBgpAsn() {
    return this._customerBgpAsn ?? this.getNumberAttribute('customer_bgp_asn');
  }
  public set customerBgpAsn(value: number | undefined) {
    this._customerBgpAsn = value;
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

  // gateway_id - computed: true, optional: true, required: false
  private _gatewayId?: string;
  public get gatewayId() {
    return this._gatewayId ?? this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string | undefined) {
    this._gatewayId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // oracle_bgp_asn - computed: true, optional: false, required: true
  public get oracleBgpAsn() {
    return this.getNumberAttribute('oracle_bgp_asn');
  }

  // provider_service_id - computed: true, optional: true, required: false
  private _providerServiceId?: string;
  public get providerServiceId() {
    return this._providerServiceId ?? this.getStringAttribute('provider_service_id');
  }
  public set providerServiceId(value: string | undefined) {
    this._providerServiceId = value;
  }

  // provider_service_key_name - computed: true, optional: true, required: false
  private _providerServiceKeyName?: string;
  public get providerServiceKeyName() {
    return this._providerServiceKeyName ?? this.getStringAttribute('provider_service_key_name');
  }
  public set providerServiceKeyName(value: string | undefined) {
    this._providerServiceKeyName = value;
  }

  // provider_state - computed: true, optional: false, required: true
  public get providerState() {
    return this.getStringAttribute('provider_state');
  }

  // reference_comment - computed: true, optional: false, required: true
  public get referenceComment() {
    return this.getStringAttribute('reference_comment');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
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

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // cross_connect_mappings - computed: false, optional: true, required: false
  private _crossConnectMappings?: CoreVirtualCircuitCrossConnectMappings[];
  public get crossConnectMappings() {
    return this._crossConnectMappings;
  }
  public set crossConnectMappings(value: CoreVirtualCircuitCrossConnectMappings[] | undefined) {
    this._crossConnectMappings = value;
  }

  // public_prefixes - computed: false, optional: true, required: false
  private _publicPrefixes?: CoreVirtualCircuitPublicPrefixes[];
  public get publicPrefixes() {
    return this._publicPrefixes;
  }
  public set publicPrefixes(value: CoreVirtualCircuitPublicPrefixes[] | undefined) {
    this._publicPrefixes = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreVirtualCircuitTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreVirtualCircuitTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth_shape_name: this._bandwidthShapeName,
      compartment_id: this._compartmentId,
      customer_asn: this._customerAsn,
      customer_bgp_asn: this._customerBgpAsn,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      gateway_id: this._gatewayId,
      provider_service_id: this._providerServiceId,
      provider_service_key_name: this._providerServiceKeyName,
      region: this._region,
      type: this._type,
      cross_connect_mappings: this._crossConnectMappings,
      public_prefixes: this._publicPrefixes,
      timeouts: this._timeouts,
    };
  }
}
