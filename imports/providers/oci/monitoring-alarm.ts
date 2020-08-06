// https://www.terraform.io/docs/providers/oci/r/monitoring_alarm.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "body": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "destinations": {
        "type": [
          "list",
          "string"
        ],
        "required": true
      },
      "display_name": {
        "type": "string",
        "required": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "is_enabled": {
        "type": "bool",
        "required": true
      },
      "metric_compartment_id": {
        "type": "string",
        "required": true
      },
      "metric_compartment_id_in_subtree": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "namespace": {
        "type": "string",
        "required": true
      },
      "pending_duration": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "query": {
        "type": "string",
        "required": true
      },
      "repeat_notification_duration": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "resolution": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "resource_group": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "severity": {
        "type": "string",
        "required": true
      },
      "state": {
        "type": "string",
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
    },
    "block_types": {
      "suppression": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "description": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "time_suppress_from": {
              "type": "string",
              "required": true
            },
            "time_suppress_until": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
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

export interface MonitoringAlarmConfig extends TerraformMetaArguments {
  readonly body?: string;
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly destinations: string[];
  readonly displayName: string;
  readonly freeformTags?: { [key: string]: string };
  readonly isEnabled: boolean;
  readonly metricCompartmentId: string;
  readonly metricCompartmentIdInSubtree?: boolean;
  readonly namespace: string;
  readonly pendingDuration?: string;
  readonly query: string;
  readonly repeatNotificationDuration?: string;
  readonly resolution?: string;
  readonly resourceGroup?: string;
  readonly severity: string;
  /** suppression block */
  readonly suppression?: MonitoringAlarmSuppression[];
  /** timeouts block */
  readonly timeouts?: MonitoringAlarmTimeouts;
}
export interface MonitoringAlarmSuppression {
  readonly description?: string;
  readonly timeSuppressFrom: string;
  readonly timeSuppressUntil: string;
}
export interface MonitoringAlarmTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class MonitoringAlarm extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MonitoringAlarmConfig) {
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
    this._body = config.body;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._destinations = config.destinations;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._isEnabled = config.isEnabled;
    this._metricCompartmentId = config.metricCompartmentId;
    this._metricCompartmentIdInSubtree = config.metricCompartmentIdInSubtree;
    this._namespace = config.namespace;
    this._pendingDuration = config.pendingDuration;
    this._query = config.query;
    this._repeatNotificationDuration = config.repeatNotificationDuration;
    this._resolution = config.resolution;
    this._resourceGroup = config.resourceGroup;
    this._severity = config.severity;
    this._suppression = config.suppression;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: true, optional: true, required: false
  private _body?: string;
  public get body() {
    return this._body ?? this.getStringAttribute('body');
  }
  public set body(value: string | undefined) {
    this._body = value;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // destinations - computed: false, optional: false, required: true
  private _destinations: string[];
  public get destinations() {
    return this._destinations;
  }
  public set destinations(value: string[]) {
    this._destinations = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled: boolean;
  public get isEnabled() {
    return this._isEnabled;
  }
  public set isEnabled(value: boolean) {
    this._isEnabled = value;
  }

  // metric_compartment_id - computed: false, optional: false, required: true
  private _metricCompartmentId: string;
  public get metricCompartmentId() {
    return this._metricCompartmentId;
  }
  public set metricCompartmentId(value: string) {
    this._metricCompartmentId = value;
  }

  // metric_compartment_id_in_subtree - computed: true, optional: true, required: false
  private _metricCompartmentIdInSubtree?: boolean;
  public get metricCompartmentIdInSubtree() {
    return this._metricCompartmentIdInSubtree ?? this.getBooleanAttribute('metric_compartment_id_in_subtree');
  }
  public set metricCompartmentIdInSubtree(value: boolean | undefined) {
    this._metricCompartmentIdInSubtree = value;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace: string;
  public get namespace() {
    return this._namespace;
  }
  public set namespace(value: string) {
    this._namespace = value;
  }

  // pending_duration - computed: true, optional: true, required: false
  private _pendingDuration?: string;
  public get pendingDuration() {
    return this._pendingDuration ?? this.getStringAttribute('pending_duration');
  }
  public set pendingDuration(value: string | undefined) {
    this._pendingDuration = value;
  }

  // query - computed: false, optional: false, required: true
  private _query: string;
  public get query() {
    return this._query;
  }
  public set query(value: string) {
    this._query = value;
  }

  // repeat_notification_duration - computed: true, optional: true, required: false
  private _repeatNotificationDuration?: string;
  public get repeatNotificationDuration() {
    return this._repeatNotificationDuration ?? this.getStringAttribute('repeat_notification_duration');
  }
  public set repeatNotificationDuration(value: string | undefined) {
    this._repeatNotificationDuration = value;
  }

  // resolution - computed: true, optional: true, required: false
  private _resolution?: string;
  public get resolution() {
    return this._resolution ?? this.getStringAttribute('resolution');
  }
  public set resolution(value: string | undefined) {
    this._resolution = value;
  }

  // resource_group - computed: true, optional: true, required: false
  private _resourceGroup?: string;
  public get resourceGroup() {
    return this._resourceGroup ?? this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string | undefined) {
    this._resourceGroup = value;
  }

  // severity - computed: false, optional: false, required: true
  private _severity: string;
  public get severity() {
    return this._severity;
  }
  public set severity(value: string) {
    this._severity = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // suppression - computed: false, optional: true, required: false
  private _suppression?: MonitoringAlarmSuppression[];
  public get suppression() {
    return this._suppression;
  }
  public set suppression(value: MonitoringAlarmSuppression[] | undefined) {
    this._suppression = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitoringAlarmTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: MonitoringAlarmTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      body: this._body,
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      destinations: this._destinations,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      is_enabled: this._isEnabled,
      metric_compartment_id: this._metricCompartmentId,
      metric_compartment_id_in_subtree: this._metricCompartmentIdInSubtree,
      namespace: this._namespace,
      pending_duration: this._pendingDuration,
      query: this._query,
      repeat_notification_duration: this._repeatNotificationDuration,
      resolution: this._resolution,
      resource_group: this._resourceGroup,
      severity: this._severity,
      suppression: this._suppression,
      timeouts: this._timeouts,
    };
  }
}
