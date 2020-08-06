// https://www.terraform.io/docs/providers/oci/r/core_route_table.html
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
      }
    },
    "block_types": {
      "route_rules": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "cidr_block": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "description": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "destination": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "destination_type": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "network_entity_id": {
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

export interface CoreRouteTableConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly vcnId: string;
  /** route_rules block */
  readonly routeRules?: CoreRouteTableRouteRules[];
  /** timeouts block */
  readonly timeouts?: CoreRouteTableTimeouts;
}
export interface CoreRouteTableRouteRules {
  readonly cidrBlock?: string;
  readonly description?: string;
  readonly destination?: string;
  readonly destinationType?: string;
  readonly networkEntityId: string;
}
export interface CoreRouteTableTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreRouteTable extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreRouteTableConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_route_table',
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
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._vcnId = config.vcnId;
    this._routeRules = config.routeRules;
    this._timeouts = config.timeouts;
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

  // route_rules - computed: false, optional: true, required: false
  private _routeRules?: CoreRouteTableRouteRules[];
  public get routeRules() {
    return this._routeRules;
  }
  public set routeRules(value: CoreRouteTableRouteRules[] | undefined) {
    this._routeRules = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreRouteTableTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreRouteTableTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      vcn_id: this._vcnId,
      route_rules: this._routeRules,
      timeouts: this._timeouts,
    };
  }
}
