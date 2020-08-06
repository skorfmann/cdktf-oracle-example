// https://www.terraform.io/docs/providers/oci/r/core_vlan.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "availability_domain": {
        "type": "string",
        "required": true
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
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "nsg_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "route_table_id": {
        "type": "string",
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
      "vcn_id": {
        "type": "string",
        "required": true
      },
      "vlan_tag": {
        "type": "number",
        "optional": true,
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

export interface CoreVlanConfig extends TerraformMetaArguments {
  readonly availabilityDomain: string;
  readonly cidrBlock: string;
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly nsgIds?: string[];
  readonly routeTableId?: string;
  readonly vcnId: string;
  readonly vlanTag?: number;
  /** timeouts block */
  readonly timeouts?: CoreVlanTimeouts;
}
export interface CoreVlanTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreVlan extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreVlanConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_vlan',
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
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._nsgIds = config.nsgIds;
    this._routeTableId = config.routeTableId;
    this._vcnId = config.vcnId;
    this._vlanTag = config.vlanTag;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain: string;
  public get availabilityDomain() {
    return this._availabilityDomain;
  }
  public set availabilityDomain(value: string) {
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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[];
  public get nsgIds() {
    return this._nsgIds ?? this.getListAttribute('nsg_ids');
  }
  public set nsgIds(value: string[] | undefined) {
    this._nsgIds = value;
  }

  // route_table_id - computed: true, optional: true, required: false
  private _routeTableId?: string;
  public get routeTableId() {
    return this._routeTableId ?? this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string | undefined) {
    this._routeTableId = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
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

  // vlan_tag - computed: true, optional: true, required: false
  private _vlanTag?: number;
  public get vlanTag() {
    return this._vlanTag ?? this.getNumberAttribute('vlan_tag');
  }
  public set vlanTag(value: number | undefined) {
    this._vlanTag = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreVlanTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreVlanTimeouts | undefined) {
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
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      nsg_ids: this._nsgIds,
      route_table_id: this._routeTableId,
      vcn_id: this._vcnId,
      vlan_tag: this._vlanTag,
      timeouts: this._timeouts,
    };
  }
}
