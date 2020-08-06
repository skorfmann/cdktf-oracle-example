// https://www.terraform.io/docs/providers/oci/r/data_oci_monitoring_alarm.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "alarm_id": {
        "type": "string",
        "required": true
      },
      "body": {
        "type": "string",
        "computed": true
      },
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
      "destinations": {
        "type": [
          "list",
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
      "id": {
        "type": "string",
        "computed": true
      },
      "is_enabled": {
        "type": "bool",
        "computed": true
      },
      "metric_compartment_id": {
        "type": "string",
        "computed": true
      },
      "metric_compartment_id_in_subtree": {
        "type": "bool",
        "computed": true
      },
      "namespace": {
        "type": "string",
        "computed": true
      },
      "pending_duration": {
        "type": "string",
        "computed": true
      },
      "query": {
        "type": "string",
        "computed": true
      },
      "repeat_notification_duration": {
        "type": "string",
        "computed": true
      },
      "resolution": {
        "type": "string",
        "computed": true
      },
      "resource_group": {
        "type": "string",
        "computed": true
      },
      "severity": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "suppression": {
        "type": [
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
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_updated": {
        "type": "string",
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciMonitoringAlarmConfig extends TerraformMetaArguments {
  readonly alarmId: string;
}
export class DataOciMonitoringAlarmSuppression extends ComplexComputedList {

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

// Resource

export class DataOciMonitoringAlarm extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciMonitoringAlarmConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_monitoring_alarm',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alarmId = config.alarmId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_id - computed: false, optional: false, required: true
  private _alarmId: string;
  public get alarmId() {
    return this._alarmId;
  }
  public set alarmId(value: string) {
    this._alarmId = value;
  }

  // body - computed: true, optional: false, required: true
  public get body() {
    return this.getStringAttribute('body');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
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
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
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
  public suppression(index: string) {
    return new DataOciMonitoringAlarmSuppression(this, 'suppression', index);
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_id: this._alarmId,
    };
  }
}
