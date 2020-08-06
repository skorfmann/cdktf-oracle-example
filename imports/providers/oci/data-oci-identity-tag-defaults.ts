// https://www.terraform.io/docs/providers/oci/r/data_oci_identity_tag_defaults.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true
      },
      "state": {
        "type": "string",
        "optional": true
      },
      "tag_defaults": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "id": "string",
              "is_required": "bool",
              "state": "string",
              "tag_definition_id": "string",
              "tag_definition_name": "string",
              "tag_namespace_id": "string",
              "time_created": "string",
              "value": "string"
            }
          ]
        ],
        "computed": true
      },
      "tag_definition_id": {
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

export interface DataOciIdentityTagDefaultsConfig extends TerraformMetaArguments {
  readonly compartmentId?: string;
  readonly state?: string;
  readonly tagDefinitionId?: string;
  /** filter block */
  readonly filter?: DataOciIdentityTagDefaultsFilter[];
}
export class DataOciIdentityTagDefaultsTagDefaults extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_required - computed: true, optional: false, required: true
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // tag_definition_id - computed: true, optional: false, required: true
  public get tagDefinitionId() {
    return this.getStringAttribute('tag_definition_id');
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

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataOciIdentityTagDefaultsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciIdentityTagDefaults extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciIdentityTagDefaultsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_tag_defaults',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._state = config.state;
    this._tagDefinitionId = config.tagDefinitionId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string | undefined) {
    this._compartmentId = value;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id;
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

  // tag_defaults - computed: true, optional: false, required: true
  public tagDefaults(index: string) {
    return new DataOciIdentityTagDefaultsTagDefaults(this, 'tag_defaults', index);
  }

  // tag_definition_id - computed: false, optional: true, required: false
  private _tagDefinitionId?: string;
  public get tagDefinitionId() {
    return this._tagDefinitionId;
  }
  public set tagDefinitionId(value: string | undefined) {
    this._tagDefinitionId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciIdentityTagDefaultsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciIdentityTagDefaultsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      state: this._state,
      tag_definition_id: this._tagDefinitionId,
      filter: this._filter,
    };
  }
}
