// https://www.terraform.io/docs/providers/oci/r/data_oci_database_autonomous_data_warehouse.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "admin_password": {
        "type": "string",
        "computed": true,
        "sensitive": true
      },
      "autonomous_data_warehouse_id": {
        "type": "string",
        "required": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
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
        "computed": true
      },
      "data_storage_size_in_tbs": {
        "type": "number",
        "computed": true
      },
      "db_name": {
        "type": "string",
        "computed": true
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
      "license_model": {
        "type": "string",
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

export interface DataOciDatabaseAutonomousDataWarehouseConfig extends TerraformMetaArguments {
  readonly autonomousDataWarehouseId: string;
}
export class DataOciDatabaseAutonomousDataWarehouseConnectionStrings extends ComplexComputedList {

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

// Resource

export class DataOciDatabaseAutonomousDataWarehouse extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousDataWarehouseConfig) {
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
    this._autonomousDataWarehouseId = config.autonomousDataWarehouseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: true, optional: false, required: true
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }

  // autonomous_data_warehouse_id - computed: false, optional: false, required: true
  private _autonomousDataWarehouseId: string;
  public get autonomousDataWarehouseId() {
    return this._autonomousDataWarehouseId;
  }
  public set autonomousDataWarehouseId(value: string) {
    this._autonomousDataWarehouseId = value;
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_strings - computed: true, optional: false, required: true
  public connectionStrings(index: string) {
    return new DataOciDatabaseAutonomousDataWarehouseConnectionStrings(this, 'connection_strings', index);
  }

  // cpu_core_count - computed: true, optional: false, required: true
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }

  // data_storage_size_in_tbs - computed: true, optional: false, required: true
  public get dataStorageSizeInTbs() {
    return this.getNumberAttribute('data_storage_size_in_tbs');
  }

  // db_name - computed: true, optional: false, required: true
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // db_version - computed: true, optional: false, required: true
  public get dbVersion() {
    return this.getStringAttribute('db_version');
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

  // license_model - computed: true, optional: false, required: true
  public get licenseModel() {
    return this.getStringAttribute('license_model');
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_data_warehouse_id: this._autonomousDataWarehouseId,
    };
  }
}
