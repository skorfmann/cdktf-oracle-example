// https://www.terraform.io/docs/providers/oci/r/database_maintenance_run.html
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
      "description": {
        "type": "string",
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "is_enabled": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "is_patch_now_enabled": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "maintenance_run_id": {
        "type": "string",
        "required": true
      },
      "maintenance_subtype": {
        "type": "string",
        "computed": true
      },
      "maintenance_type": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "target_resource_id": {
        "type": "string",
        "computed": true
      },
      "target_resource_type": {
        "type": "string",
        "computed": true
      },
      "time_ended": {
        "type": "string",
        "computed": true
      },
      "time_scheduled": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "time_started": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
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

export interface DatabaseMaintenanceRunConfig extends TerraformMetaArguments {
  readonly isEnabled?: boolean;
  readonly isPatchNowEnabled?: boolean;
  readonly maintenanceRunId: string;
  readonly timeScheduled?: string;
  /** timeouts block */
  readonly timeouts?: DatabaseMaintenanceRunTimeouts;
}
export interface DatabaseMaintenanceRunTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DatabaseMaintenanceRun extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatabaseMaintenanceRunConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_maintenance_run',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._isEnabled = config.isEnabled;
    this._isPatchNowEnabled = config.isPatchNowEnabled;
    this._maintenanceRunId = config.maintenanceRunId;
    this._timeScheduled = config.timeScheduled;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean;
  public get isEnabled() {
    return this._isEnabled ?? this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | undefined) {
    this._isEnabled = value;
  }

  // is_patch_now_enabled - computed: true, optional: true, required: false
  private _isPatchNowEnabled?: boolean;
  public get isPatchNowEnabled() {
    return this._isPatchNowEnabled ?? this.getBooleanAttribute('is_patch_now_enabled');
  }
  public set isPatchNowEnabled(value: boolean | undefined) {
    this._isPatchNowEnabled = value;
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // maintenance_run_id - computed: false, optional: false, required: true
  private _maintenanceRunId: string;
  public get maintenanceRunId() {
    return this._maintenanceRunId;
  }
  public set maintenanceRunId(value: string) {
    this._maintenanceRunId = value;
  }

  // maintenance_subtype - computed: true, optional: false, required: true
  public get maintenanceSubtype() {
    return this.getStringAttribute('maintenance_subtype');
  }

  // maintenance_type - computed: true, optional: false, required: true
  public get maintenanceType() {
    return this.getStringAttribute('maintenance_type');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // target_resource_id - computed: true, optional: false, required: true
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }

  // target_resource_type - computed: true, optional: false, required: true
  public get targetResourceType() {
    return this.getStringAttribute('target_resource_type');
  }

  // time_ended - computed: true, optional: false, required: true
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }

  // time_scheduled - computed: true, optional: true, required: false
  private _timeScheduled?: string;
  public get timeScheduled() {
    return this._timeScheduled ?? this.getStringAttribute('time_scheduled');
  }
  public set timeScheduled(value: string | undefined) {
    this._timeScheduled = value;
  }

  // time_started - computed: true, optional: false, required: true
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatabaseMaintenanceRunTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatabaseMaintenanceRunTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      is_enabled: this._isEnabled,
      is_patch_now_enabled: this._isPatchNowEnabled,
      maintenance_run_id: this._maintenanceRunId,
      time_scheduled: this._timeScheduled,
      timeouts: this._timeouts,
    };
  }
}
