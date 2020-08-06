// https://www.terraform.io/docs/providers/oci/r/data_oci_identity_policies.html
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
      "policies": {
        "type": [
          "list",
          [
            "object",
            {
              "ETag": "string",
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
              "inactive_state": "string",
              "lastUpdateETag": "string",
              "name": "string",
              "policyHash": "string",
              "state": "string",
              "statements": [
                "list",
                "string"
              ],
              "time_created": "string",
              "version_date": "string"
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

export interface DataOciIdentityPoliciesConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  /** filter block */
  readonly filter?: DataOciIdentityPoliciesFilter[];
}
export class DataOciIdentityPoliciesPolicies extends ComplexComputedList {

  // ETag - computed: true, optional: false, required: true
  public get eTag() {
    return this.getStringAttribute('ETag');
  }

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

  // inactive_state - computed: true, optional: false, required: true
  public get inactiveState() {
    return this.getStringAttribute('inactive_state');
  }

  // lastUpdateETag - computed: true, optional: false, required: true
  public get lastUpdateETag() {
    return this.getStringAttribute('lastUpdateETag');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // policyHash - computed: true, optional: false, required: true
  public get policyHash() {
    return this.getStringAttribute('policyHash');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // statements - computed: true, optional: false, required: true
  public get statements() {
    return this.getListAttribute('statements');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // version_date - computed: true, optional: false, required: true
  public get versionDate() {
    return this.getStringAttribute('version_date');
  }
}
export interface DataOciIdentityPoliciesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciIdentityPolicies extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciIdentityPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_policies',
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

  // policies - computed: true, optional: false, required: true
  public policies(index: string) {
    return new DataOciIdentityPoliciesPolicies(this, 'policies', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciIdentityPoliciesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciIdentityPoliciesFilter[] | undefined) {
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
