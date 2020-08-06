// https://www.terraform.io/docs/providers/oci/r/data_oci_identity_tag.html
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
        "computed": true
      },
      "description": {
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
      "is_cost_tracking": {
        "type": "bool",
        "computed": true
      },
      "is_retired": {
        "type": "bool",
        "computed": true
      },
      "name": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "tag_name": {
        "type": "string",
        "required": true
      },
      "tag_namespace_id": {
        "type": "string",
        "required": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "validator": {
        "type": [
          "list",
          [
            "object",
            {
              "validator_type": "string",
              "values": [
                "list",
                "string"
              ]
            }
          ]
        ],
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciIdentityTagConfig extends TerraformMetaArguments {
  readonly tagName: string;
  readonly tagNamespaceId: string;
}
export class DataOciIdentityTagValidator extends ComplexComputedList {

  // validator_type - computed: true, optional: false, required: true
  public get validatorType() {
    return this.getStringAttribute('validator_type');
  }

  // values - computed: true, optional: false, required: true
  public get values() {
    return this.getListAttribute('values');
  }
}

// Resource

export class DataOciIdentityTag extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciIdentityTagConfig) {
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
    this._tagName = config.tagName;
    this._tagNamespaceId = config.tagNamespaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_cost_tracking - computed: true, optional: false, required: true
  public get isCostTracking() {
    return this.getBooleanAttribute('is_cost_tracking');
  }

  // is_retired - computed: true, optional: false, required: true
  public get isRetired() {
    return this.getBooleanAttribute('is_retired');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // tag_name - computed: false, optional: false, required: true
  private _tagName: string;
  public get tagName() {
    return this._tagName;
  }
  public set tagName(value: string) {
    this._tagName = value;
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

  // validator - computed: true, optional: false, required: true
  public validator(index: string) {
    return new DataOciIdentityTagValidator(this, 'validator', index);
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      tag_name: this._tagName,
      tag_namespace_id: this._tagNamespaceId,
    };
  }
}
