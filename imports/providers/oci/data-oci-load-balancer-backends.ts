// https://www.terraform.io/docs/providers/oci/r/data_oci_load_balancer_backends.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "backends": {
        "type": [
          "list",
          [
            "object",
            {
              "backendset_name": "string",
              "backup": "bool",
              "drain": "bool",
              "ip_address": "string",
              "load_balancer_id": "string",
              "name": "string",
              "offline": "bool",
              "port": "number",
              "state": "string",
              "weight": "number"
            }
          ]
        ],
        "computed": true
      },
      "backendset_name": {
        "type": "string",
        "required": true
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

export interface DataOciLoadBalancerBackendsConfig extends TerraformMetaArguments {
  readonly backendsetName: string;
  readonly loadBalancerId: string;
  /** filter block */
  readonly filter?: DataOciLoadBalancerBackendsFilter[];
}
export class DataOciLoadBalancerBackendsBackends extends ComplexComputedList {

  // backendset_name - computed: true, optional: false, required: true
  public get backendsetName() {
    return this.getStringAttribute('backendset_name');
  }

  // backup - computed: true, optional: false, required: true
  public get backup() {
    return this.getBooleanAttribute('backup');
  }

  // drain - computed: true, optional: false, required: true
  public get drain() {
    return this.getBooleanAttribute('drain');
  }

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // load_balancer_id - computed: true, optional: false, required: true
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // offline - computed: true, optional: false, required: true
  public get offline() {
    return this.getBooleanAttribute('offline');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // weight - computed: true, optional: false, required: true
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export interface DataOciLoadBalancerBackendsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciLoadBalancerBackends extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciLoadBalancerBackendsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_load_balancer_backends',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backendsetName = config.backendsetName;
    this._loadBalancerId = config.loadBalancerId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backends - computed: true, optional: false, required: true
  public backends(index: string) {
    return new DataOciLoadBalancerBackendsBackends(this, 'backends', index);
  }

  // backendset_name - computed: false, optional: false, required: true
  private _backendsetName: string;
  public get backendsetName() {
    return this._backendsetName;
  }
  public set backendsetName(value: string) {
    this._backendsetName = value;
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
  private _filter?: DataOciLoadBalancerBackendsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciLoadBalancerBackendsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      backendset_name: this._backendsetName,
      load_balancer_id: this._loadBalancerId,
      filter: this._filter,
    };
  }
}
