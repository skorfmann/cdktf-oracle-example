// https://www.terraform.io/docs/providers/oci/r/data_oci_core_cpe_device_shape.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "cpe_device_info": {
        "type": [
          "list",
          [
            "object",
            {
              "platform_software_version": "string",
              "vendor": "string"
            }
          ]
        ],
        "computed": true
      },
      "cpe_device_shape_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "parameters": {
        "type": [
          "list",
          [
            "object",
            {
              "display_name": "string",
              "explanation": "string",
              "key": "string"
            }
          ]
        ],
        "computed": true
      },
      "template": {
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
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciCoreCpeDeviceShapeConfig extends TerraformMetaArguments {
  readonly cpeDeviceShapeId: string;
}
export class DataOciCoreCpeDeviceShapeCpeDeviceInfo extends ComplexComputedList {

  // platform_software_version - computed: true, optional: false, required: true
  public get platformSoftwareVersion() {
    return this.getStringAttribute('platform_software_version');
  }

  // vendor - computed: true, optional: false, required: true
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
}
export class DataOciCoreCpeDeviceShapeParameters extends ComplexComputedList {

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // explanation - computed: true, optional: false, required: true
  public get explanation() {
    return this.getStringAttribute('explanation');
  }

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }
}

// Resource

export class DataOciCoreCpeDeviceShape extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreCpeDeviceShapeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_cpe_device_shape',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cpeDeviceShapeId = config.cpeDeviceShapeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpe_device_info - computed: true, optional: false, required: true
  public cpeDeviceInfo(index: string) {
    return new DataOciCoreCpeDeviceShapeCpeDeviceInfo(this, 'cpe_device_info', index);
  }

  // cpe_device_shape_id - computed: false, optional: false, required: true
  private _cpeDeviceShapeId: string;
  public get cpeDeviceShapeId() {
    return this._cpeDeviceShapeId;
  }
  public set cpeDeviceShapeId(value: string) {
    this._cpeDeviceShapeId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // parameters - computed: true, optional: false, required: true
  public parameters(index: string) {
    return new DataOciCoreCpeDeviceShapeParameters(this, 'parameters', index);
  }

  // template - computed: true, optional: false, required: true
  public get template() {
    return this.getStringAttribute('template');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cpe_device_shape_id: this._cpeDeviceShapeId,
    };
  }
}
