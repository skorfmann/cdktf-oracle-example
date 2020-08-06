// https://www.terraform.io/docs/providers/oci/r/data_oci_budget_alert_rules.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "alert_rules": {
        "type": [
          "list",
          [
            "object",
            {
              "budget_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "description": "string",
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "message": "string",
              "recipients": "string",
              "state": "string",
              "threshold": "number",
              "threshold_type": "string",
              "time_created": "string",
              "time_updated": "string",
              "type": "string",
              "version": "number"
            }
          ]
        ],
        "computed": true
      },
      "budget_id": {
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

export interface DataOciBudgetAlertRulesConfig extends TerraformMetaArguments {
  readonly budgetId: string;
  readonly displayName?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciBudgetAlertRulesFilter[];
}
export class DataOciBudgetAlertRulesAlertRules extends ComplexComputedList {

  // budget_id - computed: true, optional: false, required: true
  public get budgetId() {
    return this.getStringAttribute('budget_id');
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

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
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
}
export interface DataOciBudgetAlertRulesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciBudgetAlertRules extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciBudgetAlertRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_budget_alert_rules',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._budgetId = config.budgetId;
    this._displayName = config.displayName;
    this._state = config.state;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_rules - computed: true, optional: false, required: true
  public alertRules(index: string) {
    return new DataOciBudgetAlertRulesAlertRules(this, 'alert_rules', index);
  }

  // budget_id - computed: false, optional: false, required: true
  private _budgetId: string;
  public get budgetId() {
    return this._budgetId;
  }
  public set budgetId(value: string) {
    this._budgetId = value;
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

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciBudgetAlertRulesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciBudgetAlertRulesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      budget_id: this._budgetId,
      display_name: this._displayName,
      state: this._state,
      filter: this._filter,
    };
  }
}
