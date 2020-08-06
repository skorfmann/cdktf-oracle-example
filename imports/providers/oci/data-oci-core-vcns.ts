// https://www.terraform.io/docs/providers/oci/r/data_oci_core_vcns.html
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
      "virtual_networks": {
        "type": [
          "list",
          [
            "object",
            {
              "cidr_block": "string",
              "compartment_id": "string",
              "default_dhcp_options_id": "string",
              "default_route_table_id": "string",
              "default_security_list_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "dns_label": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "ipv6cidr_block": "string",
              "ipv6public_cidr_block": "string",
              "is_ipv6enabled": "bool",
              "state": "string",
              "time_created": "string",
              "vcn_domain_name": "string"
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

export interface DataOciCoreVcnsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciCoreVcnsFilter[];
}
export class DataOciCoreVcnsVirtualNetworks extends ComplexComputedList {

  // cidr_block - computed: true, optional: false, required: true
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // default_dhcp_options_id - computed: true, optional: false, required: true
  public get defaultDhcpOptionsId() {
    return this.getStringAttribute('default_dhcp_options_id');
  }

  // default_route_table_id - computed: true, optional: false, required: true
  public get defaultRouteTableId() {
    return this.getStringAttribute('default_route_table_id');
  }

  // default_security_list_id - computed: true, optional: false, required: true
  public get defaultSecurityListId() {
    return this.getStringAttribute('default_security_list_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
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

  // is_ipv6enabled - computed: true, optional: false, required: true
  public get isIpv6Enabled() {
    return this.getBooleanAttribute('is_ipv6enabled');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // vcn_domain_name - computed: true, optional: false, required: true
  public get vcnDomainName() {
    return this.getStringAttribute('vcn_domain_name');
  }
}
export interface DataOciCoreVcnsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreVcns extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreVcnsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_vcns',
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

  // virtual_networks - computed: true, optional: false, required: true
  public virtualNetworks(index: string) {
    return new DataOciCoreVcnsVirtualNetworks(this, 'virtual_networks', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreVcnsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreVcnsFilter[] | undefined) {
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
