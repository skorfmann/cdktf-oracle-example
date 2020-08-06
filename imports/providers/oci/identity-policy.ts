// https://www.terraform.io/docs/providers/oci/r/identity_policy.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "ETag": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
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
      "inactive_state": {
        "type": "string",
        "computed": true
      },
      "lastUpdateETag": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "policyHash": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "statements": {
        "type": [
          "list",
          "string"
        ],
        "required": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "version_date": {
        "type": "string",
        "optional": true,
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

export interface IdentityPolicyConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly description: string;
  readonly freeformTags?: { [key: string]: string };
  readonly name: string;
  readonly statements: string[];
  readonly versionDate?: string;
  /** timeouts block */
  readonly timeouts?: IdentityPolicyTimeouts;
}
export interface IdentityPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class IdentityPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IdentityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_policy',
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
    this._freeformTags = config.freeformTags;
    this._name = config.name;
    this._statements = config.statements;
    this._versionDate = config.versionDate;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ETag - computed: true, optional: false, required: true
  public get eTag() {
    return this.getStringAttribute('ETag');
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
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

  // lastUpdateETag - computed: true, optional: false, required: true
  public get lastUpdateETag() {
    return this.getStringAttribute('lastUpdateETag');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // policyHash - computed: true, optional: false, required: true
  public get policyHash() {
    return this.getStringAttribute('policyHash');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // statements - computed: false, optional: false, required: true
  private _statements: string[];
  public get statements() {
    return this._statements;
  }
  public set statements(value: string[]) {
    this._statements = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // version_date - computed: true, optional: true, required: false
  private _versionDate?: string;
  public get versionDate() {
    return this._versionDate ?? this.getStringAttribute('version_date');
  }
  public set versionDate(value: string | undefined) {
    this._versionDate = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IdentityPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IdentityPolicyTimeouts | undefined) {
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
      freeform_tags: this._freeformTags,
      name: this._name,
      statements: this._statements,
      version_date: this._versionDate,
      timeouts: this._timeouts,
    };
  }
}
