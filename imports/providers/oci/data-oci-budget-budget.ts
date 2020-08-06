// https://www.terraform.io/docs/providers/oci/r/data_oci_budget_budget.html
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
        "computed": true
      },
      "budget_id": {
        "type": "string",
        "required": true
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
      "description": {
        "type": "string",
        "computed": true
      },
      "display_name": {
        "type": "string",
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
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "reset_period": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "target_compartment_id": {
        "type": "string",
        "computed": true
      },
      "target_type": {
        "type": "string",
        "computed": true
      },
      "targets": {
        "type": [
          "list",
          "string"
        ],
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
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataOciBudgetBudgetConfig extends TerraformMetaArguments {
  readonly budgetId: string;
}

// Resource

export class DataOciBudgetBudget extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciBudgetBudgetConfig) {
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
    this._budgetId = config.budgetId;
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

  // amount - computed: true, optional: false, required: true
  public get amount() {
    return this.getNumberAttribute('amount');
  }

  // budget_id - computed: false, optional: false, required: true
  private _budgetId: string;
  public get budgetId() {
    return this._budgetId;
  }
  public set budgetId(value: string) {
    this._budgetId = value;
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
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
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      budget_id: this._budgetId,
    };
  }
}
