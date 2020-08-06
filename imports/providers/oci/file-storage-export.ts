// https://www.terraform.io/docs/providers/oci/r/file_storage_export.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "export_set_id": {
        "type": "string",
        "required": true
      },
      "file_system_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "path": {
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
      }
    },
    "block_types": {
      "export_options": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "access": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "anonymous_gid": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "anonymous_uid": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "identity_squash": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "require_privileged_source_port": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "source": {
              "type": "string",
              "required": true
            }
          }
        }
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

// Configuration

export interface FileStorageExportConfig extends TerraformMetaArguments {
  readonly exportSetId: string;
  readonly fileSystemId: string;
  readonly path: string;
  /** export_options block */
  readonly exportOptions?: FileStorageExportExportOptions[];
  /** timeouts block */
  readonly timeouts?: FileStorageExportTimeouts;
}
export interface FileStorageExportExportOptions {
  readonly access?: string;
  readonly anonymousGid?: string;
  readonly anonymousUid?: string;
  readonly identitySquash?: string;
  readonly requirePrivilegedSourcePort?: boolean;
  readonly source: string;
}
export interface FileStorageExportTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class FileStorageExport extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: FileStorageExportConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_file_storage_export',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._exportSetId = config.exportSetId;
    this._fileSystemId = config.fileSystemId;
    this._path = config.path;
    this._exportOptions = config.exportOptions;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // export_set_id - computed: false, optional: false, required: true
  private _exportSetId: string;
  public get exportSetId() {
    return this._exportSetId;
  }
  public set exportSetId(value: string) {
    this._exportSetId = value;
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId: string;
  public get fileSystemId() {
    return this._fileSystemId;
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // path - computed: false, optional: false, required: true
  private _path: string;
  public get path() {
    return this._path;
  }
  public set path(value: string) {
    this._path = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // export_options - computed: false, optional: true, required: false
  private _exportOptions?: FileStorageExportExportOptions[];
  public get exportOptions() {
    return this._exportOptions;
  }
  public set exportOptions(value: FileStorageExportExportOptions[] | undefined) {
    this._exportOptions = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FileStorageExportTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: FileStorageExportTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      export_set_id: this._exportSetId,
      file_system_id: this._fileSystemId,
      path: this._path,
      export_options: this._exportOptions,
      timeouts: this._timeouts,
    };
  }
}
