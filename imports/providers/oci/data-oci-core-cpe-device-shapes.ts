// https://www.terraform.io/docs/providers/oci/r/data_oci_core_cpe_device_shapes.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "cpe_device_shapes": {
        "type": [
          "list",
          [
            "object",
            {
              "cpe_device_info": [
                "list",
                [
                  "object",
                  {
                    "platform_software_version": "string",
                    "vendor": "string"
                  }
                ]
              ],
              "cpe_device_shape_id": "string",
              "template": "string"
            }
          ]
        ],
        "computed": true
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

export interface DataOciCoreCpeDeviceShapesConfig extends TerraformMetaArguments {
  /** filter block */
  readonly filter?: DataOciCoreCpeDeviceShapesFilter[];
}
export class DataOciCoreCpeDeviceShapesCpeDeviceShapesCpeDeviceInfo extends ComplexComputedList {

  // platform_software_version - computed: true, optional: false, required: true
  public get platformSoftwareVersion() {
    return this.getStringAttribute('platform_software_version');
  }

  // vendor - computed: true, optional: false, required: true
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
}
export class DataOciCoreCpeDeviceShapesCpeDeviceShapes extends ComplexComputedList {

  // cpe_device_info - computed: true, optional: false, required: true
  public get cpeDeviceInfo() {
    return 'not implemented' as any;
  }

  // cpe_device_shape_id - computed: true, optional: false, required: true
  public get cpeDeviceShapeId() {
    return this.getStringAttribute('cpe_device_shape_id');
  }

  // template - computed: true, optional: false, required: true
  public get template() {
    return this.getStringAttribute('template');
  }
}
export interface DataOciCoreCpeDeviceShapesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreCpeDeviceShapes extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreCpeDeviceShapesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_core_cpe_device_shapes',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpe_device_shapes - computed: true, optional: false, required: true
  public cpeDeviceShapes(index: string) {
    return new DataOciCoreCpeDeviceShapesCpeDeviceShapes(this, 'cpe_device_shapes', index);
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
  private _filter?: DataOciCoreCpeDeviceShapesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreCpeDeviceShapesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: this._filter,
    };
  }
}
