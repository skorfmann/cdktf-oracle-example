// https://www.terraform.io/docs/providers/oci/r/core_shape_management.html
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
      "image_id": {
        "type": "string",
        "required": true
      },
      "shape_name": {
        "type": "string",
        "required": true
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

export interface CoreShapeManagementConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly imageId: string;
  readonly shapeName: string;
  /** timeouts block */
  readonly timeouts?: CoreShapeManagementTimeouts;
}
export interface CoreShapeManagementTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreShapeManagement extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreShapeManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_shape_management',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._imageId = config.imageId;
    this._shapeName = config.shapeName;
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

  // shape_name - computed: false, optional: false, required: true
  private _shapeName: string;
  public get shapeName() {
    return this._shapeName;
  }
  public set shapeName(value: string) {
    this._shapeName = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreShapeManagementTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreShapeManagementTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      image_id: this._imageId,
      shape_name: this._shapeName,
      timeouts: this._timeouts,
    };
  }
}
