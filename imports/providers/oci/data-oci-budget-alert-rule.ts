// https://www.terraform.io/docs/providers/oci/r/data_oci_budget_alert_rule.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "alert_rule_id": {
        "type": "string",
        "required": true
      },
      "budget_id": {
        "type": "string",
        "required": true
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
      "message": {
        "type": "string",
        "computed": true
      },
      "recipients": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "threshold": {
        "type": "number",
        "computed": true
      },
      "threshold_type": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_updated": {
        "type": "string",
        "computed": true
      },
      "type": {
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

export interface DataOciBudgetAlertRuleConfig extends TerraformMetaArguments {
  readonly alertRuleId: string;
  readonly budgetId: string;
}

// Resource

export class DataOciBudgetAlertRule extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciBudgetAlertRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_budget_alert_rule',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alertRuleId = config.alertRuleId;
    this._budgetId = config.budgetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_rule_id - computed: false, optional: false, required: true
  private _alertRuleId: string;
  public get alertRuleId() {
    return this._alertRuleId;
  }
  public set alertRuleId(value: string) {
    this._alertRuleId = value;
  }

  // budget_id - computed: false, optional: false, required: true
  private _budgetId: string;
  public get budgetId() {
    return this._budgetId;
  }
  public set budgetId(value: string) {
    this._budgetId = value;
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

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // message - computed: true, optional: false, required: true
  public get message() {
    return this.getStringAttribute('message');
  }

  // recipients - computed: true, optional: false, required: true
  public get recipients() {
    return this.getStringAttribute('recipients');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // threshold - computed: true, optional: false, required: true
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // threshold_type - computed: true, optional: false, required: true
  public get thresholdType() {
    return this.getStringAttribute('threshold_type');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
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
      alert_rule_id: this._alertRuleId,
      budget_id: this._budgetId,
    };
  }
}
