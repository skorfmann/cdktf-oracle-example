// https://www.terraform.io/docs/providers/oci/r/data_oci_identity_cost_tracking_tags.html
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
      "tags": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
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
              "tag_namespace_name": "string",
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

export interface DataOciIdentityCostTrackingTagsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  /** filter block */
  readonly filter?: DataOciIdentityCostTrackingTagsFilter[];
}
export class DataOciIdentityCostTrackingTagsTagsValidator extends ComplexComputedList {

  // validator_type - computed: true, optional: false, required: true
  public get validatorType() {
    return this.getStringAttribute('validator_type');
  }

  // values - computed: true, optional: false, required: true
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataOciIdentityCostTrackingTagsTags extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

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

  // tag_namespace_name - computed: true, optional: false, required: true
  public get tagNamespaceName() {
    return this.getStringAttribute('tag_namespace_name');
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
export interface DataOciIdentityCostTrackingTagsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciIdentityCostTrackingTags extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciIdentityCostTrackingTagsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_cost_tracking_tags',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // tags - computed: true, optional: false, required: true
  public tags(index: string) {
    return new DataOciIdentityCostTrackingTagsTags(this, 'tags', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciIdentityCostTrackingTagsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciIdentityCostTrackingTagsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      filter: this._filter,
    };
  }
}
