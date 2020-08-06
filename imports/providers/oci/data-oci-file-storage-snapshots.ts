// https://www.terraform.io/docs/providers/oci/r/data_oci_file_storage_snapshots.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "file_system_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true
      },
      "snapshots": {
        "type": [
          "list",
          [
            "object",
            {
              "defined_tags": [
                "map",
                "string"
              ],
              "file_system_id": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "name": "string",
              "state": "string",
              "time_created": "string"
            }
          ]
        ],
        "computed": true
      },
      "state": {
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

export interface DataOciFileStorageSnapshotsConfig extends TerraformMetaArguments {
  readonly fileSystemId: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciFileStorageSnapshotsFilter[];
}
export class DataOciFileStorageSnapshotsSnapshots extends ComplexComputedList {

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // file_system_id - computed: true, optional: false, required: true
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export interface DataOciFileStorageSnapshotsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciFileStorageSnapshots extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciFileStorageSnapshotsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_file_storage_snapshots',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._fileSystemId = config.fileSystemId;
    this._state = config.state;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId: string;
  public get fileSystemId() {
    return this._fileSystemId;
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id;
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // snapshots - computed: true, optional: false, required: true
  public snapshots(index: string) {
    return new DataOciFileStorageSnapshotsSnapshots(this, 'snapshots', index);
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciFileStorageSnapshotsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciFileStorageSnapshotsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      file_system_id: this._fileSystemId,
      state: this._state,
      filter: this._filter,
    };
  }
}
