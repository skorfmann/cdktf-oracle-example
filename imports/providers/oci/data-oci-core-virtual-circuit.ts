// https://www.terraform.io/docs/providers/oci/r/data_oci_core_virtual_circuit.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "bandwidth_shape_name": {
        "type": "string",
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
        "computed": true
      },
      "cross_connect_mappings": {
        "type": [
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
        "computed": true
      },
      "customer_asn": {
        "type": "string",
        "computed": true
      },
      "customer_bgp_asn": {
        "type": "number",
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "gateway_id": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "oracle_bgp_asn": {
        "type": "number",
        "computed": true
      },
      "provider_service_id": {
        "type": "string",
        "computed": true
      },
      "provider_service_key_name": {
        "type": "string",
        "computed": true
      },
      "provider_state": {
        "type": "string",
        "computed": true
      },
      "public_prefixes": {
        "type": [
          "list",
          [
            "object",
            {
              "cidr_block": "string"
            }
          ]
        ],
        "computed": true
      },
      "reference_comment": {
        "type": "string",
        "computed": true
      },
      "region": {
        "type": "string",
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
        "computed": true
      },
      "virtual_circuit_id": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataOciCoreVirtualCircuitConfig extends TerraformMetaArguments {
  readonly virtualCircuitId: string;
}
export class DataOciCoreVirtualCircuitCrossConnectMappings extends ComplexComputedList {

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
export class DataOciCoreVirtualCircuitPublicPrefixes extends ComplexComputedList {

  // cidr_block - computed: true, optional: false, required: true
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
}

// Resource

export class DataOciCoreVirtualCircuit extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreVirtualCircuitConfig) {
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
    this._virtualCircuitId = config.virtualCircuitId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  public crossConnectMappings(index: string) {
    return new DataOciCoreVirtualCircuitCrossConnectMappings(this, 'cross_connect_mappings', index);
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
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
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
  public publicPrefixes(index: string) {
    return new DataOciCoreVirtualCircuitPublicPrefixes(this, 'public_prefixes', index);
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

  // virtual_circuit_id - computed: false, optional: false, required: true
  private _virtualCircuitId: string;
  public get virtualCircuitId() {
    return this._virtualCircuitId;
  }
  public set virtualCircuitId(value: string) {
    this._virtualCircuitId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      virtual_circuit_id: this._virtualCircuitId,
    };
  }
}
