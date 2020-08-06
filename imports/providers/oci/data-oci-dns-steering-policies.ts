// https://www.terraform.io/docs/providers/oci/r/data_oci_dns_steering_policies.html
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
      "display_name": {
        "type": "string",
        "optional": true
      },
      "display_name_contains": {
        "type": "string",
        "optional": true
      },
      "health_check_monitor_id": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true
      },
      "state": {
        "type": "string",
        "optional": true
      },
      "steering_policies": {
        "type": [
          "list",
          [
            "object",
            {
              "answers": [
                "list",
                [
                  "object",
                  {
                    "is_disabled": "bool",
                    "name": "string",
                    "pool": "string",
                    "rdata": "string",
                    "rtype": "string"
                  }
                ]
              ],
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "health_check_monitor_id": "string",
              "id": "string",
              "rules": [
                "list",
                [
                  "object",
                  {
                    "cases": [
                      "list",
                      [
                        "object",
                        {
                          "answer_data": [
                            "list",
                            [
                              "object",
                              {
                                "answer_condition": "string",
                                "should_keep": "bool",
                                "value": "number"
                              }
                            ]
                          ],
                          "case_condition": "string",
                          "count": "number"
                        }
                      ]
                    ],
                    "default_answer_data": [
                      "list",
                      [
                        "object",
                        {
                          "answer_condition": "string",
                          "should_keep": "bool",
                          "value": "number"
                        }
                      ]
                    ],
                    "default_count": "number",
                    "description": "string",
                    "rule_type": "string"
                  }
                ]
              ],
              "self": "string",
              "state": "string",
              "template": "string",
              "time_created": "string",
              "ttl": "number"
            }
          ]
        ],
        "computed": true
      },
      "template": {
        "type": "string",
        "optional": true
      },
      "time_created_greater_than_or_equal_to": {
        "type": "string",
        "optional": true
      },
      "time_created_less_than": {
        "type": "string",
        "optional": true
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

export interface DataOciDnsSteeringPoliciesConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly displayNameContains?: string;
  readonly healthCheckMonitorId?: string;
  readonly state?: string;
  readonly template?: string;
  readonly timeCreatedGreaterThanOrEqualTo?: string;
  readonly timeCreatedLessThan?: string;
  /** filter block */
  readonly filter?: DataOciDnsSteeringPoliciesFilter[];
}
export class DataOciDnsSteeringPoliciesSteeringPoliciesAnswers extends ComplexComputedList {

  // is_disabled - computed: true, optional: false, required: true
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // pool - computed: true, optional: false, required: true
  public get pool() {
    return this.getStringAttribute('pool');
  }

  // rdata - computed: true, optional: false, required: true
  public get rdata() {
    return this.getStringAttribute('rdata');
  }

  // rtype - computed: true, optional: false, required: true
  public get rtype() {
    return this.getStringAttribute('rtype');
  }
}
export class DataOciDnsSteeringPoliciesSteeringPoliciesRulesCasesAnswerData extends ComplexComputedList {

  // answer_condition - computed: true, optional: false, required: true
  public get answerCondition() {
    return this.getStringAttribute('answer_condition');
  }

  // should_keep - computed: true, optional: false, required: true
  public get shouldKeep() {
    return this.getBooleanAttribute('should_keep');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export class DataOciDnsSteeringPoliciesSteeringPoliciesRulesCases extends ComplexComputedList {

  // answer_data - computed: true, optional: false, required: true
  public get answerData() {
    return 'not implemented' as any;
  }

  // case_condition - computed: true, optional: false, required: true
  public get caseCondition() {
    return this.getStringAttribute('case_condition');
  }

  // count - computed: true, optional: false, required: true
  public get count() {
    return this.getNumberAttribute('count');
  }
}
export class DataOciDnsSteeringPoliciesSteeringPoliciesRulesDefaultAnswerData extends ComplexComputedList {

  // answer_condition - computed: true, optional: false, required: true
  public get answerCondition() {
    return this.getStringAttribute('answer_condition');
  }

  // should_keep - computed: true, optional: false, required: true
  public get shouldKeep() {
    return this.getBooleanAttribute('should_keep');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export class DataOciDnsSteeringPoliciesSteeringPoliciesRules extends ComplexComputedList {

  // cases - computed: true, optional: false, required: true
  public get cases() {
    return 'not implemented' as any;
  }

  // default_answer_data - computed: true, optional: false, required: true
  public get defaultAnswerData() {
    return 'not implemented' as any;
  }

  // default_count - computed: true, optional: false, required: true
  public get defaultCount() {
    return this.getNumberAttribute('default_count');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // rule_type - computed: true, optional: false, required: true
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
}
export class DataOciDnsSteeringPoliciesSteeringPolicies extends ComplexComputedList {

  // answers - computed: true, optional: false, required: true
  public get answers() {
    return 'not implemented' as any;
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // health_check_monitor_id - computed: true, optional: false, required: true
  public get healthCheckMonitorId() {
    return this.getStringAttribute('health_check_monitor_id');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // rules - computed: true, optional: false, required: true
  public get rules() {
    return 'not implemented' as any;
  }

  // self - computed: true, optional: false, required: true
  public get selfAttribute() {
    return this.getStringAttribute('self');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // template - computed: true, optional: false, required: true
  public get template() {
    return this.getStringAttribute('template');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // ttl - computed: true, optional: false, required: true
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
}
export interface DataOciDnsSteeringPoliciesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDnsSteeringPolicies extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDnsSteeringPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dns_steering_policies',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._displayNameContains = config.displayNameContains;
    this._healthCheckMonitorId = config.healthCheckMonitorId;
    this._state = config.state;
    this._template = config.template;
    this._timeCreatedGreaterThanOrEqualTo = config.timeCreatedGreaterThanOrEqualTo;
    this._timeCreatedLessThan = config.timeCreatedLessThan;
    this._filter = config.filter;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // display_name_contains - computed: false, optional: true, required: false
  private _displayNameContains?: string;
  public get displayNameContains() {
    return this._displayNameContains;
  }
  public set displayNameContains(value: string | undefined) {
    this._displayNameContains = value;
  }

  // health_check_monitor_id - computed: false, optional: true, required: false
  private _healthCheckMonitorId?: string;
  public get healthCheckMonitorId() {
    return this._healthCheckMonitorId;
  }
  public set healthCheckMonitorId(value: string | undefined) {
    this._healthCheckMonitorId = value;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id;
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // steering_policies - computed: true, optional: false, required: true
  public steeringPolicies(index: string) {
    return new DataOciDnsSteeringPoliciesSteeringPolicies(this, 'steering_policies', index);
  }

  // template - computed: false, optional: true, required: false
  private _template?: string;
  public get template() {
    return this._template;
  }
  public set template(value: string | undefined) {
    this._template = value;
  }

  // time_created_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeCreatedGreaterThanOrEqualTo?: string;
  public get timeCreatedGreaterThanOrEqualTo() {
    return this._timeCreatedGreaterThanOrEqualTo;
  }
  public set timeCreatedGreaterThanOrEqualTo(value: string | undefined) {
    this._timeCreatedGreaterThanOrEqualTo = value;
  }

  // time_created_less_than - computed: false, optional: true, required: false
  private _timeCreatedLessThan?: string;
  public get timeCreatedLessThan() {
    return this._timeCreatedLessThan;
  }
  public set timeCreatedLessThan(value: string | undefined) {
    this._timeCreatedLessThan = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDnsSteeringPoliciesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDnsSteeringPoliciesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      display_name_contains: this._displayNameContains,
      health_check_monitor_id: this._healthCheckMonitorId,
      state: this._state,
      template: this._template,
      time_created_greater_than_or_equal_to: this._timeCreatedGreaterThanOrEqualTo,
      time_created_less_than: this._timeCreatedLessThan,
      filter: this._filter,
    };
  }
}
