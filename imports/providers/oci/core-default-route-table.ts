// https://www.terraform.io/docs/providers/oci/r/core_default_route_table.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
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
      "manage_default_resource_id": {
        "type": "string",
        "required": true
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

export interface CoreDefaultRouteTableConfig extends TerraformMetaArguments {
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly manageDefaultResourceId: string;
  /** route_rules block */
  readonly routeRules?: CoreDefaultRouteTableRouteRules[];
  /** timeouts block */
  readonly timeouts?: CoreDefaultRouteTableTimeouts;
}
export interface CoreDefaultRouteTableRouteRules {
  readonly cidrBlock?: string;
  readonly description?: string;
  readonly destination?: string;
  readonly destinationType?: string;
  readonly networkEntityId: string;
}
export interface CoreDefaultRouteTableTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreDefaultRouteTable extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreDefaultRouteTableConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_default_route_table',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._manageDefaultResourceId = config.manageDefaultResourceId;
    this._routeRules = config.routeRules;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // manage_default_resource_id - computed: false, optional: false, required: true
  private _manageDefaultResourceId: string;
  public get manageDefaultResourceId() {
    return this._manageDefaultResourceId;
  }
  public set manageDefaultResourceId(value: string) {
    this._manageDefaultResourceId = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // route_rules - computed: false, optional: true, required: false
  private _routeRules?: CoreDefaultRouteTableRouteRules[];
  public get routeRules() {
    return this._routeRules;
  }
  public set routeRules(value: CoreDefaultRouteTableRouteRules[] | undefined) {
    this._routeRules = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreDefaultRouteTableTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreDefaultRouteTableTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      manage_default_resource_id: this._manageDefaultResourceId,
      route_rules: this._routeRules,
      timeouts: this._timeouts,
    };
  }
}
