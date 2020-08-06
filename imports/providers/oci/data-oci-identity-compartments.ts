// https://www.terraform.io/docs/providers/oci/r/data_oci_identity_compartments.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "access_level": {
        "type": "string",
        "optional": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "compartment_id_in_subtree": {
        "type": "bool",
        "optional": true
      },
      "compartments": {
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
              "enable_delete": "bool",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "inactive_state": "string",
              "is_accessible": "bool",
              "name": "string",
              "state": "string",
              "time_created": "string"
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
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

export interface DataOciIdentityCompartmentsConfig extends TerraformMetaArguments {
  readonly accessLevel?: string;
  readonly compartmentId: string;
  readonly compartmentIdInSubtree?: boolean;
  /** filter block */
  readonly filter?: DataOciIdentityCompartmentsFilter[];
}
export class DataOciIdentityCompartmentsCompartments extends ComplexComputedList {

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

  // enable_delete - computed: true, optional: false, required: true
  public get enableDelete() {
    return this.getBooleanAttribute('enable_delete');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // inactive_state - computed: true, optional: false, required: true
  public get inactiveState() {
    return this.getStringAttribute('inactive_state');
  }

  // is_accessible - computed: true, optional: false, required: true
  public get isAccessible() {
    return this.getBooleanAttribute('is_accessible');
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
export interface DataOciIdentityCompartmentsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciIdentityCompartments extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciIdentityCompartmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_compartments',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessLevel = config.accessLevel;
    this._compartmentId = config.compartmentId;
    this._compartmentIdInSubtree = config.compartmentIdInSubtree;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string;
  public get accessLevel() {
    return this._accessLevel;
  }
  public set accessLevel(value: string | undefined) {
    this._accessLevel = value;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // compartment_id_in_subtree - computed: false, optional: true, required: false
  private _compartmentIdInSubtree?: boolean;
  public get compartmentIdInSubtree() {
    return this._compartmentIdInSubtree;
  }
  public set compartmentIdInSubtree(value: boolean | undefined) {
    this._compartmentIdInSubtree = value;
  }

  // compartments - computed: true, optional: false, required: true
  public compartments(index: string) {
    return new DataOciIdentityCompartmentsCompartments(this, 'compartments', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciIdentityCompartmentsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciIdentityCompartmentsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level: this._accessLevel,
      compartment_id: this._compartmentId,
      compartment_id_in_subtree: this._compartmentIdInSubtree,
      filter: this._filter,
    };
  }
}
