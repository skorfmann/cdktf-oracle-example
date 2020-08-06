// https://www.terraform.io/docs/providers/oci/r/data_oci_mysql_mysql_versions.html
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
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "versions": {
        "type": [
          "list",
          [
            "object",
            {
              "version_family": "string",
              "versions": [
                "list",
                [
                  "object",
                  {
                    "description": "string",
                    "version": "string"
                  }
                ]
              ]
            }
          ]
        ],
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

export interface DataOciMysqlMysqlVersionsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  /** filter block */
  readonly filter?: DataOciMysqlMysqlVersionsFilter[];
}
export class DataOciMysqlMysqlVersionsVersionsVersions extends ComplexComputedList {

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }
}
export class DataOciMysqlMysqlVersionsVersions extends ComplexComputedList {

  // version_family - computed: true, optional: false, required: true
  public get versionFamily() {
    return this.getStringAttribute('version_family');
  }

  // versions - computed: true, optional: false, required: true
  public get versions() {
    return 'not implemented' as any;
  }
}
export interface DataOciMysqlMysqlVersionsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciMysqlMysqlVersions extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciMysqlMysqlVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_mysql_mysql_versions',
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

  // versions - computed: true, optional: false, required: true
  public versions(index: string) {
    return new DataOciMysqlMysqlVersionsVersions(this, 'versions', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciMysqlMysqlVersionsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciMysqlMysqlVersionsFilter[] | undefined) {
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
