// https://www.terraform.io/docs/providers/oci/r/data_oci_database_db_versions.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "db_system_id": {
        "type": "string",
        "optional": true
      },
      "db_system_shape": {
        "type": "string",
        "optional": true
      },
      "db_versions": {
        "type": [
          "list",
          [
            "object",
            {
              "is_latest_for_major_version": "bool",
              "is_preview_db_version": "bool",
              "supports_pdb": "bool",
              "version": "string"
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "storage_management": {
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

export interface DataOciDatabaseDbVersionsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly dbSystemId?: string;
  readonly dbSystemShape?: string;
  readonly storageManagement?: string;
  /** filter block */
  readonly filter?: DataOciDatabaseDbVersionsFilter[];
}
export class DataOciDatabaseDbVersionsDbVersions extends ComplexComputedList {

  // is_latest_for_major_version - computed: true, optional: false, required: true
  public get isLatestForMajorVersion() {
    return this.getBooleanAttribute('is_latest_for_major_version');
  }

  // is_preview_db_version - computed: true, optional: false, required: true
  public get isPreviewDbVersion() {
    return this.getBooleanAttribute('is_preview_db_version');
  }

  // supports_pdb - computed: true, optional: false, required: true
  public get supportsPdb() {
    return this.getBooleanAttribute('supports_pdb');
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataOciDatabaseDbVersionsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseDbVersions extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseDbVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_db_versions',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._dbSystemId = config.dbSystemId;
    this._dbSystemShape = config.dbSystemShape;
    this._storageManagement = config.storageManagement;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // db_system_id - computed: false, optional: true, required: false
  private _dbSystemId?: string;
  public get dbSystemId() {
    return this._dbSystemId;
  }
  public set dbSystemId(value: string | undefined) {
    this._dbSystemId = value;
  }

  // db_system_shape - computed: false, optional: true, required: false
  private _dbSystemShape?: string;
  public get dbSystemShape() {
    return this._dbSystemShape;
  }
  public set dbSystemShape(value: string | undefined) {
    this._dbSystemShape = value;
  }

  // db_versions - computed: true, optional: false, required: true
  public dbVersions(index: string) {
    return new DataOciDatabaseDbVersionsDbVersions(this, 'db_versions', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // storage_management - computed: false, optional: true, required: false
  private _storageManagement?: string;
  public get storageManagement() {
    return this._storageManagement;
  }
  public set storageManagement(value: string | undefined) {
    this._storageManagement = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDatabaseDbVersionsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseDbVersionsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      db_system_id: this._dbSystemId,
      db_system_shape: this._dbSystemShape,
      storage_management: this._storageManagement,
      filter: this._filter,
    };
  }
}
