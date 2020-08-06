// https://www.terraform.io/docs/providers/oci/r/data_oci_identity_tags.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "state": {
        "type": "string",
        "optional": true
      },
      "tag_namespace_id": {
        "type": "string",
        "required": true
      },
      "tags": {
        "type": [
          "list",
          [
            "object",
            {
              "defined_tags": [
                "map",
                "string"
              ],
              "description": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "is_cost_tracking": "bool",
              "is_retired": "bool",
              "name": "string",
              "state": "string",
              "tag_namespace_id": "string",
              "time_created": "string",
              "validator": [
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
              ]
            }
          ]
        ],
        "computed": true
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

export interface DataOciIdentityTagsConfig extends TerraformMetaArguments {
  readonly state?: string;
  readonly tagNamespaceId: string;
  /** filter block */
  readonly filter?: DataOciIdentityTagsFilter[];
}
export class DataOciIdentityTagsTagsValidator extends ComplexComputedList {

  // validator_type - computed: true, optional: false, required: true
  public get validatorType() {
    return this.getStringAttribute('validator_type');
  }

  // values - computed: true, optional: false, required: true
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataOciIdentityTagsTags extends ComplexComputedList {

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
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

  // tag_namespace_id - computed: true, optional: false, required: true
  public get tagNamespaceId() {
    return this.getStringAttribute('tag_namespace_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // validator - computed: true, optional: false, required: true
  public get validator() {
    return 'not implemented' as any;
  }
}
export interface DataOciIdentityTagsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciIdentityTags extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciIdentityTagsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_tags',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._state = config.state;
    this._tagNamespaceId = config.tagNamespaceId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // tag_namespace_id - computed: false, optional: false, required: true
  private _tagNamespaceId: string;
  public get tagNamespaceId() {
    return this._tagNamespaceId;
  }
  public set tagNamespaceId(value: string) {
    this._tagNamespaceId = value;
  }

  // tags - computed: true, optional: false, required: true
  public tags(index: string) {
    return new DataOciIdentityTagsTags(this, 'tags', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciIdentityTagsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciIdentityTagsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      state: this._state,
      tag_namespace_id: this._tagNamespaceId,
      filter: this._filter,
    };
  }
}
