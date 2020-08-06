// https://www.terraform.io/docs/providers/oci/r/database_autonomous_database_regional_wallet_management.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "should_rotate": {
        "type": "bool",
        "optional": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_rotated": {
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

export interface DatabaseAutonomousDatabaseRegionalWalletManagementConfig extends TerraformMetaArguments {
  readonly shouldRotate?: boolean;
  /** timeouts block */
  readonly timeouts?: DatabaseAutonomousDatabaseRegionalWalletManagementTimeouts;
}
export interface DatabaseAutonomousDatabaseRegionalWalletManagementTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DatabaseAutonomousDatabaseRegionalWalletManagement extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatabaseAutonomousDatabaseRegionalWalletManagementConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_database_regional_wallet_management',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._shouldRotate = config.shouldRotate;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // should_rotate - computed: false, optional: true, required: false
  private _shouldRotate?: boolean;
  public get shouldRotate() {
    return this._shouldRotate;
  }
  public set shouldRotate(value: boolean | undefined) {
    this._shouldRotate = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_rotated - computed: true, optional: false, required: true
  public get timeRotated() {
    return this.getStringAttribute('time_rotated');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatabaseAutonomousDatabaseRegionalWalletManagementTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatabaseAutonomousDatabaseRegionalWalletManagementTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      should_rotate: this._shouldRotate,
      timeouts: this._timeouts,
    };
  }
}
