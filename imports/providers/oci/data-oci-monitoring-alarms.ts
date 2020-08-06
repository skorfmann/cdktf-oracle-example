// https://www.terraform.io/docs/providers/oci/r/data_oci_monitoring_alarms.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "alarms": {
        "type": [
          "list",
          [
            "object",
            {
              "body": "string",
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "destinations": [
                "list",
                "string"
              ],
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "is_enabled": "bool",
              "metric_compartment_id": "string",
              "metric_compartment_id_in_subtree": "bool",
              "namespace": "string",
              "pending_duration": "string",
              "query": "string",
              "repeat_notification_duration": "string",
              "resolution": "string",
              "resource_group": "string",
              "severity": "string",
              "state": "string",
              "suppression": [
                "list",
                [
                  "object",
                  {
                    "description": "string",
                    "time_suppress_from": "string",
                    "time_suppress_until": "string"
                  }
                ]
              ],
              "time_created": "string",
              "time_updated": "string"
            }
          ]
        ],
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "compartment_id_in_subtree": {
        "type": "bool",
        "optional": true
      },
      "display_name": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "state": {
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

export interface DataOciMonitoringAlarmsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly compartmentIdInSubtree?: boolean;
  readonly displayName?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciMonitoringAlarmsFilter[];
}
export class DataOciMonitoringAlarmsAlarmsSuppression extends ComplexComputedList {

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // time_suppress_from - computed: true, optional: false, required: true
  public get timeSuppressFrom() {
    return this.getStringAttribute('time_suppress_from');
  }

  // time_suppress_until - computed: true, optional: false, required: true
  public get timeSuppressUntil() {
    return this.getStringAttribute('time_suppress_until');
  }
}
export class DataOciMonitoringAlarmsAlarms extends ComplexComputedList {

  // body - computed: true, optional: false, required: true
  public get body() {
    return this.getStringAttribute('body');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // destinations - computed: true, optional: false, required: true
  public get destinations() {
    return this.getListAttribute('destinations');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_enabled - computed: true, optional: false, required: true
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // metric_compartment_id - computed: true, optional: false, required: true
  public get metricCompartmentId() {
    return this.getStringAttribute('metric_compartment_id');
  }

  // metric_compartment_id_in_subtree - computed: true, optional: false, required: true
  public get metricCompartmentIdInSubtree() {
    return this.getBooleanAttribute('metric_compartment_id_in_subtree');
  }

  // namespace - computed: true, optional: false, required: true
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // pending_duration - computed: true, optional: false, required: true
  public get pendingDuration() {
    return this.getStringAttribute('pending_duration');
  }

  // query - computed: true, optional: false, required: true
  public get query() {
    return this.getStringAttribute('query');
  }

  // repeat_notification_duration - computed: true, optional: false, required: true
  public get repeatNotificationDuration() {
    return this.getStringAttribute('repeat_notification_duration');
  }

  // resolution - computed: true, optional: false, required: true
  public get resolution() {
    return this.getStringAttribute('resolution');
  }

  // resource_group - computed: true, optional: false, required: true
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }

  // severity - computed: true, optional: false, required: true
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // suppression - computed: true, optional: false, required: true
  public get suppression() {
    return 'not implemented' as any;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}
export interface DataOciMonitoringAlarmsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciMonitoringAlarms extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciMonitoringAlarmsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_monitoring_alarms',
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
    this._displayName = config.displayName;
    this._state = config.state;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarms - computed: true, optional: false, required: true
  public alarms(index: string) {
    return new DataOciMonitoringAlarmsAlarms(this, 'alarms', index);
  }

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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciMonitoringAlarmsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciMonitoringAlarmsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      compartment_id_in_subtree: this._compartmentIdInSubtree,
      display_name: this._displayName,
      state: this._state,
      filter: this._filter,
    };
  }
}
