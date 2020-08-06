// https://www.terraform.io/docs/providers/oci/r/data_oci_health_checks_ping_probe_results.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ping_probe_results": {
        "type": [
          "list",
          [
            "object",
            {
              "connection": [
                "list",
                [
                  "object",
                  {
                    "address": "string",
                    "port": "number"
                  }
                ]
              ],
              "dns": [
                "list",
                [
                  "object",
                  {
                    "addresses": [
                      "list",
                      "string"
                    ],
                    "domain_lookup_duration": "number"
                  }
                ]
              ],
              "domain_lookup_end": "number",
              "domain_lookup_start": "number",
              "error_category": "string",
              "error_message": "string",
              "icmp_code": "number",
              "is_healthy": "bool",
              "is_timed_out": "bool",
              "key": "string",
              "latency_in_ms": "number",
              "probe_configuration_id": "string",
              "protocol": "string",
              "start_time": "number",
              "target": "string",
              "vantage_point_name": "string"
            }
          ]
        ],
        "computed": true
      },
      "probe_configuration_id": {
        "type": "string",
        "required": true
      },
      "start_time_greater_than_or_equal_to": {
        "type": "number",
        "optional": true
      },
      "start_time_less_than_or_equal_to": {
        "type": "number",
        "optional": true
      },
      "target": {
        "type": "string",
        "optional": true
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

export interface DataOciHealthChecksPingProbeResultsConfig extends TerraformMetaArguments {
  readonly probeConfigurationId: string;
  readonly startTimeGreaterThanOrEqualTo?: number;
  readonly startTimeLessThanOrEqualTo?: number;
  readonly target?: string;
  /** filter block */
  readonly filter?: DataOciHealthChecksPingProbeResultsFilter[];
}
export class DataOciHealthChecksPingProbeResultsPingProbeResultsConnection extends ComplexComputedList {

  // address - computed: true, optional: false, required: true
  public get address() {
    return this.getStringAttribute('address');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export class DataOciHealthChecksPingProbeResultsPingProbeResultsDns extends ComplexComputedList {

  // addresses - computed: true, optional: false, required: true
  public get addresses() {
    return this.getListAttribute('addresses');
  }

  // domain_lookup_duration - computed: true, optional: false, required: true
  public get domainLookupDuration() {
    return this.getNumberAttribute('domain_lookup_duration');
  }
}
export class DataOciHealthChecksPingProbeResultsPingProbeResults extends ComplexComputedList {

  // connection - computed: true, optional: false, required: true
  public get connection() {
    return 'not implemented' as any;
  }

  // dns - computed: true, optional: false, required: true
  public get dns() {
    return 'not implemented' as any;
  }

  // domain_lookup_end - computed: true, optional: false, required: true
  public get domainLookupEnd() {
    return this.getNumberAttribute('domain_lookup_end');
  }

  // domain_lookup_start - computed: true, optional: false, required: true
  public get domainLookupStart() {
    return this.getNumberAttribute('domain_lookup_start');
  }

  // error_category - computed: true, optional: false, required: true
  public get errorCategory() {
    return this.getStringAttribute('error_category');
  }

  // error_message - computed: true, optional: false, required: true
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // icmp_code - computed: true, optional: false, required: true
  public get icmpCode() {
    return this.getNumberAttribute('icmp_code');
  }

  // is_healthy - computed: true, optional: false, required: true
  public get isHealthy() {
    return this.getBooleanAttribute('is_healthy');
  }

  // is_timed_out - computed: true, optional: false, required: true
  public get isTimedOut() {
    return this.getBooleanAttribute('is_timed_out');
  }

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // latency_in_ms - computed: true, optional: false, required: true
  public get latencyInMs() {
    return this.getNumberAttribute('latency_in_ms');
  }

  // probe_configuration_id - computed: true, optional: false, required: true
  public get probeConfigurationId() {
    return this.getStringAttribute('probe_configuration_id');
  }

  // protocol - computed: true, optional: false, required: true
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // start_time - computed: true, optional: false, required: true
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // target - computed: true, optional: false, required: true
  public get target() {
    return this.getStringAttribute('target');
  }

  // vantage_point_name - computed: true, optional: false, required: true
  public get vantagePointName() {
    return this.getStringAttribute('vantage_point_name');
  }
}
export interface DataOciHealthChecksPingProbeResultsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciHealthChecksPingProbeResults extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciHealthChecksPingProbeResultsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_health_checks_ping_probe_results',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._probeConfigurationId = config.probeConfigurationId;
    this._startTimeGreaterThanOrEqualTo = config.startTimeGreaterThanOrEqualTo;
    this._startTimeLessThanOrEqualTo = config.startTimeLessThanOrEqualTo;
    this._target = config.target;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ping_probe_results - computed: true, optional: false, required: true
  public pingProbeResults(index: string) {
    return new DataOciHealthChecksPingProbeResultsPingProbeResults(this, 'ping_probe_results', index);
  }

  // probe_configuration_id - computed: false, optional: false, required: true
  private _probeConfigurationId: string;
  public get probeConfigurationId() {
    return this._probeConfigurationId;
  }
  public set probeConfigurationId(value: string) {
    this._probeConfigurationId = value;
  }

  // start_time_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _startTimeGreaterThanOrEqualTo?: number;
  public get startTimeGreaterThanOrEqualTo() {
    return this._startTimeGreaterThanOrEqualTo;
  }
  public set startTimeGreaterThanOrEqualTo(value: number | undefined) {
    this._startTimeGreaterThanOrEqualTo = value;
  }

  // start_time_less_than_or_equal_to - computed: false, optional: true, required: false
  private _startTimeLessThanOrEqualTo?: number;
  public get startTimeLessThanOrEqualTo() {
    return this._startTimeLessThanOrEqualTo;
  }
  public set startTimeLessThanOrEqualTo(value: number | undefined) {
    this._startTimeLessThanOrEqualTo = value;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string;
  public get target() {
    return this._target;
  }
  public set target(value: string | undefined) {
    this._target = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciHealthChecksPingProbeResultsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciHealthChecksPingProbeResultsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      probe_configuration_id: this._probeConfigurationId,
      start_time_greater_than_or_equal_to: this._startTimeGreaterThanOrEqualTo,
      start_time_less_than_or_equal_to: this._startTimeLessThanOrEqualTo,
      target: this._target,
      filter: this._filter,
    };
  }
}
