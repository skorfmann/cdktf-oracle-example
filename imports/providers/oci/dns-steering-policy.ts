// https://www.terraform.io/docs/providers/oci/r/dns_steering_policy.html
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
      "health_check_monitor_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "self": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "template": {
        "type": "string",
        "required": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "ttl": {
        "type": "number",
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "answers": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "is_disabled": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "name": {
              "type": "string",
              "required": true
            },
            "pool": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "rdata": {
              "type": "string",
              "required": true
            },
            "rtype": {
              "type": "string",
              "required": true
            }
          }
        }
      },
      "rules": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "default_count": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "description": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "rule_type": {
              "type": "string",
              "required": true
            }
          },
          "block_types": {
            "cases": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "case_condition": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "count": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  }
                },
                "block_types": {
                  "answer_data": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "answer_condition": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "should_keep": {
                          "type": "bool",
                          "optional": true,
                          "computed": true
                        },
                        "value": {
                          "type": "number",
                          "optional": true,
                          "computed": true
                        }
                      }
                    }
                  }
                }
              }
            },
            "default_answer_data": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "answer_condition": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "should_keep": {
                    "type": "bool",
                    "optional": true,
                    "computed": true
                  },
                  "value": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  }
                }
              }
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

export interface DnsSteeringPolicyConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName: string;
  readonly freeformTags?: { [key: string]: string };
  readonly healthCheckMonitorId?: string;
  readonly template: string;
  readonly ttl?: number;
  /** answers block */
  readonly answers?: DnsSteeringPolicyAnswers[];
  /** rules block */
  readonly rules?: DnsSteeringPolicyRules[];
  /** timeouts block */
  readonly timeouts?: DnsSteeringPolicyTimeouts;
}
export interface DnsSteeringPolicyAnswers {
  readonly isDisabled?: boolean;
  readonly name: string;
  readonly pool?: string;
  readonly rdata: string;
  readonly rtype: string;
}
export interface DnsSteeringPolicyRulesCasesAnswerData {
  readonly answerCondition?: string;
  readonly shouldKeep?: boolean;
  readonly value?: number;
}
export interface DnsSteeringPolicyRulesCases {
  readonly caseCondition?: string;
  readonly count?: number;
  /** answer_data block */
  readonly answerData?: DnsSteeringPolicyRulesCasesAnswerData[];
}
export interface DnsSteeringPolicyRulesDefaultAnswerData {
  readonly answerCondition?: string;
  readonly shouldKeep?: boolean;
  readonly value?: number;
}
export interface DnsSteeringPolicyRules {
  readonly defaultCount?: number;
  readonly description?: string;
  readonly ruleType: string;
  /** cases block */
  readonly cases?: DnsSteeringPolicyRulesCases[];
  /** default_answer_data block */
  readonly defaultAnswerData?: DnsSteeringPolicyRulesDefaultAnswerData[];
}
export interface DnsSteeringPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DnsSteeringPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DnsSteeringPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dns_steering_policy',
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
    this._healthCheckMonitorId = config.healthCheckMonitorId;
    this._template = config.template;
    this._ttl = config.ttl;
    this._answers = config.answers;
    this._rules = config.rules;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
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

  // health_check_monitor_id - computed: true, optional: true, required: false
  private _healthCheckMonitorId?: string;
  public get healthCheckMonitorId() {
    return this._healthCheckMonitorId ?? this.getStringAttribute('health_check_monitor_id');
  }
  public set healthCheckMonitorId(value: string | undefined) {
    this._healthCheckMonitorId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // self - computed: true, optional: false, required: true
  public get selfAttribute() {
    return this.getStringAttribute('self');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // template - computed: false, optional: false, required: true
  private _template: string;
  public get template() {
    return this._template;
  }
  public set template(value: string) {
    this._template = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number;
  public get ttl() {
    return this._ttl ?? this.getNumberAttribute('ttl');
  }
  public set ttl(value: number | undefined) {
    this._ttl = value;
  }

  // answers - computed: false, optional: true, required: false
  private _answers?: DnsSteeringPolicyAnswers[];
  public get answers() {
    return this._answers;
  }
  public set answers(value: DnsSteeringPolicyAnswers[] | undefined) {
    this._answers = value;
  }

  // rules - computed: false, optional: true, required: false
  private _rules?: DnsSteeringPolicyRules[];
  public get rules() {
    return this._rules;
  }
  public set rules(value: DnsSteeringPolicyRules[] | undefined) {
    this._rules = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DnsSteeringPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DnsSteeringPolicyTimeouts | undefined) {
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
      health_check_monitor_id: this._healthCheckMonitorId,
      template: this._template,
      ttl: this._ttl,
      answers: this._answers,
      rules: this._rules,
      timeouts: this._timeouts,
    };
  }
}
