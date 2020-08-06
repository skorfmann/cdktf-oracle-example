// https://www.terraform.io/docs/providers/oci/r/data_oci_events_rule.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "actions": {
        "type": [
          "list",
          [
            "object",
            {
              "actions": [
                "list",
                [
                  "object",
                  {
                    "action_type": "string",
                    "description": "string",
                    "function_id": "string",
                    "id": "string",
                    "is_enabled": "bool",
                    "lifecycle_message": "string",
                    "state": "string",
                    "stream_id": "string",
                    "topic_id": "string"
                  }
                ]
              ]
            }
          ]
        ],
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "condition": {
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
      "lifecycle_message": {
        "type": "string",
        "computed": true
      },
      "rule_id": {
        "type": "string",
        "required": true
      },
      "state": {
        "type": "string",
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

export interface DataOciEventsRuleConfig extends TerraformMetaArguments {
  readonly ruleId: string;
}
export class DataOciEventsRuleActionsActions extends ComplexComputedList {

  // action_type - computed: true, optional: false, required: true
  public get actionType() {
    return this.getStringAttribute('action_type');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // function_id - computed: true, optional: false, required: true
  public get functionId() {
    return this.getStringAttribute('function_id');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_enabled - computed: true, optional: false, required: true
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // lifecycle_message - computed: true, optional: false, required: true
  public get lifecycleMessage() {
    return this.getStringAttribute('lifecycle_message');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // stream_id - computed: true, optional: false, required: true
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }

  // topic_id - computed: true, optional: false, required: true
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
}
export class DataOciEventsRuleActions extends ComplexComputedList {

  // actions - computed: true, optional: false, required: true
  public get actions() {
    return 'not implemented' as any;
  }
}

// Resource

export class DataOciEventsRule extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciEventsRuleConfig) {
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
    this._ruleId = config.ruleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: true, optional: false, required: true
  public actions(index: string) {
    return new DataOciEventsRuleActions(this, 'actions', index);
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // condition - computed: true, optional: false, required: true
  public get condition() {
    return this.getStringAttribute('condition');
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

  // is_enabled - computed: true, optional: false, required: true
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // lifecycle_message - computed: true, optional: false, required: true
  public get lifecycleMessage() {
    return this.getStringAttribute('lifecycle_message');
  }

  // rule_id - computed: false, optional: false, required: true
  private _ruleId: string;
  public get ruleId() {
    return this._ruleId;
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
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
      rule_id: this._ruleId,
    };
  }
}
