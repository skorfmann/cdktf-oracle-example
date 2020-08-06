// https://www.terraform.io/docs/providers/oci/r/data_oci_database_autonomous_db_preview_versions.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "autonomous_db_preview_versions": {
        "type": [
          "list",
          [
            "object",
            {
              "db_workload": "string",
              "details": "string",
              "time_preview_begin": "string",
              "time_preview_end": "string",
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

export interface DataOciDatabaseAutonomousDbPreviewVersionsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  /** filter block */
  readonly filter?: DataOciDatabaseAutonomousDbPreviewVersionsFilter[];
}
export class DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersions extends ComplexComputedList {

  // db_workload - computed: true, optional: false, required: true
  public get dbWorkload() {
    return this.getStringAttribute('db_workload');
  }

  // details - computed: true, optional: false, required: true
  public get details() {
    return this.getStringAttribute('details');
  }

  // time_preview_begin - computed: true, optional: false, required: true
  public get timePreviewBegin() {
    return this.getStringAttribute('time_preview_begin');
  }

  // time_preview_end - computed: true, optional: false, required: true
  public get timePreviewEnd() {
    return this.getStringAttribute('time_preview_end');
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataOciDatabaseAutonomousDbPreviewVersionsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseAutonomousDbPreviewVersions extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousDbPreviewVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_db_preview_versions',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_db_preview_versions - computed: true, optional: false, required: true
  public autonomousDbPreviewVersions(index: string) {
    return new DataOciDatabaseAutonomousDbPreviewVersionsAutonomousDbPreviewVersions(this, 'autonomous_db_preview_versions', index);
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
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
  private _filter?: DataOciDatabaseAutonomousDbPreviewVersionsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseAutonomousDbPreviewVersionsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      filter: this._filter,
    };
  }
}
