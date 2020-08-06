// https://www.terraform.io/docs/providers/oci/r/data_oci_events_rules.html
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
      "display_name": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "rules": {
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
              "compartment_id": "string",
              "condition": "string",
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
              "is_enabled": "bool",
              "lifecycle_message": "string",
              "state": "string",
              "time_created": "string"
            }
          ]
        ],
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

export interface DataOciEventsRulesConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciEventsRulesFilter[];
}
export class DataOciEventsRulesRulesActionsActions extends ComplexComputedList {

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
export class DataOciEventsRulesRulesActions extends ComplexComputedList {

  // actions - computed: true, optional: false, required: true
  public get actions() {
    return 'not implemented' as any;
  }
}
export class DataOciEventsRulesRules extends ComplexComputedList {

  // actions - computed: true, optional: false, required: true
  public get actions() {
    return 'not implemented' as any;
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

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export interface DataOciEventsRulesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciEventsRules extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciEventsRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_events_rules',
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
    this._filter = config.filter;
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

  // rules - computed: true, optional: false, required: true
  public rules(index: string) {
    return new DataOciEventsRulesRules(this, 'rules', index);
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
  private _filter?: DataOciEventsRulesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciEventsRulesFilter[] | undefined) {
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
      filter: this._filter,
    };
  }
}
