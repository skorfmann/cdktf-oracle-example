// https://www.terraform.io/docs/providers/oci/r/data_oci_core_compute_global_image_capability_schemas_versions.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compute_global_image_capability_schema_id": {
        "type": "string",
        "required": true
      },
      "compute_global_image_capability_schema_versions": {
        "type": [
          "list",
          [
            "object",
            {
              "compute_global_image_capability_schema_id": "string",
              "display_name": "string",
              "name": "string",
              "schema_data": [
                "map",
                "string"
              ],
              "time_created": "string"
            }
          ]
        ],
        "computed": true
      },
      "display_name": {
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

export interface DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig extends TerraformMetaArguments {
  readonly computeGlobalImageCapabilitySchemaId: string;
  readonly displayName?: string;
  /** filter block */
  readonly filter?: DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter[];
}
export class DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions extends ComplexComputedList {

  // compute_global_image_capability_schema_id - computed: true, optional: false, required: true
  public get computeGlobalImageCapabilitySchemaId() {
    return this.getStringAttribute('compute_global_image_capability_schema_id');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // schema_data - computed: true, optional: false, required: true
  public get schemaData() {
    return 'not implemented' as any;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export interface DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreComputeGlobalImageCapabilitySchemasVersions extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreComputeGlobalImageCapabilitySchemasVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_compute_global_image_capability_schemas_versions',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._computeGlobalImageCapabilitySchemaId = config.computeGlobalImageCapabilitySchemaId;
    this._displayName = config.displayName;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compute_global_image_capability_schema_id - computed: false, optional: false, required: true
  private _computeGlobalImageCapabilitySchemaId: string;
  public get computeGlobalImageCapabilitySchemaId() {
    return this._computeGlobalImageCapabilitySchemaId;
  }
  public set computeGlobalImageCapabilitySchemaId(value: string) {
    this._computeGlobalImageCapabilitySchemaId = value;
  }

  // compute_global_image_capability_schema_versions - computed: true, optional: false, required: true
  public computeGlobalImageCapabilitySchemaVersions(index: string) {
    return new DataOciCoreComputeGlobalImageCapabilitySchemasVersionsComputeGlobalImageCapabilitySchemaVersions(this, 'compute_global_image_capability_schema_versions', index);
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
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
  private _filter?: DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreComputeGlobalImageCapabilitySchemasVersionsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_global_image_capability_schema_id: this._computeGlobalImageCapabilitySchemaId,
      display_name: this._displayName,
      filter: this._filter,
    };
  }
}
