// https://www.terraform.io/docs/providers/oci/r/identity_network_source.html
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
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "description": {
        "type": "string",
        "required": true
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
      "inactive_state": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "public_source_list": {
        "type": [
          "list",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "services": {
        "type": [
          "list",
          "string"
        ],
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
      },
      "virtual_source_list": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "ip_ranges": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            },
            "vcn_id": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 100
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IdentityNetworkSourceConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly description: string;
  readonly freeformTags?: { [key: string]: string };
  readonly name: string;
  readonly publicSourceList?: string[];
  readonly services?: string[];
  /** timeouts block */
  readonly timeouts?: IdentityNetworkSourceTimeouts;
  /** virtual_source_list block */
  readonly virtualSourceList?: IdentityNetworkSourceVirtualSourceList[];
}
export interface IdentityNetworkSourceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}
export interface IdentityNetworkSourceVirtualSourceList {
  readonly ipRanges: string[];
  readonly vcnId: string;
}

// Resource

export class IdentityNetworkSource extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IdentityNetworkSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_network_source',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._freeformTags = config.freeformTags;
    this._name = config.name;
    this._publicSourceList = config.publicSourceList;
    this._services = config.services;
    this._timeouts = config.timeouts;
    this._virtualSourceList = config.virtualSourceList;
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

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // description - computed: false, optional: false, required: true
  private _description: string;
  public get description() {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
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

  // inactive_state - computed: true, optional: false, required: true
  public get inactiveState() {
    return this.getStringAttribute('inactive_state');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // public_source_list - computed: true, optional: true, required: false
  private _publicSourceList?: string[];
  public get publicSourceList() {
    return this._publicSourceList ?? this.getListAttribute('public_source_list');
  }
  public set publicSourceList(value: string[] | undefined) {
    this._publicSourceList = value;
  }

  // services - computed: true, optional: true, required: false
  private _services?: string[];
  public get services() {
    return this._services ?? this.getListAttribute('services');
  }
  public set services(value: string[] | undefined) {
    this._services = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IdentityNetworkSourceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IdentityNetworkSourceTimeouts | undefined) {
    this._timeouts = value;
  }

  // virtual_source_list - computed: false, optional: true, required: false
  private _virtualSourceList?: IdentityNetworkSourceVirtualSourceList[];
  public get virtualSourceList() {
    return this._virtualSourceList;
  }
  public set virtualSourceList(value: IdentityNetworkSourceVirtualSourceList[] | undefined) {
    this._virtualSourceList = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      description: this._description,
      freeform_tags: this._freeformTags,
      name: this._name,
      public_source_list: this._publicSourceList,
      services: this._services,
      timeouts: this._timeouts,
      virtual_source_list: this._virtualSourceList,
    };
  }
}
