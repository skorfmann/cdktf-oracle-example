// https://www.terraform.io/docs/providers/oci/r/core_default_security_list.html
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
      "egress_security_rules": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "description": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "destination": {
              "type": "string",
              "required": true
            },
            "destination_type": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "protocol": {
              "type": "string",
              "required": true
            },
            "stateless": {
              "type": "bool",
              "optional": true,
              "computed": true
            }
          },
          "block_types": {
            "icmp_options": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "code": {
                    "type": "number",
                    "optional": true
                  },
                  "type": {
                    "type": "number",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "tcp_options": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "max": {
                    "type": "number",
                    "optional": true
                  },
                  "min": {
                    "type": "number",
                    "optional": true
                  }
                },
                "block_types": {
                  "source_port_range": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "max": {
                          "type": "number",
                          "required": true
                        },
                        "min": {
                          "type": "number",
                          "required": true
                        }
                      }
                    },
                    "max_items": 1
                  }
                }
              },
              "max_items": 1
            },
            "udp_options": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "max": {
                    "type": "number",
                    "optional": true
                  },
                  "min": {
                    "type": "number",
                    "optional": true
                  }
                },
                "block_types": {
                  "source_port_range": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "max": {
                          "type": "number",
                          "required": true
                        },
                        "min": {
                          "type": "number",
                          "required": true
                        }
                      }
                    },
                    "max_items": 1
                  }
                }
              },
              "max_items": 1
            }
          }
        }
      },
      "ingress_security_rules": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "description": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "protocol": {
              "type": "string",
              "required": true
            },
            "source": {
              "type": "string",
              "required": true
            },
            "source_type": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "stateless": {
              "type": "bool",
              "optional": true
            }
          },
          "block_types": {
            "icmp_options": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "code": {
                    "type": "number",
                    "optional": true
                  },
                  "type": {
                    "type": "number",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "tcp_options": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "max": {
                    "type": "number",
                    "optional": true
                  },
                  "min": {
                    "type": "number",
                    "optional": true
                  }
                },
                "block_types": {
                  "source_port_range": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "max": {
                          "type": "number",
                          "required": true
                        },
                        "min": {
                          "type": "number",
                          "required": true
                        }
                      }
                    },
                    "max_items": 1
                  }
                }
              },
              "max_items": 1
            },
            "udp_options": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "max": {
                    "type": "number",
                    "optional": true
                  },
                  "min": {
                    "type": "number",
                    "optional": true
                  }
                },
                "block_types": {
                  "source_port_range": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "max": {
                          "type": "number",
                          "required": true
                        },
                        "min": {
                          "type": "number",
                          "required": true
                        }
                      }
                    },
                    "max_items": 1
                  }
                }
              },
              "max_items": 1
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

export interface CoreDefaultSecurityListConfig extends TerraformMetaArguments {
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly manageDefaultResourceId: string;
  /** egress_security_rules block */
  readonly egressSecurityRules?: CoreDefaultSecurityListEgressSecurityRules[];
  /** ingress_security_rules block */
  readonly ingressSecurityRules?: CoreDefaultSecurityListIngressSecurityRules[];
  /** timeouts block */
  readonly timeouts?: CoreDefaultSecurityListTimeouts;
}
export interface CoreDefaultSecurityListEgressSecurityRulesIcmpOptions {
  readonly code?: number;
  readonly type: number;
}
export interface CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange {
  readonly max: number;
  readonly min: number;
}
export interface CoreDefaultSecurityListEgressSecurityRulesTcpOptions {
  readonly max?: number;
  readonly min?: number;
  /** source_port_range block */
  readonly sourcePortRange?: CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange[];
}
export interface CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange {
  readonly max: number;
  readonly min: number;
}
export interface CoreDefaultSecurityListEgressSecurityRulesUdpOptions {
  readonly max?: number;
  readonly min?: number;
  /** source_port_range block */
  readonly sourcePortRange?: CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange[];
}
export interface CoreDefaultSecurityListEgressSecurityRules {
  readonly description?: string;
  readonly destination: string;
  readonly destinationType?: string;
  readonly protocol: string;
  readonly stateless?: boolean;
  /** icmp_options block */
  readonly icmpOptions?: CoreDefaultSecurityListEgressSecurityRulesIcmpOptions[];
  /** tcp_options block */
  readonly tcpOptions?: CoreDefaultSecurityListEgressSecurityRulesTcpOptions[];
  /** udp_options block */
  readonly udpOptions?: CoreDefaultSecurityListEgressSecurityRulesUdpOptions[];
}
export interface CoreDefaultSecurityListIngressSecurityRulesIcmpOptions {
  readonly code?: number;
  readonly type: number;
}
export interface CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange {
  readonly max: number;
  readonly min: number;
}
export interface CoreDefaultSecurityListIngressSecurityRulesTcpOptions {
  readonly max?: number;
  readonly min?: number;
  /** source_port_range block */
  readonly sourcePortRange?: CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange[];
}
export interface CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange {
  readonly max: number;
  readonly min: number;
}
export interface CoreDefaultSecurityListIngressSecurityRulesUdpOptions {
  readonly max?: number;
  readonly min?: number;
  /** source_port_range block */
  readonly sourcePortRange?: CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange[];
}
export interface CoreDefaultSecurityListIngressSecurityRules {
  readonly description?: string;
  readonly protocol: string;
  readonly source: string;
  readonly sourceType?: string;
  readonly stateless?: boolean;
  /** icmp_options block */
  readonly icmpOptions?: CoreDefaultSecurityListIngressSecurityRulesIcmpOptions[];
  /** tcp_options block */
  readonly tcpOptions?: CoreDefaultSecurityListIngressSecurityRulesTcpOptions[];
  /** udp_options block */
  readonly udpOptions?: CoreDefaultSecurityListIngressSecurityRulesUdpOptions[];
}
export interface CoreDefaultSecurityListTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreDefaultSecurityList extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreDefaultSecurityListConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_default_security_list',
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
    this._egressSecurityRules = config.egressSecurityRules;
    this._ingressSecurityRules = config.ingressSecurityRules;
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

  // egress_security_rules - computed: false, optional: true, required: false
  private _egressSecurityRules?: CoreDefaultSecurityListEgressSecurityRules[];
  public get egressSecurityRules() {
    return this._egressSecurityRules;
  }
  public set egressSecurityRules(value: CoreDefaultSecurityListEgressSecurityRules[] | undefined) {
    this._egressSecurityRules = value;
  }

  // ingress_security_rules - computed: false, optional: true, required: false
  private _ingressSecurityRules?: CoreDefaultSecurityListIngressSecurityRules[];
  public get ingressSecurityRules() {
    return this._ingressSecurityRules;
  }
  public set ingressSecurityRules(value: CoreDefaultSecurityListIngressSecurityRules[] | undefined) {
    this._ingressSecurityRules = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreDefaultSecurityListTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreDefaultSecurityListTimeouts | undefined) {
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
      egress_security_rules: this._egressSecurityRules,
      ingress_security_rules: this._ingressSecurityRules,
      timeouts: this._timeouts,
    };
  }
}
