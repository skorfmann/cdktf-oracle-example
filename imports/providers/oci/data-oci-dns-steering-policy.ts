// https://www.terraform.io/docs/providers/oci/r/data_oci_dns_steering_policy.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "answers": {
        "type": [
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
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "health_check_monitor_id": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "rules": {
        "type": [
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
      "steering_policy_id": {
        "type": "string",
        "required": true
      },
      "template": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "ttl": {
        "type": "number",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataOciDnsSteeringPolicyConfig extends TerraformMetaArguments {
  readonly steeringPolicyId: string;
}
export class DataOciDnsSteeringPolicyAnswers extends ComplexComputedList {

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
export class DataOciDnsSteeringPolicyRulesCasesAnswerData extends ComplexComputedList {

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
export class DataOciDnsSteeringPolicyRulesCases extends ComplexComputedList {

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
export class DataOciDnsSteeringPolicyRulesDefaultAnswerData extends ComplexComputedList {

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
export class DataOciDnsSteeringPolicyRules extends ComplexComputedList {

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

// Resource

export class DataOciDnsSteeringPolicy extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDnsSteeringPolicyConfig) {
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
    this._steeringPolicyId = config.steeringPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // answers - computed: true, optional: false, required: true
  public answers(index: string) {
    return new DataOciDnsSteeringPolicyAnswers(this, 'answers', index);
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
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
  public rules(index: string) {
    return new DataOciDnsSteeringPolicyRules(this, 'rules', index);
  }

  // self - computed: true, optional: false, required: true
  public get selfAttribute() {
    return this.getStringAttribute('self');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // steering_policy_id - computed: false, optional: false, required: true
  private _steeringPolicyId: string;
  public get steeringPolicyId() {
    return this._steeringPolicyId;
  }
  public set steeringPolicyId(value: string) {
    this._steeringPolicyId = value;
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      steering_policy_id: this._steeringPolicyId,
    };
  }
}
