// https://www.terraform.io/docs/providers/oci/r/core_compute_image_capability_schema.html
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
      "compute_global_image_capability_schema_id": {
        "type": "string",
        "computed": true
      },
      "compute_global_image_capability_schema_version_name": {
        "type": "string",
        "required": true
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
      "image_id": {
        "type": "string",
        "required": true
      },
      "schema_data": {
        "type": [
          "map",
          "string"
        ],
        "required": true
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

// Configuration

export interface CoreComputeImageCapabilitySchemaConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly computeGlobalImageCapabilitySchemaVersionName: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly imageId: string;
  readonly schemaData: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: CoreComputeImageCapabilitySchemaTimeouts;
}
export interface CoreComputeImageCapabilitySchemaTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreComputeImageCapabilitySchema extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreComputeImageCapabilitySchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_compute_image_capability_schema',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._computeGlobalImageCapabilitySchemaVersionName = config.computeGlobalImageCapabilitySchemaVersionName;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._imageId = config.imageId;
    this._schemaData = config.schemaData;
    this._timeouts = config.timeouts;
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

  // compute_global_image_capability_schema_id - computed: true, optional: false, required: true
  public get computeGlobalImageCapabilitySchemaId() {
    return this.getStringAttribute('compute_global_image_capability_schema_id');
  }

  // compute_global_image_capability_schema_version_name - computed: false, optional: false, required: true
  private _computeGlobalImageCapabilitySchemaVersionName: string;
  public get computeGlobalImageCapabilitySchemaVersionName() {
    return this._computeGlobalImageCapabilitySchemaVersionName;
  }
  public set computeGlobalImageCapabilitySchemaVersionName(value: string) {
    this._computeGlobalImageCapabilitySchemaVersionName = value;
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

  // image_id - computed: false, optional: false, required: true
  private _imageId: string;
  public get imageId() {
    return this._imageId;
  }
  public set imageId(value: string) {
    this._imageId = value;
  }

  // schema_data - computed: false, optional: false, required: true
  private _schemaData: { [key: string]: string };
  public get schemaData() {
    return this._schemaData;
  }
  public set schemaData(value: { [key: string]: string }) {
    this._schemaData = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreComputeImageCapabilitySchemaTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreComputeImageCapabilitySchemaTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      compute_global_image_capability_schema_version_name: this._computeGlobalImageCapabilitySchemaVersionName,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      image_id: this._imageId,
      schema_data: this._schemaData,
      timeouts: this._timeouts,
    };
  }
}
