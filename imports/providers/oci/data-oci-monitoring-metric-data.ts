// https://www.terraform.io/docs/providers/oci/r/data_oci_monitoring_metric_data.html
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
      "compartment_id_in_subtree": {
        "type": "bool",
        "optional": true
      },
      "end_time": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "metric_data": {
        "type": [
          "list",
          [
            "object",
            {
              "aggregated_datapoints": [
                "list",
                [
                  "object",
                  {
                    "timestamp": "string",
                    "value": "number"
                  }
                ]
              ],
              "compartment_id": "string",
              "compartment_id_in_subtree": "bool",
              "dimensions": [
                "map",
                "string"
              ],
              "end_time": "string",
              "metadata": [
                "map",
                "string"
              ],
              "name": "string",
              "namespace": "string",
              "query": "string",
              "resolution": "string",
              "resource_group": "string",
              "start_time": "string"
            }
          ]
        ],
        "computed": true
      },
      "namespace": {
        "type": "string",
        "required": true
      },
      "query": {
        "type": "string",
        "required": true
      },
      "resolution": {
        "type": "string",
        "optional": true
      },
      "resource_group": {
        "type": "string",
        "optional": true
      },
      "start_time": {
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

export interface DataOciMonitoringMetricDataConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly compartmentIdInSubtree?: boolean;
  readonly endTime?: string;
  readonly namespace: string;
  readonly query: string;
  readonly resolution?: string;
  readonly resourceGroup?: string;
  readonly startTime?: string;
  /** filter block */
  readonly filter?: DataOciMonitoringMetricDataFilter[];
}
export class DataOciMonitoringMetricDataMetricDataAggregatedDatapoints extends ComplexComputedList {

  // timestamp - computed: true, optional: false, required: true
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export class DataOciMonitoringMetricDataMetricData extends ComplexComputedList {

  // aggregated_datapoints - computed: true, optional: false, required: true
  public get aggregatedDatapoints() {
    return 'not implemented' as any;
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compartment_id_in_subtree - computed: true, optional: false, required: true
  public get compartmentIdInSubtree() {
    return this.getBooleanAttribute('compartment_id_in_subtree');
  }

  // dimensions - computed: true, optional: false, required: true
  public get dimensions() {
    return 'not implemented' as any;
  }

  // end_time - computed: true, optional: false, required: true
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // metadata - computed: true, optional: false, required: true
  public get metadata() {
    return 'not implemented' as any;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: true
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // query - computed: true, optional: false, required: true
  public get query() {
    return this.getStringAttribute('query');
  }

  // resolution - computed: true, optional: false, required: true
  public get resolution() {
    return this.getStringAttribute('resolution');
  }

  // resource_group - computed: true, optional: false, required: true
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }

  // start_time - computed: true, optional: false, required: true
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}
export interface DataOciMonitoringMetricDataFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciMonitoringMetricData extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciMonitoringMetricDataConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_monitoring_metric_data',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._compartmentIdInSubtree = config.compartmentIdInSubtree;
    this._endTime = config.endTime;
    this._namespace = config.namespace;
    this._query = config.query;
    this._resolution = config.resolution;
    this._resourceGroup = config.resourceGroup;
    this._startTime = config.startTime;
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

  // compartment_id_in_subtree - computed: false, optional: true, required: false
  private _compartmentIdInSubtree?: boolean;
  public get compartmentIdInSubtree() {
    return this._compartmentIdInSubtree;
  }
  public set compartmentIdInSubtree(value: boolean | undefined) {
    this._compartmentIdInSubtree = value;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string;
  public get endTime() {
    return this._endTime;
  }
  public set endTime(value: string | undefined) {
    this._endTime = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // metric_data - computed: true, optional: false, required: true
  public metricData(index: string) {
    return new DataOciMonitoringMetricDataMetricData(this, 'metric_data', index);
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace: string;
  public get namespace() {
    return this._namespace;
  }
  public set namespace(value: string) {
    this._namespace = value;
  }

  // query - computed: false, optional: false, required: true
  private _query: string;
  public get query() {
    return this._query;
  }
  public set query(value: string) {
    this._query = value;
  }

  // resolution - computed: false, optional: true, required: false
  private _resolution?: string;
  public get resolution() {
    return this._resolution;
  }
  public set resolution(value: string | undefined) {
    this._resolution = value;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string;
  public get resourceGroup() {
    return this._resourceGroup;
  }
  public set resourceGroup(value: string | undefined) {
    this._resourceGroup = value;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string;
  public get startTime() {
    return this._startTime;
  }
  public set startTime(value: string | undefined) {
    this._startTime = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciMonitoringMetricDataFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciMonitoringMetricDataFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      compartment_id_in_subtree: this._compartmentIdInSubtree,
      end_time: this._endTime,
      namespace: this._namespace,
      query: this._query,
      resolution: this._resolution,
      resource_group: this._resourceGroup,
      start_time: this._startTime,
      filter: this._filter,
    };
  }
}
