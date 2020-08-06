// https://www.terraform.io/docs/providers/oci/r/data_oci_core_compute_image_capability_schemas.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "optional": true
      },
      "compute_image_capability_schemas": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "compute_global_image_capability_schema_id": "string",
              "compute_global_image_capability_schema_version_name": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "image_id": "string",
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
      },
      "image_id": {
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

export interface DataOciCoreComputeImageCapabilitySchemasConfig extends TerraformMetaArguments {
  readonly compartmentId?: string;
  readonly displayName?: string;
  readonly imageId?: string;
  /** filter block */
  readonly filter?: DataOciCoreComputeImageCapabilitySchemasFilter[];
}
export class DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemas extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_global_image_capability_schema_id - computed: true, optional: false, required: true
  public get computeGlobalImageCapabilitySchemaId() {
    return this.getStringAttribute('compute_global_image_capability_schema_id');
  }

  // compute_global_image_capability_schema_version_name - computed: true, optional: false, required: true
  public get computeGlobalImageCapabilitySchemaVersionName() {
    return this.getStringAttribute('compute_global_image_capability_schema_version_name');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: true, optional: false, required: true
  public get imageId() {
    return this.getStringAttribute('image_id');
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
export interface DataOciCoreComputeImageCapabilitySchemasFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreComputeImageCapabilitySchemas extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreComputeImageCapabilitySchemasConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_core_compute_image_capability_schemas',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._imageId = config.imageId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string | undefined) {
    this._compartmentId = value;
  }

  // compute_image_capability_schemas - computed: true, optional: false, required: true
  public computeImageCapabilitySchemas(index: string) {
    return new DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemas(this, 'compute_image_capability_schemas', index);
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

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string;
  public get imageId() {
    return this._imageId;
  }
  public set imageId(value: string | undefined) {
    this._imageId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreComputeImageCapabilitySchemasFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreComputeImageCapabilitySchemasFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      image_id: this._imageId,
      filter: this._filter,
    };
  }
}
