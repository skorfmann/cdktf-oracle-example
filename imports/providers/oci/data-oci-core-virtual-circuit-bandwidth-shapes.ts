// https://www.terraform.io/docs/providers/oci/r/data_oci_core_virtual_circuit_bandwidth_shapes.html
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
      "provider_service_id": {
        "type": "string",
        "required": true
      },
      "virtual_circuit_bandwidth_shapes": {
        "type": [
          "list",
          [
            "object",
            {
              "bandwidth_in_mbps": "number",
              "name": "string"
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

export interface DataOciCoreVirtualCircuitBandwidthShapesConfig extends TerraformMetaArguments {
  readonly providerServiceId: string;
  /** filter block */
  readonly filter?: DataOciCoreVirtualCircuitBandwidthShapesFilter[];
}
export class DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapes extends ComplexComputedList {

  // bandwidth_in_mbps - computed: true, optional: false, required: true
  public get bandwidthInMbps() {
    return this.getNumberAttribute('bandwidth_in_mbps');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataOciCoreVirtualCircuitBandwidthShapesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreVirtualCircuitBandwidthShapes extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreVirtualCircuitBandwidthShapesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_virtual_circuit_bandwidth_shapes',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._providerServiceId = config.providerServiceId;
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

  // provider_service_id - computed: false, optional: false, required: true
  private _providerServiceId: string;
  public get providerServiceId() {
    return this._providerServiceId;
  }
  public set providerServiceId(value: string) {
    this._providerServiceId = value;
  }

  // virtual_circuit_bandwidth_shapes - computed: true, optional: false, required: true
  public virtualCircuitBandwidthShapes(index: string) {
    return new DataOciCoreVirtualCircuitBandwidthShapesVirtualCircuitBandwidthShapes(this, 'virtual_circuit_bandwidth_shapes', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreVirtualCircuitBandwidthShapesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreVirtualCircuitBandwidthShapesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      provider_service_id: this._providerServiceId,
      filter: this._filter,
    };
  }
}
