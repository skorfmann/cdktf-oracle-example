// https://www.terraform.io/docs/providers/oci/r/data_oci_core_dedicated_vm_host_shapes.html
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
      "dedicated_vm_host_shapes": {
        "type": [
          "list",
          [
            "object",
            {
              "availability_domain": "string",
              "dedicated_vm_host_shape": "string"
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
      "instance_shape_name": {
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

export interface DataOciCoreDedicatedVmHostShapesConfig extends TerraformMetaArguments {
  readonly availabilityDomain?: string;
  readonly compartmentId: string;
  readonly instanceShapeName?: string;
  /** filter block */
  readonly filter?: DataOciCoreDedicatedVmHostShapesFilter[];
}
export class DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapes extends ComplexComputedList {

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // dedicated_vm_host_shape - computed: true, optional: false, required: true
  public get dedicatedVmHostShape() {
    return this.getStringAttribute('dedicated_vm_host_shape');
  }
}
export interface DataOciCoreDedicatedVmHostShapesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreDedicatedVmHostShapes extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreDedicatedVmHostShapesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_dedicated_vm_host_shapes',
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
    this._instanceShapeName = config.instanceShapeName;
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

  // dedicated_vm_host_shapes - computed: true, optional: false, required: true
  public dedicatedVmHostShapes(index: string) {
    return new DataOciCoreDedicatedVmHostShapesDedicatedVmHostShapes(this, 'dedicated_vm_host_shapes', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_shape_name - computed: false, optional: true, required: false
  private _instanceShapeName?: string;
  public get instanceShapeName() {
    return this._instanceShapeName;
  }
  public set instanceShapeName(value: string | undefined) {
    this._instanceShapeName = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreDedicatedVmHostShapesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreDedicatedVmHostShapesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: this._availabilityDomain,
      compartment_id: this._compartmentId,
      instance_shape_name: this._instanceShapeName,
      filter: this._filter,
    };
  }
}
