// https://www.terraform.io/docs/providers/oci/r/database_autonomous_data_warehouse_backup.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "autonomous_data_warehouse_id": {
        "type": "string",
        "required": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "display_name": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "is_automatic": {
        "type": "bool",
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_ended": {
        "type": "string",
        "computed": true
      },
      "time_started": {
        "type": "string",
        "computed": true
      },
      "type": {
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

export interface DatabaseAutonomousDataWarehouseBackupConfig extends TerraformMetaArguments {
  readonly autonomousDataWarehouseId: string;
  readonly displayName: string;
  /** timeouts block */
  readonly timeouts?: DatabaseAutonomousDataWarehouseBackupTimeouts;
}
export interface DatabaseAutonomousDataWarehouseBackupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DatabaseAutonomousDataWarehouseBackup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatabaseAutonomousDataWarehouseBackupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_data_warehouse_backup',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autonomousDataWarehouseId = config.autonomousDataWarehouseId;
    this._displayName = config.displayName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_data_warehouse_id - computed: false, optional: false, required: true
  private _autonomousDataWarehouseId: string;
  public get autonomousDataWarehouseId() {
    return this._autonomousDataWarehouseId;
  }
  public set autonomousDataWarehouseId(value: string) {
    this._autonomousDataWarehouseId = value;
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
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

  // is_automatic - computed: true, optional: false, required: true
  public get isAutomatic() {
    return this.getBooleanAttribute('is_automatic');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_ended - computed: true, optional: false, required: true
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }

  // time_started - computed: true, optional: false, required: true
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatabaseAutonomousDataWarehouseBackupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatabaseAutonomousDataWarehouseBackupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_data_warehouse_id: this._autonomousDataWarehouseId,
      display_name: this._displayName,
      timeouts: this._timeouts,
    };
  }
}
