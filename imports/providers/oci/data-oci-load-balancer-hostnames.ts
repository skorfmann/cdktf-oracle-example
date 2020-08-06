// https://www.terraform.io/docs/providers/oci/r/data_oci_load_balancer_hostnames.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "hostnames": {
        "type": [
          "list",
          [
            "object",
            {
              "hostname": "string",
              "load_balancer_id": "string",
              "name": "string",
              "state": "string"
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "load_balancer_id": {
        "type": "string",
        "required": true
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

export interface DataOciLoadBalancerHostnamesConfig extends TerraformMetaArguments {
  readonly loadBalancerId: string;
  /** filter block */
  readonly filter?: DataOciLoadBalancerHostnamesFilter[];
}
export class DataOciLoadBalancerHostnamesHostnames extends ComplexComputedList {

  // hostname - computed: true, optional: false, required: true
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // load_balancer_id - computed: true, optional: false, required: true
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataOciLoadBalancerHostnamesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciLoadBalancerHostnames extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciLoadBalancerHostnamesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_load_balancer_hostnames',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._loadBalancerId = config.loadBalancerId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hostnames - computed: true, optional: false, required: true
  public hostnames(index: string) {
    return new DataOciLoadBalancerHostnamesHostnames(this, 'hostnames', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId: string;
  public get loadBalancerId() {
    return this._loadBalancerId;
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciLoadBalancerHostnamesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciLoadBalancerHostnamesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      load_balancer_id: this._loadBalancerId,
      filter: this._filter,
    };
  }
}
