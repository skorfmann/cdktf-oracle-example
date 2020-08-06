// https://www.terraform.io/docs/providers/oci/r/core_vnic_attachment.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "availability_domain": {
        "type": "string",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "display_name": {
        "type": "string",
        "optional": true,
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
      "nic_index": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "subnet_id": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "vlan_id": {
        "type": "string",
        "computed": true
      },
      "vlan_tag": {
        "type": "number",
        "computed": true
      },
      "vnic_id": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "create_vnic_details": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "assign_public_ip": {
              "type": "string",
              "optional": true
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
            "freeform_tags": {
              "type": [
                "map",
                "string"
              ],
              "optional": true,
              "computed": true
            },
            "hostname_label": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "nsg_ids": {
              "type": [
                "set",
                "string"
              ],
              "optional": true
            },
            "private_ip": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "skip_source_dest_check": {
              "type": "bool",
              "optional": true,
              "computed": true
            },
            "subnet_id": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "vlan_id": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        },
        "min_items": 1,
        "max_items": 1
      },
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

export interface CoreVnicAttachmentConfig extends TerraformMetaArguments {
  readonly displayName?: string;
  readonly instanceId: string;
  readonly nicIndex?: number;
  /** create_vnic_details block */
  readonly createVnicDetails: CoreVnicAttachmentCreateVnicDetails[];
  /** timeouts block */
  readonly timeouts?: CoreVnicAttachmentTimeouts;
}
export interface CoreVnicAttachmentCreateVnicDetails {
  readonly assignPublicIp?: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName?: string;
  readonly freeformTags?: { [key: string]: string };
  readonly hostnameLabel?: string;
  readonly nsgIds?: string[];
  readonly privateIp?: string;
  readonly skipSourceDestCheck?: boolean;
  readonly subnetId?: string;
  readonly vlanId?: string;
}
export interface CoreVnicAttachmentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CoreVnicAttachment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreVnicAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_vnic_attachment',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._instanceId = config.instanceId;
    this._nicIndex = config.nicIndex;
    this._createVnicDetails = config.createVnicDetails;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
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

  // nic_index - computed: true, optional: true, required: false
  private _nicIndex?: number;
  public get nicIndex() {
    return this._nicIndex ?? this.getNumberAttribute('nic_index');
  }
  public set nicIndex(value: number | undefined) {
    this._nicIndex = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // vlan_id - computed: true, optional: false, required: true
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }

  // vlan_tag - computed: true, optional: false, required: true
  public get vlanTag() {
    return this.getNumberAttribute('vlan_tag');
  }

  // vnic_id - computed: true, optional: false, required: true
  public get vnicId() {
    return this.getStringAttribute('vnic_id');
  }

  // create_vnic_details - computed: false, optional: false, required: true
  private _createVnicDetails: CoreVnicAttachmentCreateVnicDetails[];
  public get createVnicDetails() {
    return this._createVnicDetails;
  }
  public set createVnicDetails(value: CoreVnicAttachmentCreateVnicDetails[]) {
    this._createVnicDetails = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreVnicAttachmentTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreVnicAttachmentTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: this._displayName,
      instance_id: this._instanceId,
      nic_index: this._nicIndex,
      create_vnic_details: this._createVnicDetails,
      timeouts: this._timeouts,
    };
  }
}
