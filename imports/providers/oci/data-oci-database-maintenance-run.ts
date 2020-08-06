// https://www.terraform.io/docs/providers/oci/r/data_oci_database_maintenance_run.html
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
        "computed": true
      },
      "is_enabled": {
        "type": "bool",
        "computed": true
      },
      "is_patch_now_enabled": {
        "type": "bool",
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
        "computed": true
      },
      "time_started": {
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

// Configuration

export interface DataOciDatabaseMaintenanceRunConfig extends TerraformMetaArguments {
  readonly maintenanceRunId: string;
}

// Resource

export class DataOciDatabaseMaintenanceRun extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseMaintenanceRunConfig) {
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
    this._maintenanceRunId = config.maintenanceRunId;
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

  // time_scheduled - computed: true, optional: false, required: true
  public get timeScheduled() {
    return this.getStringAttribute('time_scheduled');
  }

  // time_started - computed: true, optional: false, required: true
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      maintenance_run_id: this._maintenanceRunId,
    };
  }
}
