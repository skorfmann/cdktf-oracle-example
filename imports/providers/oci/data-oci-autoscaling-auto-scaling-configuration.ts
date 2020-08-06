// https://www.terraform.io/docs/providers/oci/r/data_oci_autoscaling_auto_scaling_configuration.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "auto_scaling_configuration_id": {
        "type": "string",
        "required": true
      },
      "auto_scaling_resources": {
        "type": [
          "list",
          [
            "object",
            {
              "id": "string",
              "type": "string"
            }
          ]
        ],
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "cool_down_in_seconds": {
        "type": "number",
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
      "id": {
        "type": "string",
        "computed": true
      },
      "is_enabled": {
        "type": "bool",
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
      "policies": {
        "type": [
          "list",
          [
            "object",
            {
              "capacity": [
                "list",
                [
                  "object",
                  {
                    "initial": "number",
                    "max": "number",
                    "min": "number"
                  }
                ]
              ],
              "display_name": "string",
              "execution_schedule": [
                "list",
                [
                  "object",
                  {
                    "expression": "string",
                    "timezone": "string",
                    "type": "string"
                  }
                ]
              ],
              "id": "string",
              "is_enabled": "bool",
              "policy_type": "string",
              "rules": [
                "list",
                [
                  "object",
                  {
                    "action": [
                      "list",
                      [
                        "object",
                        {
                          "type": "string",
                          "value": "number"
                        }
                      ]
                    ],
                    "display_name": "string",
                    "id": "string",
                    "metric": [
                      "list",
                      [
                        "object",
                        {
                          "metric_type": "string",
                          "threshold": [
                            "list",
                            [
                              "object",
                              {
                                "operator": "string",
                                "value": "number"
                              }
                            ]
                          ]
                        }
                      ]
                    ]
                  }
                ]
              ],
              "time_created": "string"
            }
          ]
        ],
        "computed": true
      },
      "time_created": {
        "type": "string",
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

export interface DataOciAutoscalingAutoScalingConfigurationConfig extends TerraformMetaArguments {
  readonly autoScalingConfigurationId: string;
}
export class DataOciAutoscalingAutoScalingConfigurationAutoScalingResources extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity extends ComplexComputedList {

  // initial - computed: true, optional: false, required: true
  public get initial() {
    return this.getNumberAttribute('initial');
  }

  // max - computed: true, optional: false, required: true
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: true
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export class DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule extends ComplexComputedList {

  // expression - computed: true, optional: false, required: true
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // timezone - computed: true, optional: false, required: true
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction extends ComplexComputedList {

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export class DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold extends ComplexComputedList {

  // operator - computed: true, optional: false, required: true
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export class DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric extends ComplexComputedList {

  // metric_type - computed: true, optional: false, required: true
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // threshold - computed: true, optional: false, required: true
  public get threshold() {
    return 'not implemented' as any;
  }
}
export class DataOciAutoscalingAutoScalingConfigurationPoliciesRules extends ComplexComputedList {

  // action - computed: true, optional: false, required: true
  public get action() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // metric - computed: true, optional: false, required: true
  public get metric() {
    return 'not implemented' as any;
  }
}
export class DataOciAutoscalingAutoScalingConfigurationPolicies extends ComplexComputedList {

  // capacity - computed: true, optional: false, required: true
  public get capacity() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // execution_schedule - computed: true, optional: false, required: true
  public get executionSchedule() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_enabled - computed: true, optional: false, required: true
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // policy_type - computed: true, optional: false, required: true
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }

  // rules - computed: true, optional: false, required: true
  public get rules() {
    return 'not implemented' as any;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}

// Resource

export class DataOciAutoscalingAutoScalingConfiguration extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciAutoscalingAutoScalingConfigurationConfig) {
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
    this._autoScalingConfigurationId = config.autoScalingConfigurationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scaling_configuration_id - computed: false, optional: false, required: true
  private _autoScalingConfigurationId: string;
  public get autoScalingConfigurationId() {
    return this._autoScalingConfigurationId;
  }
  public set autoScalingConfigurationId(value: string) {
    this._autoScalingConfigurationId = value;
  }

  // auto_scaling_resources - computed: true, optional: false, required: true
  public autoScalingResources(index: string) {
    return new DataOciAutoscalingAutoScalingConfigurationAutoScalingResources(this, 'auto_scaling_resources', index);
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // cool_down_in_seconds - computed: true, optional: false, required: true
  public get coolDownInSeconds() {
    return this.getNumberAttribute('cool_down_in_seconds');
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

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_enabled - computed: true, optional: false, required: true
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // max_resource_count - computed: true, optional: false, required: true
  public get maxResourceCount() {
    return this.getNumberAttribute('max_resource_count');
  }

  // min_resource_count - computed: true, optional: false, required: true
  public get minResourceCount() {
    return this.getNumberAttribute('min_resource_count');
  }

  // policies - computed: true, optional: false, required: true
  public policies(index: string) {
    return new DataOciAutoscalingAutoScalingConfigurationPolicies(this, 'policies', index);
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scaling_configuration_id: this._autoScalingConfigurationId,
    };
  }
}
