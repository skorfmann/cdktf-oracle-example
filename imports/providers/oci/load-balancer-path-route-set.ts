// https://www.terraform.io/docs/providers/oci/r/load_balancer_path_route_set.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "load_balancer_id": {
        "type": "string",
        "required": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "state": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "path_routes": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "backend_set_name": {
              "type": "string",
              "required": true
            },
            "path": {
              "type": "string",
              "required": true
            }
          },
          "block_types": {
            "path_match_type": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "match_type": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "min_items": 1,
              "max_items": 1
            }
          }
        },
        "min_items": 1
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

export interface LoadBalancerPathRouteSetConfig extends TerraformMetaArguments {
  readonly loadBalancerId: string;
  readonly name: string;
  /** path_routes block */
  readonly pathRoutes: LoadBalancerPathRouteSetPathRoutes[];
  /** timeouts block */
  readonly timeouts?: LoadBalancerPathRouteSetTimeouts;
}
export interface LoadBalancerPathRouteSetPathRoutesPathMatchType {
  readonly matchType: string;
}
export interface LoadBalancerPathRouteSetPathRoutes {
  readonly backendSetName: string;
  readonly path: string;
  /** path_match_type block */
  readonly pathMatchType: LoadBalancerPathRouteSetPathRoutesPathMatchType[];
}
export interface LoadBalancerPathRouteSetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class LoadBalancerPathRouteSet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LoadBalancerPathRouteSetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_load_balancer_path_route_set',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._loadBalancerId = config.loadBalancerId;
    this._name = config.name;
    this._pathRoutes = config.pathRoutes;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId: string;
  public get loadBalancerId() {
    return this._loadBalancerId;
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // path_routes - computed: false, optional: false, required: true
  private _pathRoutes: LoadBalancerPathRouteSetPathRoutes[];
  public get pathRoutes() {
    return this._pathRoutes;
  }
  public set pathRoutes(value: LoadBalancerPathRouteSetPathRoutes[]) {
    this._pathRoutes = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LoadBalancerPathRouteSetTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LoadBalancerPathRouteSetTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      load_balancer_id: this._loadBalancerId,
      name: this._name,
      path_routes: this._pathRoutes,
      timeouts: this._timeouts,
    };
  }
}
