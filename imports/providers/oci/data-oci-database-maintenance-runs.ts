// https://www.terraform.io/docs/providers/oci/r/data_oci_database_maintenance_runs.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "availability_domain": {
        "type": "string",
        "optional": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "maintenance_runs": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "description": "string",
              "display_name": "string",
              "id": "string",
              "is_enabled": "bool",
              "is_patch_now_enabled": "bool",
              "lifecycle_details": "string",
              "maintenance_run_id": "string",
              "maintenance_subtype": "string",
              "maintenance_type": "string",
              "state": "string",
              "target_resource_id": "string",
              "target_resource_type": "string",
              "time_ended": "string",
              "time_scheduled": "string",
              "time_started": "string"
            }
          ]
        ],
        "computed": true
      },
      "maintenance_type": {
        "type": "string",
        "optional": true
      },
      "state": {
        "type": "string",
        "optional": true
      },
      "target_resource_id": {
        "type": "string",
        "optional": true
      },
      "target_resource_type": {
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

export interface DataOciDatabaseMaintenanceRunsConfig extends TerraformMetaArguments {
  readonly availabilityDomain?: string;
  readonly compartmentId: string;
  readonly maintenanceType?: string;
  readonly state?: string;
  readonly targetResourceId?: string;
  readonly targetResourceType?: string;
  /** filter block */
  readonly filter?: DataOciDatabaseMaintenanceRunsFilter[];
}
export class DataOciDatabaseMaintenanceRunsMaintenanceRuns extends ComplexComputedList {

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

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_enabled - computed: true, optional: false, required: true
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // is_patch_now_enabled - computed: true, optional: false, required: true
  public get isPatchNowEnabled() {
    return this.getBooleanAttribute('is_patch_now_enabled');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // maintenance_run_id - computed: true, optional: false, required: true
  public get maintenanceRunId() {
    return this.getStringAttribute('maintenance_run_id');
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

  // time_scheduled - computed: true, optional: false, required: true
  public get timeScheduled() {
    return this.getStringAttribute('time_scheduled');
  }

  // time_started - computed: true, optional: false, required: true
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }
}
export interface DataOciDatabaseMaintenanceRunsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseMaintenanceRuns extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseMaintenanceRunsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_maintenance_runs',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._maintenanceType = config.maintenanceType;
    this._state = config.state;
    this._targetResourceId = config.targetResourceId;
    this._targetResourceType = config.targetResourceType;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: true, required: false
  private _availabilityDomain?: string;
  public get availabilityDomain() {
    return this._availabilityDomain;
  }
  public set availabilityDomain(value: string | undefined) {
    this._availabilityDomain = value;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // maintenance_runs - computed: true, optional: false, required: true
  public maintenanceRuns(index: string) {
    return new DataOciDatabaseMaintenanceRunsMaintenanceRuns(this, 'maintenance_runs', index);
  }

  // maintenance_type - computed: false, optional: true, required: false
  private _maintenanceType?: string;
  public get maintenanceType() {
    return this._maintenanceType;
  }
  public set maintenanceType(value: string | undefined) {
    this._maintenanceType = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // target_resource_id - computed: false, optional: true, required: false
  private _targetResourceId?: string;
  public get targetResourceId() {
    return this._targetResourceId;
  }
  public set targetResourceId(value: string | undefined) {
    this._targetResourceId = value;
  }

  // target_resource_type - computed: false, optional: true, required: false
  private _targetResourceType?: string;
  public get targetResourceType() {
    return this._targetResourceType;
  }
  public set targetResourceType(value: string | undefined) {
    this._targetResourceType = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDatabaseMaintenanceRunsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseMaintenanceRunsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: this._availabilityDomain,
      compartment_id: this._compartmentId,
      maintenance_type: this._maintenanceType,
      state: this._state,
      target_resource_id: this._targetResourceId,
      target_resource_type: this._targetResourceType,
      filter: this._filter,
    };
  }
}
