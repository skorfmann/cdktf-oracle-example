// https://www.terraform.io/docs/providers/oci/r/core_subnet.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "availability_domain": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "cidr_block": {
        "type": "string",
        "required": true
      },
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
      "dhcp_options_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "dns_label": {
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
      "ipv6cidr_block": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ipv6public_cidr_block": {
        "type": "string",
        "computed": true
      },
      "ipv6virtual_router_ip": {
        "type": "string",
        "computed": true
      },
      "prohibit_public_ip_on_vnic": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "route_table_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "security_list_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "subnet_domain_name": {
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
      },
      "virtual_router_ip": {
        "type": "string",
        "computed": true
      },
      "virtual_router_mac": {
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

export interface CoreSubnetConfig extends TerraformMetaArguments {
  readonly availabilityDomain?: string;
  readonly cidrBlock: string;
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly dhcpOptionsId?: string;
  readonly displayName?: string;
  readonly dnsLabel?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly ipv6CidrBlock?: string;
  readonly prohibitPublicIpOnVnic?: boolean;
  readonly routeTableId?: string;
  readonly securityListIds?: string[];
  readonly vcnId: string;
  /** timeouts block */
  readonly timeouts?: CoreSubnetTimeouts;
}
export interface CoreSubnetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreSubnet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreSubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_subnet',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityDomain = config.availabilityDomain;
    this._cidrBlock = config.cidrBlock;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._dhcpOptionsId = config.dhcpOptionsId;
    this._displayName = config.displayName;
    this._dnsLabel = config.dnsLabel;
    this._freeformTags = config.freeformTags;
    this._ipv6CidrBlock = config.ipv6CidrBlock;
    this._prohibitPublicIpOnVnic = config.prohibitPublicIpOnVnic;
    this._routeTableId = config.routeTableId;
    this._securityListIds = config.securityListIds;
    this._vcnId = config.vcnId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: true, optional: true, required: false
  private _availabilityDomain?: string;
  public get availabilityDomain() {
    return this._availabilityDomain ?? this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string | undefined) {
    this._availabilityDomain = value;
  }

  // cidr_block - computed: false, optional: false, required: true
  private _cidrBlock: string;
  public get cidrBlock() {
    return this._cidrBlock;
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }

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

  // dhcp_options_id - computed: true, optional: true, required: false
  private _dhcpOptionsId?: string;
  public get dhcpOptionsId() {
    return this._dhcpOptionsId ?? this.getStringAttribute('dhcp_options_id');
  }
  public set dhcpOptionsId(value: string | undefined) {
    this._dhcpOptionsId = value;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // dns_label - computed: true, optional: true, required: false
  private _dnsLabel?: string;
  public get dnsLabel() {
    return this._dnsLabel ?? this.getStringAttribute('dns_label');
  }
  public set dnsLabel(value: string | undefined) {
    this._dnsLabel = value;
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

  // ipv6cidr_block - computed: true, optional: true, required: false
  private _ipv6CidrBlock?: string;
  public get ipv6CidrBlock() {
    return this._ipv6CidrBlock ?? this.getStringAttribute('ipv6cidr_block');
  }
  public set ipv6CidrBlock(value: string | undefined) {
    this._ipv6CidrBlock = value;
  }

  // ipv6public_cidr_block - computed: true, optional: false, required: true
  public get ipv6PublicCidrBlock() {
    return this.getStringAttribute('ipv6public_cidr_block');
  }

  // ipv6virtual_router_ip - computed: true, optional: false, required: true
  public get ipv6VirtualRouterIp() {
    return this.getStringAttribute('ipv6virtual_router_ip');
  }

  // prohibit_public_ip_on_vnic - computed: true, optional: true, required: false
  private _prohibitPublicIpOnVnic?: boolean;
  public get prohibitPublicIpOnVnic() {
    return this._prohibitPublicIpOnVnic ?? this.getBooleanAttribute('prohibit_public_ip_on_vnic');
  }
  public set prohibitPublicIpOnVnic(value: boolean | undefined) {
    this._prohibitPublicIpOnVnic = value;
  }

  // route_table_id - computed: true, optional: true, required: false
  private _routeTableId?: string;
  public get routeTableId() {
    return this._routeTableId ?? this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string | undefined) {
    this._routeTableId = value;
  }

  // security_list_ids - computed: true, optional: true, required: false
  private _securityListIds?: string[];
  public get securityListIds() {
    return this._securityListIds ?? this.getListAttribute('security_list_ids');
  }
  public set securityListIds(value: string[] | undefined) {
    this._securityListIds = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_domain_name - computed: true, optional: false, required: true
  public get subnetDomainName() {
    return this.getStringAttribute('subnet_domain_name');
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

  // virtual_router_ip - computed: true, optional: false, required: true
  public get virtualRouterIp() {
    return this.getStringAttribute('virtual_router_ip');
  }

  // virtual_router_mac - computed: true, optional: false, required: true
  public get virtualRouterMac() {
    return this.getStringAttribute('virtual_router_mac');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreSubnetTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreSubnetTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: this._availabilityDomain,
      cidr_block: this._cidrBlock,
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      dhcp_options_id: this._dhcpOptionsId,
      display_name: this._displayName,
      dns_label: this._dnsLabel,
      freeform_tags: this._freeformTags,
      ipv6cidr_block: this._ipv6CidrBlock,
      prohibit_public_ip_on_vnic: this._prohibitPublicIpOnVnic,
      route_table_id: this._routeTableId,
      security_list_ids: this._securityListIds,
      vcn_id: this._vcnId,
      timeouts: this._timeouts,
    };
  }
}
