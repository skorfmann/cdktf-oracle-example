// https://www.terraform.io/docs/providers/oci/r/data_oci_database_backup_destinations.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "backup_destinations": {
        "type": [
          "list",
          [
            "object",
            {
              "associated_databases": [
                "list",
                [
                  "object",
                  {
                    "db_name": "string",
                    "id": "string"
                  }
                ]
              ],
              "compartment_id": "string",
              "connection_string": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "lifecycle_details": "string",
              "local_mount_point_path": "string",
              "mount_type_details": [
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
              "nfs_mount_type": "string",
              "nfs_server": [
                "list",
                "string"
              ],
              "nfs_server_export": "string",
              "state": "string",
              "time_created": "string",
              "type": "string",
              "vpc_users": [
                "list",
                "string"
              ]
            }
          ]
        ],
        "computed": true
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
      "type": {
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

export interface DataOciDatabaseBackupDestinationsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly type?: string;
  /** filter block */
  readonly filter?: DataOciDatabaseBackupDestinationsFilter[];
}
export class DataOciDatabaseBackupDestinationsBackupDestinationsAssociatedDatabases extends ComplexComputedList {

  // db_name - computed: true, optional: false, required: true
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }
}
export class DataOciDatabaseBackupDestinationsBackupDestinationsMountTypeDetails extends ComplexComputedList {

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
export class DataOciDatabaseBackupDestinationsBackupDestinations extends ComplexComputedList {

  // associated_databases - computed: true, optional: false, required: true
  public get associatedDatabases() {
    return 'not implemented' as any;
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
  public get definedTags() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
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
  public get mountTypeDetails() {
    return 'not implemented' as any;
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
}
export interface DataOciDatabaseBackupDestinationsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseBackupDestinations extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseBackupDestinationsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_backup_destinations',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._type = config.type;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_destinations - computed: true, optional: false, required: true
  public backupDestinations(index: string) {
    return new DataOciDatabaseBackupDestinationsBackupDestinations(this, 'backup_destinations', index);
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

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this._type;
  }
  public set type(value: string | undefined) {
    this._type = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDatabaseBackupDestinationsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseBackupDestinationsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      type: this._type,
      filter: this._filter,
    };
  }
}
