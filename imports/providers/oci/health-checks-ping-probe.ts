// https://www.terraform.io/docs/providers/oci/r/health_checks_ping_probe.html
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
      "home_region": {
        "type": "string",
        "computed": true
      },
      "id": {
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

export interface HealthChecksPingProbeConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly port?: number;
  readonly protocol: string;
  readonly targets: string[];
  readonly timeoutInSeconds?: number;
  readonly vantagePointNames?: string[];
  /** timeouts block */
  readonly timeouts?: HealthChecksPingProbeTimeouts;
}
export interface HealthChecksPingProbeTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class HealthChecksPingProbe extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: HealthChecksPingProbeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_health_checks_ping_probe',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
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
  private _timeouts?: HealthChecksPingProbeTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: HealthChecksPingProbeTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      port: this._port,
      protocol: this._protocol,
      targets: this._targets,
      timeout_in_seconds: this._timeoutInSeconds,
      vantage_point_names: this._vantagePointNames,
      timeouts: this._timeouts,
    };
  }
}
