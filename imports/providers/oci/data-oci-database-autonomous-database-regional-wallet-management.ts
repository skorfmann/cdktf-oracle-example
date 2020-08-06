// https://www.terraform.io/docs/providers/oci/r/data_oci_database_autonomous_database_regional_wallet_management.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
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

export interface DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig extends TerraformMetaArguments {
}

// Resource

export class DataOciDatabaseAutonomousDatabaseRegionalWalletManagement extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousDatabaseRegionalWalletManagementConfig = {}) {
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
    };
  }
}
