// https://www.terraform.io/docs/providers/oci/r/data_oci_database_gi_versions.html
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
      "gi_versions": {
        "type": [
          "list",
          [
            "object",
            {
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
      "shape": {
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

export interface DataOciDatabaseGiVersionsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly shape?: string;
  /** filter block */
  readonly filter?: DataOciDatabaseGiVersionsFilter[];
}
export class DataOciDatabaseGiVersionsGiVersions extends ComplexComputedList {

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataOciDatabaseGiVersionsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDatabaseGiVersions extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDatabaseGiVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_gi_versions',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._shape = config.shape;
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

  // gi_versions - computed: true, optional: false, required: true
  public giVersions(index: string) {
    return new DataOciDatabaseGiVersionsGiVersions(this, 'gi_versions', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // shape - computed: false, optional: true, required: false
  private _shape?: string;
  public get shape() {
    return this._shape;
  }
  public set shape(value: string | undefined) {
    this._shape = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDatabaseGiVersionsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDatabaseGiVersionsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      shape: this._shape,
      filter: this._filter,
    };
  }
}
