// https://www.terraform.io/docs/providers/oci/r/core_vcn.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "cidr_block": {
        "type": "string",
        "required": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "default_dhcp_options_id": {
        "type": "string",
        "computed": true
      },
      "default_route_table_id": {
        "type": "string",
        "computed": true
      },
      "default_security_list_id": {
        "type": "string",
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
      "is_ipv6enabled": {
        "type": "bool",
        "optional": true,
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
      "vcn_domain_name": {
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

export interface CoreVcnConfig extends TerraformMetaArguments {
  readonly cidrBlock: string;
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly dnsLabel?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly ipv6CidrBlock?: string;
  readonly isIpv6Enabled?: boolean;
  /** timeouts block */
  readonly timeouts?: CoreVcnTimeouts;
}
export interface CoreVcnTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreVcn extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreVcnConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_vcn',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cidrBlock = config.cidrBlock;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._dnsLabel = config.dnsLabel;
    this._freeformTags = config.freeformTags;
    this._ipv6CidrBlock = config.ipv6CidrBlock;
    this._isIpv6Enabled = config.isIpv6Enabled;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // is_ipv6enabled - computed: true, optional: true, required: false
  private _isIpv6Enabled?: boolean;
  public get isIpv6Enabled() {
    return this._isIpv6Enabled ?? this.getBooleanAttribute('is_ipv6enabled');
  }
  public set isIpv6Enabled(value: boolean | undefined) {
    this._isIpv6Enabled = value;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreVcnTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreVcnTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_block: this._cidrBlock,
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      dns_label: this._dnsLabel,
      freeform_tags: this._freeformTags,
      ipv6cidr_block: this._ipv6CidrBlock,
      is_ipv6enabled: this._isIpv6Enabled,
      timeouts: this._timeouts,
    };
  }
}
