// https://www.terraform.io/docs/providers/oci/r/data_oci_database_backup_destination.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "associated_databases": {
        "type": [
          "list",
          [
            "object",
            {
              "db_name": "string",
              "id": "string"
            }
          ]
        ],
        "computed": true
      },
      "backup_destination_id": {
        "type": "string",
        "required": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "connection_string": {
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
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "local_mount_point_path": {
        "type": "string",
        "computed": true
      },
      "mount_type_details": {
        "type": [
          "list",
          [
            "object",
            {
              "local_mount_point_path": "string",
              "mount_type": "string",
              "nfs_server": [
                "list",
                "string"
              ],
              "nfs_server_export": "string"
            }
          ]
        ],
        "computed": true
      },
      "nfs_mount_type": {
        "type": "string",
        "computed": true
      },
      "nfs_server": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "nfs_server_export": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "type": {
        "type": "string",
        "computed": true
      },
      "vpc_users": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataOciDatabaseBackupDestinationConfig extends TerraformMetaArguments {
  readonly backupDestinationId: string;
}
export class DataOciDatabaseBackupDestinationAssociatedDatabases extends ComplexComputedList {

  // db_name - computed: true, optional: false, required: true
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }
}
export class DataOciDatabaseBackupDestinationMountTypeDetails extends ComplexComputedList {

  // local_mount_point_path - computed: true, optional: false, required: true
  public get localMountPointPath() {
    return this.getStringAttribute('local_mount_point_path');
  }

  // mount_type - computed: true, optional: false, required: true
  public get mountType() {
    return this.getStringAttribute('mount_type');
  }

  // nfs_server - computed: true, optional: false, required: true
  public get nfsServer() {
    return this.getListAttribute('nfs_server');
  }

  // nfs_server_export - computed: true, optional: false, required: true
  public get nfsServerExport() {
    return this.getStringAttribute('nfs_server_export');
  }
}

// Resource

export class DataOciDatabaseBackupDestination extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseBackupDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_backup_destination',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backupDestinationId = config.backupDestinationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_databases - computed: true, optional: false, required: true
  public associatedDatabases(index: string) {
    return new DataOciDatabaseBackupDestinationAssociatedDatabases(this, 'associated_databases', index);
  }

  // backup_destination_id - computed: false, optional: false, required: true
  private _backupDestinationId: string;
  public get backupDestinationId() {
    return this._backupDestinationId;
  }
  public set backupDestinationId(value: string) {
    this._backupDestinationId = value;
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_string - computed: true, optional: false, required: true
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
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

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // local_mount_point_path - computed: true, optional: false, required: true
  public get localMountPointPath() {
    return this.getStringAttribute('local_mount_point_path');
  }

  // mount_type_details - computed: true, optional: false, required: true
  public mountTypeDetails(index: string) {
    return new DataOciDatabaseBackupDestinationMountTypeDetails(this, 'mount_type_details', index);
  }

  // nfs_mount_type - computed: true, optional: false, required: true
  public get nfsMountType() {
    return this.getStringAttribute('nfs_mount_type');
  }

  // nfs_server - computed: true, optional: false, required: true
  public get nfsServer() {
    return this.getListAttribute('nfs_server');
  }

  // nfs_server_export - computed: true, optional: false, required: true
  public get nfsServerExport() {
    return this.getStringAttribute('nfs_server_export');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // vpc_users - computed: true, optional: false, required: true
  public get vpcUsers() {
    return this.getListAttribute('vpc_users');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_destination_id: this._backupDestinationId,
    };
  }
}
