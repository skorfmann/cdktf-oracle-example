// https://www.terraform.io/docs/providers/oci/r/data_oci_file_storage_exports.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "optional": true
      },
      "export_set_id": {
        "type": "string",
        "optional": true
      },
      "exports": {
        "type": [
          "list",
          [
            "object",
            {
              "export_options": [
                "list",
                [
                  "object",
                  {
                    "access": "string",
                    "anonymous_gid": "string",
                    "anonymous_uid": "string",
                    "identity_squash": "string",
                    "require_privileged_source_port": "bool",
                    "source": "string"
                  }
                ]
              ],
              "export_set_id": "string",
              "file_system_id": "string",
              "id": "string",
              "path": "string",
              "state": "string",
              "time_created": "string"
            }
          ]
        ],
        "computed": true
      },
      "file_system_id": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true
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

export interface DataOciFileStorageExportsConfig extends TerraformMetaArguments {
  readonly compartmentId?: string;
  readonly exportSetId?: string;
  readonly fileSystemId?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciFileStorageExportsFilter[];
}
export class DataOciFileStorageExportsExportsExportOptions extends ComplexComputedList {

  // access - computed: true, optional: false, required: true
  public get access() {
    return this.getStringAttribute('access');
  }

  // anonymous_gid - computed: true, optional: false, required: true
  public get anonymousGid() {
    return this.getStringAttribute('anonymous_gid');
  }

  // anonymous_uid - computed: true, optional: false, required: true
  public get anonymousUid() {
    return this.getStringAttribute('anonymous_uid');
  }

  // identity_squash - computed: true, optional: false, required: true
  public get identitySquash() {
    return this.getStringAttribute('identity_squash');
  }

  // require_privileged_source_port - computed: true, optional: false, required: true
  public get requirePrivilegedSourcePort() {
    return this.getBooleanAttribute('require_privileged_source_port');
  }

  // source - computed: true, optional: false, required: true
  public get source() {
    return this.getStringAttribute('source');
  }
}
export class DataOciFileStorageExportsExports extends ComplexComputedList {

  // export_options - computed: true, optional: false, required: true
  public get exportOptions() {
    return 'not implemented' as any;
  }

  // export_set_id - computed: true, optional: false, required: true
  public get exportSetId() {
    return this.getStringAttribute('export_set_id');
  }

  // file_system_id - computed: true, optional: false, required: true
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
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
export interface DataOciFileStorageExportsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciFileStorageExports extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciFileStorageExportsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_file_storage_exports',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._exportSetId = config.exportSetId;
    this._fileSystemId = config.fileSystemId;
    this._state = config.state;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string | undefined) {
    this._compartmentId = value;
  }

  // export_set_id - computed: false, optional: true, required: false
  private _exportSetId?: string;
  public get exportSetId() {
    return this._exportSetId;
  }
  public set exportSetId(value: string | undefined) {
    this._exportSetId = value;
  }

  // exports - computed: true, optional: false, required: true
  public exports(index: string) {
    return new DataOciFileStorageExportsExports(this, 'exports', index);
  }

  // file_system_id - computed: false, optional: true, required: false
  private _fileSystemId?: string;
  public get fileSystemId() {
    return this._fileSystemId;
  }
  public set fileSystemId(value: string | undefined) {
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

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciFileStorageExportsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciFileStorageExportsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      export_set_id: this._exportSetId,
      file_system_id: this._fileSystemId,
      state: this._state,
      filter: this._filter,
    };
  }
}
