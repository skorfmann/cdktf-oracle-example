// https://www.terraform.io/docs/providers/oci/r/autoscaling_auto_scaling_configuration.html
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
      "cool_down_in_seconds": {
        "type": "number",
        "optional": true,
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
      "is_enabled": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "max_resource_count": {
        "type": "number",
        "computed": true
      },
      "min_resource_count": {
        "type": "number",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "auto_scaling_resources": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "id": {
              "type": "string",
              "required": true
            },
            "type": {
              "type": "string",
              "required": true
            }
          }
        },
        "min_items": 1,
        "max_items": 1
      },
      "policies": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "display_name": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "id": {
              "type": "string",
              "computed": true
            },
            "is_enabled": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "policy_type": {
              "type": "string",
              "required": true
            },
            "time_created": {
              "type": "string",
              "computed": true
            }
          },
          "block_types": {
            "capacity": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "initial": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "max": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "min": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  }
                }
              },
              "min_items": 1,
              "max_items": 1
            },
            "execution_schedule": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "expression": {
                    "type": "string",
                    "required": true
                  },
                  "timezone": {
                    "type": "string",
                    "required": true
                  },
                  "type": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "rules": {
              "nesting_mode": "set",
              "block": {
                "attributes": {
                  "display_name": {
                    "type": "string",
                    "required": true
                  },
                  "id": {
                    "type": "string",
                    "computed": true
                  }
                },
                "block_types": {
                  "action": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "type": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "value": {
                          "type": "number",
                          "optional": true,
                          "computed": true
                        }
                      }
                    },
                    "max_items": 1
                  },
                  "metric": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "metric_type": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        }
                      },
                      "block_types": {
                        "threshold": {
                          "nesting_mode": "list",
                          "block": {
                            "attributes": {
                              "operator": {
                                "type": "string",
                                "optional": true,
                                "computed": true
                              },
                              "value": {
                                "type": "number",
                                "optional": true,
                                "computed": true
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

export interface AutoscalingAutoScalingConfigurationConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly coolDownInSeconds?: number;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly isEnabled?: boolean;
  /** auto_scaling_resources block */
  readonly autoScalingResources: AutoscalingAutoScalingConfigurationAutoScalingResources[];
  /** policies block */
  readonly policies: AutoscalingAutoScalingConfigurationPolicies[];
  /** timeouts block */
  readonly timeouts?: AutoscalingAutoScalingConfigurationTimeouts;
}
export interface AutoscalingAutoScalingConfigurationAutoScalingResources {
  readonly id: string;
  readonly type: string;
}
export interface AutoscalingAutoScalingConfigurationPoliciesCapacity {
  readonly initial?: number;
  readonly max?: number;
  readonly min?: number;
}
export interface AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule {
  readonly expression: string;
  readonly timezone: string;
  readonly type: string;
}
export interface AutoscalingAutoScalingConfigurationPoliciesRulesAction {
  readonly type?: string;
  readonly value?: number;
}
export interface AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold {
  readonly operator?: string;
  readonly value?: number;
}
export interface AutoscalingAutoScalingConfigurationPoliciesRulesMetric {
  readonly metricType?: string;
  /** threshold block */
  readonly threshold?: AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold[];
}
export interface AutoscalingAutoScalingConfigurationPoliciesRules {
  readonly displayName: string;
  /** action block */
  readonly action?: AutoscalingAutoScalingConfigurationPoliciesRulesAction[];
  /** metric block */
  readonly metric?: AutoscalingAutoScalingConfigurationPoliciesRulesMetric[];
}
export interface AutoscalingAutoScalingConfigurationPolicies {
  readonly displayName?: string;
  readonly isEnabled?: boolean;
  readonly policyType: string;
  /** capacity block */
  readonly capacity: AutoscalingAutoScalingConfigurationPoliciesCapacity[];
  /** execution_schedule block */
  readonly executionSchedule?: AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule[];
  /** rules block */
  readonly rules?: AutoscalingAutoScalingConfigurationPoliciesRules[];
}
export interface AutoscalingAutoScalingConfigurationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class AutoscalingAutoScalingConfiguration extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AutoscalingAutoScalingConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_autoscaling_auto_scaling_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._coolDownInSeconds = config.coolDownInSeconds;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._isEnabled = config.isEnabled;
    this._autoScalingResources = config.autoScalingResources;
    this._policies = config.policies;
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

  // cool_down_in_seconds - computed: true, optional: true, required: false
  private _coolDownInSeconds?: number;
  public get coolDownInSeconds() {
    return this._coolDownInSeconds ?? this.getNumberAttribute('cool_down_in_seconds');
  }
  public set coolDownInSeconds(value: number | undefined) {
    this._coolDownInSeconds = value;
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

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean;
  public get isEnabled() {
    return this._isEnabled ?? this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | undefined) {
    this._isEnabled = value;
  }

  // max_resource_count - computed: true, optional: false, required: true
  public get maxResourceCount() {
    return this.getNumberAttribute('max_resource_count');
  }

  // min_resource_count - computed: true, optional: false, required: true
  public get minResourceCount() {
    return this.getNumberAttribute('min_resource_count');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // auto_scaling_resources - computed: false, optional: false, required: true
  private _autoScalingResources: AutoscalingAutoScalingConfigurationAutoScalingResources[];
  public get autoScalingResources() {
    return this._autoScalingResources;
  }
  public set autoScalingResources(value: AutoscalingAutoScalingConfigurationAutoScalingResources[]) {
    this._autoScalingResources = value;
  }

  // policies - computed: false, optional: false, required: true
  private _policies: AutoscalingAutoScalingConfigurationPolicies[];
  public get policies() {
    return this._policies;
  }
  public set policies(value: AutoscalingAutoScalingConfigurationPolicies[]) {
    this._policies = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AutoscalingAutoScalingConfigurationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AutoscalingAutoScalingConfigurationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      cool_down_in_seconds: this._coolDownInSeconds,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      is_enabled: this._isEnabled,
      auto_scaling_resources: this._autoScalingResources,
      policies: this._policies,
      timeouts: this._timeouts,
    };
  }
}
