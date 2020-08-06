// https://www.terraform.io/docs/providers/oci/r/events_rule.html
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
      "condition": {
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
        "required": true
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
      "is_enabled": {
        "type": "bool",
        "required": true
      },
      "lifecycle_message": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "actions": {
        "nesting_mode": "list",
        "block": {
          "block_types": {
            "actions": {
              "nesting_mode": "set",
              "block": {
                "attributes": {
                  "action_type": {
                    "type": "string",
                    "required": true
                  },
                  "description": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "function_id": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "id": {
                    "type": "string",
                    "computed": true
                  },
                  "is_enabled": {
                    "type": "bool",
                    "required": true
                  },
                  "lifecycle_message": {
                    "type": "string",
                    "computed": true
                  },
                  "state": {
                    "type": "string",
                    "computed": true
                  },
                  "stream_id": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "topic_id": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  }
                }
              },
              "min_items": 1
            }
          }
        },
        "min_items": 1,
        "max_items": 1
      },
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

export interface EventsRuleConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly condition: string;
  readonly definedTags?: { [key: string]: string };
  readonly description?: string;
  readonly displayName: string;
  readonly freeformTags?: { [key: string]: string };
  readonly isEnabled: boolean;
  /** actions block */
  readonly actions: EventsRuleActions[];
  /** timeouts block */
  readonly timeouts?: EventsRuleTimeouts;
}
export interface EventsRuleActionsActions {
  readonly actionType: string;
  readonly description?: string;
  readonly functionId?: string;
  readonly isEnabled: boolean;
  readonly streamId?: string;
  readonly topicId?: string;
}
export interface EventsRuleActions {
  /** actions block */
  readonly actions: EventsRuleActionsActions[];
}
export interface EventsRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class EventsRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EventsRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_events_rule',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._condition = config.condition;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._isEnabled = config.isEnabled;
    this._actions = config.actions;
    this._timeouts = config.timeouts;
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

  // condition - computed: false, optional: false, required: true
  private _condition: string;
  public get condition() {
    return this._condition;
  }
  public set condition(value: string) {
    this._condition = value;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
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

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled: boolean;
  public get isEnabled() {
    return this._isEnabled;
  }
  public set isEnabled(value: boolean) {
    this._isEnabled = value;
  }

  // lifecycle_message - computed: true, optional: false, required: true
  public get lifecycleMessage() {
    return this.getStringAttribute('lifecycle_message');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // actions - computed: false, optional: false, required: true
  private _actions: EventsRuleActions[];
  public get actions() {
    return this._actions;
  }
  public set actions(value: EventsRuleActions[]) {
    this._actions = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EventsRuleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: EventsRuleTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      condition: this._condition,
      defined_tags: this._definedTags,
      description: this._description,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      is_enabled: this._isEnabled,
      actions: this._actions,
      timeouts: this._timeouts,
    };
  }
}
