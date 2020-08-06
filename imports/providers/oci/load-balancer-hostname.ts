// https://www.terraform.io/docs/providers/oci/r/load_balancer_hostname.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "hostname": {
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
      },
      "name": {
        "type": "string",
        "required": true
      },
      "state": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LoadBalancerHostnameConfig extends TerraformMetaArguments {
  readonly hostname: string;
  readonly loadBalancerId: string;
  readonly name: string;
  /** timeouts block */
  readonly timeouts?: LoadBalancerHostnameTimeouts;
}
export interface LoadBalancerHostnameTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class LoadBalancerHostname extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LoadBalancerHostnameConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_load_balancer_hostname',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._hostname = config.hostname;
    this._loadBalancerId = config.loadBalancerId;
    this._name = config.name;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hostname - computed: false, optional: false, required: true
  private _hostname: string;
  public get hostname() {
    return this._hostname;
  }
  public set hostname(value: string) {
    this._hostname = value;
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

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LoadBalancerHostnameTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LoadBalancerHostnameTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      hostname: this._hostname,
      load_balancer_id: this._loadBalancerId,
      name: this._name,
      timeouts: this._timeouts,
    };
  }
}
