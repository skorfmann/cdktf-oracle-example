// https://www.terraform.io/docs/providers/oci/r/data_oci_load_balancer_policies.html
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
              "name": "string"
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

export interface DataOciLoadBalancerPoliciesConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  /** filter block */
  readonly filter?: DataOciLoadBalancerPoliciesFilter[];
}
export class DataOciLoadBalancerPoliciesPolicies extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataOciLoadBalancerPoliciesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciLoadBalancerPolicies extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciLoadBalancerPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_load_balancer_policies',
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
    return new DataOciLoadBalancerPoliciesPolicies(this, 'policies', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciLoadBalancerPoliciesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciLoadBalancerPoliciesFilter[] | undefined) {
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
