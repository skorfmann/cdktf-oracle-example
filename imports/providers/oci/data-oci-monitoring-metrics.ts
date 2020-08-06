// https://www.terraform.io/docs/providers/oci/r/data_oci_monitoring_metrics.html
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
      "dimension_filters": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "group_by": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "metrics": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "compartment_id_in_subtree": "bool",
              "dimension_filters": [
                "map",
                "string"
              ],
              "dimensions": [
                "map",
                "string"
              ],
              "group_by": [
                "list",
                "string"
              ],
              "name": "string",
              "namespace": "string",
              "resource_group": "string"
            }
          ]
        ],
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true
      },
      "namespace": {
        "type": "string",
        "optional": true
      },
      "resource_group": {
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

export interface DataOciMonitoringMetricsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly compartmentIdInSubtree?: boolean;
  readonly dimensionFilters?: { [key: string]: string };
  readonly groupBy?: string[];
  readonly name?: string;
  readonly namespace?: string;
  readonly resourceGroup?: string;
  /** filter block */
  readonly filter?: DataOciMonitoringMetricsFilter[];
}
export class DataOciMonitoringMetricsMetrics extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compartment_id_in_subtree - computed: true, optional: false, required: true
  public get compartmentIdInSubtree() {
    return this.getBooleanAttribute('compartment_id_in_subtree');
  }

  // dimension_filters - computed: true, optional: false, required: true
  public get dimensionFilters() {
    return 'not implemented' as any;
  }

  // dimensions - computed: true, optional: false, required: true
  public get dimensions() {
    return 'not implemented' as any;
  }

  // group_by - computed: true, optional: false, required: true
  public get groupBy() {
    return this.getListAttribute('group_by');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: true
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // resource_group - computed: true, optional: false, required: true
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
}
export interface DataOciMonitoringMetricsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciMonitoringMetrics extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciMonitoringMetricsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_monitoring_metrics',
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
    this._dimensionFilters = config.dimensionFilters;
    this._groupBy = config.groupBy;
    this._name = config.name;
    this._namespace = config.namespace;
    this._resourceGroup = config.resourceGroup;
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

  // dimension_filters - computed: false, optional: true, required: false
  private _dimensionFilters?: { [key: string]: string };
  public get dimensionFilters() {
    return this._dimensionFilters;
  }
  public set dimensionFilters(value: { [key: string]: string } | undefined) {
    this._dimensionFilters = value;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[];
  public get groupBy() {
    return this._groupBy;
  }
  public set groupBy(value: string[] | undefined) {
    this._groupBy = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // metrics - computed: true, optional: false, required: true
  public metrics(index: string) {
    return new DataOciMonitoringMetricsMetrics(this, 'metrics', index);
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string;
  public get namespace() {
    return this._namespace;
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string;
  public get resourceGroup() {
    return this._resourceGroup;
  }
  public set resourceGroup(value: string | undefined) {
    this._resourceGroup = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciMonitoringMetricsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciMonitoringMetricsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      compartment_id_in_subtree: this._compartmentIdInSubtree,
      dimension_filters: this._dimensionFilters,
      group_by: this._groupBy,
      name: this._name,
      namespace: this._namespace,
      resource_group: this._resourceGroup,
      filter: this._filter,
    };
  }
}
