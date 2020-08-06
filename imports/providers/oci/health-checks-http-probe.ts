// https://www.terraform.io/docs/providers/oci/r/health_checks_http_probe.html
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
      "headers": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "home_region": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "method": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "path": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "port": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "protocol": {
        "type": "string",
        "required": true
      },
      "results_url": {
        "type": "string",
        "computed": true
      },
      "targets": {
        "type": [
          "list",
          "string"
        ],
        "required": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "timeout_in_seconds": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "vantage_point_names": {
        "type": [
          "list",
          "string"
        ],
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

export interface HealthChecksHttpProbeConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly headers?: { [key: string]: string };
  readonly method?: string;
  readonly path?: string;
  readonly port?: number;
  readonly protocol: string;
  readonly targets: string[];
  readonly timeoutInSeconds?: number;
  readonly vantagePointNames?: string[];
  /** timeouts block */
  readonly timeouts?: HealthChecksHttpProbeTimeouts;
}
export interface HealthChecksHttpProbeTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class HealthChecksHttpProbe extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: HealthChecksHttpProbeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_health_checks_http_probe',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._headers = config.headers;
    this._method = config.method;
    this._path = config.path;
    this._port = config.port;
    this._protocol = config.protocol;
    this._targets = config.targets;
    this._timeoutInSeconds = config.timeoutInSeconds;
    this._vantagePointNames = config.vantagePointNames;
    this._timeouts = config.timeouts;
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

  // headers - computed: true, optional: true, required: false
  private _headers?: { [key: string]: string }
  public get headers(): { [key: string]: string } | undefined {
    return this._headers; // Getting the computed value is not yet implemented
  }
  public set headers(value: { [key: string]: string } | undefined) {
    this._headers = value;
  }

  // home_region - computed: true, optional: false, required: true
  public get homeRegion() {
    return this.getStringAttribute('home_region');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // method - computed: true, optional: true, required: false
  private _method?: string;
  public get method() {
    return this._method ?? this.getStringAttribute('method');
  }
  public set method(value: string | undefined) {
    this._method = value;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string;
  public get path() {
    return this._path ?? this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number;
  public get port() {
    return this._port ?? this.getNumberAttribute('port');
  }
  public set port(value: number | undefined) {
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

  // results_url - computed: true, optional: false, required: true
  public get resultsUrl() {
    return this.getStringAttribute('results_url');
  }

  // targets - computed: false, optional: false, required: true
  private _targets: string[];
  public get targets() {
    return this._targets;
  }
  public set targets(value: string[]) {
    this._targets = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // timeout_in_seconds - computed: true, optional: true, required: false
  private _timeoutInSeconds?: number;
  public get timeoutInSeconds() {
    return this._timeoutInSeconds ?? this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number | undefined) {
    this._timeoutInSeconds = value;
  }

  // vantage_point_names - computed: true, optional: true, required: false
  private _vantagePointNames?: string[];
  public get vantagePointNames() {
    return this._vantagePointNames ?? this.getListAttribute('vantage_point_names');
  }
  public set vantagePointNames(value: string[] | undefined) {
    this._vantagePointNames = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HealthChecksHttpProbeTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: HealthChecksHttpProbeTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      headers: this._headers,
      method: this._method,
      path: this._path,
      port: this._port,
      protocol: this._protocol,
      targets: this._targets,
      timeout_in_seconds: this._timeoutInSeconds,
      vantage_point_names: this._vantagePointNames,
      timeouts: this._timeouts,
    };
  }
}
