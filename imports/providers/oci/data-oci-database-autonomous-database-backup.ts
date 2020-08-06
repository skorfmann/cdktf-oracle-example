// https://www.terraform.io/docs/providers/oci/r/data_oci_database_autonomous_database_backup.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "autonomous_database_backup_id": {
        "type": "string",
        "required": true
      },
      "autonomous_database_id": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "database_size_in_tbs": {
        "type": "number",
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
      "is_automatic": {
        "type": "bool",
        "computed": true
      },
      "is_restorable": {
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
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataOciDatabaseAutonomousDatabaseBackupConfig extends TerraformMetaArguments {
  readonly autonomousDatabaseBackupId: string;
}

// Resource

export class DataOciDatabaseAutonomousDatabaseBackup extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousDatabaseBackupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_database_backup',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autonomousDatabaseBackupId = config.autonomousDatabaseBackupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_database_backup_id - computed: false, optional: false, required: true
  private _autonomousDatabaseBackupId: string;
  public get autonomousDatabaseBackupId() {
    return this._autonomousDatabaseBackupId;
  }
  public set autonomousDatabaseBackupId(value: string) {
    this._autonomousDatabaseBackupId = value;
  }

  // autonomous_database_id - computed: true, optional: false, required: true
  public get autonomousDatabaseId() {
    return this.getStringAttribute('autonomous_database_id');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // database_size_in_tbs - computed: true, optional: false, required: true
  public get databaseSizeInTbs() {
    return this.getNumberAttribute('database_size_in_tbs');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_automatic - computed: true, optional: false, required: true
  public get isAutomatic() {
    return this.getBooleanAttribute('is_automatic');
  }

  // is_restorable - computed: true, optional: false, required: true
  public get isRestorable() {
    return this.getBooleanAttribute('is_restorable');
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_database_backup_id: this._autonomousDatabaseBackupId,
    };
  }
}
