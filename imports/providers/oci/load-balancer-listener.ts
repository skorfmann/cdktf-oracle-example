// https://www.terraform.io/docs/providers/oci/r/load_balancer_listener.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "default_backend_set_name": {
        "type": "string",
        "required": true
      },
      "hostname_names": {
        "type": [
          "list",
          "string"
        ],
        "optional": true,
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
      },
      "name": {
        "type": "string",
        "required": true
      },
      "path_route_set_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "port": {
        "type": "number",
        "required": true
      },
      "protocol": {
        "type": "string",
        "required": true
      },
      "rule_set_names": {
        "type": [
          "list",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "connection_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "backend_tcp_proxy_protocol_version": {
              "type": "number",
              "optional": true
            },
            "idle_timeout_in_seconds": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "ssl_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "certificate_name": {
              "type": "string",
              "required": true
            },
            "verify_depth": {
              "type": "number",
              "optional": true
            },
            "verify_peer_certificate": {
              "type": "bool",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
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

export interface LoadBalancerListenerConfig extends TerraformMetaArguments {
  readonly defaultBackendSetName: string;
  readonly hostnameNames?: string[];
  readonly loadBalancerId: string;
  readonly name: string;
  readonly pathRouteSetName?: string;
  readonly port: number;
  readonly protocol: string;
  readonly ruleSetNames?: string[];
  /** connection_configuration block */
  readonly connectionConfiguration?: LoadBalancerListenerConnectionConfiguration[];
  /** ssl_configuration block */
  readonly sslConfiguration?: LoadBalancerListenerSslConfiguration[];
  /** timeouts block */
  readonly timeouts?: LoadBalancerListenerTimeouts;
}
export interface LoadBalancerListenerConnectionConfiguration {
  readonly backendTcpProxyProtocolVersion?: number;
  readonly idleTimeoutInSeconds: string;
}
export interface LoadBalancerListenerSslConfiguration {
  readonly certificateName: string;
  readonly verifyDepth?: number;
  readonly verifyPeerCertificate?: boolean;
}
export interface LoadBalancerListenerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class LoadBalancerListener extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LoadBalancerListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_load_balancer_listener',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultBackendSetName = config.defaultBackendSetName;
    this._hostnameNames = config.hostnameNames;
    this._loadBalancerId = config.loadBalancerId;
    this._name = config.name;
    this._pathRouteSetName = config.pathRouteSetName;
    this._port = config.port;
    this._protocol = config.protocol;
    this._ruleSetNames = config.ruleSetNames;
    this._connectionConfiguration = config.connectionConfiguration;
    this._sslConfiguration = config.sslConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_backend_set_name - computed: false, optional: false, required: true
  private _defaultBackendSetName: string;
  public get defaultBackendSetName() {
    return this._defaultBackendSetName;
  }
  public set defaultBackendSetName(value: string) {
    this._defaultBackendSetName = value;
  }

  // hostname_names - computed: true, optional: true, required: false
  private _hostnameNames?: string[];
  public get hostnameNames() {
    return this._hostnameNames ?? this.getListAttribute('hostname_names');
  }
  public set hostnameNames(value: string[] | undefined) {
    this._hostnameNames = value;
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

  // path_route_set_name - computed: true, optional: true, required: false
  private _pathRouteSetName?: string;
  public get pathRouteSetName() {
    return this._pathRouteSetName ?? this.getStringAttribute('path_route_set_name');
  }
  public set pathRouteSetName(value: string | undefined) {
    this._pathRouteSetName = value;
  }

  // port - computed: false, optional: false, required: true
  private _port: number;
  public get port() {
    return this._port;
  }
  public set port(value: number) {
    this._port = value;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol: string;
  public get protocol() {
    return this._protocol;
  }
  public set protocol(value: string) {
    this._protocol = value;
  }

  // rule_set_names - computed: true, optional: true, required: false
  private _ruleSetNames?: string[];
  public get ruleSetNames() {
    return this._ruleSetNames ?? this.getListAttribute('rule_set_names');
  }
  public set ruleSetNames(value: string[] | undefined) {
    this._ruleSetNames = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // connection_configuration - computed: false, optional: true, required: false
  private _connectionConfiguration?: LoadBalancerListenerConnectionConfiguration[];
  public get connectionConfiguration() {
    return this._connectionConfiguration;
  }
  public set connectionConfiguration(value: LoadBalancerListenerConnectionConfiguration[] | undefined) {
    this._connectionConfiguration = value;
  }

  // ssl_configuration - computed: false, optional: true, required: false
  private _sslConfiguration?: LoadBalancerListenerSslConfiguration[];
  public get sslConfiguration() {
    return this._sslConfiguration;
  }
  public set sslConfiguration(value: LoadBalancerListenerSslConfiguration[] | undefined) {
    this._sslConfiguration = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LoadBalancerListenerTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LoadBalancerListenerTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      default_backend_set_name: this._defaultBackendSetName,
      hostname_names: this._hostnameNames,
      load_balancer_id: this._loadBalancerId,
      name: this._name,
      path_route_set_name: this._pathRouteSetName,
      port: this._port,
      protocol: this._protocol,
      rule_set_names: this._ruleSetNames,
      connection_configuration: this._connectionConfiguration,
      ssl_configuration: this._sslConfiguration,
      timeouts: this._timeouts,
    };
  }
}
