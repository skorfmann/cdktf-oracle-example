// https://www.terraform.io/docs/providers/oci/r/load_balancer_backendset.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "backend": {
        "type": [
          "set",
          [
            "object",
            {
              "backup": "bool",
              "drain": "bool",
              "ip_address": "string",
              "name": "string",
              "offline": "bool",
              "port": "number",
              "weight": "number"
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
      },
      "name": {
        "type": "string",
        "required": true
      },
      "policy": {
        "type": "string",
        "required": true
      },
      "state": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "health_checker": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "interval_ms": {
              "type": "number",
              "optional": true
            },
            "port": {
              "type": "number",
              "optional": true
            },
            "protocol": {
              "type": "string",
              "required": true
            },
            "response_body_regex": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "retries": {
              "type": "number",
              "optional": true
            },
            "return_code": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "timeout_in_millis": {
              "type": "number",
              "optional": true
            },
            "url_path": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        },
        "min_items": 1,
        "max_items": 1
      },
      "lb_cookie_session_persistence_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "cookie_name": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "disable_fallback": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "domain": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "is_http_only": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "is_secure": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "max_age_in_seconds": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "path": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        },
        "max_items": 1
      },
      "session_persistence_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "cookie_name": {
              "type": "string",
              "required": true
            },
            "disable_fallback": {
              "type": "bool",
              "optional": true
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface LoadBalancerBackendsetConfig extends TerraformMetaArguments {
  readonly loadBalancerId: string;
  readonly name: string;
  readonly policy: string;
  /** health_checker block */
  readonly healthChecker: LoadBalancerBackendsetHealthChecker[];
  /** lb_cookie_session_persistence_configuration block */
  readonly lbCookieSessionPersistenceConfiguration?: LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration[];
  /** session_persistence_configuration block */
  readonly sessionPersistenceConfiguration?: LoadBalancerBackendsetSessionPersistenceConfiguration[];
  /** ssl_configuration block */
  readonly sslConfiguration?: LoadBalancerBackendsetSslConfiguration[];
  /** timeouts block */
  readonly timeouts?: LoadBalancerBackendsetTimeouts;
}
export class LoadBalancerBackendsetBackend extends ComplexComputedList {

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

  // weight - computed: true, optional: false, required: true
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export interface LoadBalancerBackendsetHealthChecker {
  readonly intervalMs?: number;
  readonly port?: number;
  readonly protocol: string;
  readonly responseBodyRegex?: string;
  readonly retries?: number;
  readonly returnCode?: number;
  readonly timeoutInMillis?: number;
  readonly urlPath?: string;
}
export interface LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration {
  readonly cookieName?: string;
  readonly disableFallback?: boolean;
  readonly domain?: string;
  readonly isHttpOnly?: boolean;
  readonly isSecure?: boolean;
  readonly maxAgeInSeconds?: number;
  readonly path?: string;
}
export interface LoadBalancerBackendsetSessionPersistenceConfiguration {
  readonly cookieName: string;
  readonly disableFallback?: boolean;
}
export interface LoadBalancerBackendsetSslConfiguration {
  readonly certificateName: string;
  readonly verifyDepth?: number;
  readonly verifyPeerCertificate?: boolean;
}
export interface LoadBalancerBackendsetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class LoadBalancerBackendset extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LoadBalancerBackendsetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_load_balancer_backendset',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._loadBalancerId = config.loadBalancerId;
    this._name = config.name;
    this._policy = config.policy;
    this._healthChecker = config.healthChecker;
    this._lbCookieSessionPersistenceConfiguration = config.lbCookieSessionPersistenceConfiguration;
    this._sessionPersistenceConfiguration = config.sessionPersistenceConfiguration;
    this._sslConfiguration = config.sslConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend - computed: true, optional: false, required: true
  public backend(index: string) {
    return new LoadBalancerBackendsetBackend(this, 'backend', index);
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

  // policy - computed: false, optional: false, required: true
  private _policy: string;
  public get policy() {
    return this._policy;
  }
  public set policy(value: string) {
    this._policy = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // health_checker - computed: false, optional: false, required: true
  private _healthChecker: LoadBalancerBackendsetHealthChecker[];
  public get healthChecker() {
    return this._healthChecker;
  }
  public set healthChecker(value: LoadBalancerBackendsetHealthChecker[]) {
    this._healthChecker = value;
  }

  // lb_cookie_session_persistence_configuration - computed: false, optional: true, required: false
  private _lbCookieSessionPersistenceConfiguration?: LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration[];
  public get lbCookieSessionPersistenceConfiguration() {
    return this._lbCookieSessionPersistenceConfiguration;
  }
  public set lbCookieSessionPersistenceConfiguration(value: LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration[] | undefined) {
    this._lbCookieSessionPersistenceConfiguration = value;
  }

  // session_persistence_configuration - computed: false, optional: true, required: false
  private _sessionPersistenceConfiguration?: LoadBalancerBackendsetSessionPersistenceConfiguration[];
  public get sessionPersistenceConfiguration() {
    return this._sessionPersistenceConfiguration;
  }
  public set sessionPersistenceConfiguration(value: LoadBalancerBackendsetSessionPersistenceConfiguration[] | undefined) {
    this._sessionPersistenceConfiguration = value;
  }

  // ssl_configuration - computed: false, optional: true, required: false
  private _sslConfiguration?: LoadBalancerBackendsetSslConfiguration[];
  public get sslConfiguration() {
    return this._sslConfiguration;
  }
  public set sslConfiguration(value: LoadBalancerBackendsetSslConfiguration[] | undefined) {
    this._sslConfiguration = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LoadBalancerBackendsetTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LoadBalancerBackendsetTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      load_balancer_id: this._loadBalancerId,
      name: this._name,
      policy: this._policy,
      health_checker: this._healthChecker,
      lb_cookie_session_persistence_configuration: this._lbCookieSessionPersistenceConfiguration,
      session_persistence_configuration: this._sessionPersistenceConfiguration,
      ssl_configuration: this._sslConfiguration,
      timeouts: this._timeouts,
    };
  }
}
