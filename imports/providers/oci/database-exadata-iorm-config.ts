// https://www.terraform.io/docs/providers/oci/r/database_exadata_iorm_config.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "db_system_id": {
        "type": "string",
        "required": true
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
      "objective": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "db_plans": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "db_name": {
              "type": "string",
              "required": true
            },
            "flash_cache_limit": {
              "type": "string",
              "computed": true
            },
            "share": {
              "type": "number",
              "required": true
            }
          }
        },
        "min_items": 1
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

export interface DatabaseExadataIormConfigConfig extends TerraformMetaArguments {
  readonly dbSystemId: string;
  readonly objective?: string;
  /** db_plans block */
  readonly dbPlans: DatabaseExadataIormConfigDbPlans[];
  /** timeouts block */
  readonly timeouts?: DatabaseExadataIormConfigTimeouts;
}
export interface DatabaseExadataIormConfigDbPlans {
  readonly dbName: string;
  readonly share: number;
}
export interface DatabaseExadataIormConfigTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DatabaseExadataIormConfig extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatabaseExadataIormConfigConfig) {
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
    this._objective = config.objective;
    this._dbPlans = config.dbPlans;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_system_id - computed: false, optional: false, required: true
  private _dbSystemId: string;
  public get dbSystemId() {
    return this._dbSystemId;
  }
  public set dbSystemId(value: string) {
    this._dbSystemId = value;
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

  // objective - computed: true, optional: true, required: false
  private _objective?: string;
  public get objective() {
    return this._objective ?? this.getStringAttribute('objective');
  }
  public set objective(value: string | undefined) {
    this._objective = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // db_plans - computed: false, optional: false, required: true
  private _dbPlans: DatabaseExadataIormConfigDbPlans[];
  public get dbPlans() {
    return this._dbPlans;
  }
  public set dbPlans(value: DatabaseExadataIormConfigDbPlans[]) {
    this._dbPlans = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatabaseExadataIormConfigTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatabaseExadataIormConfigTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      db_system_id: this._dbSystemId,
      objective: this._objective,
      db_plans: this._dbPlans,
      timeouts: this._timeouts,
    };
  }
}
