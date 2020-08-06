// https://www.terraform.io/docs/providers/oci/r/data_oci_core_image_shape.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "image_id": {
        "type": "string",
        "required": true
      },
      "ocpu_constraints": {
        "type": [
          "list",
          [
            "object",
            {
              "max": "number",
              "min": "number"
            }
          ]
        ],
        "computed": true
      },
      "shape": {
        "type": "string",
        "computed": true
      },
      "shape_name": {
        "type": "string",
        "required": true
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

export interface DataOciCoreImageShapeConfig extends TerraformMetaArguments {
  readonly imageId: string;
  readonly shapeName: string;
}
export class DataOciCoreImageShapeOcpuConstraints extends ComplexComputedList {

  // max - computed: true, optional: false, required: true
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: true
  public get min() {
    return this.getNumberAttribute('min');
  }
}

// Resource

export class DataOciCoreImageShape extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreImageShapeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_image_shape',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._imageId = config.imageId;
    this._shapeName = config.shapeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ocpu_constraints - computed: true, optional: false, required: true
  public ocpuConstraints(index: string) {
    return new DataOciCoreImageShapeOcpuConstraints(this, 'ocpu_constraints', index);
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // shape_name - computed: false, optional: false, required: true
  private _shapeName: string;
  public get shapeName() {
    return this._shapeName;
  }
  public set shapeName(value: string) {
    this._shapeName = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      image_id: this._imageId,
      shape_name: this._shapeName,
    };
  }
}
