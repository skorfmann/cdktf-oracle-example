// https://www.terraform.io/docs/providers/oci/r/data_oci_autoscaling_auto_scaling_configurations.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "auto_scaling_configurations": {
        "type": [
          "list",
          [
            "object",
            {
              "auto_scaling_resources": [
                "list",
                [
                  "object",
                  {
                    "id": "string",
                    "type": "string"
                  }
                ]
              ],
              "compartment_id": "string",
              "cool_down_in_seconds": "number",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "is_enabled": "bool",
              "max_resource_count": "number",
              "min_resource_count": "number",
              "policies": [
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
              "time_created": "string"
            }
          ]
        ],
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "display_name": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
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

export interface DataOciAutoscalingAutoScalingConfigurationsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  /** filter block */
  readonly filter?: DataOciAutoscalingAutoScalingConfigurationsFilter[];
}
export class DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity extends ComplexComputedList {

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
export class DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule extends ComplexComputedList {

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
export class DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction extends ComplexComputedList {

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export class DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold extends ComplexComputedList {

  // operator - computed: true, optional: false, required: true
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export class DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric extends ComplexComputedList {

  // metric_type - computed: true, optional: false, required: true
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // threshold - computed: true, optional: false, required: true
  public get threshold() {
    return 'not implemented' as any;
  }
}
export class DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules extends ComplexComputedList {

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
export class DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies extends ComplexComputedList {

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
export class DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations extends ComplexComputedList {

  // auto_scaling_resources - computed: true, optional: false, required: true
  public get autoScalingResources() {
    return 'not implemented' as any;
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
  public get policies() {
    return 'not implemented' as any;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export interface DataOciAutoscalingAutoScalingConfigurationsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciAutoscalingAutoScalingConfigurations extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciAutoscalingAutoScalingConfigurationsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_autoscaling_auto_scaling_configurations',
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
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scaling_configurations - computed: true, optional: false, required: true
  public autoScalingConfigurations(index: string) {
    return new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations(this, 'auto_scaling_configurations', index);
  }

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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciAutoscalingAutoScalingConfigurationsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciAutoscalingAutoScalingConfigurationsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      filter: this._filter,
    };
  }
}
