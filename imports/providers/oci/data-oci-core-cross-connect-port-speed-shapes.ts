// https://www.terraform.io/docs/providers/oci/r/data_oci_core_cross_connect_port_speed_shapes.html
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
      "cross_connect_port_speed_shapes": {
        "type": [
          "list",
          [
            "object",
            {
              "name": "string",
              "port_speed_in_gbps": "number"
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

export interface DataOciCoreCrossConnectPortSpeedShapesConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  /** filter block */
  readonly filter?: DataOciCoreCrossConnectPortSpeedShapesFilter[];
}
export class DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapes extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // port_speed_in_gbps - computed: true, optional: false, required: true
  public get portSpeedInGbps() {
    return this.getNumberAttribute('port_speed_in_gbps');
  }
}
export interface DataOciCoreCrossConnectPortSpeedShapesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreCrossConnectPortSpeedShapes extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreCrossConnectPortSpeedShapesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_cross_connect_port_speed_shapes',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._filter = config.filter;
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

  // cross_connect_port_speed_shapes - computed: true, optional: false, required: true
  public crossConnectPortSpeedShapes(index: string) {
    return new DataOciCoreCrossConnectPortSpeedShapesCrossConnectPortSpeedShapes(this, 'cross_connect_port_speed_shapes', index);
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
  private _filter?: DataOciCoreCrossConnectPortSpeedShapesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreCrossConnectPortSpeedShapesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      filter: this._filter,
    };
  }
}
