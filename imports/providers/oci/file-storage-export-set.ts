// https://www.terraform.io/docs/providers/oci/r/file_storage_export_set.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "availability_domain": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "display_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "max_fs_stat_bytes": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "max_fs_stat_files": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "mount_target_id": {
        "type": "string",
        "required": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "vcn_id": {
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

export interface FileStorageExportSetConfig extends TerraformMetaArguments {
  readonly displayName?: string;
  readonly maxFsStatBytes?: string;
  readonly maxFsStatFiles?: string;
  readonly mountTargetId: string;
  /** timeouts block */
  readonly timeouts?: FileStorageExportSetTimeouts;
}
export interface FileStorageExportSetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class FileStorageExportSet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: FileStorageExportSetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_file_storage_export_set',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._maxFsStatBytes = config.maxFsStatBytes;
    this._maxFsStatFiles = config.maxFsStatFiles;
    this._mountTargetId = config.mountTargetId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
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

  // max_fs_stat_bytes - computed: true, optional: true, required: false
  private _maxFsStatBytes?: string;
  public get maxFsStatBytes() {
    return this._maxFsStatBytes ?? this.getStringAttribute('max_fs_stat_bytes');
  }
  public set maxFsStatBytes(value: string | undefined) {
    this._maxFsStatBytes = value;
  }

  // max_fs_stat_files - computed: true, optional: true, required: false
  private _maxFsStatFiles?: string;
  public get maxFsStatFiles() {
    return this._maxFsStatFiles ?? this.getStringAttribute('max_fs_stat_files');
  }
  public set maxFsStatFiles(value: string | undefined) {
    this._maxFsStatFiles = value;
  }

  // mount_target_id - computed: false, optional: false, required: true
  private _mountTargetId: string;
  public get mountTargetId() {
    return this._mountTargetId;
  }
  public set mountTargetId(value: string) {
    this._mountTargetId = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // vcn_id - computed: true, optional: false, required: true
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FileStorageExportSetTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: FileStorageExportSetTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: this._displayName,
      max_fs_stat_bytes: this._maxFsStatBytes,
      max_fs_stat_files: this._maxFsStatFiles,
      mount_target_id: this._mountTargetId,
      timeouts: this._timeouts,
    };
  }
}
