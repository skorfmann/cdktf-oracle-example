// https://www.terraform.io/docs/providers/oci/r/data_oci_waas_edge_subnets.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "edge_subnets": {
        "type": [
          "list",
          [
            "object",
            {
              "cidr": "string",
              "region": "string",
              "time_modified": "string"
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

export interface DataOciWaasEdgeSubnetsConfig extends TerraformMetaArguments {
  /** filter block */
  readonly filter?: DataOciWaasEdgeSubnetsFilter[];
}
export class DataOciWaasEdgeSubnetsEdgeSubnets extends ComplexComputedList {

  // cidr - computed: true, optional: false, required: true
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // region - computed: true, optional: false, required: true
  public get region() {
    return this.getStringAttribute('region');
  }

  // time_modified - computed: true, optional: false, required: true
  public get timeModified() {
    return this.getStringAttribute('time_modified');
  }
}
export interface DataOciWaasEdgeSubnetsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciWaasEdgeSubnets extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciWaasEdgeSubnetsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_waas_edge_subnets',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // edge_subnets - computed: true, optional: false, required: true
  public edgeSubnets(index: string) {
    return new DataOciWaasEdgeSubnetsEdgeSubnets(this, 'edge_subnets', index);
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
  private _filter?: DataOciWaasEdgeSubnetsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciWaasEdgeSubnetsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: this._filter,
    };
  }
}
