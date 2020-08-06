// https://www.terraform.io/docs/providers/oci/r/core_dedicated_vm_host.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "availability_domain": {
        "type": "string",
        "required": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "dedicated_vm_host_shape": {
        "type": "string",
        "required": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "fault_domain": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "remaining_ocpus": {
        "type": "number",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "total_ocpus": {
        "type": "number",
        "computed": true
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

export interface CoreDedicatedVmHostConfig extends TerraformMetaArguments {
  readonly availabilityDomain: string;
  readonly compartmentId: string;
  readonly dedicatedVmHostShape: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly faultDomain?: string;
  readonly freeformTags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: CoreDedicatedVmHostTimeouts;
}
export interface CoreDedicatedVmHostTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreDedicatedVmHost extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreDedicatedVmHostConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_dedicated_vm_host',
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
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._faultDomain = config.faultDomain;
    this._freeformTags = config.freeformTags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain: string;
  public get availabilityDomain() {
    return this._availabilityDomain;
  }
  public set availabilityDomain(value: string) {
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

  // dedicated_vm_host_shape - computed: false, optional: false, required: true
  private _dedicatedVmHostShape: string;
  public get dedicatedVmHostShape() {
    return this._dedicatedVmHostShape;
  }
  public set dedicatedVmHostShape(value: string) {
    this._dedicatedVmHostShape = value;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // fault_domain - computed: true, optional: true, required: false
  private _faultDomain?: string;
  public get faultDomain() {
    return this._faultDomain ?? this.getStringAttribute('fault_domain');
  }
  public set faultDomain(value: string | undefined) {
    this._faultDomain = value;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // remaining_ocpus - computed: true, optional: false, required: true
  public get remainingOcpus() {
    return this.getNumberAttribute('remaining_ocpus');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // total_ocpus - computed: true, optional: false, required: true
  public get totalOcpus() {
    return this.getNumberAttribute('total_ocpus');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreDedicatedVmHostTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreDedicatedVmHostTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: this._availabilityDomain,
      compartment_id: this._compartmentId,
      dedicated_vm_host_shape: this._dedicatedVmHostShape,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      fault_domain: this._faultDomain,
      freeform_tags: this._freeformTags,
      timeouts: this._timeouts,
    };
  }
}
