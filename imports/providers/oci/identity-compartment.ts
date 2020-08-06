// https://www.terraform.io/docs/providers/oci/r/identity_compartment.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "optional": true,
        "computed": true
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
        "required": true
      },
      "enable_delete": {
        "type": "bool",
        "optional": true
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
      "inactive_state": {
        "type": "string",
        "computed": true
      },
      "is_accessible": {
        "type": "bool",
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
            "delete": {
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

export interface IdentityCompartmentConfig extends TerraformMetaArguments {
  readonly compartmentId?: string;
  readonly definedTags?: { [key: string]: string };
  readonly description: string;
  readonly enableDelete?: boolean;
  readonly freeformTags?: { [key: string]: string };
  readonly name: string;
  /** timeouts block */
  readonly timeouts?: IdentityCompartmentTimeouts;
}
export interface IdentityCompartmentTimeouts {
  readonly delete?: string;
}

// Resource

export class IdentityCompartment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IdentityCompartmentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_compartment',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._enableDelete = config.enableDelete;
    this._freeformTags = config.freeformTags;
    this._name = config.name;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string;
  public get compartmentId() {
    return this._compartmentId ?? this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string | undefined) {
    this._compartmentId = value;
  }

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

  // enable_delete - computed: false, optional: true, required: false
  private _enableDelete?: boolean;
  public get enableDelete() {
    return this._enableDelete;
  }
  public set enableDelete(value: boolean | undefined) {
    this._enableDelete = value;
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

  // inactive_state - computed: true, optional: false, required: true
  public get inactiveState() {
    return this.getStringAttribute('inactive_state');
  }

  // is_accessible - computed: true, optional: false, required: true
  public get isAccessible() {
    return this.getBooleanAttribute('is_accessible');
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

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IdentityCompartmentTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IdentityCompartmentTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      description: this._description,
      enable_delete: this._enableDelete,
      freeform_tags: this._freeformTags,
      name: this._name,
      timeouts: this._timeouts,
    };
  }
}
