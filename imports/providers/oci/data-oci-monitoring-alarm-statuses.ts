// https://www.terraform.io/docs/providers/oci/r/data_oci_monitoring_alarm_statuses.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "alarm_statuses": {
        "type": [
          "list",
          [
            "object",
            {
              "display_name": "string",
              "id": "string",
              "severity": "string",
              "status": "string",
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
              "timestamp_triggered": "string"
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

export interface DataOciMonitoringAlarmStatusesConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly compartmentIdInSubtree?: boolean;
  readonly displayName?: string;
  /** filter block */
  readonly filter?: DataOciMonitoringAlarmStatusesFilter[];
}
export class DataOciMonitoringAlarmStatusesAlarmStatusesSuppression extends ComplexComputedList {

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
export class DataOciMonitoringAlarmStatusesAlarmStatuses extends ComplexComputedList {

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // severity - computed: true, optional: false, required: true
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // suppression - computed: true, optional: false, required: true
  public get suppression() {
    return 'not implemented' as any;
  }

  // timestamp_triggered - computed: true, optional: false, required: true
  public get timestampTriggered() {
    return this.getStringAttribute('timestamp_triggered');
  }
}
export interface DataOciMonitoringAlarmStatusesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciMonitoringAlarmStatuses extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciMonitoringAlarmStatusesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_monitoring_alarm_statuses',
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
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_statuses - computed: true, optional: false, required: true
  public alarmStatuses(index: string) {
    return new DataOciMonitoringAlarmStatusesAlarmStatuses(this, 'alarm_statuses', index);
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

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciMonitoringAlarmStatusesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciMonitoringAlarmStatusesFilter[] | undefined) {
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
      filter: this._filter,
    };
  }
}
