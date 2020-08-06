// https://www.terraform.io/docs/providers/oci/r/data_oci_core_compute_global_image_capability_schemas_version.html
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
      "compute_global_image_capability_schema_version_name": {
        "type": "string",
        "required": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "computed": true
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

export interface DataOciCoreComputeGlobalImageCapabilitySchemasVersionConfig extends TerraformMetaArguments {
  readonly computeGlobalImageCapabilitySchemaId: string;
  readonly computeGlobalImageCapabilitySchemaVersionName: string;
}

// Resource

export class DataOciCoreComputeGlobalImageCapabilitySchemasVersion extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreComputeGlobalImageCapabilitySchemasVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_compute_global_image_capability_schemas_version',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._computeGlobalImageCapabilitySchemaId = config.computeGlobalImageCapabilitySchemaId;
    this._computeGlobalImageCapabilitySchemaVersionName = config.computeGlobalImageCapabilitySchemaVersionName;
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

  // compute_global_image_capability_schema_version_name - computed: false, optional: false, required: true
  private _computeGlobalImageCapabilitySchemaVersionName: string;
  public get computeGlobalImageCapabilitySchemaVersionName() {
    return this._computeGlobalImageCapabilitySchemaVersionName;
  }
  public set computeGlobalImageCapabilitySchemaVersionName(value: string) {
    this._computeGlobalImageCapabilitySchemaVersionName = value;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
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
      compute_global_image_capability_schema_id: this._computeGlobalImageCapabilitySchemaId,
      compute_global_image_capability_schema_version_name: this._computeGlobalImageCapabilitySchemaVersionName,
    };
  }
}
