// https://www.terraform.io/docs/providers/oci/r/data_oci_identity_tag_namespaces.html
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
      "include_subcompartments": {
        "type": "bool",
        "optional": true
      },
      "state": {
        "type": "string",
        "optional": true
      },
      "tag_namespaces": {
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
              "is_retired": "bool",
              "name": "string",
              "state": "string",
              "time_created": "string"
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

export interface DataOciIdentityTagNamespacesConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly includeSubcompartments?: boolean;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciIdentityTagNamespacesFilter[];
}
export class DataOciIdentityTagNamespacesTagNamespaces extends ComplexComputedList {

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

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export interface DataOciIdentityTagNamespacesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciIdentityTagNamespaces extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciIdentityTagNamespacesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_tag_namespaces',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._includeSubcompartments = config.includeSubcompartments;
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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // include_subcompartments - computed: false, optional: true, required: false
  private _includeSubcompartments?: boolean;
  public get includeSubcompartments() {
    return this._includeSubcompartments;
  }
  public set includeSubcompartments(value: boolean | undefined) {
    this._includeSubcompartments = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // tag_namespaces - computed: true, optional: false, required: true
  public tagNamespaces(index: string) {
    return new DataOciIdentityTagNamespacesTagNamespaces(this, 'tag_namespaces', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciIdentityTagNamespacesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciIdentityTagNamespacesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      include_subcompartments: this._includeSubcompartments,
      state: this._state,
      filter: this._filter,
    };
  }
}
