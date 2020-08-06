// https://www.terraform.io/docs/providers/oci/r/data_oci_load_balancer_backendsets.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "backendsets": {
        "type": [
          "list",
          [
            "object",
            {
              "backend": [
                "list",
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
              "health_checker": [
                "list",
                [
                  "object",
                  {
                    "interval_ms": "number",
                    "port": "number",
                    "protocol": "string",
                    "response_body_regex": "string",
                    "retries": "number",
                    "return_code": "number",
                    "timeout_in_millis": "number",
                    "url_path": "string"
                  }
                ]
              ],
              "id": "string",
              "lb_cookie_session_persistence_configuration": [
                "list",
                [
                  "object",
                  {
                    "cookie_name": "string",
                    "disable_fallback": "bool",
                    "domain": "string",
                    "is_http_only": "bool",
                    "is_secure": "bool",
                    "max_age_in_seconds": "number",
                    "path": "string"
                  }
                ]
              ],
              "load_balancer_id": "string",
              "name": "string",
              "policy": "string",
              "session_persistence_configuration": [
                "list",
                [
                  "object",
                  {
                    "cookie_name": "string",
                    "disable_fallback": "bool"
                  }
                ]
              ],
              "ssl_configuration": [
                "list",
                [
                  "object",
                  {
                    "certificate_name": "string",
                    "verify_depth": "number",
                    "verify_peer_certificate": "bool"
                  }
                ]
              ],
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

export interface DataOciLoadBalancerBackendsetsConfig extends TerraformMetaArguments {
  readonly loadBalancerId: string;
  /** filter block */
  readonly filter?: DataOciLoadBalancerBackendsetsFilter[];
}
export class DataOciLoadBalancerBackendsetsBackendsetsBackend extends ComplexComputedList {

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
export class DataOciLoadBalancerBackendsetsBackendsetsHealthChecker extends ComplexComputedList {

  // interval_ms - computed: true, optional: false, required: true
  public get intervalMs() {
    return this.getNumberAttribute('interval_ms');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: true
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // response_body_regex - computed: true, optional: false, required: true
  public get responseBodyRegex() {
    return this.getStringAttribute('response_body_regex');
  }

  // retries - computed: true, optional: false, required: true
  public get retries() {
    return this.getNumberAttribute('retries');
  }

  // return_code - computed: true, optional: false, required: true
  public get returnCode() {
    return this.getNumberAttribute('return_code');
  }

  // timeout_in_millis - computed: true, optional: false, required: true
  public get timeoutInMillis() {
    return this.getNumberAttribute('timeout_in_millis');
  }

  // url_path - computed: true, optional: false, required: true
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }
}
export class DataOciLoadBalancerBackendsetsBackendsetsLbCookieSessionPersistenceConfiguration extends ComplexComputedList {

  // cookie_name - computed: true, optional: false, required: true
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }

  // disable_fallback - computed: true, optional: false, required: true
  public get disableFallback() {
    return this.getBooleanAttribute('disable_fallback');
  }

  // domain - computed: true, optional: false, required: true
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // is_http_only - computed: true, optional: false, required: true
  public get isHttpOnly() {
    return this.getBooleanAttribute('is_http_only');
  }

  // is_secure - computed: true, optional: false, required: true
  public get isSecure() {
    return this.getBooleanAttribute('is_secure');
  }

  // max_age_in_seconds - computed: true, optional: false, required: true
  public get maxAgeInSeconds() {
    return this.getNumberAttribute('max_age_in_seconds');
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataOciLoadBalancerBackendsetsBackendsetsSessionPersistenceConfiguration extends ComplexComputedList {

  // cookie_name - computed: true, optional: false, required: true
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }

  // disable_fallback - computed: true, optional: false, required: true
  public get disableFallback() {
    return this.getBooleanAttribute('disable_fallback');
  }
}
export class DataOciLoadBalancerBackendsetsBackendsetsSslConfiguration extends ComplexComputedList {

  // certificate_name - computed: true, optional: false, required: true
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }

  // verify_depth - computed: true, optional: false, required: true
  public get verifyDepth() {
    return this.getNumberAttribute('verify_depth');
  }

  // verify_peer_certificate - computed: true, optional: false, required: true
  public get verifyPeerCertificate() {
    return this.getBooleanAttribute('verify_peer_certificate');
  }
}
export class DataOciLoadBalancerBackendsetsBackendsets extends ComplexComputedList {

  // backend - computed: true, optional: false, required: true
  public get backend() {
    return 'not implemented' as any;
  }

  // health_checker - computed: true, optional: false, required: true
  public get healthChecker() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // lb_cookie_session_persistence_configuration - computed: true, optional: false, required: true
  public get lbCookieSessionPersistenceConfiguration() {
    return 'not implemented' as any;
  }

  // load_balancer_id - computed: true, optional: false, required: true
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy - computed: true, optional: false, required: true
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // session_persistence_configuration - computed: true, optional: false, required: true
  public get sessionPersistenceConfiguration() {
    return 'not implemented' as any;
  }

  // ssl_configuration - computed: true, optional: false, required: true
  public get sslConfiguration() {
    return 'not implemented' as any;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataOciLoadBalancerBackendsetsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciLoadBalancerBackendsets extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciLoadBalancerBackendsetsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_load_balancer_backendsets',
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

  // backendsets - computed: true, optional: false, required: true
  public backendsets(index: string) {
    return new DataOciLoadBalancerBackendsetsBackendsets(this, 'backendsets', index);
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
  private _filter?: DataOciLoadBalancerBackendsetsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciLoadBalancerBackendsetsFilter[] | undefined) {
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
