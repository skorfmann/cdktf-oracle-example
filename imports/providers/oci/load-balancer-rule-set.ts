// https://www.terraform.io/docs/providers/oci/r/load_balancer_rule_set.html
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
      "items": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "action": {
              "type": "string",
              "required": true
            },
            "allowed_methods": {
              "type": [
                "list",
                "string"
              ],
              "optional": true,
              "computed": true
            },
            "are_invalid_characters_allowed": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "description": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "header": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "http_large_header_size_in_kb": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "prefix": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "response_code": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "status_code": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "suffix": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "value": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          },
          "block_types": {
            "conditions": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "attribute_name": {
                    "type": "string",
                    "required": true
                  },
                  "attribute_value": {
                    "type": "string",
                    "required": true
                  },
                  "operator": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  }
                }
              }
            },
            "redirect_uri": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "host": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "path": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "port": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "protocol": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "query": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  }
                }
              },
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

export interface LoadBalancerRuleSetConfig extends TerraformMetaArguments {
  readonly loadBalancerId: string;
  readonly name: string;
  /** items block */
  readonly items: LoadBalancerRuleSetItems[];
  /** timeouts block */
  readonly timeouts?: LoadBalancerRuleSetTimeouts;
}
export interface LoadBalancerRuleSetItemsConditions {
  readonly attributeName: string;
  readonly attributeValue: string;
  readonly operator?: string;
}
export interface LoadBalancerRuleSetItemsRedirectUri {
  readonly host?: string;
  readonly path?: string;
  readonly port?: number;
  readonly protocol?: string;
  readonly query?: string;
}
export interface LoadBalancerRuleSetItems {
  readonly action: string;
  readonly allowedMethods?: string[];
  readonly areInvalidCharactersAllowed?: boolean;
  readonly description?: string;
  readonly header?: string;
  readonly httpLargeHeaderSizeInKb?: number;
  readonly prefix?: string;
  readonly responseCode?: number;
  readonly statusCode?: number;
  readonly suffix?: string;
  readonly value?: string;
  /** conditions block */
  readonly conditions?: LoadBalancerRuleSetItemsConditions[];
  /** redirect_uri block */
  readonly redirectUri?: LoadBalancerRuleSetItemsRedirectUri[];
}
export interface LoadBalancerRuleSetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class LoadBalancerRuleSet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LoadBalancerRuleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_load_balancer_rule_set',
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
    this._items = config.items;
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

  // items - computed: false, optional: false, required: true
  private _items: LoadBalancerRuleSetItems[];
  public get items() {
    return this._items;
  }
  public set items(value: LoadBalancerRuleSetItems[]) {
    this._items = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LoadBalancerRuleSetTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LoadBalancerRuleSetTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      load_balancer_id: this._loadBalancerId,
      name: this._name,
      items: this._items,
      timeouts: this._timeouts,
    };
  }
}
