// https://www.terraform.io/docs/providers/oci/r/identity_tag_default.html
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
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "is_required": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "tag_definition_id": {
        "type": "string",
        "required": true
      },
      "tag_definition_name": {
        "type": "string",
        "computed": true
      },
      "tag_namespace_id": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "value": {
        "type": "string",
        "required": true
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

export interface IdentityTagDefaultConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly isRequired?: boolean;
  readonly tagDefinitionId: string;
  readonly value: string;
  /** timeouts block */
  readonly timeouts?: IdentityTagDefaultTimeouts;
}
export interface IdentityTagDefaultTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class IdentityTagDefault extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IdentityTagDefaultConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_tag_default',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._isRequired = config.isRequired;
    this._tagDefinitionId = config.tagDefinitionId;
    this._value = config.value;
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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_required - computed: true, optional: true, required: false
  private _isRequired?: boolean;
  public get isRequired() {
    return this._isRequired ?? this.getBooleanAttribute('is_required');
  }
  public set isRequired(value: boolean | undefined) {
    this._isRequired = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // tag_definition_id - computed: false, optional: false, required: true
  private _tagDefinitionId: string;
  public get tagDefinitionId() {
    return this._tagDefinitionId;
  }
  public set tagDefinitionId(value: string) {
    this._tagDefinitionId = value;
  }

  // tag_definition_name - computed: true, optional: false, required: true
  public get tagDefinitionName() {
    return this.getStringAttribute('tag_definition_name');
  }

  // tag_namespace_id - computed: true, optional: false, required: true
  public get tagNamespaceId() {
    return this.getStringAttribute('tag_namespace_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // value - computed: false, optional: false, required: true
  private _value: string;
  public get value() {
    return this._value;
  }
  public set value(value: string) {
    this._value = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IdentityTagDefaultTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IdentityTagDefaultTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      is_required: this._isRequired,
      tag_definition_id: this._tagDefinitionId,
      value: this._value,
      timeouts: this._timeouts,
    };
  }
}
