// https://www.terraform.io/docs/providers/oci/r/data_oci_core_dedicated_vm_host_instance_shapes.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "availability_domain": {
        "type": "string",
        "optional": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "dedicated_vm_host_instance_shapes": {
        "type": [
          "list",
          [
            "object",
            {
              "availability_domain": "string",
              "instance_shape_name": "string"
            }
          ]
        ],
        "computed": true
      },
      "dedicated_vm_host_shape": {
        "type": "string",
        "optional": true
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

export interface DataOciCoreDedicatedVmHostInstanceShapesConfig extends TerraformMetaArguments {
  readonly availabilityDomain?: string;
  readonly compartmentId: string;
  readonly dedicatedVmHostShape?: string;
  /** filter block */
  readonly filter?: DataOciCoreDedicatedVmHostInstanceShapesFilter[];
}
export class DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes extends ComplexComputedList {

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // instance_shape_name - computed: true, optional: false, required: true
  public get instanceShapeName() {
    return this.getStringAttribute('instance_shape_name');
  }
}
export interface DataOciCoreDedicatedVmHostInstanceShapesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreDedicatedVmHostInstanceShapes extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreDedicatedVmHostInstanceShapesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_dedicated_vm_host_instance_shapes',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._dedicatedVmHostShape = config.dedicatedVmHostShape;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: true, required: false
  private _availabilityDomain?: string;
  public get availabilityDomain() {
    return this._availabilityDomain;
  }
  public set availabilityDomain(value: string | undefined) {
    this._availabilityDomain = value;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // dedicated_vm_host_instance_shapes - computed: true, optional: false, required: true
  public dedicatedVmHostInstanceShapes(index: string) {
    return new DataOciCoreDedicatedVmHostInstanceShapesDedicatedVmHostInstanceShapes(this, 'dedicated_vm_host_instance_shapes', index);
  }

  // dedicated_vm_host_shape - computed: false, optional: true, required: false
  private _dedicatedVmHostShape?: string;
  public get dedicatedVmHostShape() {
    return this._dedicatedVmHostShape;
  }
  public set dedicatedVmHostShape(value: string | undefined) {
    this._dedicatedVmHostShape = value;
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
  private _filter?: DataOciCoreDedicatedVmHostInstanceShapesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreDedicatedVmHostInstanceShapesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: this._availabilityDomain,
      compartment_id: this._compartmentId,
      dedicated_vm_host_shape: this._dedicatedVmHostShape,
      filter: this._filter,
    };
  }
}
