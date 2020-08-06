// https://www.terraform.io/docs/providers/oci/r/data_oci_database_autonomous_database_instance_wallet_management.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "autonomous_database_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "should_rotate": {
        "type": "bool",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_rotated": {
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

export interface DataOciDatabaseAutonomousDatabaseInstanceWalletManagementConfig extends TerraformMetaArguments {
  readonly autonomousDatabaseId: string;
}

// Resource

export class DataOciDatabaseAutonomousDatabaseInstanceWalletManagement extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousDatabaseInstanceWalletManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_database_instance_wallet_management',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autonomousDatabaseId = config.autonomousDatabaseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_database_id - computed: false, optional: false, required: true
  private _autonomousDatabaseId: string;
  public get autonomousDatabaseId() {
    return this._autonomousDatabaseId;
  }
  public set autonomousDatabaseId(value: string) {
    this._autonomousDatabaseId = value;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // should_rotate - computed: true, optional: false, required: true
  public get shouldRotate() {
    return this.getBooleanAttribute('should_rotate');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_rotated - computed: true, optional: false, required: true
  public get timeRotated() {
    return this.getStringAttribute('time_rotated');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_database_id: this._autonomousDatabaseId,
    };
  }
}
