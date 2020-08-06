// https://www.terraform.io/docs/providers/oci/r/data_oci_monitoring_alarm_history_collection.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "alarm_historytype": {
        "type": "string",
        "optional": true
      },
      "alarm_id": {
        "type": "string",
        "required": true
      },
      "entries": {
        "type": [
          "list",
          [
            "object",
            {
              "summary": "string",
              "timestamp": "string",
              "timestamp_triggered": "string"
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
      "is_enabled": {
        "type": "bool",
        "computed": true
      },
      "timestamp_greater_than_or_equal_to": {
        "type": "string",
        "optional": true
      },
      "timestamp_less_than": {
        "type": "string",
        "optional": true
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

export interface DataOciMonitoringAlarmHistoryCollectionConfig extends TerraformMetaArguments {
  readonly alarmHistorytype?: string;
  readonly alarmId: string;
  readonly timestampGreaterThanOrEqualTo?: string;
  readonly timestampLessThan?: string;
}
export class DataOciMonitoringAlarmHistoryCollectionEntries extends ComplexComputedList {

  // summary - computed: true, optional: false, required: true
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // timestamp - computed: true, optional: false, required: true
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // timestamp_triggered - computed: true, optional: false, required: true
  public get timestampTriggered() {
    return this.getStringAttribute('timestamp_triggered');
  }
}

// Resource

export class DataOciMonitoringAlarmHistoryCollection extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciMonitoringAlarmHistoryCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_monitoring_alarm_history_collection',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alarmHistorytype = config.alarmHistorytype;
    this._alarmId = config.alarmId;
    this._timestampGreaterThanOrEqualTo = config.timestampGreaterThanOrEqualTo;
    this._timestampLessThan = config.timestampLessThan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_historytype - computed: false, optional: true, required: false
  private _alarmHistorytype?: string;
  public get alarmHistorytype() {
    return this._alarmHistorytype;
  }
  public set alarmHistorytype(value: string | undefined) {
    this._alarmHistorytype = value;
  }

  // alarm_id - computed: false, optional: false, required: true
  private _alarmId: string;
  public get alarmId() {
    return this._alarmId;
  }
  public set alarmId(value: string) {
    this._alarmId = value;
  }

  // entries - computed: true, optional: false, required: true
  public entries(index: string) {
    return new DataOciMonitoringAlarmHistoryCollectionEntries(this, 'entries', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_enabled - computed: true, optional: false, required: true
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // timestamp_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timestampGreaterThanOrEqualTo?: string;
  public get timestampGreaterThanOrEqualTo() {
    return this._timestampGreaterThanOrEqualTo;
  }
  public set timestampGreaterThanOrEqualTo(value: string | undefined) {
    this._timestampGreaterThanOrEqualTo = value;
  }

  // timestamp_less_than - computed: false, optional: true, required: false
  private _timestampLessThan?: string;
  public get timestampLessThan() {
    return this._timestampLessThan;
  }
  public set timestampLessThan(value: string | undefined) {
    this._timestampLessThan = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_historytype: this._alarmHistorytype,
      alarm_id: this._alarmId,
      timestamp_greater_than_or_equal_to: this._timestampGreaterThanOrEqualTo,
      timestamp_less_than: this._timestampLessThan,
    };
  }
}
