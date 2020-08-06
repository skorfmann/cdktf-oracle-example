// https://www.terraform.io/docs/providers/oci/r/database_backup_destination.html
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
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "connection_string": {
        "type": "string",
        "optional": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "required": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "local_mount_point_path": {
        "type": "string",
        "optional": true,
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
        "required": true
      },
      "vpc_users": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "mount_type_details": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "local_mount_point_path": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "mount_type": {
              "type": "string",
              "required": true
            },
            "nfs_server": {
              "type": [
                "list",
                "string"
              ],
              "optional": true,
              "computed": true
            },
            "nfs_server_export": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        },
        "max_items": 1
      },
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DatabaseBackupDestinationConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly connectionString?: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName: string;
  readonly freeformTags?: { [key: string]: string };
  readonly localMountPointPath?: string;
  readonly type: string;
  readonly vpcUsers?: string[];
  /** mount_type_details block */
  readonly mountTypeDetails?: DatabaseBackupDestinationMountTypeDetails[];
  /** timeouts block */
  readonly timeouts?: DatabaseBackupDestinationTimeouts;
}
export class DatabaseBackupDestinationAssociatedDatabases extends ComplexComputedList {

  // db_name - computed: true, optional: false, required: true
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DatabaseBackupDestinationMountTypeDetails {
  readonly localMountPointPath?: string;
  readonly mountType: string;
  readonly nfsServer?: string[];
  readonly nfsServerExport?: string;
}
export interface DatabaseBackupDestinationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DatabaseBackupDestination extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatabaseBackupDestinationConfig) {
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
    this._compartmentId = config.compartmentId;
    this._connectionString = config.connectionString;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._localMountPointPath = config.localMountPointPath;
    this._type = config.type;
    this._vpcUsers = config.vpcUsers;
    this._mountTypeDetails = config.mountTypeDetails;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_databases - computed: true, optional: false, required: true
  public associatedDatabases(index: string) {
    return new DatabaseBackupDestinationAssociatedDatabases(this, 'associated_databases', index);
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // connection_string - computed: false, optional: true, required: false
  private _connectionString?: string;
  public get connectionString() {
    return this._connectionString;
  }
  public set connectionString(value: string | undefined) {
    this._connectionString = value;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // local_mount_point_path - computed: true, optional: true, required: false
  private _localMountPointPath?: string;
  public get localMountPointPath() {
    return this._localMountPointPath ?? this.getStringAttribute('local_mount_point_path');
  }
  public set localMountPointPath(value: string | undefined) {
    this._localMountPointPath = value;
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

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // vpc_users - computed: false, optional: true, required: false
  private _vpcUsers?: string[];
  public get vpcUsers() {
    return this._vpcUsers;
  }
  public set vpcUsers(value: string[] | undefined) {
    this._vpcUsers = value;
  }

  // mount_type_details - computed: false, optional: true, required: false
  private _mountTypeDetails?: DatabaseBackupDestinationMountTypeDetails[];
  public get mountTypeDetails() {
    return this._mountTypeDetails;
  }
  public set mountTypeDetails(value: DatabaseBackupDestinationMountTypeDetails[] | undefined) {
    this._mountTypeDetails = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatabaseBackupDestinationTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatabaseBackupDestinationTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      connection_string: this._connectionString,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      local_mount_point_path: this._localMountPointPath,
      type: this._type,
      vpc_users: this._vpcUsers,
      mount_type_details: this._mountTypeDetails,
      timeouts: this._timeouts,
    };
  }
}
