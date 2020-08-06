// https://www.terraform.io/docs/providers/oci/r/identity_tag.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
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
      "is_cost_tracking": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "is_retired": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "tag_namespace_id": {
        "type": "string",
        "required": true
      },
      "time_created": {
        "type": "string",
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
      },
      "validator": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "validator_type": {
              "type": "string",
              "required": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IdentityTagConfig extends TerraformMetaArguments {
  readonly definedTags?: { [key: string]: string };
  readonly description: string;
  readonly freeformTags?: { [key: string]: string };
  readonly isCostTracking?: boolean;
  readonly isRetired?: boolean;
  readonly name: string;
  readonly tagNamespaceId: string;
  /** timeouts block */
  readonly timeouts?: IdentityTagTimeouts;
  /** validator block */
  readonly validator?: IdentityTagValidator[];
}
export interface IdentityTagTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}
export interface IdentityTagValidator {
  readonly validatorType: string;
  readonly values: string[];
}

// Resource

export class IdentityTag extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IdentityTagConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_tag',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._freeformTags = config.freeformTags;
    this._isCostTracking = config.isCostTracking;
    this._isRetired = config.isRetired;
    this._name = config.name;
    this._tagNamespaceId = config.tagNamespaceId;
    this._timeouts = config.timeouts;
    this._validator = config.validator;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // description - computed: false, optional: false, required: true
  private _description: string;
  public get description() {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
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

  // is_cost_tracking - computed: true, optional: true, required: false
  private _isCostTracking?: boolean;
  public get isCostTracking() {
    return this._isCostTracking ?? this.getBooleanAttribute('is_cost_tracking');
  }
  public set isCostTracking(value: boolean | undefined) {
    this._isCostTracking = value;
  }

  // is_retired - computed: true, optional: true, required: false
  private _isRetired?: boolean;
  public get isRetired() {
    return this._isRetired ?? this.getBooleanAttribute('is_retired');
  }
  public set isRetired(value: boolean | undefined) {
    this._isRetired = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // tag_namespace_id - computed: false, optional: false, required: true
  private _tagNamespaceId: string;
  public get tagNamespaceId() {
    return this._tagNamespaceId;
  }
  public set tagNamespaceId(value: string) {
    this._tagNamespaceId = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IdentityTagTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IdentityTagTimeouts | undefined) {
    this._timeouts = value;
  }

  // validator - computed: false, optional: true, required: false
  private _validator?: IdentityTagValidator[];
  public get validator() {
    return this._validator;
  }
  public set validator(value: IdentityTagValidator[] | undefined) {
    this._validator = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      defined_tags: this._definedTags,
      description: this._description,
      freeform_tags: this._freeformTags,
      is_cost_tracking: this._isCostTracking,
      is_retired: this._isRetired,
      name: this._name,
      tag_namespace_id: this._tagNamespaceId,
      timeouts: this._timeouts,
      validator: this._validator,
    };
  }
}
