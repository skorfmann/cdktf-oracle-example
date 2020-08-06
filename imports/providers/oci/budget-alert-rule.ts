// https://www.terraform.io/docs/providers/oci/r/budget_alert_rule.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "budget_id": {
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
      "message": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "recipients": {
        "type": "string",
        "optional": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "threshold": {
        "type": "number",
        "required": true
      },
      "threshold_type": {
        "type": "string",
        "required": true
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
        "required": true
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

export interface BudgetAlertRuleConfig extends TerraformMetaArguments {
  readonly budgetId: string;
  readonly definedTags?: { [key: string]: string };
  readonly description?: string;
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly message?: string;
  readonly recipients?: string;
  readonly threshold: number;
  readonly thresholdType: string;
  readonly type: string;
  /** timeouts block */
  readonly timeouts?: BudgetAlertRuleTimeouts;
}
export interface BudgetAlertRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class BudgetAlertRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BudgetAlertRuleConfig) {
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
    this._budgetId = config.budgetId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._message = config.message;
    this._recipients = config.recipients;
    this._threshold = config.threshold;
    this._thresholdType = config.thresholdType;
    this._type = config.type;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // budget_id - computed: false, optional: false, required: true
  private _budgetId: string;
  public get budgetId() {
    return this._budgetId;
  }
  public set budgetId(value: string) {
    this._budgetId = value;
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

  // message - computed: true, optional: true, required: false
  private _message?: string;
  public get message() {
    return this._message ?? this.getStringAttribute('message');
  }
  public set message(value: string | undefined) {
    this._message = value;
  }

  // recipients - computed: false, optional: true, required: false
  private _recipients?: string;
  public get recipients() {
    return this._recipients;
  }
  public set recipients(value: string | undefined) {
    this._recipients = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold: number;
  public get threshold() {
    return this._threshold;
  }
  public set threshold(value: number) {
    this._threshold = value;
  }

  // threshold_type - computed: false, optional: false, required: true
  private _thresholdType: string;
  public get thresholdType() {
    return this._thresholdType;
  }
  public set thresholdType(value: string) {
    this._thresholdType = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getNumberAttribute('version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BudgetAlertRuleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BudgetAlertRuleTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      budget_id: this._budgetId,
      defined_tags: this._definedTags,
      description: this._description,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      message: this._message,
      recipients: this._recipients,
      threshold: this._threshold,
      threshold_type: this._thresholdType,
      type: this._type,
      timeouts: this._timeouts,
    };
  }
}
