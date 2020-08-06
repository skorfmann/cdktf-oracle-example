// https://www.terraform.io/docs/providers/oci/r/load_balancer_backend.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "backendset_name": {
        "type": "string",
        "required": true
      },
      "backup": {
        "type": "bool",
        "optional": true
      },
      "drain": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ip_address": {
        "type": "string",
        "required": true
      },
      "load_balancer_id": {
        "type": "string",
        "required": true
      },
      "name": {
        "type": "string",
        "computed": true
      },
      "offline": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "port": {
        "type": "number",
        "required": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "weight": {
        "type": "number",
        "optional": true,
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

export interface LoadBalancerBackendConfig extends TerraformMetaArguments {
  readonly backendsetName: string;
  readonly backup?: boolean;
  readonly drain?: boolean;
  readonly ipAddress: string;
  readonly loadBalancerId: string;
  readonly offline?: boolean;
  readonly port: number;
  readonly weight?: number;
  /** timeouts block */
  readonly timeouts?: LoadBalancerBackendTimeouts;
}
export interface LoadBalancerBackendTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class LoadBalancerBackend extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LoadBalancerBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_load_balancer_backend',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backendsetName = config.backendsetName;
    this._backup = config.backup;
    this._drain = config.drain;
    this._ipAddress = config.ipAddress;
    this._loadBalancerId = config.loadBalancerId;
    this._offline = config.offline;
    this._port = config.port;
    this._weight = config.weight;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backendset_name - computed: false, optional: false, required: true
  private _backendsetName: string;
  public get backendsetName() {
    return this._backendsetName;
  }
  public set backendsetName(value: string) {
    this._backendsetName = value;
  }

  // backup - computed: false, optional: true, required: false
  private _backup?: boolean;
  public get backup() {
    return this._backup;
  }
  public set backup(value: boolean | undefined) {
    this._backup = value;
  }

  // drain - computed: true, optional: true, required: false
  private _drain?: boolean;
  public get drain() {
    return this._drain ?? this.getBooleanAttribute('drain');
  }
  public set drain(value: boolean | undefined) {
    this._drain = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress: string;
  public get ipAddress() {
    return this._ipAddress;
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId: string;
  public get loadBalancerId() {
    return this._loadBalancerId;
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // offline - computed: true, optional: true, required: false
  private _offline?: boolean;
  public get offline() {
    return this._offline ?? this.getBooleanAttribute('offline');
  }
  public set offline(value: boolean | undefined) {
    this._offline = value;
  }

  // port - computed: false, optional: false, required: true
  private _port: number;
  public get port() {
    return this._port;
  }
  public set port(value: number) {
    this._port = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number;
  public get weight() {
    return this._weight ?? this.getNumberAttribute('weight');
  }
  public set weight(value: number | undefined) {
    this._weight = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LoadBalancerBackendTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LoadBalancerBackendTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      backendset_name: this._backendsetName,
      backup: this._backup,
      drain: this._drain,
      ip_address: this._ipAddress,
      load_balancer_id: this._loadBalancerId,
      offline: this._offline,
      port: this._port,
      weight: this._weight,
      timeouts: this._timeouts,
    };
  }
}
