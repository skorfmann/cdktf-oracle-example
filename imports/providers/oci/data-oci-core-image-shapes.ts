// https://www.terraform.io/docs/providers/oci/r/data_oci_core_image_shapes.html
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
      "image_shape_compatibilities": {
        "type": [
          "list",
          [
            "object",
            {
              "image_id": "string",
              "ocpu_constraints": [
                "list",
                [
                  "object",
                  {
                    "max": "number",
                    "min": "number"
                  }
                ]
              ],
              "shape": "string"
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

export interface DataOciCoreImageShapesConfig extends TerraformMetaArguments {
  readonly imageId: string;
  /** filter block */
  readonly filter?: DataOciCoreImageShapesFilter[];
}
export class DataOciCoreImageShapesImageShapeCompatibilitiesOcpuConstraints extends ComplexComputedList {

  // max - computed: true, optional: false, required: true
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: true
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export class DataOciCoreImageShapesImageShapeCompatibilities extends ComplexComputedList {

  // image_id - computed: true, optional: false, required: true
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // ocpu_constraints - computed: true, optional: false, required: true
  public get ocpuConstraints() {
    return 'not implemented' as any;
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }
}
export interface DataOciCoreImageShapesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreImageShapes extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreImageShapesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_image_shapes',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._imageId = config.imageId;
    this._filter = config.filter;
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

  // image_shape_compatibilities - computed: true, optional: false, required: true
  public imageShapeCompatibilities(index: string) {
    return new DataOciCoreImageShapesImageShapeCompatibilities(this, 'image_shape_compatibilities', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreImageShapesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreImageShapesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      image_id: this._imageId,
      filter: this._filter,
    };
  }
}
