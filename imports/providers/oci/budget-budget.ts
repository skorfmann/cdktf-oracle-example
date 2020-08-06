// https://www.terraform.io/docs/providers/oci/r/budget_budget.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "actual_spend": {
        "type": "number",
        "computed": true
      },
      "alert_rule_count": {
        "type": "number",
        "computed": true
      },
      "amount": {
        "type": "number",
        "required": true
      },
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
      "description": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "forecasted_spend": {
        "type": "number",
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
      "reset_period": {
        "type": "string",
        "required": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "target_compartment_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "target_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "targets": {
        "type": [
          "list",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_spend_computed": {
        "type": "string",
        "computed": true
      },
      "time_updated": {
        "type": "string",
        "computed": true
      },
      "version": {
        "type": "number",
        "computed": true
      }
    },
    "block_types": {
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

export interface BudgetBudgetConfig extends TerraformMetaArguments {
  readonly amount: number;
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly description?: string;
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly resetPeriod: string;
  readonly targetCompartmentId?: string;
  readonly targetType?: string;
  readonly targets?: string[];
  /** timeouts block */
  readonly timeouts?: BudgetBudgetTimeouts;
}
export interface BudgetBudgetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class BudgetBudget extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BudgetBudgetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_budget_budget',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._amount = config.amount;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._resetPeriod = config.resetPeriod;
    this._targetCompartmentId = config.targetCompartmentId;
    this._targetType = config.targetType;
    this._targets = config.targets;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actual_spend - computed: true, optional: false, required: true
  public get actualSpend() {
    return this.getNumberAttribute('actual_spend');
  }

  // alert_rule_count - computed: true, optional: false, required: true
  public get alertRuleCount() {
    return this.getNumberAttribute('alert_rule_count');
  }

  // amount - computed: false, optional: false, required: true
  private _amount: number;
  public get amount() {
    return this._amount;
  }
  public set amount(value: number) {
    this._amount = value;
  }

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

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description ?? this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // forecasted_spend - computed: true, optional: false, required: true
  public get forecastedSpend() {
    return this.getNumberAttribute('forecasted_spend');
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

  // reset_period - computed: false, optional: false, required: true
  private _resetPeriod: string;
  public get resetPeriod() {
    return this._resetPeriod;
  }
  public set resetPeriod(value: string) {
    this._resetPeriod = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // target_compartment_id - computed: true, optional: true, required: false
  private _targetCompartmentId?: string;
  public get targetCompartmentId() {
    return this._targetCompartmentId ?? this.getStringAttribute('target_compartment_id');
  }
  public set targetCompartmentId(value: string | undefined) {
    this._targetCompartmentId = value;
  }

  // target_type - computed: true, optional: true, required: false
  private _targetType?: string;
  public get targetType() {
    return this._targetType ?? this.getStringAttribute('target_type');
  }
  public set targetType(value: string | undefined) {
    this._targetType = value;
  }

  // targets - computed: true, optional: true, required: false
  private _targets?: string[];
  public get targets() {
    return this._targets ?? this.getListAttribute('targets');
  }
  public set targets(value: string[] | undefined) {
    this._targets = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_spend_computed - computed: true, optional: false, required: true
  public get timeSpendComputed() {
    return this.getStringAttribute('time_spend_computed');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getNumberAttribute('version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BudgetBudgetTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BudgetBudgetTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      amount: this._amount,
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      description: this._description,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      reset_period: this._resetPeriod,
      target_compartment_id: this._targetCompartmentId,
      target_type: this._targetType,
      targets: this._targets,
      timeouts: this._timeouts,
    };
  }
}
