// https://www.terraform.io/docs/providers/oci/r/data_oci_budget_budgets.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "budgets": {
        "type": [
          "list",
          [
            "object",
            {
              "actual_spend": "number",
              "alert_rule_count": "number",
              "amount": "number",
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "description": "string",
              "display_name": "string",
              "forecasted_spend": "number",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "reset_period": "string",
              "state": "string",
              "target_compartment_id": "string",
              "target_type": "string",
              "targets": [
                "list",
                "string"
              ],
              "time_created": "string",
              "time_spend_computed": "string",
              "time_updated": "string",
              "version": "number"
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
      },
      "state": {
        "type": "string",
        "optional": true
      },
      "target_type": {
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

export interface DataOciBudgetBudgetsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly state?: string;
  readonly targetType?: string;
  /** filter block */
  readonly filter?: DataOciBudgetBudgetsFilter[];
}
export class DataOciBudgetBudgetsBudgets extends ComplexComputedList {

  // actual_spend - computed: true, optional: false, required: true
  public get actualSpend() {
    return this.getNumberAttribute('actual_spend');
  }

  // alert_rule_count - computed: true, optional: false, required: true
  public get alertRuleCount() {
    return this.getNumberAttribute('alert_rule_count');
  }

  // amount - computed: true, optional: false, required: true
  public get amount() {
    return this.getNumberAttribute('amount');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // forecasted_spend - computed: true, optional: false, required: true
  public get forecastedSpend() {
    return this.getNumberAttribute('forecasted_spend');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // reset_period - computed: true, optional: false, required: true
  public get resetPeriod() {
    return this.getStringAttribute('reset_period');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // target_compartment_id - computed: true, optional: false, required: true
  public get targetCompartmentId() {
    return this.getStringAttribute('target_compartment_id');
  }

  // target_type - computed: true, optional: false, required: true
  public get targetType() {
    return this.getStringAttribute('target_type');
  }

  // targets - computed: true, optional: false, required: true
  public get targets() {
    return this.getListAttribute('targets');
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
}
export interface DataOciBudgetBudgetsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciBudgetBudgets extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciBudgetBudgetsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_budget_budgets',
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
    this._state = config.state;
    this._targetType = config.targetType;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // budgets - computed: true, optional: false, required: true
  public budgets(index: string) {
    return new DataOciBudgetBudgetsBudgets(this, 'budgets', index);
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

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string;
  public get targetType() {
    return this._targetType;
  }
  public set targetType(value: string | undefined) {
    this._targetType = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciBudgetBudgetsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciBudgetBudgetsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      state: this._state,
      target_type: this._targetType,
      filter: this._filter,
    };
  }
}
