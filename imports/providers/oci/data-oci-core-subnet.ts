// https://www.terraform.io/docs/providers/oci/r/data_oci_core_subnet.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "availability_domain": {
        "type": "string",
        "computed": true
      },
      "cidr_block": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "dhcp_options_id": {
        "type": "string",
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "dns_label": {
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
      "id": {
        "type": "string",
        "computed": true
      },
      "ipv6cidr_block": {
        "type": "string",
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
        "computed": true
      },
      "route_table_id": {
        "type": "string",
        "computed": true
      },
      "security_list_ids": {
        "type": [
          "list",
          "string"
        ],
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
      "subnet_id": {
        "type": "string",
        "required": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "vcn_id": {
        "type": "string",
        "computed": true
      },
      "virtual_router_ip": {
        "type": "string",
        "computed": true
      },
      "virtual_router_mac": {
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
import { StringMap } from "cdktf";

// Configuration

export interface DataOciCoreSubnetConfig extends TerraformMetaArguments {
  readonly subnetId: string;
}

// Resource

export class DataOciCoreSubnet extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreSubnetConfig) {
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
    this._subnetId = config.subnetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
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
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
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

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this._subnetId;
  }
  public set subnetId(value: string) {
    this._subnetId = value;
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      subnet_id: this._subnetId,
    };
  }
}
