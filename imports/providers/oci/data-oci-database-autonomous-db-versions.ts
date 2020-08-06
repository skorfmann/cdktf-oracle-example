// https://www.terraform.io/docs/providers/oci/r/data_oci_database_autonomous_db_versions.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "autonomous_db_versions": {
        "type": [
          "list",
          [
            "object",
            {
              "db_workload": "string",
              "details": "string",
              "is_dedicated": "bool",
              "is_free_tier_enabled": "bool",
              "version": "string"
            }
          ]
        ],
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "db_workload": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
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

export interface DataOciDatabaseAutonomousDbVersionsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly dbWorkload?: string;
  /** filter block */
  readonly filter?: DataOciDatabaseAutonomousDbVersionsFilter[];
}
export class DataOciDatabaseAutonomousDbVersionsAutonomousDbVersions extends ComplexComputedList {

  // db_workload - computed: true, optional: false, required: true
  public get dbWorkload() {
    return this.getStringAttribute('db_workload');
  }

  // details - computed: true, optional: false, required: true
  public get details() {
    return this.getStringAttribute('details');
  }

  // is_dedicated - computed: true, optional: false, required: true
  public get isDedicated() {
    return this.getBooleanAttribute('is_dedicated');
  }

  // is_free_tier_enabled - computed: true, optional: false, required: true
  public get isFreeTierEnabled() {
    return this.getBooleanAttribute('is_free_tier_enabled');
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataOciDatabaseAutonomousDbVersionsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseAutonomousDbVersions extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousDbVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_db_versions',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._dbWorkload = config.dbWorkload;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_db_versions - computed: true, optional: false, required: true
  public autonomousDbVersions(index: string) {
    return new DataOciDatabaseAutonomousDbVersionsAutonomousDbVersions(this, 'autonomous_db_versions', index);
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // db_workload - computed: false, optional: true, required: false
  private _dbWorkload?: string;
  public get dbWorkload() {
    return this._dbWorkload;
  }
  public set dbWorkload(value: string | undefined) {
    this._dbWorkload = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDatabaseAutonomousDbVersionsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseAutonomousDbVersionsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      db_workload: this._dbWorkload,
      filter: this._filter,
    };
  }
}
