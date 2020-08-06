// https://www.terraform.io/docs/providers/oci/r/data_oci_load_balancer_path_route_sets.html
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
      "path_route_sets": {
        "type": [
          "list",
          [
            "object",
            {
              "load_balancer_id": "string",
              "name": "string",
              "path_routes": [
                "list",
                [
                  "object",
                  {
                    "backend_set_name": "string",
                    "path": "string",
                    "path_match_type": [
                      "list",
                      [
                        "object",
                        {
                          "match_type": "string"
                        }
                      ]
                    ]
                  }
                ]
              ],
              "state": "string"
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

export interface DataOciLoadBalancerPathRouteSetsConfig extends TerraformMetaArguments {
  readonly loadBalancerId: string;
  /** filter block */
  readonly filter?: DataOciLoadBalancerPathRouteSetsFilter[];
}
export class DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchType extends ComplexComputedList {

  // match_type - computed: true, optional: false, required: true
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
}
export class DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutes extends ComplexComputedList {

  // backend_set_name - computed: true, optional: false, required: true
  public get backendSetName() {
    return this.getStringAttribute('backend_set_name');
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // path_match_type - computed: true, optional: false, required: true
  public get pathMatchType() {
    return 'not implemented' as any;
  }
}
export class DataOciLoadBalancerPathRouteSetsPathRouteSets extends ComplexComputedList {

  // load_balancer_id - computed: true, optional: false, required: true
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // path_routes - computed: true, optional: false, required: true
  public get pathRoutes() {
    return 'not implemented' as any;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataOciLoadBalancerPathRouteSetsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciLoadBalancerPathRouteSets extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciLoadBalancerPathRouteSetsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_load_balancer_path_route_sets',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._loadBalancerId = config.loadBalancerId;
    this._filter = config.filter;
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

  // path_route_sets - computed: true, optional: false, required: true
  public pathRouteSets(index: string) {
    return new DataOciLoadBalancerPathRouteSetsPathRouteSets(this, 'path_route_sets', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciLoadBalancerPathRouteSetsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciLoadBalancerPathRouteSetsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      load_balancer_id: this._loadBalancerId,
      filter: this._filter,
    };
  }
}
