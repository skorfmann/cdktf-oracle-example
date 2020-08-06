// https://www.terraform.io/docs/providers/oci/r/data_oci_core_compute_image_capability_schema.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "compute_global_image_capability_schema_id": {
        "type": "string",
        "computed": true
      },
      "compute_global_image_capability_schema_version_name": {
        "type": "string",
        "computed": true
      },
      "compute_image_capability_schema_id": {
        "type": "string",
        "required": true
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
      "image_id": {
        "type": "string",
        "computed": true
      },
      "is_merge_enabled": {
        "type": "string",
        "optional": true
      },
      "schema_data": {
        "type": [
          "map",
          "string"
        ],
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
import { StringMap } from "cdktf";

// Configuration

export interface DataOciCoreComputeImageCapabilitySchemaConfig extends TerraformMetaArguments {
  readonly computeImageCapabilitySchemaId: string;
  readonly isMergeEnabled?: string;
}

// Resource

export class DataOciCoreComputeImageCapabilitySchema extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreComputeImageCapabilitySchemaConfig) {
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
    this._computeImageCapabilitySchemaId = config.computeImageCapabilitySchemaId;
    this._isMergeEnabled = config.isMergeEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // compute_image_capability_schema_id - computed: false, optional: false, required: true
  private _computeImageCapabilitySchemaId: string;
  public get computeImageCapabilitySchemaId() {
    return this._computeImageCapabilitySchemaId;
  }
  public set computeImageCapabilitySchemaId(value: string) {
    this._computeImageCapabilitySchemaId = value;
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

  // image_id - computed: true, optional: false, required: true
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // is_merge_enabled - computed: false, optional: true, required: false
  private _isMergeEnabled?: string;
  public get isMergeEnabled() {
    return this._isMergeEnabled;
  }
  public set isMergeEnabled(value: string | undefined) {
    this._isMergeEnabled = value;
  }

  // schema_data - computed: true, optional: false, required: true
  public schemaData(key: string): string {
    return new StringMap(this, 'schema_data').lookup(key);
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
      compute_image_capability_schema_id: this._computeImageCapabilitySchemaId,
      is_merge_enabled: this._isMergeEnabled,
    };
  }
}
