// https://www.terraform.io/docs/providers/oci/r/data_oci_health_checks_http_monitor.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "headers": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "home_region": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "interval_in_seconds": {
        "type": "number",
        "computed": true
      },
      "is_enabled": {
        "type": "bool",
        "computed": true
      },
      "method": {
        "type": "string",
        "computed": true
      },
      "monitor_id": {
        "type": "string",
        "required": true
      },
      "path": {
        "type": "string",
        "computed": true
      },
      "port": {
        "type": "number",
        "computed": true
      },
      "protocol": {
        "type": "string",
        "computed": true
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
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "timeout_in_seconds": {
        "type": "number",
        "computed": true
      },
      "vantage_point_names": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataOciHealthChecksHttpMonitorConfig extends TerraformMetaArguments {
  readonly monitorId: string;
}

// Resource

export class DataOciHealthChecksHttpMonitor extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciHealthChecksHttpMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_health_checks_http_monitor',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._monitorId = config.monitorId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // headers - computed: true, optional: false, required: true
  public headers(key: string): string {
    return new StringMap(this, 'headers').lookup(key);
  }

  // home_region - computed: true, optional: false, required: true
  public get homeRegion() {
    return this.getStringAttribute('home_region');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval_in_seconds - computed: true, optional: false, required: true
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // is_enabled - computed: true, optional: false, required: true
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // method - computed: true, optional: false, required: true
  public get method() {
    return this.getStringAttribute('method');
  }

  // monitor_id - computed: false, optional: false, required: true
  private _monitorId: string;
  public get monitorId() {
    return this._monitorId;
  }
  public set monitorId(value: string) {
    this._monitorId = value;
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: true
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // results_url - computed: true, optional: false, required: true
  public get resultsUrl() {
    return this.getStringAttribute('results_url');
  }

  // targets - computed: true, optional: false, required: true
  public get targets() {
    return this.getListAttribute('targets');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // timeout_in_seconds - computed: true, optional: false, required: true
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }

  // vantage_point_names - computed: true, optional: false, required: true
  public get vantagePointNames() {
    return this.getListAttribute('vantage_point_names');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      monitor_id: this._monitorId,
    };
  }
}
