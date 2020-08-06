// https://www.terraform.io/docs/providers/oci/r/data_oci_core_instance_devices.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "devices": {
        "type": [
          "list",
          [
            "object",
            {
              "is_available": "bool",
              "name": "string"
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_id": {
        "type": "string",
        "required": true
      },
      "is_available": {
        "type": "bool",
        "optional": true
      },
      "name": {
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

export interface DataOciCoreInstanceDevicesConfig extends TerraformMetaArguments {
  readonly instanceId: string;
  readonly isAvailable?: boolean;
  readonly name?: string;
  /** filter block */
  readonly filter?: DataOciCoreInstanceDevicesFilter[];
}
export class DataOciCoreInstanceDevicesDevices extends ComplexComputedList {

  // is_available - computed: true, optional: false, required: true
  public get isAvailable() {
    return this.getBooleanAttribute('is_available');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataOciCoreInstanceDevicesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreInstanceDevices extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreInstanceDevicesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_instance_devices',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instanceId = config.instanceId;
    this._isAvailable = config.isAvailable;
    this._name = config.name;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // devices - computed: true, optional: false, required: true
  public devices(index: string) {
    return new DataOciCoreInstanceDevicesDevices(this, 'devices', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId: string;
  public get instanceId() {
    return this._instanceId;
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }

  // is_available - computed: false, optional: true, required: false
  private _isAvailable?: boolean;
  public get isAvailable() {
    return this._isAvailable;
  }
  public set isAvailable(value: boolean | undefined) {
    this._isAvailable = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreInstanceDevicesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreInstanceDevicesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_id: this._instanceId,
      is_available: this._isAvailable,
      name: this._name,
      filter: this._filter,
    };
  }
}
