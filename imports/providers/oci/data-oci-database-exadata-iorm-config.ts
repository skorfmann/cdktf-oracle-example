// https://www.terraform.io/docs/providers/oci/r/data_oci_database_exadata_iorm_config.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "db_plans": {
        "type": [
          "list",
          [
            "object",
            {
              "db_name": "string",
              "flash_cache_limit": "string",
              "share": "number"
            }
          ]
        ],
        "computed": true
      },
      "db_system_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "objective": {
        "type": "string",
        "computed": true
      },
      "state": {
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

// Configuration

export interface DataOciDatabaseExadataIormConfigConfig extends TerraformMetaArguments {
  readonly dbSystemId: string;
}
export class DataOciDatabaseExadataIormConfigDbPlans extends ComplexComputedList {

  // db_name - computed: true, optional: false, required: true
  public get dbName() {
    return this.getStringAttribute('db_name');
  }

  // flash_cache_limit - computed: true, optional: false, required: true
  public get flashCacheLimit() {
    return this.getStringAttribute('flash_cache_limit');
  }

  // share - computed: true, optional: false, required: true
  public get share() {
    return this.getNumberAttribute('share');
  }
}

// Resource

export class DataOciDatabaseExadataIormConfig extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseExadataIormConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_exadata_iorm_config',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dbSystemId = config.dbSystemId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_plans - computed: true, optional: false, required: true
  public dbPlans(index: string) {
    return new DataOciDatabaseExadataIormConfigDbPlans(this, 'db_plans', index);
  }

  // db_system_id - computed: false, optional: false, required: true
  private _dbSystemId: string;
  public get dbSystemId() {
    return this._dbSystemId;
  }
  public set dbSystemId(value: string) {
    this._dbSystemId = value;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // objective - computed: true, optional: false, required: true
  public get objective() {
    return this.getStringAttribute('objective');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      db_system_id: this._dbSystemId,
    };
  }
}
