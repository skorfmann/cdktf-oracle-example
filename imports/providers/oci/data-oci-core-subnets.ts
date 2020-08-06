// https://www.terraform.io/docs/providers/oci/r/data_oci_core_subnets.html
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
      "subnets": {
        "type": [
          "list",
          [
            "object",
            {
              "availability_domain": "string",
              "cidr_block": "string",
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "dhcp_options_id": "string",
              "display_name": "string",
              "dns_label": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "ipv6cidr_block": "string",
              "ipv6public_cidr_block": "string",
              "ipv6virtual_router_ip": "string",
              "prohibit_public_ip_on_vnic": "bool",
              "route_table_id": "string",
              "security_list_ids": [
                "list",
                "string"
              ],
              "state": "string",
              "subnet_domain_name": "string",
              "time_created": "string",
              "vcn_id": "string",
              "virtual_router_ip": "string",
              "virtual_router_mac": "string"
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

export interface DataOciCoreSubnetsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly state?: string;
  readonly vcnId?: string;
  /** filter block */
  readonly filter?: DataOciCoreSubnetsFilter[];
}
export class DataOciCoreSubnetsSubnets extends ComplexComputedList {

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // cidr_block - computed: true, optional: false, required: true
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // dhcp_options_id - computed: true, optional: false, required: true
  public get dhcpOptionsId() {
    return this.getStringAttribute('dhcp_options_id');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // dns_label - computed: true, optional: false, required: true
  public get dnsLabel() {
    return this.getStringAttribute('dns_label');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv6cidr_block - computed: true, optional: false, required: true
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6cidr_block');
  }

  // ipv6public_cidr_block - computed: true, optional: false, required: true
  public get ipv6PublicCidrBlock() {
    return this.getStringAttribute('ipv6public_cidr_block');
  }

  // ipv6virtual_router_ip - computed: true, optional: false, required: true
  public get ipv6VirtualRouterIp() {
    return this.getStringAttribute('ipv6virtual_router_ip');
  }

  // prohibit_public_ip_on_vnic - computed: true, optional: false, required: true
  public get prohibitPublicIpOnVnic() {
    return this.getBooleanAttribute('prohibit_public_ip_on_vnic');
  }

  // route_table_id - computed: true, optional: false, required: true
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }

  // security_list_ids - computed: true, optional: false, required: true
  public get securityListIds() {
    return this.getListAttribute('security_list_ids');
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

  // vcn_id - computed: true, optional: false, required: true
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }

  // virtual_router_ip - computed: true, optional: false, required: true
  public get virtualRouterIp() {
    return this.getStringAttribute('virtual_router_ip');
  }

  // virtual_router_mac - computed: true, optional: false, required: true
  public get virtualRouterMac() {
    return this.getStringAttribute('virtual_router_mac');
  }
}
export interface DataOciCoreSubnetsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreSubnets extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreSubnetsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_subnets',
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

  // subnets - computed: true, optional: false, required: true
  public subnets(index: string) {
    return new DataOciCoreSubnetsSubnets(this, 'subnets', index);
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
  private _filter?: DataOciCoreSubnetsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreSubnetsFilter[] | undefined) {
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
      vcn_id: this._vcnId,
      filter: this._filter,
    };
  }
}
