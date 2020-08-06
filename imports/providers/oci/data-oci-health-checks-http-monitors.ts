// https://www.terraform.io/docs/providers/oci/r/data_oci_health_checks_http_monitors.html
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
      "display_name": {
        "type": "string",
        "optional": true
      },
      "home_region": {
        "type": "string",
        "optional": true
      },
      "http_monitors": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "headers": [
                "map",
                "string"
              ],
              "home_region": "string",
              "id": "string",
              "interval_in_seconds": "number",
              "is_enabled": "bool",
              "method": "string",
              "path": "string",
              "port": "number",
              "protocol": "string",
              "results_url": "string",
              "targets": [
                "list",
                "string"
              ],
              "time_created": "string",
              "timeout_in_seconds": "number",
              "vantage_point_names": [
                "list",
                "string"
              ]
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
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

export interface DataOciHealthChecksHttpMonitorsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly homeRegion?: string;
  /** filter block */
  readonly filter?: DataOciHealthChecksHttpMonitorsFilter[];
}
export class DataOciHealthChecksHttpMonitorsHttpMonitors extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // headers - computed: true, optional: false, required: true
  public get headers() {
    return 'not implemented' as any;
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
}
export interface DataOciHealthChecksHttpMonitorsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciHealthChecksHttpMonitors extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciHealthChecksHttpMonitorsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_health_checks_http_monitors',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._homeRegion = config.homeRegion;
    this._filter = config.filter;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // home_region - computed: false, optional: true, required: false
  private _homeRegion?: string;
  public get homeRegion() {
    return this._homeRegion;
  }
  public set homeRegion(value: string | undefined) {
    this._homeRegion = value;
  }

  // http_monitors - computed: true, optional: false, required: true
  public httpMonitors(index: string) {
    return new DataOciHealthChecksHttpMonitorsHttpMonitors(this, 'http_monitors', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciHealthChecksHttpMonitorsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciHealthChecksHttpMonitorsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      home_region: this._homeRegion,
      filter: this._filter,
    };
  }
}
