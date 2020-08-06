// https://www.terraform.io/docs/providers/oci/r/database_autonomous_data_warehouse.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "admin_password": {
        "type": "string",
        "required": true,
        "sensitive": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "connection_strings": {
        "type": [
          "list",
          [
            "object",
            {
              "all_connection_strings": [
                "map",
                "string"
              ],
              "high": "string",
              "low": "string",
              "medium": "string"
            }
          ]
        ],
        "computed": true
      },
      "cpu_core_count": {
        "type": "number",
        "required": true
      },
      "data_storage_size_in_tbs": {
        "type": "number",
        "required": true
      },
      "db_name": {
        "type": "string",
        "required": true
      },
      "db_version": {
        "type": "string",
        "computed": true
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
        "optional": true,
        "computed": true
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
      "license_model": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "service_console_url": {
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DatabaseAutonomousDataWarehouseConfig extends TerraformMetaArguments {
  readonly adminPassword: string;
  readonly compartmentId: string;
  readonly cpuCoreCount: number;
  readonly dataStorageSizeInTbs: number;
  readonly dbName: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly licenseModel?: string;
  /** timeouts block */
  readonly timeouts?: DatabaseAutonomousDataWarehouseTimeouts;
}
export class DatabaseAutonomousDataWarehouseConnectionStrings extends ComplexComputedList {

  // all_connection_strings - computed: true, optional: false, required: true
  public get allConnectionStrings() {
    return 'not implemented' as any;
  }

  // high - computed: true, optional: false, required: true
  public get high() {
    return this.getStringAttribute('high');
  }

  // low - computed: true, optional: false, required: true
  public get low() {
    return this.getStringAttribute('low');
  }

  // medium - computed: true, optional: false, required: true
  public get medium() {
    return this.getStringAttribute('medium');
  }
}
export interface DatabaseAutonomousDataWarehouseTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DatabaseAutonomousDataWarehouse extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatabaseAutonomousDataWarehouseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_data_warehouse',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminPassword = config.adminPassword;
    this._compartmentId = config.compartmentId;
    this._cpuCoreCount = config.cpuCoreCount;
    this._dataStorageSizeInTbs = config.dataStorageSizeInTbs;
    this._dbName = config.dbName;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._licenseModel = config.licenseModel;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword: string;
  public get adminPassword() {
    return this._adminPassword;
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // connection_strings - computed: true, optional: false, required: true
  public connectionStrings(index: string) {
    return new DatabaseAutonomousDataWarehouseConnectionStrings(this, 'connection_strings', index);
  }

  // cpu_core_count - computed: false, optional: false, required: true
  private _cpuCoreCount: number;
  public get cpuCoreCount() {
    return this._cpuCoreCount;
  }
  public set cpuCoreCount(value: number) {
    this._cpuCoreCount = value;
  }

  // data_storage_size_in_tbs - computed: false, optional: false, required: true
  private _dataStorageSizeInTbs: number;
  public get dataStorageSizeInTbs() {
    return this._dataStorageSizeInTbs;
  }
  public set dataStorageSizeInTbs(value: number) {
    this._dataStorageSizeInTbs = value;
  }

  // db_name - computed: false, optional: false, required: true
  private _dbName: string;
  public get dbName() {
    return this._dbName;
  }
  public set dbName(value: string) {
    this._dbName = value;
  }

  // db_version - computed: true, optional: false, required: true
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
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

  // license_model - computed: true, optional: true, required: false
  private _licenseModel?: string;
  public get licenseModel() {
    return this._licenseModel ?? this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string | undefined) {
    this._licenseModel = value;
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // service_console_url - computed: true, optional: false, required: true
  public get serviceConsoleUrl() {
    return this.getStringAttribute('service_console_url');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatabaseAutonomousDataWarehouseTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatabaseAutonomousDataWarehouseTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_password: this._adminPassword,
      compartment_id: this._compartmentId,
      cpu_core_count: this._cpuCoreCount,
      data_storage_size_in_tbs: this._dataStorageSizeInTbs,
      db_name: this._dbName,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      license_model: this._licenseModel,
      timeouts: this._timeouts,
    };
  }
}
